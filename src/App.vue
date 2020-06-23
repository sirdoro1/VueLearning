<template>
  <div>
    <app-header v-bind:title="title"></app-header>
    <app-toons v-bind:toons="toons"></app-toons>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import Toons from "./components/Toons.vue"


export default {
  components:{
    'app-header': Header,
    'app-footer': Footer,
    'app-toons': Toons,
  },
  name: 'app',
  data () {
    return {
      title:"Lara-Vue Project",
      toons:[
        {"name":'Boss Baby','show':false,'ability':"Small But Might"},
        {"name":'Avatar','show':false,'ability':"The last air bender"},
        {"name":'Naruto','show':false,'ability':"Fire Stone"},
        {"name":'Power Rangers','show':false,'ability':"Fighting Five"},
      ]
    }
  },
  methods:{
    greeting:function(){
      return "Hello World of VUE";
    },
    updateTitle(title){
      return this.title = title
    }
  }
}
</script>
<style scoped>
  
</style>

