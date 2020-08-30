<template>
  <div >
    <h1>{{ title }}</h1>
    <com></com>
    
  </div>
</template>

<script>

import com from './component/com.vue'
export default {
  components:{
    'com':com
  },
  name: 'App',
  data(){
    return{
    title :'this is the first example'
  }
  },
  
 
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
