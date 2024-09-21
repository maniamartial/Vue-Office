<template>
  <h1>Tells us somethin</h1>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <ol>
      <li v-for="item in data" :key="item.full_name">
        <Item :item="item" />
      </li>
    </ol>
  </div>
  </template>
  
<script>
import Item from "./Item.vue";

export default {
  components: {
    Item,
  },
  data() {
    return {
      data: [],
      error: null,
      loading: true,
    };
  },

  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const OFFICE_API = "https://platform.buildwithhussain.dev/api/method/get-office";
      try {
        const response = await fetch(OFFICE_API);
        if (!response.ok) {
          throw new Error('Network not responding');
        }
        const jsonData = await response.json();
        this.data = jsonData.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
