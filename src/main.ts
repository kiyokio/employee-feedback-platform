import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 引入路由
import { createPinia } from 'pinia' // 引入 Pinia
import naive from 'naive-ui' // 引入 Naive UI
import { setMessage } from './api/http' // 引入HTTP message设置

async function bootstrap() {
  const app = createApp(App)
  const pinia = createPinia()

  app.use(pinia)
  app.use(router)
  app.use(naive)

  // 设置全局message
  const message = app.config.globalProperties.$message
  setMessage(message)

  // 挂载应用
  app.mount('#app')
}

bootstrap()