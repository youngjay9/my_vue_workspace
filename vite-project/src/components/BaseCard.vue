<template>
    <div class="card">
    <div class="title">{{ title }}</div>
    <div class="content">
      <slot></slot>
      <!-- <slot>
        <p>默认卡片内容</p>
      </slot> -->
    </div>
  </div>
</template>

<script>
    export default {
        props: {
            title:{
                type: String,
                default: '默认标题'
            }
        },  
    }
</script>

<style scoped>
    .card {
        border: 1px solid hsl(250deg, 100%, 80%);
        padding: 20px;
        border-radius: 8px;
    }
    .title {
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 12px;
    }
</style>