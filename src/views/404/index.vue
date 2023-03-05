<script setup lang="ts">
import './index.less'
import Porygon from '@/assets/img/porygon.png'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="not-found-page">
    <div class="inner">
      <img :src="Porygon" />
      <div class="show-text">
        <p>404 NOT FOUND</p>
        <p>THE DEVELOPMENT OF THIS PAGE REQUIRES A LOT OF EFFORT</p>
        <p @click="router.push('/')">CLICK HERE TO RETURN TO HOMEPAGE</p>
      </div>
    </div>
  </div>
</template>
