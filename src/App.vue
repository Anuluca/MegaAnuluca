<script setup lang="ts">
import layout from './layout/index.vue'
import FooterCom from '@/components/FooterCom/index.vue'
import BackController from '@/components/BackController/index.vue'
import { onMounted } from 'vue'
import { visualState } from './stores'

const visualStateStore = visualState()

// 主题判断
onMounted(() => {
  if (localStorage.getItem('theme')) {
    visualStateStore.setTheme(localStorage.getItem('theme'))
  } else {
    localStorage.setItem('theme', 'dark')
  }
})
</script>

<template>
  <el-container>
    <BackController />
    <layout></layout>
    <FooterCom />
  </el-container>
</template>
