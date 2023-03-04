<script setup lang="ts">
import './index.less'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'

const router = useRouter()
const currentRouter = computed(() => {
  return router.currentRoute.value.meta.hasPic
})
let nightMode = ref(true)

const changeLanguage = () => {}
// const changeTheme = () => {
//   nightMode.value = !nightMode.value
// }
</script>

<template>
  <div :class="{ 'footer-com': true, 'full-footer': !currentRouter }">
    <!-- 左侧 -->
    <div class="left">
      <div class="language">
        <el-button link type="danger" disabled>中文</el-button>
        <el-button link type="danger" disabled>|</el-button>
        <el-button link type="danger" @click="changeLanguage">English</el-button>
      </div>
    </div>
    <!-- 中间 -->
    <div class="center">
      <div class="marquee-wrap">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
        <font color="#ffd600">優しい人にならなくちゃ, 心が悴む前に。</font>&nbsp;&nbsp;|&nbsp;&nbsp;
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
    <!-- 右侧 -->
    <div class="right">
      <div class="text">
        <el-button link type="danger" @click="changeLanguage">TWITTER</el-button>
        <el-button link type="danger" @click="changeLanguage">WEIBO</el-button>
        <el-button link type="danger" @click="changeLanguage">BILIBILI</el-button>
        <el-button link type="danger" @click="changeLanguage">E-MAIL</el-button>
        <el-button link type="danger" @click="changeLanguage">GITHUB</el-button>
        <el-button link type="danger" disabled>@2018-2028 ANULUCA</el-button>
      </div>
      <el-switch
        v-model="nightMode"
        class="ml-2"
        style="--el-switch-on-color: #1a1a1aa8; --el-switch-off-color: #ffffff1f"
      />
      <!-- @change="changeTheme" -->
    </div>
  </div>
</template>
