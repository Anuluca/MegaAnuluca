<script setup lang="ts">
import layout from './layout/index.vue'
import FooterCom from '@/components/FooterCom/index.vue'
import BackController from '@/components/BackController/index.vue'
</script>

<template>
  <el-container>
    <BackController />
    <layout></layout>
    <FooterCom />
  </el-container>
</template>
