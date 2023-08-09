import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/index'
// 引入 createPinia 函数
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import axios from '@/request/request'
// 全局引入mock,仅在开发环境使用，打包时注释
import '@/mock/index.js'
// 创建 pinia 实例（根 store）
const pinia = createPinia()
pinia.use(piniaPersist)
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
//配置axios的全局引用
app.config.globalProperties.$axios = axios
