<template>
  <n-modal v-model:show="modalVisible" preset="card" :title="title" class="w-700px">
    <n-form ref="formRef" label-placement="left" :label-width="80" :model="formModel">
      <n-grid :cols="24" :x-gap="18">
        <n-form-item-grid-item :span="12" :label="$t('page.manage.menu.menuType')" path="menuType">
          <n-radio-group v-model:value="formModel.menuType">
            <n-radio v-for="item in menuTypeOptions" :key="item.value" :value="item.value" :label="$t(item.label)" />
          </n-radio-group>
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" :label="$t('page.manage.menu.menuName')" path="menuName">
          <n-input v-model:value="formModel.menuName" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" :label="$t('page.manage.menu.iconTypeTitle')" path="iconType">
          <n-radio-group v-model:value="formModel.iconType">
            <n-radio
              v-for="item in menuIconTypeOptions"
              :key="item.value"
              :value="item.value"
              :label="$t(item.label)"
            />
          </n-radio-group>
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" :label="$t('page.manage.menu.icon')" path="icon">
          <n-input v-model:value="formModel.icon" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" :label="$t('page.manage.menu.routeName')" path="routeName">
          <n-input v-model:value="formModel.routeName" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" :label="$t('page.manage.menu.routePath')" path="routePath">
          <n-input v-model:value="formModel.routePath" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" :label="$t('page.manage.menu.menuStatus')" path="status">
          <n-radio-group v-model:value="formModel.status">
            <n-radio
              v-for="item in enableStatusOptions"
              :key="item.value"
              :value="item.value"
              :label="$t(item.label)"
            />
          </n-radio-group>
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" :label="$t('page.manage.menu.hideInMenu')" path="hideInMenu">
          <n-radio-group v-model:value="formModel.hideInMenu">
            <n-radio value :label="$t('common.yesOrNo.yes')" />
            <n-radio :value="false" :label="$t('common.yesOrNo.no')" />
          </n-radio-group>
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" :label="$t('page.manage.menu.order')" path="order">
          <n-input-number v-model:value="formModel.order" />
        </n-form-item-grid-item>
      </n-grid>
      <n-space class="w-full pt-16px" :size="24" justify="end">
        <n-button class="w-72px" round @click="closeModal">取消</n-button>
        <n-button class="w-72px" type="primary" round @click="handleSubmit">确定</n-button>
      </n-space>
    </n-form>
  </n-modal>
</template>

<script setup lang="ts">
import { ref, computed, reactive, watch } from 'vue';
import type { FormInst, FormItemRule } from 'naive-ui';
import { enableStatusOptions, menuTypeOptions, menuIconTypeOptions } from '@/constants';
import { addMenu, updateMenu } from '@/service';
// import { formRules, createRequiredFormRule } from '@/utils';
import { $t } from '@/locales';

export interface Props {
  /** 弹窗可见性 */
  visible: boolean;
  /**
   * 弹窗类型
   * add: 新增
   * edit: 编辑
   */
  type?: 'add' | 'edit' | 'addChild';
  /** 编辑的表格行数据 */
  editData?: ApiSystemManagement.Menu | null;
}

export type ModalType = NonNullable<Props['type']>;

defineOptions({ name: 'TableActionModal' });

const props = withDefaults(defineProps<Props>(), {
  type: 'add',
  editData: null
});

interface Emits {
  (e: 'update:visible', visible: boolean): void;
}

const emit = defineEmits<Emits>();

const modalVisible = computed({
  get() {
    return props.visible;
  },
  set(visible) {
    emit('update:visible', visible);
  }
});
const closeModal = () => {
  modalVisible.value = false;
};

const title = computed(() => {
  const titles: Record<ModalType, string> = {
    add: '添加路由',
    edit: '编辑路由',
    addChild: '添加子路由'
  };
  return titles[props.type];
});

const formRef = ref<HTMLElement & FormInst>();

type FormModel = Pick<
  ApiSystemManagement.Menu,
  | 'menuType'
  | 'menuName'
  | 'icon'
  | 'iconType'
  | 'routeName'
  | 'routePath'
  | 'component'
  | 'status'
  | 'hideInMenu'
  | 'order'
  | 'parentId'
>;

const formModel = reactive<FormModel>(createDefaultFormModel());

// const rules: Record<keyof FormModel, FormItemRule | FormItemRule[]> = {
//   id: createRequiredFormRule('请输入用户名'),
//   name: createRequiredFormRule('请输入年龄'),
//   description: createRequiredFormRule('请选择性别'),
//   site: formRules.phone,
//   icon: formRules.email
// };

function createDefaultFormModel(): FormModel {
  return {
    // id: null,
    menuType: '1',
    menuName: '',
    icon: '',
    iconType: '1',
    routeName: '',
    routePath: '',
    component: '',
    status: '1',
    hideInMenu: false,
    order: 999,
    parentId: 0
  };
}

function handleUpdateFormModel(model: Partial<FormModel>) {
  Object.assign(formModel, model);
}

function handleUpdateFormModelByModalType() {
  const handlers: Record<ModalType, () => void> = {
    add: () => {
      const defaultFormModel = createDefaultFormModel();
      handleUpdateFormModel(defaultFormModel);
    },
    edit: () => {
      if (props.editData) {
        handleUpdateFormModel(props.editData);
      }
    },
    addChild: () => {
      const defaultFormModel = createDefaultFormModel();
      handleUpdateFormModel(defaultFormModel);
    }
  };

  handlers[props.type]();
}

async function handleSubmit() {
  // await formRef.value?.validate();
  if (props.type === 'add' || props.type === 'addChild') {
    await addMenu(formModel);
  }
  if (props.type === 'edit') {
    await updateMenu(formModel);
  }
  window.$message?.success(`${props.type}成功!`);
  closeModal();
}

watch(
  () => props.visible,
  newValue => {
    if (newValue) {
      handleUpdateFormModelByModalType();
    }
  }
);
</script>

<style scoped></style>
