<template>
  <div class="voice-area-container">
    <n-h1 prefix="bar">
      <n-text type="primary">
        发声区
      </n-text>
    </n-h1>
    <n-p depth="3">
      在这里，您可以提出宝贵的改善建议，反馈心声，或进行业务协同。请选择您想进行的操作：
    </n-p>

    <n-grid :x-gap="24" :y-gap="24" :cols="3" item-responsive>
      <n-grid-item span="3 s:1">
        <n-card
          title="改善建议 (金点子)"
          hoverable
          class="action-card"
          @click="navigateTo('/voice-area/suggestion')"
        >
          <template #header-extra>
            <n-icon size="24" color="#f2c97d"><BulbOutline /></n-icon>
          </template>
          提出具体的改进方案和创新想法，为公司的发展贡献力量。
        </n-card>
      </n-grid-item>

      <n-grid-item span="3 s:1">
        <n-card
          title="员工心声"
          hoverable
          class="action-card"
          @click="navigateTo('/voice-area/feedback')"
        >
          <template #header-extra>
            <n-icon size="24" color="#82cfff"><ChatbubblesOutline /></n-icon>
          </template>
          分享您的工作感受、团队氛围或个人困惑，我们用心倾听。
        </n-card>
      </n-grid-item>

      <n-grid-item span="3 s:1">
        <n-card
          title="互动反馈"
          hoverable
          class="action-card"
          @click="openExternalLink('https://example.com/shuchuang-feedback')"
        >
          <template #header-extra>
            <n-icon size="24" color="#b392d0"><ShareSocialOutline /></n-icon>
          </template>
          （该功能将跳转至数创-我要反馈首页）针对业务协同问题进行反馈。
        </n-card>
      </n-grid-item>
    </n-grid>

    <n-divider />

    <div class="ai-assistant-section">
      <n-p depth="3">不确定该选择哪个？</n-p>
      <n-button type="primary" dashed size="large" @click="openAiAssistant">
        <template #icon>
          <n-icon><SparklesOutline /></n-icon>
        </template>
        试试 AI 助手，帮您智能分类
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useMessage } from 'naive-ui'
import {
  BulbOutline,
  ChatbubblesOutline,
  ShareSocialOutline,
  SparklesOutline
} from '@vicons/ionicons5'

const router = useRouter()
const message = useMessage()

// 内部页面跳转
const navigateTo = (path: string) => {
  router.push(path)
}

// 跳转到外部链接
const openExternalLink = (url: string) => {
  // PRD 中提到，互动反馈直接跳转，不需要添加英文参数 
  message.info('即将跳转到外部链接...')
  window.open(url, '_blank')
}

// 打开 AI 助手
const openAiAssistant = () => {
  // PRD 中提到，点击AI助手后会先弹窗提示 
  message.loading('AI 助手正在启动...')
  // 此处未来将实现弹窗逻辑
}
</script>

<style scoped>
.action-card {
  cursor: pointer;
  transition: all 0.3s;
}
.action-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.ai-assistant-section {
  text-align: center;
  padding: 20px;
}
</style>