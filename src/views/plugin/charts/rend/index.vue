<template>
  <n-space :vertical="true" :size="16">
    <n-card :bordered="false" class="rounded-8px shadow-sm">
      <div ref="lineRef" class="h-400px"></div>
    </n-card>
  </n-space>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue';
import type { Ref } from 'vue';
// import { graphic } from 'echarts';
import { getRends } from '@/service';
import { type ECOption, useEcharts } from '@/composables';

const lineDate = ref<ApiChartManagement.Rend[]>([]);

const lineOptions = ref<ECOption>({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  title: {
    text: 'Rend Line'
  },
  legend: {
    // data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    data: ['2023', '2024']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      color: '#37a2da',
      name: '2023',
      type: 'line',
      smooth: true,
      // stack: 'Total',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: '#37a2da'
            },
            {
              offset: 1,
              color: '#fff'
            }
          ]
        }
      },
      emphasis: {
        focus: 'series'
      },
      data: []
    },
    {
      color: '#9fe6b8',
      name: '2024',
      type: 'line',
      smooth: true,
      // stack: 'Total',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: '#9fe6b8'
            },
            {
              offset: 1,
              color: '#fff'
            }
          ]
        }
      },
      emphasis: {
        focus: 'series'
      },
      data: []
    }
  ]
}) as Ref<ECOption>;
const { domRef: lineRef } = useEcharts(lineOptions);

function setLineData(data: ApiChartManagement.Rend[]) {
  lineDate.value = data;
  const seriesOption = lineOptions.value.series;
  data.forEach(item => {
    seriesOption.forEach(itm => {
      if (item.name === itm.name) {
        itm.data = item.list;
      }
    });
  });

  // const u2022Data = data.filter(item => item.name === '2023')[0].list;
}

async function getLineData() {
  const { data } = await getRends();
  if (data) {
    setTimeout(() => {
      setLineData(data);
    }, 1000);
  }
}

onUnmounted(() => {
  getLineData();
});
function init() {
  getLineData();
}

// 初始化
init();
</script>

<style scoped></style>
