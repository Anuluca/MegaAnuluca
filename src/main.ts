import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'reset-css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/theme-chalk/index.css'
import '@/assets/style/global.less'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
