<template>
  <div>
    <h4>{{title}}</h4>
    <div>
        <form action="" class="form" @submit.prevent="submitForm">
            <div class="form-row">
                <div class="col-md-12 my-2">
                    <label for="title">Title</label>
              <input type="text" name="title" v-model.lazy="blog.title" class="form-control" placeholder="Title">
              <label for="content" slot="cont-sm-group-a">Content</label>
              <textarea name="content" v-model.lazy="blog.content" cols="3" class="form-control" placeholder="Content"></textarea>
                </div>
                <div class="col-md-12">
                    <h2>Preview</h2>
                    <div>
                        <p>Title: {{blog.title}}</p>
                        <p>Content: </p>
                        <p class="ml-4">{{blog.content}}</p>
                    </div>
                </div>
                <div class="col-md-12 my-2">
                    <input type="submit" value="Submit Form" class="btn btn-md btn-primary col-md-12 mt-2">
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
          },
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
ul{
  display: flex;
  max-width: 1200px;
  margin: 40px auto;
  box-sizing: border-box;
  list-style-type: none;
}
li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border:1px solid #222;
  margin: 10px;
}

</style>
