<template>
  <div class="overflow-hidden">
    <n-card title="路由管理" :bordered="false" class="h-full rounded-8px shadow-sm">
      <div class="flex-col h-full">
        <n-space class="pb-12px" justify="space-between">
          <n-space>
            <n-button type="primary" round @click="handleAdd">
              <icon-ic-round-plus class="mr-4px text-20px" />
              新增
            </n-button>
            <n-button type="error" round @click="handleBatchDelete">
              <icon-ic-round-delete class="mr-4px text-20px" />
              批量删除
            </n-button>
          </n-space>
          <n-space align="center" :size="18">
            <n-button size="small" type="primary" @click="getData">
              <icon-mdi-refresh class="mr-4px text-16px" :class="{ 'animate-spin': loading }" />
              刷新表格
            </n-button>
            <column-setting v-model:columns="columns" />
          </n-space>
        </n-space>
        <n-data-table
          :columns="columns"
          :data="tableData"
          :loading="loading"
          :row-key="row => row.id"
          remote
          :pagination="pagination"
          flex-height
          class="flex-1-hidden"
        />
        <table-action-modal v-model:visible="visible" :type="modalType" :edit-data="editingData" />
      </div>
    </n-card>
  </div>
</template>

<script setup lang="tsx">
import { reactive, ref } from 'vue';
import type { Ref } from 'vue';
import { NButton, NPopconfirm, NTag } from 'naive-ui';
import type { DataTableColumns, PaginationProps } from 'naive-ui';
import { useBoolean, useLoading } from '@/hooks';
import { fetchGetAllPages, fetchGetMenuList } from '@/service/api';
import { useAppStore } from '@/store/modules/app';
import { $t } from '@/locales';
import { yesOrNoRecord } from '@/constants/common';
import { enableStatusRecord, menuTypeRecord } from '@/constants/business';
import SvgIcon from '@/components/custom/svg-icon.vue';
import type { ModalType } from './components/table-action-modal.vue';
import TableActionModal from './components/table-action-modal.vue';
import ColumnSetting from './components/column-setting.vue';

const appStore = useAppStore();
const { loading, startLoading, endLoading } = useLoading(false);
// const { bool: drawerVisible, setTrue: openDrawer, setFalse: _closeDrawer } = useBoolean();
const { bool: visible, setTrue: openModal } = useBoolean();
/** the edit menu data or the parent menu data when adding a child menu */
const editingData: Ref<ApiSystemManagement.Menu | null> = ref(null);
const tableData = ref<ApiSystemManagement.Menu[]>([]);

function setTableData(data: ApiSystemManagement.Menu[]) {
  tableData.value = data;
}

async function getData() {
  startLoading();
  const { data } = await fetchGetMenuList();
  if (data) {
    setTimeout(() => {
      setTableData(data);
      endLoading();
    }, 1000);
  }
}

const wrapperRef = ref<HTMLElement | null>(null);

const columns: Ref<DataTableColumns<ApiSystemManagement.Menu>> = ref([
  {
    type: 'selection',
    align: 'center',
    width: 48
  },
  {
    key: 'id',
    title: $t('page.manage.menu.id'),
    align: 'center'
  },
  {
    key: 'menuType',
    title: $t('page.manage.menu.menuType'),
    align: 'center',
    width: 80,
    render: row => {
      const tagMap: Record<ApiSystemManagement.MenuType, NaiveUI.ThemeColor> = {
        1: 'default',
        2: 'primary',
        3: 'primary',
        4: 'primary'
      };

      const label = $t(menuTypeRecord[row.menuType]);

      return <NTag type={tagMap[row.menuType]}>{label}</NTag>;
    }
  },
  {
    key: 'menuName',
    title: $t('page.manage.menu.menuName'),
    align: 'center',
    minWidth: 120,
    render: row => {
      const { i18nKey, menuName } = row;

      const label = i18nKey ? $t(i18nKey) : menuName;

      return <span>{label}</span>;
    }
  },
  {
    key: 'icon',
    title: $t('page.manage.menu.icon'),
    align: 'center',
    width: 60,
    render: row => {
      const icon = row.iconType === '1' ? row.icon : undefined;

      const localIcon = row.iconType === '2' ? row.icon : undefined;

      return (
        <div class="flex-center">
          <svg-icon icon={icon} localIcon={localIcon} class="text-icon" />
        </div>
      );
    }
  },
  {
    key: 'routeName',
    title: $t('page.manage.menu.routeName'),
    align: 'center',
    minWidth: 120
  },
  {
    key: 'routePath',
    title: $t('page.manage.menu.routePath'),
    align: 'center',
    minWidth: 120
  },
  {
    key: 'status',
    title: $t('page.manage.menu.menuStatus'),
    align: 'center',
    width: 80,
    render: row => {
      if (row.status === null) {
        return null;
      }

      const tagMap: Record<Common.EnableStatus, NaiveUI.ThemeColor> = {
        1: 'success',
        2: 'warning'
      };

      const label = $t(enableStatusRecord[row.status]);

      return <n-tag type={tagMap[row.status]}>{label}</n-tag>;
    }
  },
  {
    key: 'hideInMenu',
    title: $t('page.manage.menu.hideInMenu'),
    align: 'center',
    width: 80,
    render: row => {
      const hide: Common.YesOrNo = row.hideInMenu ? 'Y' : 'N';

      const tagMap: Record<Common.YesOrNo, NaiveUI.ThemeColor> = {
        Y: 'error',
        N: 'default'
      };

      const label = $t(yesOrNoRecord[hide]);

      return <NTag type={tagMap[hide]}>{label}</NTag>;
    }
  },
  {
    key: 'parentId',
    title: $t('page.manage.menu.parentId'),
    width: 90,
    align: 'center'
  },
  {
    key: 'order',
    title: $t('page.manage.menu.order'),
    align: 'center',
    width: 60
  },
  {
    key: 'operate',
    title: $t('common.action'),
    align: 'center',
    width: 280,
    render: row => (
      <div class="flex-center justify-end gap-8px">
        {(row.menuType === '1' || row.menuType === '2') && (
          <NButton type="primary" ghost size="small" onClick={() => handleAddChildMenu(row)}>
            {$t('page.manage.menu.addChildMenu')}
          </NButton>
        )}
        <NButton type="primary" ghost size="small" onClick={() => handleEdit(row)}>
          {$t('common.edit')}
        </NButton>
        <NPopconfirm onPositiveClick={() => handleDelete(row.id)}>
          {{
            default: () => $t('common.confirmDelete'),
            trigger: () => (
              <NButton type="error" ghost size="small">
                {$t('common.delete')}
              </NButton>
            )
          }}
        </NPopconfirm>
      </div>
    )
  }
]) as Ref<DataTableColumns<ApiSystemManagement.Menu>>;

// const { checkedRowKeys, onBatchDeleted, onDeleted } = useTableOperate(data, getData);
const checkedRowKeys = ref<string[]>([]);
const modalType = ref<ModalType>('add');

function setModalType(type: ModalType) {
  modalType.value = type;
}

function handleAdd() {
  setModalType('add');
  openModal();
}

async function handleBatchDelete() {
  // request
  console.log('ids');
  // onBatchDeleted();
}

function handleDelete(id: number) {
  // request
  console.log(id);
  // onDeleted();
}

function handleEdit(item: ApiSystemManagement.Menu) {
  setModalType('edit');
  editingData.value = { ...item };

  openModal();
}

function handleAddChildMenu(item: ApiSystemManagement.Menu) {
  setModalType('addChild');
  editingData.value = { ...item };

  openModal();
}

const allPages = ref<string[]>([]);

async function getAllPages() {
  const { data: pages } = await fetchGetAllPages();
  allPages.value = pages || [];
}

const pagination: PaginationProps = reactive({
  page: 1,
  pageSize: 10,
  showSizePicker: true,
  pageSizes: [10, 15, 20, 25, 30],
  onChange: (page: number) => {
    pagination.page = page;
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize;
    pagination.page = 1;
  }
});

function init() {
  getData();
  getAllPages();
}

// init
init();
</script>

<!-- <template>
  <div ref="wrapperRef" class="flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <NCard :title="$t('page.manage.menu.title')" :bordered="false" size="small" class="sm:flex-1-hidden card-wrapper">
      <template #header-extra>
        <TableHeaderOperation
          v-model:columns="columns"
          :disabled-delete="checkedRowKeys.length === 0"
          :loading="loading"
          @add="handleAdd"
          @delete="handleBatchDelete"
          @refresh="getData"
        />
      </template>
      <NDataTable
        v-model:checked-row-keys="checkedRowKeys"
        :columns="columns"
        :data="tableData"
        size="small"
        :flex-height="false"
        :scroll-x="1088"
        :loading="loading"
        :row-key="row => row.id"
        remote
        :pagination="pagination"
        class="sm:h-full"
      />
      <MenuOperateDrawer
        v-model:visible="drawerVisible"
        :operate-type="operateType"
        :row-data="editingData"
        :all-pages="allPages"
        @submitted="getData"
      />
    </NCard>
  </div>
</template> -->

<style scoped></style>
