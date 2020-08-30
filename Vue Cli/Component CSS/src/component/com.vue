<template>
  <div >
    <h1>{{ title }}</h1>
   <ul>
       <li v-for="item in items" :key="item">{{ item }}</li>

   </ul>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
    items :['Eli','Armin','Hossi'],
    title:'this is the second Example'
  }
  },
  
 
  }
</script>

<style  scoped>
h1{
  color: blueviolet;
}
</style>
