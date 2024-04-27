<template>
  <div>
    <!-- <n-grid :item-responsive="true" :x-gap="16" :y-gap="16"> -->
    <!-- <n-grid-item v-for="itemGroup in gourpLogy" :key="itemGroup" span="0:24 640:24 1024:24"> -->
    <n-space v-for="itemGroup in gourpLogy" :key="itemGroup" :vertical="true" :size="16">
      <n-card :title="itemGroup + ''" :bordered="false" size="small" class="rounded-8px shadow-sm">
        <n-grid :item-responsive="true" responsive="screen" cols="m:2 l:6" :x-gap="8" :y-gap="8">
          <n-grid-item
            v-for="item in smallLogy"
            :key="item.id"
            :style="{ display: item.type === itemGroup ? 'block' : 'none' }"
          >
            <technology-card v-if="item.type === itemGroup" v-bind="item" />
          </n-grid-item>
        </n-grid>
      </n-card>
    </n-space>
    <!-- </n-grid-item> -->
    <!-- </n-grid> -->
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue';
// import type { Ref } from 'vue';
import { getPages } from '@/service';
import { TechnologyCard } from './components';

defineOptions({ name: 'FrontPageMain' });

const smallLogy = ref<ApiPageManagement.Page[]>([]);

const gourpLogy = ref<number[]>([]);
async function getHomePages() {
  const { data } = await getPages(null);
  // dataPage.value = await getPages();
  if (data) {
    setTimeout(() => {
      smallLogy.value = data.list;
      gourpLogy.value = data.types;
    }, 1000);
  }
}

function init() {
  getHomePages();
}

// 初始化
init();
</script>

<style scoped></style>
