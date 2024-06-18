<template>
    <article>
      <h2>
        {{ blogPost.title }}
      </h2>
      <p>{{ blogPost.body }}</p>
      <footer>
        <router-link to="/">回到主页</router-link>
        <router-link :to="`/blog/${blogPost.id - 1}`">上一篇</router-link>
        <router-link :to="`/blog/${blogPost.id + 1}`">下一篇</router-link>
      </footer>
    </article>
  </template>
  <script>
  import { getBlogPostById } from "../../data/blogPosts";
  
  export default {
    data() {
      return { blogPost: {} };
    },
    
    watch: {
      // 因為 $route.params 會隨著 router-link 切換, 需用 watch 監控 $route.params參數, 
      // 動態重新撈資料   
      "$route.params": {
        handler(params, oldParams) {
          // 根據 params.postId 取得對應的 blogPost
          this.blogPost = getBlogPostById(params.postId);
        },
        immediate: true,
      },
    },
  };
  </script>
  <style scoped>
  article {
    max-width: 700px;
  }
  
  footer {
    margin-top: 48px;
    display: flex;
    gap: 24px;
  }
  
  footer a {
    background: linear-gradient(
      90deg,
      hsl(240deg, 50%, 50%),
      hsl(280deg, 50%, 50%)
    );
    padding: 0.9em 1.4em;
    border-radius: 4px;
    color: white;
  }
  </style>
  