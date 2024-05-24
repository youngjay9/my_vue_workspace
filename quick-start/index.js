const playList = {
    data() {
        return {
            blogList:["Vue 3,0 入門實踐", "Vuex 4.0 入門實踐", "Vue Router 4.0 入門實踐", "React 實戰教學", "Node.js 後端開發", "MongoDB 後端開發", "Deno 後端開發", "Nuxt.js 入門實踐", "Angular 11 入門實踐", "TypeScript 入門實踐"],

        };
    },
    
    computed: {
        filteredBlogList(){
            // filter the blog list includ Vue
            return this.blogList.filter((blog) => blog.includes("Vue"));
        }
    },

    methods: {  
        
    
    },

    watch:{
        
    }

     
};

Vue.createApp(playList).mount('#app');