<script lang="ts" setup>
import './index.less'
import { onMounted } from 'vue'

onMounted(() => {})
// 跳转到第二页
const clickOtherGames = () => {
  const menuFirst = document.getElementsByClassName('menu-first')[0]
  const menuSecond = document.getElementsByClassName('menu-second')[0]
  setTimeout(() => {
    menuFirst['style'].opacity = '0'
    menuFirst['style'].zoom = '0.01'
    menuSecond['style'].opacity = '1'
    menuSecond['style'].zoom = '1'
  }, 0)
}

// 回到第一页
const backOtherGames = () => {
  const menuFirst = document.getElementsByClassName('menu-first')[0]
  const menuSecond = document.getElementsByClassName('menu-second')[0]
  setTimeout(() => {
    menuFirst['style'].opacity = '1'
    menuFirst['style'].zoom = '1'
    menuSecond['style'].opacity = '0'
    menuSecond['style'].zoom = '0.01'
  }, 0)
}
</script>

<template>
  <div class="game-home">
    <div class="inner-div">
      <div class="main-chara"></div>
      <!-- 一级菜单 -->
      <div class="menu-first">
        <div class="option-pokemon">POKEMON</div>
        <div class="option-other-games" @click="clickOtherGames">OTHER GAMES</div>
      </div>
      <!-- 二级菜单 -->
      <div class="menu-second">
        <div class="option-nintendo-switch">NINTENDO SWITCH</div>
        <div class="option-nintendo-3ds">NINTENDO 3DS</div>
        <div class="option-nintendo-ds">NINTENDO DS</div>
        <div class="option-gba">GBA</div>
        <div class="option-gbc">GBC</div>
        <div class="option-gb">GB</div>

        <div class="option-ngc">NGC</div>
        <div class="option-nintendo-64">Nintendo 64</div>
        <div class="option-psv">PSV</div>
        <div class="option-pc">PC</div>
        <div class="option-mobile">Mobile</div>

        <div class="option-back" @click="backOtherGames">back</div>
      </div>
    </div>
  </div>
</template>
