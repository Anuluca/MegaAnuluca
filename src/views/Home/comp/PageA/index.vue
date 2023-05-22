<script setup lang="ts">
import './index.less'
import { ref } from 'vue'
import img1 from '@/assets/img/temp1.jpg'
import img2 from '@/assets/img/temp2.jpg'
import img3 from '@/assets/img/temp3.jpg'

const nowIndex = ref(0)

const showList = [
  {
    img: img1,
    title: "Luca's LiberGarden in MegaEvolution!",
    module: 'BLOGS / ByTalk',
    date: '2023. 2. 27',
    link: '/404'
  },
  {
    img: img2,
    title: '我也不知道放什么',
    module: 'BLOGS / ByTalk',
    date: '2023. 2. 27',
    link: '/404'
  },
  {
    img: img3,
    title: '看看设计图',
    module: 'BLOGS / ByTalk',
    date: '2023. 2. 27',
    link: '/404'
  }
]

const change = (e) => {
  nowIndex.value = e
}

const clickItem = (link) => {
  document.location.href = link
}
</script>

<template>
  <div class="home-page-a home-page-container">
    <div class="top-controller"></div>
    <div class="inner-text">
      <h1>WELCOME！</h1>
      <p>My name is Anuluca, a web developer and a Pokemon Trainer.</p>
      <el-carousel
        trigger="click"
        ref="carousel"
        :interval="5000"
        :autoplay="true"
        @click="clickItem(showList[nowIndex].link)"
        @change="change"
      >
        <el-carousel-item
          v-for="(item, key) in showList"
          :key="key"
          :style="
            'background-image: url(' + item.img + ');    background-size: cover;overflow: visible;'
          "
        >
        </el-carousel-item>
        <div class="cas-inner">
          <div class="title">{{ showList[nowIndex].title }}</div>
          <div class="date">{{ showList[nowIndex].date }}</div>
          <div class="module">{{ showList[nowIndex].module }}</div>
        </div>
      </el-carousel>
      <div class="TOP">>TOP</div>
    </div>
    <div class="bottom-controller"></div>
  </div>
</template>
