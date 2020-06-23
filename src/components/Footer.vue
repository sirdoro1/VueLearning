<template>
    <footer>
        <p >
            {{copyright}} {{title}}
        </p>
    </footer>
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
            copyright: "Lara-Vue 2020",
        }        
    },
    methods:{
        
    },
    created(){
        bus.$on('titleChange',(data)=>{
                this.title = data
        });
    }
}
</script>
<style scoped>
    footer{
        background-color: #222;
        padding: 6px;
        text-align:center;
    }
    p{
        color:lightgreen;
    }
</style>