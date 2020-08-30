<template>
  <div >
  
    <com>
     <div slot="form-header">
       <h3>This is the title of the form</h3>
       <p>information about the form</p>
     </div>
      <div slot="form-fields">
     <input type="text" placeholder="name" required/>
     <input type="text" placeholder="password" required/>
     </div>
     <div slot="form-controls">
       <button v-on:click='handelsubmit'>submit</button>

     </div>
    </com>
    
  </div>
</template>

<script>

import com from './component/com'

export default {
  components:{
       com
  },
  name: 'App',
  data(){
    return{
    
  }
  },
  
 methods:{
   
 }
  }
</script>

<style scoped>

  h1{
  color: green;
}
</style>
