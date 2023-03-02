import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import About from '../views/About/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //【HOME】广场
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // 【ABOUT】关于
    {
      path: '/about',
      name: 'about',
      component: About
    },
    // 【BLOGS】博客
    {
      path: '/blogs',
      name: 'blogs',
      component: About
    },
    // 【GAME】游戏
    {
      path: '/note',
      name: 'note',
      component: About
    },
    // 【GAME】游戏
    {
      path: '/game',
      name: 'game',
      component: About
    },
    // 【TOOLS】工具
    {
      path: '/tools',
      name: 'tools',
      component: About
    },
    // 【photo】摄影
    {
      path: '/photo',
      name: 'photo',
      component: About
    }
  ]
})

export default router
