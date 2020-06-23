<template>
    <header>
        <h1 v-on:click="changeTitle">
            {{title}}
        </h1>
    </header>
</template>

<script>
import {bus} from "../main"
export default {
    props:{
        title:{
            type:String
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
       changeTitle:function(){
            this.title = 'Changed Title by Bus';
            bus.$emit('titleChange','Changed Title by Bus');
        }
    },
    
}
</script>

<style scoped>
    header{
        background-color:limegreen;
        text-align:center;
        padding: 10px;
    }
    h1{
        color: #222;
    }
</style>