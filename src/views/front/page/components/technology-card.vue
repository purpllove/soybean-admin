<template>
  <div
    class="h-80px p-4px border-1px border-#efeff5 dark:border-#ffffff17 rounded-4px hover:shadow-sm cursor-pointer"
    @click="handleOpenSite"
  >
    <header class="flex-y-center">
      <svg-icon :icon="icon" :style="{ color: iconColor }" class="text-30px" />
      <h3 class="pl-12px text-18px font-semibold">{{ name }}</h3>
    </header>
    <p v-if="description && Number(description?.length) < 16" class="py-6px h-20px text-#999">{{ description }}</p>
    <div v-else class="py-6px h-20px text-#999" trigger="click">
      <div class="flex-y-center">
        <n-popover class="!p-0" trigger="click" placement="bottom">
          <template #trigger>
            <hover-container :tooltip-content="description" class="relative w-40px h-full">...</hover-container>
          </template>
        </n-popover>
      </div>
    </div>
    <!-- <div class="flex justify-end">
      <span>{{ author }}</span>
    </div> -->
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'FrontPageMainTechnologyCard' });

interface Props {
  /** 技术名称 */
  name?: string;
  /** 技术描述 */
  description?: string;
  /** 技术作者 */
  author?: string;
  /** 技术官网 */
  site?: string;
  /** 技术图标 */
  icon?: string;
  /** 图标颜色 */
  iconColor?: string;
}

const props = defineProps<Props>();

function handleOpenSite() {
  window.open(props.site, '_blank');
}
</script>

<style scoped></style>
