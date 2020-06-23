import Vue from 'vue'
import App from './App.vue'

export var bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
