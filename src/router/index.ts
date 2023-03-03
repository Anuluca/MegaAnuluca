import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import About from '../views/About/index.vue'

export const routes = [
  //【HOME】广场
  {
    path: '/',
    name: 'HOME',
    component: Home,
    meta: {
      //路由元信息
      title: 'HOME' //拿取当前路由的title
      //这里边还可设置其他的状态，比如登录的标志，路由是否缓存的标志
    }
  },
  // 【BLOGS】博客
  {
    path: '/blogs',
    name: 'BLOGS',
    component: About,
    meta: {
      //路由元信息
      title: 'BLOGS' //拿取当前路由的title
      //这里边还可设置其他的状态，比如登录的标志，路由是否缓存的标志
    }
  },
  // 【GAME】游戏
  {
    path: '/game',
    name: 'GAME',
    component: About,
    meta: {
      //路由元信息
      title: 'GAME' //拿取当前路由的title
      //这里边还可设置其他的状态，比如登录的标志，路由是否缓存的标志
    }
  },
  // 【TOOLS】工具
  {
    path: '/tools',
    name: 'TOOLS',
    component: About,
    meta: {
      //路由元信息
      title: 'TOOLS' //拿取当前路由的title
      //这里边还可设置其他的状态，比如登录的标志，路由是否缓存的标志
    }
  },
  // 【photo】摄影
  {
    path: '/photo',
    name: 'PHOTO',
    component: About,
    meta: {
      //路由元信息
      title: 'PHOTO' //拿取当前路由的title
      //这里边还可设置其他的状态，比如登录的标志，路由是否缓存的标志
    }
  },
  // 【ABOUT】关于
  {
    path: '/about',
    name: 'ABOUT',
    component: About,
    meta: {
      //路由元信息
      title: 'ABOUT' //拿取当前路由的title
      //这里边还可设置其他的状态，比如登录的标志，路由是否缓存的标志
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = '/ ' + to.meta.title + " / Luca's LiberiaGarden"
  }
})

export default router
