<template>
  <div>
    <h4>{{title}}</h4>
    <div>
        <form action="" class="form">
            <div class="form-row">
                <div class="col-md-12 my-2">
                    <slot name="cont-lg-group" {{class}}></slot>
                </div>
                <div class="col-md-6 mt-3">
                    <slot name="cont-sm-group-a" {{class}}></slot>
                </div>
                <div class="col-md-6 mt-3">
                    <slot name="cont-sm-group-b" {{class}}></slot>
                </div>

                <div class="col-md-12 my-2">
                    <slot name="cont-button-group" {{class}}></slot>
                </div>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
      return {
          title:"VUE Slot Lession"
      }
  },
  methods:{
   
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
