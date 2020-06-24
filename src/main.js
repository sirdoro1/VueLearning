import Vue from 'vue'
import App from './App.vue'
import swal from 'sweetalert';
import VueResource from 'vue-resource'

export var bus = new Vue();
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
