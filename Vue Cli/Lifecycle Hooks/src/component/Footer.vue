<template>
    <footer>
        <p>Copyright 2017 {{ titles }}</p>
    </footer>
</template>
<script>
import {bus} from '../main'
export default {
    props: {
      titles: {
        type: String,
        required: true
      }
    },
    data(){
        return{
        }
    },
    created(){
        bus.$on('changeTitle',(data)=>{
            this.titles=data;
        })
    }
}
</script>
<style scoped>
footer{
    background: gray;
    padding: 6px;
}
p{
        color:black;
        text-align: center;
}
</style>

  