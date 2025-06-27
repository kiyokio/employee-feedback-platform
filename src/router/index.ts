import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { setupRouterGuards } from './guards'

// 使用插件的能力，将布局应用到自动生成的路由上
const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes, // 直接使用处理过的、自动生成的路由
})

// 路由守卫等其他功能可以继续保留
setupRouterGuards(router)

export default router