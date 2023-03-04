<script setup lang="ts">
import './index.less'
import ShowImg from '@/assets/img/show_1.png'
import ShowImg_light from '@/assets/img/show_1_light.png'
import { onBeforeUnmount, onMounted } from 'vue'
import { reduce } from '@/utils'
import { useRouter } from 'vue-router'

const mainImg = document.getElementsByClassName('show-img')
const mainImgLight = document.getElementsByClassName('show-img-light')
const router = useRouter()

//当前路由
const currentRouter = router.currentRoute.value.name

// 图片立体书效果
onMounted(() => {
  reduce(
    (document.onmousemove = function (e) {
      // 通过event.clientX和event.clilentY获取鼠标位置
      // 将鼠标的x轴值和Y轴值赋值给图片的left和top
      mainImg[0]['style'].bottom = -e.clientY / 300 + 'px'
      mainImg[0]['style'].left = e.clientX / 300 + 'px'
      mainImgLight[0]['style'].bottom = -e.clientY / 50 + 10 + 'px'
      mainImgLight[0]['style'].left = e.clientX / 50 + 'px'
    }),
    1000
  )
})

//销毁onmousemove
onBeforeUnmount(() => {
  document.onmousemove = null
})
</script>

<template>
  <div class="left-img">
    <!-- 背景 -->
    <div class="left1"></div>
    <div class="left2"></div>
    <div class="left3"></div>
    <div class="img-position">
      <img :src="ShowImg" class="show-img" />
      <img :src="ShowImg_light" class="show-img-light" />
    </div>
    <div class="title">{{ currentRouter }}</div>
  </div>
</template>
