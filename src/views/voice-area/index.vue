<template>
  <div class="voice-area">
    <h1>Voice Your Feedback</h1>
    <p class="intro">Share your thoughts and suggestions to help improve our workplace.</p>
    
    <div class="navigation-cards">
      <router-link to="/voice-area/feedback" class="nav-card">
        <h2>Submit Feedback</h2>
        <p>Share your experiences and concerns</p>
      </router-link>
      
      <router-link to="/voice-area/suggestion" class="nav-card">
        <h2>Make a Suggestion</h2>
        <p>Propose ideas for improvement</p>
      </router-link>
    </div>
    
    <div class="recent-activity" v-if="recentItems.length > 0">
      <h2>Your Recent Activity</h2>
      <ul>
        <li v-for="item in recentItems" :key="item.id">
          {{ item.type }}: {{ item.title }} ({{ item.date }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'VoiceArea',
  setup() {
    const recentItems = reactive([
      { id: 1, type: 'Feedback', title: 'Office temperature', date: '2023-05-15' },
      { id: 2, type: 'Suggestion', title: 'Weekly team lunch', date: '2023-05-10' }
    ]);

    return {
      recentItems
    };
  }
});
</script>

<style scoped>
.voice-area {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}
.intro {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
}
.navigation-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}
.nav-card {
  padding: 2rem;
  border-radius: 8px;
  background-color: #f8f9fa;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;
}
.nav-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
.nav-card h2 {
  color: #42b983;
  margin-top: 0;
}
.recent-activity {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}
.recent-activity ul {
  list-style: none;
  padding: 0;
}
.recent-activity li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f5f5f5;
}
</style>