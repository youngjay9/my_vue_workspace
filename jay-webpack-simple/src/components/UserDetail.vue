<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name:{{myName}}</p>
    </div>
</template>

<script>
    export default{
        // 接收來自 parent component: User 的參數
        props:['myName'] 
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>