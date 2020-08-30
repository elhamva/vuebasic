<template>
  <div >

<showBlog></showBlog>
<listBlog></listBlog>
    
    
  </div>
</template>

<script>


import ShowBlog from './component/ShowBlog'
import listBlog from './component/listBlog'
export default {
  components:{
   
    ShowBlog,
    listBlog
  },
  

 
  data(){
     return
  }
  }
</script>

<style scoped>
body{
  margin: 0;
  font-family:Arial, Helvetica, sans-serif;
}
</style>