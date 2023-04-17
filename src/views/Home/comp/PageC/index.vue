<script setup lang="ts">
import './index.less'
import show1 from '@/assets/img/show1.jpg'
import show2 from '@/assets/img/show2.jpg'
import show3 from '@/assets/img/show3.jpg'
import show4 from '@/assets/img/show4.jpg'
import show5 from '@/assets/img/show5.jpg'
import show6 from '@/assets/img/show6.jpg'
import show7 from '@/assets/img/show7.jpg'
import show8 from '@/assets/img/show8.jpg'

const imgList = [
  {
    img: show1,
    text: '模型'
  },
  {
    img: show2,
    text: '模型'
  },
  {
    img: show3,
    text: '模型'
  },
  {
    img: show4,
    text: '训练家卡'
  },
  {
    img: show5,
    text: '训练家卡'
  },
  {
    img: show6,
    text: '训练家卡'
  },
  {
    img: show7,
    text: '训练家卡'
  },
  {
    img: show8,
    text: '日常'
  }
]
</script>

<template>
  <div class="home-page-c home-page-container">
    <div class="top-controller"></div>
    <div class="inner-text">
      <h1>CREATIONS</h1>
      <el-carousel :interval="4000" type="card" height="100%">
        <el-carousel-item v-for="(item, key) in imgList" :key="key">
          <el-image :src="item.img" :preview-src-list="[item.img]"> </el-image>
          <span class="medium">{{ item.text }}</span>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="bottom-controller"></div>
  </div>
</template>
