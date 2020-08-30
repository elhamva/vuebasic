<template>
  <div >
      <header>
          <h1>{{ title }}</h1> 
      </header>
    
    
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
    title:'Vue Practice'
  }
  },
  
 
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
