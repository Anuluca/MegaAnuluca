<script setup lang="ts">
import './index.less'
import ShowImg from '@/assets/img/show_1.png'
import ShowImg_light from '@/assets/img/show_1_light.png'
import ShowImg_light2 from '@/assets/img/show_1_light2.png'
import { onBeforeUnmount, onMounted } from 'vue'
import { reduce } from '@/utils'
import { useRouter } from 'vue-router'

const mainImg = document.getElementsByClassName('show-img')
const mainImgLight = document.getElementsByClassName('show-img-light')
const mainImgLight2 = document.getElementsByClassName('show-img-light2')
const router = useRouter()

//当前路由
const currentRouter = router.currentRoute.value.name

onMounted(() => {
  //入场动画
  const leftImg = document.getElementsByClassName('left-img')[0]
  const imgSelf = document.getElementsByClassName('img-position')[0]
  const left1 = document.getElementsByClassName('left1')[0]
  const left2 = document.getElementsByClassName('left2')[0]
  const left3 = document.getElementsByClassName('left3')[0]
  const title = document.getElementsByClassName('big-title')[0]
  console.log(leftImg)

  imgSelf['style'].opacity = '0'
  imgSelf['style'].bottom = '-40px'
  imgSelf['style'].transition = 'opacity 2s, bottom 1s'
  left1['style'].top = '20px'
  left2['style'].transform = 'skewY(0deg)'
  left2['style'].top = '23px'
  left3['style'].opacity = '0'
  title['style'].marginLeft = '-100px'
  title['style'].opacity = '0'

  setTimeout(() => {
    imgSelf['style'].opacity = '1'
    imgSelf['style'].bottom = '0'
    left1['style'].top = '-20px'
    left2['style'].top = '-13px'
    left2['style'].transform = 'skewY(30deg)'
    left3['style'].opacity = '1'
    title['style'].marginLeft = '0'
    title['style'].opacity = '1'
  }, 0)
  // 图片立体书效果
  reduce(
    (document.onmousemove = function (e) {
      // 通过event.clientX和event.clilentY获取鼠标位置
      // 将鼠标的x轴值和Y轴值赋值给图片的left和top
      mainImg[0]['style'].bottom = -e.clientY / 100 + 50 + 'px'
      mainImg[0]['style'].left = e.clientX / 100 + 'px'
      mainImgLight[0]['style'].bottom = -e.clientY / 30 + 50 + 'px'
      mainImgLight[0]['style'].left = e.clientX / 30 - 20 + 'px'
      mainImgLight[0]['style'].transform = `rotateY(${e.clientX / 60}deg) rotateX(${
        e.clientY / 40
      }deg)`
      mainImgLight2[0]['style'].bottom = e.clientY / 30 + 50 + 'px'
      mainImgLight2[0]['style'].left = -e.clientX / 30 + 20 + 'px'
      mainImgLight2[0]['style'].transform = `rotateY(${-e.clientX / 60}deg) rotateX(${
        -e.clientY / 40
      }deg)`
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
      <img :src="ShowImg_light2" class="show-img-light2" />
    </div>
    <div class="big-title">{{ currentRouter }}</div>
  </div>
</template>
