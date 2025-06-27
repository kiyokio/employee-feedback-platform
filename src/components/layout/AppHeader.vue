<template>
  <div class="header-container">
    <div class="logo-area">
      <img src="/favicon.ico" alt="logo" class="logo-img" />
      <h2 class="title">{{ appTitle }}</h2>
    </div>
    <div class="user-area">
      <n-dropdown :options="options">
        <n-avatar
          round
          size="large"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </n-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
const appTitle = import.meta.env.VITE_APP_TITLE || '员工反馈平台';

const options = [
  {
    label: '个人中心',
    key: 'profile'
  },
  {
    label: '退出登录',
    key: 'logout'
  }
];
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.logo-area {
  display: flex;
  align-items: center;
}
.logo-img {
  width: 32px;
  height: 32px;
  margin-right: 12px;
}
.title {
  font-size: 18px;
  font-weight: bold;
}
</style>