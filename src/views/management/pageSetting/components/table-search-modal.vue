<script setup lang="ts">
import { ref, defineOptions } from 'vue';
import type { FormInst } from 'naive-ui';

defineOptions({ name: 'TableSearchModal' });

// interface Emits {
//   (e: 'search'): void;
// }

// const emit = defineEmits<Emits>();

const formRef = ref<FormInst | null>(null);

// const formModel = reactive<FormModel>(createDefaultFormModel());
const model = defineModel<ApiPageManagement.Page>('model', { required: true });

// async function search() {
//   // await getPages(formModel);
//   await formRef.value?.validate();
//   emit('search');
// }
</script>
<template>
  <n-card :bordered="false" size="small" class="card-wrapper">
    <n-form ref="formRef" label-placement="left" :label-width="80" :model="model">
      <n-grid responsive="screen" item-responsive>
        <n-form-item-grid-item span="18 s:9 m:6" label="名称" path="name">
          <n-input v-model:value="model.name" placeholder="输入名称" />
        </n-form-item-grid-item>
        <n-form-item-grid-item span="18 s:9 m:6" label="类型" path="type">
          <n-input-number v-model:value="model.type" placeholder="输入类型" />
          <!-- <n-select>
            <n-popover>1</n-popover>
            <n-popover>2</n-popover>
            <n-popover>3</n-popover>
          </n-select> -->
        </n-form-item-grid-item>
      </n-grid>
      <!-- <n-space class="w-full pt-16px" :size="24" justify="end">
      <n-button attr-type="button" round @click="search">search</n-button>
    </n-space> -->
    </n-form>
  </n-card>
</template>
<style scoped></style>
