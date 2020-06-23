<template>
    <header>
        <h1>
            {{title}}
        </h1>
    </header>
</template>

<script>
export default {
    props:{
        title:{
            type:String
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