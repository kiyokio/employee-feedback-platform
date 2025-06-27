<template>
  <div class="idea-square">
    <h1>Idea Square</h1>
    <p class="intro">Explore and discuss feedback and suggestions from your colleagues.</p>
    
    <div class="controls">
      <div class="search-box">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search feedback and suggestions..."
        />
        <button @click="handleSearch">Search</button>
      </div>
      
      <div class="filter-tabs">
        <button 
          v-for="tab in tabs" 
          :key="tab.value" 
          :class="{ active: activeTab === tab.value }"
          @click="activeTab = tab.value"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>
    
    <div class="idea-list">
      <div v-for="item in filteredItems" :key="item.id" class="idea-card">
        <div class="idea-header">
          <h3>{{ item.title }}</h3>
          <span class="idea-type" :class="item.type">{{ item.type }}</span>
        </div>
        <p class="idea-content">{{ item.content }}</p>
        <div class="idea-footer">
          <div class="idea-meta">
            <span class="author">{{ item.anonymous ? 'Anonymous' : item.author }}</span>
            <span class="date">{{ item.date }}</span>
          </div>
          <div class="idea-actions">
            <button @click="toggleLike(item.id)" class="like-btn">
              <span>👍</span> {{ item.likes }}
            </button>
            <button @click="showComments(item.id)" class="comment-btn">
              <span>💬</span> {{ item.comments.length }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';

export default defineComponent({
  name: 'IdeaSquare',
  setup() {
    const searchQuery = reactive('');
    const activeTab = reactive('all');
    
    const tabs = [
      { label: 'All', value: 'all' },
      { label: 'Feedback', value: 'feedback' },
      { label: 'Suggestions', value: 'suggestion' }
    ];
    
    const items = reactive([
      {
        id: 1,
        type: 'feedback',
        title: 'Office temperature too cold',
        content: 'The air conditioning is set too low, making it uncomfortable to work.',
        author: 'Jane Smith',
        anonymous: false,
        date: '2023-05-10',
        likes: 5,
        comments: ['I agree!', 'Second floor is better']
      },
      {
        id: 2,
        type: 'suggestion',
        title: 'Monthly team building activities',
        content: 'Suggest organizing monthly team building activities to improve collaboration.',
        author: 'John Doe',
        anonymous: false,
        date: '2023-05-08',
        likes: 12,
        comments: ['Great idea!', 'What kind of activities?']
      }
    ]);
    
    const filteredItems = computed(() => {
      let result = [...items];
      
      // Apply tab filter
      if (activeTab !== 'all') {
        result = result.filter(item => item.type === activeTab);
      }
      
      // Apply search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        result = result.filter(item => 
          item.title.toLowerCase().includes(query) || 
          item.content.toLowerCase().includes(query)
        );
      }
      
      return result;
    });
    
    const handleSearch = () => {
      console.log('Searching for:', searchQuery);
    };
    
    const toggleLike = (id: number) => {
      const item = items.find(item => item.id === id);
      if (item) {
        item.likes += item.liked ? -1 : 1;
        item.liked = !item.liked;
      }
    };
    
    const showComments = (id: number) => {
      console.log('Showing comments for item:', id);
      // TODO: Implement comment display logic
    };
    
    return {
      searchQuery,
      activeTab,
      tabs,
      filteredItems,
      handleSearch,
      toggleLike,
      showComments
    };
  }
});
</script>

<style scoped>
.idea-square {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}
.intro {
  color: #555;
  margin-bottom: 2rem;
}
.controls {
  margin-bottom: 2rem;
}
.search-box {
  display: flex;
  margin-bottom: 1rem;
}
.search-box input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
}
.search-box button {
  padding: 0 1.5rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}
.filter-tabs {
  display: flex;
  gap: 0.5rem;
}
.filter-tabs button {
  padding: 0.5rem 1rem;
  background-color: #f5f5f5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.filter-tabs button.active {
  background-color: #42b983;
  color: white;
}
.idea-list {
  display: grid;
  gap: 1.5rem;
}
.idea-card {
  padding: 1.5rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.idea-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.idea-type {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  text-transform: capitalize;
}
.idea-type.feedback {
  background-color: #ffecec;
  color: #d33;
}
.idea-type.suggestion {
  background-color: #e6f7ff;
  color: #1890ff;
}
.idea-content {
  color: #555;
  margin-bottom: 1.5rem;
}
.idea-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.idea-meta {
  font-size: 0.9rem;
  color: #888;
}
.idea-meta .date {
  margin-left: 1rem;
}
.idea-actions {
  display: flex;
  gap: 1rem;
}
.idea-actions button {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.75rem;
  background-color: #f5f5f5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.idea-actions button:hover {
  background-color: #eee;
}
</style>