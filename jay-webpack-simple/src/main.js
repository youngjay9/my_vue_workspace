import Vue from 'vue'
import JayApp from './JayApp.vue'



new Vue({
  el: '#jay_app', // index.html div='jay_app'
  render: h => h(JayApp) // 將此區塊內容由 JayApp.vue 呈現
})
