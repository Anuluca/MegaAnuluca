<script setup lang="ts">
import './index.less'
import { useRouter } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import { visualState } from '@/stores'
import { ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/theme-chalk/index.css'

const router = useRouter()
const visualStateStore = visualState()
const currentRouter = computed(() => {
  return router.currentRoute.value.meta.hasPic
})
let nightMode = ref()

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
  }, 0)
  nightMode.value = localStorage.getItem('theme') === 'dark'
})

const changeLanguage = () => {
  ElMessageBox.alert('中文版正在开发中', '提示', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK'
  })
}
const changeTheme = () => {
  console.log(nightMode.value)
  const currentMode = nightMode.value ? 'dark' : 'light'
  // localStorage.setItem('theme', currentMode)
  visualStateStore.setTheme(currentMode)
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
  <div :class="{ 'footer-com': true, 'full-footer': !currentRouter }">
    <!-- 左侧 -->
    <div class="left">
      <div class="language">
        <el-tooltip effect="dark" content="开发中" placement="top">
          <el-button link type="danger" @click="changeLanguage">中文</el-button>
        </el-tooltip>

        <el-button link type="danger" disabled>|</el-button>
        <el-button link type="danger" disabled>English</el-button>
      </div>
    </div>
    <!-- 中间 -->
    <div class="center">
      <div class="expand">
        <div class="marquee-wrap">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
          <font color="#fc5531">優しい人にならなくちゃ, 心が悴む前に。</font
          >&nbsp;&nbsp;|&nbsp;&nbsp;
          <b
            >RECOMMEND:
            <a style="color: aliceblue"
              >解决Chrome80版本SameSite属性导致Cookie无法跨域的问题<font color="#f0a0d0"
                >[BLOGS/前端开发]</font
              >
              <font color="#000">2023-02-23</font></a
            >
            <a
              >《宝可梦 <font color="#f8463e">朱</font>/<font color="#bb45b0">紫</font>》<font
                color="#f8463e"
                >[GAMES/NINTENDO SWITCH]</font
              >
              <font color="#000">2023-02-23</font></a
            >
            <a
              >泽塔奥特曼-皮套摄影<font color="#01dd83">[PHOTOS/摄影]</font>
              <font color="#000">2023-02-23</font></a
            >
            <a
              >垃圾话生成器<font color="#dc00d0">[TOOLS]</font>
              <font color="#000">2023-02-23</font></a
            >
            <a
              >自由庭院岛简史<font color="#ffe71c">[ABOUT]</font>
              <font color="#000">2023-02-23</font></a
            >
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
