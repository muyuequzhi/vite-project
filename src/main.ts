import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import axios from '@/request/request'
// 全局引入mock,仅在开发环境使用，打包时注释
import '@/mock/index.js'

const app = createApp(App).use(router)
app.mount('#app')
//配置axios的全局引用
app.config.globalProperties.$axios = axios
