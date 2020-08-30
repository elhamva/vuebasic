<template>
  <div >
   <app-header></app-header>
   <com></com>
   <app-footer></app-footer>
    
    
  </div>
</template>

<script>

import com from './component/com.vue'
import Header from './component/Header'
import Footer from './component/Footer'
export default {
  components:{
    'com':com,
    'app-header':Header,
    'app-footer':Footer
  },
  name: 'App',
  data(){
    return{
  
  }
  },
  
 
  }
</script>

<style scoped>

  h1{
  color: green;
}
</style>
