<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { routes } from '@/router/index'
import './index.less'
import Logo from '@/assets/img/logo.png'
import LogoDark from '@/assets/img/logo_black.png'
import { computed, onMounted } from 'vue'
import { visualState } from '@/stores'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

onMounted(() => {
  console.log('AAA', locale.value)
})

const route = useRoute()
const visualStateStore = visualState()
const showLogo = computed(() => {
  return visualStateStore.theme === 'dark' ? Logo : LogoDark
})
const currentRouter = computed(() => {
  return route.path
})
const filterRoutes = routes.filter((item) => {
  return item?.meta?.ifShow
})

onMounted(() => {
  const menu_element = document.getElementsByClassName('el-menu-layout-all')[0]
  menu_element['style'].opacity = '0'

  setTimeout(() => {
    menu_element['style'].opacity = '1'
  }, 0)
})

// const handleSelect = () => {}
</script>

<template>
  <div class="layout-page">
    <!-- 头部 -->
    <el-header class="el-menu-layout-all">
      <el-menu :default-active="currentRouter" mode="horizontal" router :ellipsis="false">
        <!-- @select="handleSelect" -->
        <div class="logo-box" index="0">
          <img :src="showLogo" />
          <div class="right">
            <!-- <p>路卡的自由庭院岛</p> -->
            <p>{{ $t('name') }}</p>
            <p>MEGA v0.1 alpha</p>
          </div>
        </div>
        <div class="flex-grow" />
        <div class="menu-box">
          <RouterLink v-for="(item, index) in filterRoutes" :key="index" :to="item.path">
            <el-menu-item :index="item.path" :class="item.meta.titleEn">
              <!-- {{ locale === 'zhCn' ? item.meta.titleCn : item.meta.titleEn }} -->
              {{ item.meta.titleEn }}
            </el-menu-item>
          </RouterLink>
        </div>
      </el-menu>
    </el-header>
    <!-- body -->
    <RouterView />
  </div>
</template>
