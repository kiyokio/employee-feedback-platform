<template>
  <div class="personal-page">
    <h1>Personal Center</h1>
    <div class="profile-section">
      <div class="avatar">
        <img src="@/assets/default-avatar.png" alt="User Avatar">
      </div>
      <div class="user-info">
        <h2>{{ user.name }}</h2>
        <p>{{ user.department }}</p>
        <p>{{ user.position }}</p>
      </div>
    </div>
    <div class="settings-section">
      <h3>Settings</h3>
      <ul>
        <li>Change Password</li>
        <li>Notification Preferences</li>
        <li>Privacy Settings</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'PersonalPage',
  setup() {
    const user = reactive({
      name: 'John Doe',
      department: 'Engineering',
      position: 'Software Developer'
    });

    return {
      user
    };
  }
});
</script>

<style scoped>
.personal-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
.profile-section {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
}
.avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 2rem;
}
.user-info h2 {
  margin: 0;
  color: #333;
}
.user-info p {
  margin: 0.5rem 0;
  color: #666;
}
.settings-section ul {
  list-style: none;
  padding: 0;
}
.settings-section li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #f5f5f5;
  cursor: pointer;
}
.settings-section li:hover {
  background-color: #f9f9f9;
}
</style>