<template>
  <div >
   <app-header v-bind:titles="titles" ></app-header>
   <com v-bind:items="items"></com>
   <hr>
   <com v-bind:items="items"></com>
   <app-footer v-bind:titles="titles"></app-footer>
    
    
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
     items: [
                {name: 'Eli', speciality: 'Vue Components', show: false},
                {name: 'Armin', speciality: 'HTML Wizardry', show: false},
                {name: 'Hossi', speciality: 'Click Events', show: false},
                {name: 'Tamarin', speciality: 'Conditionals', show: false},
                {name: 'Sama', speciality: 'Webpack', show: false},
                {name: 'Yossef', speciality: 'Data Diggin', show: false}
            ],
            titles:'Vue Elham'
  }
  },
  
 
  }
</script>

<style scoped>

  h1{
  color: green;
}
</style>
