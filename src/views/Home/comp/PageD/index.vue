<script setup lang="ts">
import './index.less'
import Logo from '@/assets/img/logo.png'
import LogoDark from '@/assets/img/logo_black.png'
import { computed } from 'vue'
import { visualState } from '@/stores'

const visualStateStore = visualState()

const showLogo = computed(() => {
  return visualStateStore.theme === 'dark' ? Logo : LogoDark
})

const clickLisence = () => {
  window.open('https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh', '_blank')
}
</script>

<template>
  <div class="home-page-d home-page-container">
    <div class="top-controller"></div>
    <div class="inner-text">
      <div class="center-text">
        <img :src="showLogo" alt="" />
        <p>DEVELOPED BY ANULUCA</p>
        <p>
          Based on： &nbsp;<span style="color: #75fb9b">VUE3.2 &nbsp;</span> |
          <span style="color: #2b03f5"> &nbsp;TYPESCRIPT</span>
        </p>
      </div>
      <div class="bottom-text">
        <!-- <p>The copyright statement for articles and pictures:</p> -->
        <p>{{ $t('home.lisence1') }}</p>
        <p>
          {{ $t('home.lisence2') }}
          <span class="lisence" @click="clickLisence">{{ $t('home.lisence3') }}</span> ）.
          <!-- free to reprint, non-commercial, non-derivative, with attribution （
          <span class="lisence" @click="clickLisence">Creative Commons 3.0 lisence</span> ） . -->
        </p>
      </div>
    </div>
  </div>
</template>
