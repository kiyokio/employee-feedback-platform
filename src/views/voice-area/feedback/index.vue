<template>
  <div class="feedback-page">
    <h1>Submit Feedback</h1>
    <p>Your feedback helps us improve the workplace for everyone.</p>
    
    <form @submit.prevent="handleSubmit" class="feedback-form">
      <div class="form-group">
        <label for="feedback-type">Feedback Type</label>
        <select id="feedback-type" v-model="form.type" required>
          <option value="">Select a type</option>
          <option value="work-environment">Work Environment</option>
          <option value="team-dynamics">Team Dynamics</option>
          <option value="management">Management</option>
          <option value="facilities">Facilities</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="feedback-title">Title</label>
        <input 
          id="feedback-title" 
          v-model="form.title" 
          type="text" 
          placeholder="Brief description of your feedback"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="feedback-content">Details</label>
        <textarea 
          id="feedback-content" 
          v-model="form.content" 
          rows="5"
          placeholder="Please provide specific details about your feedback..."
          required
        ></textarea>
      </div>
      
      <div class="form-group checkbox-group">
        <input 
          id="anonymous" 
          v-model="form.isAnonymous" 
          type="checkbox" 
        />
        <label for="anonymous">Submit anonymously</label>
      </div>
      
      <button type="submit" class="submit-btn">Submit Feedback</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'FeedbackPage',
  setup() {
    const form = reactive({
      type: '',
      title: '',
      content: '',
      isAnonymous: false
    });

    const handleSubmit = () => {
      console.log('Feedback submitted:', form);
      // TODO: Add actual submission logic
      alert('Thank you for your feedback!');
    };

    return {
      form,
      handleSubmit
    };
  }
});
</script>

<style scoped>
.feedback-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
.feedback-form {
  margin-top: 2rem;
}
.form-group {
  margin-bottom: 1.5rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
}
textarea {
  resize: vertical;
}
.checkbox-group {
  display: flex;
  align-items: center;
}
.checkbox-group input {
  width: auto;
  margin-right: 0.5rem;
}
.submit-btn {
  padding: 0.75rem 2rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}
.submit-btn:hover {
  background-color: #3aa876;
}
</style>