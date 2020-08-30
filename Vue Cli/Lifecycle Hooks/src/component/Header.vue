<template>
  <div >
      <header>
         <h1 v-on:click="changeTitle">{{ titles }}</h1>
         
      </header>
    
    
  </div>
</template>

<script>
import {bus} from '../main'

export default {
  props:{
     titles:{
    type:String
  }
  },
  name: 'App',
  data(){
    return{
    
  }
  },
  methods:{
    changeTitle:function(){
      this.titles='vueWizards'
      bus.$emit('changeTitle' , 'vueWizards')
    }
  }
 
  }
</script>

<style  scoped>
header{
    background-color: darkgrey;
    padding: 10px;
}
h1{
  color: rgb(13, 12, 14);
  text-align: center;
}
</style>
