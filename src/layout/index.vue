<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { routes } from '@/router/index'
import './index.less'
import logo from '@/assets/img/logo.png'

const handleSelect = () => {}
</script>

<template>
  <div class="layout-page">
    <!-- 头部 -->
    <el-header class="el-menu-layout">
      <el-menu :default-active="'1'" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <div class="logo-box" index="0">
          <img :src="logo" />
          <div class="right">
            <p>路卡的自由庭院岛</p>
            <p>MEGA v0.1 alpha</p>
          </div>
        </div>
        <div class="flex-grow" />
        <div class="menu-box">
          <el-menu-item v-for="(item, index) in routes" :key="index" :index="index + ''">
            <RouterLink :to="item.path">{{ item.name }}</RouterLink>
          </el-menu-item>
        </div>
      </el-menu>
    </el-header>
    <!-- body -->
    <RouterView />
  </div>
</template>
