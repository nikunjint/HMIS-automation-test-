<template>
  <form @submit.prevent="getData">
    <label for="from">From:</label>
    <input type="date" v-model="fromDate" />
    <label for="to">To:</label>
    <input type="date" v-model="toDate" />
    <button type="submit">Search</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      fromDate: '',
      toDate: '',
      data: [],
    };
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get(`http://api.example.com/data`, {
          params: {
            TESTDATE: this.fromDate,
            to: this.toDate,
          },
        });
        this.data = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
