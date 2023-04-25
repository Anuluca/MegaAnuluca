<script setup lang="ts">
import './index.less'
import { useRouter, useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import { visualState } from '@/stores'
import { ElLoading, ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const router = useRouter()
const route = useRoute()
const visualStateStore = visualState()
const hasPic = computed(() => {
  return router.currentRoute.value.meta.hasPic
})
const currentRouter = computed(() => {
  return route.path
})
let nightMode = ref()
let nowChinese = ref(true)

const recommend = [
  {
    title: '解决Chrome80版本SameSite属性导致Cookie无法跨域的问题',
    sort: 'BLOGS/前端开发',
    date: '2023-02-23',
    color: '#f0a0d0',
    href: '/404'
  },
  {
    title: '《宝可梦 朱/紫》',
    sort: 'GAMES/NINTENDO SWITCH',
    date: '2023-02-23',
    color: '#f8463e',
    href: '/404'
  },
  {
    title: '泽塔奥特曼-皮套摄影',
    sort: 'PHOTOS/摄影',
    date: '2023-02-23',
    color: '#dc00d0',
    href: '/404'
  },
  {
    title: '垃圾话生成器',
    sort: 'TOOLS',
    date: '2023-02-23',
    color: '#dc00d0',
    href: '/404'
  },
  {
    title: '自由庭院岛简史',
    sort: 'ABOUT',
    date: '2023-02-23',
    color: '#ffe71c',
    href: '/404'
  }
]

onMounted(() => {
  // 底部新闻条入场动画
  const expand_element = document.getElementsByClassName('expand')[0]
  const text_element = document.getElementsByClassName('text-links')[0]
  expand_element['style'].width = '0px'
  expand_element['style'].overflow = 'hidden'
  text_element['style'].opacity = '0'
  setTimeout(() => {
    expand_element['style'].width = '100%'
    expand_element['style'].overflow = 'hidden'
    text_element['style'].opacity = '1'
    nightMode.value = localStorage.getItem('theme') === 'dark'
    nowChinese.value = localStorage.getItem('lang') === 'zhCn'
  }, 0)
})

const changeLanguage = (lang) => {
  localStorage.setItem('lang', lang)
  locale.value = lang
  nowChinese.value = localStorage.getItem('lang') === 'zhCn'
}
const changeTheme = () => {
  console.log(currentRouter.value)

  if (currentRouter.value === '/') {
    const loadingInstance = ElLoading.service({ fullscreen: true, text: 'Theme Changing' })
    console.log(nightMode.value)
    setTimeout(() => {
      const currentMode = nightMode.value ? 'dark' : 'light'
      // localStorage.setItem('theme', currentMode)
      visualStateStore.setTheme(currentMode)
    }, 500)
    setTimeout(() => {
      loadingInstance.close()
    }, 500)
  } else {
    const currentMode = nightMode.value ? 'dark' : 'light'
    // localStorage.setItem('theme', currentMode)
    visualStateStore.setTheme(currentMode)
  }
}

const contact = (type: string) => {
  let url = ''
  if (type !== 'E-MAIL') {
    if (type === 'TWITTER') {
      url = 'https://twitter.com/TILucario'
    } else if (type === 'WEIBO') {
      url = 'https://weibo.com/ryugamine'
    } else if (type === 'BILIBILI') {
      url = 'https://space.bilibili.com/128735968'
    } else if (type === 'GITHUB') {
      url = 'https://github.com/Anuluca'
    }
    window.open(url)
  } else {
    document.location.href = 'mailto:tilucario@outlook.com'
  }
}
</script>

<template>
  <div :class="{ 'footer-com': true, 'full-footer': !hasPic }">
    <!-- 左侧 -->
    <div class="left">
      <div class="language">
        <el-button link type="danger" @click="changeLanguage('zhCn')" :disabled="nowChinese"
          >中文</el-button
        >
        <el-button link type="danger" disabled>|</el-button>
        <el-button link type="danger" @click="changeLanguage('en')" :disabled="!nowChinese"
          >English</el-button
        >
      </div>
    </div>
    <!-- 中间 -->
    <div class="center">
      <div class="expand">
        <div class="marquee-wrap">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
          <span style="color: #ffc61b">優しい人にならなくちゃ, 心が悴む前に。</span
          >&nbsp;&nbsp;|&nbsp;&nbsp;
          <b
            >RECOMMEND:
            <a v-for="(item, key) in recommend" :key="key" :href="item.href">
              {{ item.title }}
              <span :style="'color: ' + item.color">[{{ item.sort }} {{ item.date }}]</span>
            </a>
          </b>
        </div>
      </div>
    </div>
    <!-- 右侧 -->
    <div class="right">
      <div class="text-links">
        <el-button link type="danger" @click="contact('TWITTER')">TWITTER</el-button>
        <el-button link type="danger" @click="contact('WEIBO')">WEIBO</el-button>
        <el-button link type="danger" @click="contact('BILIBILI')">BILIBILI</el-button>
        <el-button link type="danger" @click="contact('E-MAIL')">E-MAIL</el-button>
        <el-button link type="danger" @click="contact('GITHUB')">GITHUB</el-button>
        <el-button link type="danger" disabled>@2018-2023 ANULUCA</el-button>
      </div>
      <el-switch
        v-model="nightMode"
        class="ml-cus"
        @Change="changeTheme()"
        style="--el-switch-on-color: #1a1a1aa8; --el-switch-off-color: #ffffff1f"
      />
      <!-- @change="changeTheme" -->
    </div>
  </div>
</template>
