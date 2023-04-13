<script setup lang="ts">
import './index.less'
import LeftImg from '@/components/LeftImg/index.vue'
import { onMounted, ref } from 'vue'
import { debounce } from 'lodash'

import PageA from './comp/PageA/index.vue'
import PageB from './comp/PageB/index.vue'
import PageC from './comp/PageC/index.vue'
import PageD from './comp/PageD/index.vue'

const contextOpac = ref(false)
const nextShow = ref(true)
const prevShow = ref(false)
const carousel = ref(null)
const nowId = ref(0)
const pageb = ref()
const pagec = ref()
const paged = ref()

onMounted(() => {
  const carousel = document.getElementsByClassName('carousel-container')[0]
  carousel['style'].left = '60vw'
  carousel['style'].opacity = '0'
  // window.addEventListener('wheel', debounce(wheelEvent, 10000))
  setTimeout(() => {
    carousel['style'].left = '0'
    carousel['style'].opacity = '1'
  }, 400)
})

const wheelEvent = debounce((e) => {
  if (e.deltaY >= 0) {
    carousel.value.next()
  } else {
    carousel.value.prev()
  }
}, 100)

const toNext = () => {
  carousel.value.next()
  // contextOpac.value = true
}
const toPrev = () => {
  carousel.value.prev()
}
const change = (e) => {
  nowId.value = 2
  if (e === 0) {
    nextShow.value = true
    prevShow.value = false
  } else if (e === 1 || e === 2) {
    nextShow.value = true
    prevShow.value = true
    pageb.value.onChangePage()
  } else {
    nextShow.value = false
    prevShow.value = true
  }
}
</script>

<template>
  <div class="home-page main-container" @mousewheel="wheelEvent">
    <LeftImg />
    <div class="right-container">
      <el-carousel
        height="calc(100vh - 165px)"
        direction="vertical"
        :autoplay="false"
        trigger="click"
        ref="carousel"
        indicator-position="outside"
        class="carousel-container"
        @change="change"
      >
        <el-carousel-item>
          <PageA :class="{ trans: contextOpac }" />
        </el-carousel-item>
        <el-carousel-item>
          <PageB ref="pageb" />
        </el-carousel-item>
        <el-carousel-item>
          <PageC ref="pagec" />
        </el-carousel-item>
        <el-carousel-item>
          <PageD ref="paged" />
        </el-carousel-item>
        <div class="next-page" @click="toNext" v-if="nextShow">》</div>
        <div class="prev-page" @click="toPrev" v-if="prevShow">《</div>
      </el-carousel>
    </div>
  </div>
</template>
