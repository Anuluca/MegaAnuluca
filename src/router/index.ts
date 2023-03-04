import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import About from '../views/About/index.vue'
import NotFound from '../views/404/index.vue'

export const routes = [
  //【HOME】广场
  {
    path: '/',
    name: 'HOME',
    component: Home,

    meta: {
      //路由元信息
      title: 'HOME', //拿取当前路由的title
      hasPic: true, //是否显示左侧图片
      ifShow: true
      //这里边还可设置其他的状态，比如登录的标志，路由是否缓存的标志
    }
  },
  // 【BLOGS】博客
  {
    path: '/blogs',
    name: 'BLOGS',
    component: About,
    meta: {
      title: 'BLOGS',
      hasPic: true,
      ifShow: true
    },
    redirect: '/404'
  },
  // 【GAME】游戏
  {
    path: '/game',
    name: 'GAME',
    component: About,

    meta: {
      title: 'GAME',
      hasPic: true,
      ifShow: true
    },
    redirect: '/404'
  },
  // 【TOOLS】工具
  {
    path: '/tools',
    name: 'TOOLS',
    component: About,

    meta: {
      title: 'TOOLS',
      hasPic: true,
      ifShow: true
    },
    redirect: '/404'
  },
  // 【photo】摄影
  {
    path: '/photo',
    name: 'PHOTO',
    component: About,

    meta: {
      title: 'PHOTO',
      hasPic: true,
      ifShow: true
    },
    redirect: '/404'
  },
  // 【ABOUT】关于
  {
    path: '/about',
    name: 'ABOUT',
    component: About,

    meta: {
      title: 'ABOUT',
      hasPic: true,
      ifShow: true
    }
  },
  // 【404】404
  {
    path: '/404',
    name: '404',
    component: NotFound,
    meta: {
      title: '404',
      hasPic: false,
      ifShow: false
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//路由守卫
// router.beforeEach((to, from, next) => {
//   if (to.path != '/') {
//     router.push({ name: '404' })
//   } else {
//     next()
//   }
// })

router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = '/ ' + to.meta.title + " / Luca's LiberiaGarden"
  }
})

export default router
