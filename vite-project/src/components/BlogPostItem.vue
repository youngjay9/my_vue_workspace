<template>
    <div>
      <a :href="link">{{ title }}</a>
      <!-- 按下 button 會傳送給父組件 event: deletePost, 並傳送 id 參數 -->
      <button @click="$emit('deletePost', id)">呼叫父組件删除{{ id }}</button>
    </div>
  </template>
  <script>
  export default {
    props: ["id", "link", "title"],
    emits: ["deletePost"], // 這裡定義一個名為 deletePost 傳送給父組件的 event
  };
  </script>
  <style scoped>
  div {
    margin-bottom: 1em;
  }
  
  button {
    border: none;
    background: linear-gradient(
      90deg,
      hsl(240deg, 50%, 50%),
      hsl(280deg, 50%, 50%)
    );
    padding: 3px 4px;
    margin-left: 12px;
    border-radius: 4px;
    color: white;
  }
  </style>
  