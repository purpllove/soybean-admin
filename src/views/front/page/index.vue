<template>
  <n-grid :item-responsive="true" :x-gap="16" :y-gap="16">
    <n-grid-item span="0:24 640:24 1024:24">
      <n-space :vertical="true" :size="16">
        <n-card title="项目主要技术栈" :bordered="false" size="small" class="rounded-8px shadow-sm">
          <template #header-extra>
            <a class="text-primary" href="javascript:;">更多技术栈</a>
          </template>
          <n-grid :item-responsive="true" responsive="screen" cols="m:1 l:6" :x-gap="8" :y-gap="8">
            <n-grid-item v-for="item in technology" :key="item.id">
              <technology-card v-bind="item" />
            </n-grid-item>
          </n-grid>
        </n-card>
      </n-space>
    </n-grid-item>
    <n-grid-item span="0:24 640:24 1024:24">
      <n-space :vertical="true" :size="16">
        <n-card title="" :bordered="false" size="small" class="rounded-8px shadow-sm">
          <n-grid :item-responsive="true" responsive="screen" cols="m:1 l:6" :x-gap="8" :y-gap="8">
            <n-grid-item v-for="item in smallLogy" :key="item.id">
              <technology-card v-bind="item" />
            </n-grid-item>
          </n-grid>
        </n-card>
      </n-space>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="tsx">
import { onUnmounted, ref } from 'vue';
import type { Ref } from 'vue';
import { getPages } from '@/service';
import { ShortcutsCard, TechnologyCard } from './components';

defineOptions({ name: 'FrontPageMain' });

interface Technology {
  id: number;
  name: string;
  description: string;
  author: string;
  site: string;
  icon: string;
  iconColor?: string;
}
const technology: Technology[] = [
  {
    id: 0,
    name: 'Vue',
    description: '一套用于构建用户界面的渐进式框架',
    author: '尤雨溪 - Evan You',
    site: 'https://v3.cn.vuejs.org/',
    icon: 'logos:vue'
  },
  {
    id: 1,
    name: 'TypeScript',
    description: 'JavaScript类型的超集，它可以编译成纯JavaScript',
    author: '微软 - Microsoft',
    site: 'https://www.typescriptlang.org/',
    icon: 'logos:typescript-icon'
  },
  {
    id: 2,
    name: 'Vite',
    description: '下一代前端开发与构建工具',
    author: '尤雨溪 - Evan You',
    site: 'https://vitejs.cn/',
    icon: 'logos:vitejs'
  },
  {
    id: 3,
    name: 'NaiveUI',
    description: '一个 Vue 3 组件库',
    author: '图森未来 - TuSimple',
    site: 'https://www.naiveui.com/zh-CN/os-theme',
    icon: 'logos:naiveui'
  },
  {
    id: 4,
    name: 'UnoCSS',
    description: '下一代实用优先的CSS框架',
    author: 'Anthony Fu',
    site: 'https://uno.antfu.me/?s=',
    icon: 'logos:unocss'
  },
  {
    id: 5,
    name: 'Pinia',
    description: 'vue状态管理框架，支持vue2、vue3',
    author: 'Posva',
    site: 'https://pinia.esm.dev/',
    icon: 'noto:pineapple'
  },
  {
    id: 6,
    name: 'PageAdmin',
    description: 'PageAdmin 控制台',
    author: 'Purp',
    site: 'http://192.168.8.223:8080/wp-admin',
    icon: 'logos:atlassian'
  },
  {
    id: 7,
    name: 'Nas',
    description: 'Nas 存储',
    author: 'Purp',
    site: 'http://nas.purp.top:5000/',
    icon: 'logos:apphub'
  },
  {
    id: 8,
    name: 'Goaccess',
    description: 'Goaccess log',
    author: 'Purp',
    site: 'http://goaccess.purp.top/',
    icon: 'logos:apiary'
  },
  {
    id: 9,
    name: '改图宝',
    description: '改图宝',
    author: 'Purp',
    site: 'https://www.gaitubao.com/',
    icon: 'logos:adobe-photoshop'
  }
];

// interface SmallLogy {
//   id: number;
//   name: string;
//   description: string;
//   site: string;
//   icon: string;
//   iconColor?: string;
// }

const smallLogy = ref<ApiPageManagement.Page[]>([]);
//  ref<ApiChartManagement.Rend[]>([]);
// const smallLogy: SmallLogy[] = [
//   {
//     id: 0,
//     name: 'Vue',
//     description: '一套用于构建用户界面的渐进式框架',
//     site: 'https://v3.cn.vuejs.org/',
//     icon: 'logos:vue'
//   }
// ];

async function getHomePages() {
  const { data } = await getPages();
  if (data) {
    setTimeout(() => {
      smallLogy.value = data;
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
