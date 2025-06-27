import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { setupRouterGuards } from './guards'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/components/layout/AppLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/voice-area'
      },
      {
        path: 'voice-area',
        name: 'VoiceArea',
        component: () => import('@/views/voice-area/index.vue'),
        meta: { title: '发声区', requiresAuth: true }
      },
      {
        path: 'voice-area/suggestion',
        name: 'Suggestion',
        component: () => import('@/views/voice-area/suggestion/index.vue'),
        meta: { title: '改善建议', requiresAuth: true }
      },
      {
        path: 'voice-area/feedback',
        name: 'Feedback',
        component: () => import('@/views/voice-area/feedback/index.vue'),
        meta: { title: '员工心声', requiresAuth: true }
      },
      {
        path: 'idea-square',
        name: 'IdeaSquare',
        component: () => import('@/views/idea-square/index.vue'),
        meta: { title: '点子广场', requiresAuth: true }
      },
      {
        path: 'personal',
        name: 'Personal',
        component: () => import('@/views/personal/index.vue'),
        meta: { title: '个人中心', requiresAuth: true }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/error/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 设置路由守卫
setupRouterGuards(router)

export default router