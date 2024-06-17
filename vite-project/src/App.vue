
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/loadData">加載數據</router-link> |
    <router-link to="/about">About</router-link> |
  </nav>
  <h2>下方是 router view</h2>
  <router-view></router-view>
</template>

<script>
  
  export default {
    name: 'App',
    
    components: {
     
    },   
  };
</script>
<style>
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
  background-color: #0f141c;
  opacity: 1;
  background-image: radial-gradient(
    #212943 0.6000000000000001px,
    #0f141c 0.6000000000000001px
  );
  background-size: 12px 12px;
  color: white;
}

#app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

input,
select {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
}

button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 1em 2em;
  margin-top: 24px;
  border-radius: 4px;
  color: white;
}
</style>
