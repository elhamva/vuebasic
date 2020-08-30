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

<style scoped>

  h1{
  color: green;
}
</style>
