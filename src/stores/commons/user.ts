import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { login, logout, getUserInfo } from '@/api/modules/user'
import type { UserInfo, LoginParams } from '@/types/api'

export const useUserStore = defineStore('user', () => {
  const token = ref<string>('')
  const userInfo = ref<UserInfo | null>(null)

  const isLogin = computed(() => !!token.value)
  const userName = computed(() => userInfo.value?.name || '')
  const userRole = computed(() => userInfo.value?.role || '')

  async function userLogin(params: LoginParams) {
    try {
      const { data } = await login(params)
      token.value = data.token
      await fetchUserInfo()
      return true
    } catch (error) {
      return false
    }
  }

  async function fetchUserInfo() {
    try {
      const { data } = await getUserInfo()
      userInfo.value = data
    } catch (error) {
      console.error('获取用户信息失败', error)
    }
  }

  async function userLogout() {
    try {
      await logout()
    } finally {
      token.value = ''
      userInfo.value = null
    }
  }

  return {
    token,
    userInfo,
    isLogin,
    userName,
    userRole,
    userLogin,
    fetchUserInfo,
    userLogout
  }
})