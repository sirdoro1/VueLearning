import Vue from 'vue'
import App from './App.vue'
import swal from 'sweetalert';
import VueResource from 'vue-resource'

export var bus = new Vue();
Vue.use(VueResource);

//Custom Directives
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = '#' + Math.random().toString().slice(2,8);
  }
});

Vue.directive('back-rainbow',{
  bind(el,binding,vnode){
    el.style.background = '#ddd';
  }
});

//Filters
Vue.filter('to-uppercase',(value)=>{
  return value.toUpperCase();
});

Vue.filter('to-snippet',(value)=>{
  return value.slice(0,100) + ' ...';
});

new Vue({
  el: '#app',
  render: h => h(App)
})
