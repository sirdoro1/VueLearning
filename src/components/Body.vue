<template>
  <div>
    <h4>{{title}}</h4>
    <div >
      <div v-back-rainbow v-for="(blog,index) in blogs" v-bind:key="index" class=" card card-body my-2">
         <h4 v-rainbow>
           {{blog.title | to-uppercase}}
         </h4>
         <p>
           {{blog.body | to-snippet}}
         </p>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert';
export default {
  name: 'app',
  data(){
      return {
          title:"VUE HTTP-GET Request",
          blogs:[],
      }
  },
  methods:{
    
  },
  created(){
     this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then((data)=>{
          this.blogs = data.body.slice(0,10)
      },(error)=>{
        console.log(error)
      });
  }
}
</script>

<style scoped>
div h1 {
  text-align:center
}
h1{
    color:#222;
}


</style>
