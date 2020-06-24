<template>
  <div>
    <h4>{{title}}</h4>
    <div>
        <form class="form">
            <div class="form-row">
                <div class="col-md-12 my-2">
                    <label for="title">Title</label>
                    <input type="text" name="title" v-model.lazy="blog.title" class="form-control" placeholder="Title">
                    <label for="content" slot="cont-sm-group-a">Content</label>
                    <textarea name="content" v-model.lazy="blog.content" cols="3" class="form-control" placeholder="Content"></textarea>
                </div>
                <div class="col-md-12">
                    <h6>Categories</h6>
                    <label for="adventure" class="d-inline-block mr-2">Adventure</label>
                    <input type="checkbox" name="adventure" value="Adventure" v-model="blog.categories" class="d-inline-block mr-2" id="">
                    <label for="" class="d-inline-block mr-2">Best Selling</label>
                    <input type="checkbox" name="best-selling" value="Best-Selling" v-model="blog.categories" class="d-inline-block mr-2" id="">
                    <label for="" class="d-inline-block mr-2">Comic</label>
                    <input type="checkbox" name="comic" value="Comic" v-model="blog.categories" class="d-inline-block mr-2" id="">
                </div>
                <div class="col-md-12">
                    <h6>Authors</h6>
                    <select name="" v-model="blog.author" id="">
                      <option v-for="(author,index) in authors" :key="index">{{author}}</option>
                    </select>
                </div>
                <div class="col-md-12">
                    <h2>Preview</h2>
                    <div>
                        <p>Title: {{blog.title}}</p>
                        <p>Content: </p>
                        <p class="ml-4">{{blog.content}}</p>
                        <p> Category</p>
                        <ul>
                          <li v-for="(category,index) in blog.categories" v-bind:key="index" class=""> {{category}}</li>
                        </ul>
                        <p> Author: {{blog.author}}</p>
                    </div>
                </div>
                <div class="col-md-12 my-2">
                    <button type="button" v-on:click.prevent="submitForm" class="btn btn-md btn-primary col-md-12 mt-2">Submit Form</button>
                </div>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert';
export default {
  name: 'app',
  data(){
      return {
          blog:{
              title:'',
              content:'',
              categories:[],
              author:"",
          },
          authors:['Dave Doro','John Doe','David Eke'],
          title:"VUE Form Lession"
      }
  },
  methods:{
    submitForm(){
      swal({
            title: this.blog.title,
            text: this.blog.content
        });
    }
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
