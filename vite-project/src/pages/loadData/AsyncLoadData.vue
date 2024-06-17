<template>
    <div>
        <h1>Data Page</h1>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error }}</div>
        <div v-else>
            <ul>
                <li v-for="item in data" :key="item.id">{{ item.title }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AsyncLoadData',

    data() {
        return {
            loading: true,
            error: null,
            data: [],
        };
    },

    created() {
        this.loadData();
    },

    methods: {
        async loadData() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                
                await new Promise(resolve => setTimeout(resolve, 5000));
                
                this.data = response.data;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
    },
}
</script>

<style scoped>

</style>
