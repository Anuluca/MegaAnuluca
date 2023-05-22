<script setup lang="ts">
import './index.less'
import * as echarts from 'echarts'
import { ref } from 'vue'
import temp1 from '@/assets/img/temp2.jpg'

const option = ref({})
const onChangePage = () => {
  initChart()
}
const projectList = [
  {
    name: '科晨洪兴 低代码平台',
    time: '2023.3-NOW',
    platform: 'PC&APP',
    type: 'VUE 2',
    color: '#65b687',
    img: temp1
  },
  {
    name: '文因互联 飞梭平台',
    time: '2022.1-2022.7',
    platform: 'PC',
    type: 'React 18',
    color: '#4B86F7',
    img: temp1
  },
  {
    name: '平安银行 智慧管理',
    time: '2021.9-2021.12',
    platform: 'PC',
    type: 'React 18',
    color: '#4B86F7',
    img: temp1
  },
  {
    name: '平安银行 智能审核',
    time: '2020.9-2021.9',
    platform: 'PC',
    type: 'VUE 2',
    color: '#65b687',
    img: temp1
  },
  {
    name: '江西中烟 物流管理',
    time: '2019.9-2020.9',
    platform: 'PC',
    type: 'JSP',
    color: '#fff',
    img: temp1
  }
]

defineExpose({ onChangePage })

const initChart = () => {
  option.value = {
    color: ['#5470C6', '#EE6666'],
    tooltip: { trigger: 'none' },
    legend: {},
    grid: { top: 70, bottom: 50 },
    xAxis: [
      { type: 'category', show: false },
      { type: 'category', show: false }
    ],
    yAxis: [{ type: 'value', show: false }],
    series: [
      {
        type: 'line',
        xAxisIndex: 1,
        smooth: true,
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      },
      {
        type: 'line',
        smooth: true,
        data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
      }
    ]
  }
  var chartDom = document.getElementById('bg-echart')
  const myChart = echarts.init(chartDom)
  option.value && myChart.setOption(option.value)
}
</script>

<template>
  <div class="home-page-b home-page-container">
    <div class="top-controller"></div>
    <div class="inner-text">
      <h1>PROJECTS</h1>
      <div class="project-list">
        <div class="project-item" v-for="(item, key) in projectList" :key="key">
          <img :src="item.img" />
          <span class="project-type" :style="'color:' + item.color"> {{ item.type }}</span>
          <div>
            <p class="project-name">{{ item.name }}</p>
            <p class="project-time">{{ item.time }} {{ item.platform }}</p>
          </div>
        </div>
        <!-- <div class="project-next-page">===>下一页</div> -->
      </div>
      <div id="bg-echart" v-if="option"></div>
    </div>
    <div class="bottom-controller"></div>
  </div>
</template>
