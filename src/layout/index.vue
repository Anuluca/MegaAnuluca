<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { routes } from '@/router/index'
import './index.less'
import logo from '@/assets/img/logo.png'
import { computed } from 'vue'

const route = useRoute()
const currentRouter = computed(() => {
  return route.path
})
const filterRoutes = routes.filter((item) => {
  return item?.meta?.ifShow
})

// const handleSelect = () => {}
</script>

<template>
  <div class="layout-page">
    <!-- 头部 -->
    <el-header class="el-menu-layout">
      <el-menu :default-active="currentRouter" mode="horizontal" router :ellipsis="false">
        <!-- @select="handleSelect" -->
        <div class="logo-box" index="0">
          <img :src="logo" />
          <div class="right">
            <p>路卡的自由庭院岛</p>
            <p>MEGA v0.1 alpha</p>
          </div>
        </div>
        <div class="flex-grow" />
        <div class="menu-box">
          <RouterLink v-for="(item, index) in filterRoutes" :key="index" :to="item.path">
            <el-menu-item :index="item.path" :class="item.name">
              {{ item.name }}
            </el-menu-item>
          </RouterLink>
        </div>
      </el-menu>
    </el-header>
    <!-- body -->
    <RouterView />
  </div>
</template>
