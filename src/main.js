import Vue from 'vue'
import App from './App.vue'
import swal from 'sweetalert';


export var bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
