<template>
  <div >
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
    title :'this is the first example'
  }
  },
  
  methods: {
    greeting:function(){
      return 'Hey everyone :)'
    }
  }
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
