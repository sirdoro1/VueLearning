<template>
  <div>
    <app-header v-bind:title="title" class="mb-3"></app-header>
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="card card-body shadow elevate">
            <app-body></app-body>
          </div>
        </div>
      </div>
    <app-footer v-bind:title="title" class="mt-3"></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import Body from "./components/Body.vue"


export default {
  components:{
    'app-header': Header,
    'app-footer': Footer,
    'app-body': Body,
  },
  name: 'app',
  data () {
    return {
      title:"Lara-Vue Project",
    }
  },
  methods:{

  }
}
</script>
<style scoped>
  
</style>

