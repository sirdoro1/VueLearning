<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
        <li v-for="(toon,index) in toons" @click="show(toon)" v-bind:key="index">
          <h2 >{{toon.name}}</h2>
          <h4 v-show="toon.show">{{toon.ability}}</h4>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    toons:{
      type:Array,
      required:true,
    }
  },
  name: 'app',
  data () {
    return {
      title: "List of Cartoons watched",
    }
  },
  methods:{
    show(toon){
      return toon.show = !toon.show;
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
