<script lang="ts" setup>
import { useRoute } from 'vue-router'
import BackStars from '@/components/BackStars/index.vue'
import BackSakura from '@/components/BackSakura/index.vue'
import { computed } from 'vue'

const route = useRoute()
const currentRouter = computed(() => {
  return route.path
})
const theme = computed(() => {
  if (currentRouter.value === '/') {
    return 'dawn'
  } else if (currentRouter.value === '/404') {
    return 'night'
  } else {
    return 'night'
  }
})
</script>
<template>
  <div class="back-controller">
    <BackStars :theme="theme" v-if="['/', '/404'].indexOf(currentRouter) >= 0" />
    <BackSakura :theme="theme" v-if="['/about'].indexOf(currentRouter) >= 0" />
  </div>
</template>

<style></style>
