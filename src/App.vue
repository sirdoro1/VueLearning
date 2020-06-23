<template>
  <div>
    <app-header v-bind:title="title" class="mb-3"></app-header>
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="card card-body shadow elevate">
            <app-body>
              <label for="name" slot="cont-lg-group">Fullname</label>
              <input type="text" name="fullname" v-model="fullname" slot="cont-lg-group" class="form-control" placeholder="Fullname">
              <label for="email" slot="cont-sm-group-a">Email</label>
              <input type="email" name="email" v-model="email" slot="cont-sm-group-a" class="form-control" placeholder="Email">
              <label for="username" slot="cont-sm-group-b">Username</label>
              <input type="text" name="username" v-model="username" slot="cont-sm-group-b" class="form-control" placeholder="Username">
              <label for="phone" slot="cont-sm-group-a">Phone</label>
              <input type="text" name="phone" v-model="phone" slot="cont-sm-group-a" class="form-control" placeholder="Phone">
              <label for="github" slot="cont-sm-group-b">Github Id</label>
              <input type="text" name="github" v-model="github" slot="cont-sm-group-b" class="form-control" placeholder="Github Id">
              <input type="submit" value="Submit Form" id="" slot="cont-button-group" class="btn btn-md btn-primary col-md-12 mt-2" v-on:click="submitForm">
            </app-body>
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
      fullname:'',
      email:'',
      username:'',
      phone:'',
      github:'',
    }
  },
  methods:{
    submitForm(){
      alert(
        'Fullname: '+this.fullname+ '\n' +
        'Email: '+this.email + '\n' +
        'Phone: '+this.phone + '\n' +
        'Username: '+this.username+ '\n' +
        'Github: '+this.github
        );
    }

  }
}
</script>
<style scoped>
  
</style>

