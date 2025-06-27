<template>
  <n-layout style="height: 100vh">
    <n-layout-header style="height: 64px; padding: 0 24px;" bordered>
      <app-header />
    </n-layout-header>
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :native-scrollbar="false"
      >
        <n-menu
          :options="menuOptions"
          :collapsed-width="64"
          :collapsed-icon-size="22"
        />
      </n-layout-sider>
      <n-layout-content style="padding: 24px;" :native-scrollbar="false">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { h } from 'vue'
import type { Component } from 'vue'
import AppHeader from './AppHeader.vue'
import { NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'
import {
  HomeOutline as HomeIcon,
  ChatboxOutline as ChatboxIcon,
  BulbOutline as BulbIcon,
  PersonCircleOutline as PersonIcon
} from '@vicons/ionicons5'

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: () => h(RouterLink, { to: '/voice-area' }, { default: () => '发声区' }),
    key: 'voice-area',
    icon: renderIcon(ChatboxIcon)
  },
  {
    label: () => h(RouterLink, { to: '/idea-square' }, { default: () => '点子广场' }),
    key: 'idea-square',
    icon: renderIcon(BulbIcon)
  },
  {
    label: () => h(RouterLink, { to: '/personal' }, { default: () => '个人中心' }),
    key: 'personal-center',
    icon: renderIcon(PersonIcon)
  }
]
</script>

<style scoped>
.n-layout-header {
  display: flex;
  align-items: center;
}
</style>