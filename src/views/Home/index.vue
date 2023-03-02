<script setup lang="ts">
import './index.less'
import md from './README.md'
import { marked } from 'marked'
import { ref, shallowRef } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/foundation.css'

const render = new marked.Renderer()
marked.setOptions({
  renderer: render, // 这是必填项
  gfm: true, // 启动类似于Github样式的Markdown语法
  pedantic: false, // 只解析符合Markdwon定义的，不修正Markdown的错误
  sanitize: false, // 原始输出，忽略HTML标签（关闭后，可直接渲染HTML标签）
  // 高亮的语法规范
  highlight: (code, lang) => hljs.highlight(code, { language: lang }).value
})

const content = ref(md)

const MDHtml = shallowRef('')
MDHtml.value = marked(content.value)
</script>

<template>
  <div class="home-page">
    home
    <article v-html="MDHtml" />
  </div>
</template>
