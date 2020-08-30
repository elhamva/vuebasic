<template>
  <div >
      <footer>
          <h1>{{ copyright }} </h1>
      </footer>
    
  
    
  </div>
</template>

<script>


export default {
  name: 'App',
   props:{
     titles:{
    type:String
  }
  },
  data(){
    return{
   
    copyright:'copyright 2020 Vue Elham'
  }
  },
  
 
  }
</script>

<style  scoped>
footer{
  background-color:gray;
}
h1{
    color: black;
    text-align: center;
}
</style>
