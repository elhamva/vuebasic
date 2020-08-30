<template>
  <div id="app">
     <b-container>
    <b-row>
      <b-col>
     <Navigation></Navigation>
          </b-col>
    </b-row>
  </b-container>
   
   <b-container>
    <b-row>
      <b-col>
    <router-view/>
      </b-col>
    </b-row>
  </b-container>
     <b-container>
    <b-row>
      <b-col>
     <Footer></Footer>
      </b-col>
    </b-row>
  </b-container>
   
  </div>
</template>

<script>
import Navigation from './components/Navigation'

import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    'Navigation': Navigation,
    'Footer': Footer,
   

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>