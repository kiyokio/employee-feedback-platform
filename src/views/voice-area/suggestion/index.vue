<template>
  <div class="suggestion-page">
    <h1>Make a Suggestion</h1>
    <p class="intro">Have an idea to improve our workplace? Share it with us!</p>
    
    <form @submit.prevent="handleSubmit" class="suggestion-form">
      <div class="form-section">
        <h2>Suggestion Details</h2>
        
        <div class="form-group">
          <label for="suggestion-category">Category</label>
          <select id="suggestion-category" v-model="form.category" required>
            <option value="">Select a category</option>
            <option value="process">Process Improvement</option>
            <option value="productivity">Productivity</option>
            <option value="culture">Work Culture</option>
            <option value="benefits">Benefits</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="suggestion-title">Suggestion Title</label>
          <input 
            id="suggestion-title" 
            v-model="form.title" 
            type="text" 
            placeholder="Brief summary of your suggestion"
            required
          />
        </div>
        
        <div class="form-group">
          <label for="suggestion-description">Detailed Description</label>
          <textarea 
            id="suggestion-description" 
            v-model="form.description" 
            rows="5"
            placeholder="Please describe your suggestion in detail..."
            required
          ></textarea>
        </div>
      </div>
      
      <div class="form-section">
        <h2>Expected Benefits</h2>
        
        <div class="form-group">
          <label for="expected-impact">Expected Impact</label>
          <select id="expected-impact" v-model="form.impact">
            <option value="">Select expected impact</option>
            <option value="low">Low Impact</option>
            <option value="medium">Medium Impact</option>
            <option value="high">High Impact</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="benefits-description">Benefits Description</label>
          <textarea 
            id="benefits-description" 
            v-model="form.benefits" 
            rows="3"
            placeholder="How will this suggestion benefit the company or employees?"
          ></textarea>
        </div>
      </div>
      
      <button type="submit" class="submit-btn">Submit Suggestion</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'SuggestionPage',
  setup() {
    const form = reactive({
      category: '',
      title: '',
      description: '',
      impact: '',
      benefits: ''
    });

    const handleSubmit = () => {
      console.log('Suggestion submitted:', form);
      // TODO: Add actual submission logic
      alert('Thank you for your suggestion!');
    };

    return {
      form,
      handleSubmit
    };
  }
});
</script>

<style scoped>
.suggestion-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
.intro {
  color: #555;
  margin-bottom: 2rem;
}
.suggestion-form {
  margin-top: 1rem;
}
.form-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
}
.form-section h2 {
  margin-top: 0;
  color: #42b983;
  font-size: 1.2rem;
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
.submit-btn {
  display: block;
  width: 100%;
  padding: 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}
.submit-btn:hover {
  background-color: #3aa876;
}
</style>