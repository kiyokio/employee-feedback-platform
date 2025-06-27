<template>
  <div class="login-page">
    <h1>Employee Feedback Platform</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input 
          id="username" 
          v-model="form.username" 
          type="text" 
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input 
          id="password" 
          v-model="form.password" 
          type="password" 
          required
        />
      </div>
      <button type="submit" class="login-btn">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const form = reactive({
      username: '',
      password: ''
    });

    const handleSubmit = () => {
      console.log('Login form submitted:', form);
      // TODO: Add actual login logic
    };

    return {
      form,
      handleSubmit
    };
  }
});
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
.form-group {
  margin-bottom: 1rem;
  text-align: left;
}
label {
  display: block;
  margin-bottom: 0.5rem;
}
input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.login-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>