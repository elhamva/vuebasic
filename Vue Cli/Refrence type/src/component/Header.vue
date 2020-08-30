<template>
  <div >
      <header>
         <h1 v-on:click="changetitles">{{ titles }}</h1>
         
      </header>
    
    
  </div>
</template>

<script>


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
    changetitles:function(){
      this.titles='This is the new one'
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
