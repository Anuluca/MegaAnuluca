<script lang="ts" setup>
import './index.less'
import { onMounted } from 'vue'
import { nintendoSwitchGameList } from '../gameList'

onMounted(() => {})
</script>

<template>
  <div class="nintendo-switch-game-list">
    <div v-for="(item, key) in nintendoSwitchGameList" :key="key">
      <div :style="'background-image: url(' + item.img + ')'"></div>
      {{ item }}
    </div>
  </div>
</template>
