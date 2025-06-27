<template>
  <n-message-provider>
    <n-notification-provider>
      <n-dialog-provider>
        <n-loading-bar-provider>
          <router-view />
        </n-loading-bar-provider>
      </n-dialog-provider>
    </n-notification-provider>
  </n-message-provider>
</template>

<script setup lang="ts">
// 这里可以留空，或者未来添加全局逻辑
</script>

<style>
/* 可以在这里添加一些全局样式 */
body, html, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>