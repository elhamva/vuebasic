<template>
    <div >
        <h1> please fill our form !</h1>
      <form >
          <div id="form-header">

          </div>
          <slot name='form-header'>

          </slot>
          <div id="form-fields">

          </div>
          <slot name='form-fields'>

          </slot>
          <div id="form-controls">

          </div>
          <slot name='form-controls'>

          </slot>
          <div id="useful-links">

          </div>
          <slot name='useful-links'></slot>
          <ul>
              <li>
                <a href="#">link 1</a>
                <a href="#">link 2</a>
                <a href="#">link 3</a>
                <a href="#">link 4</a>
              </li>
          </ul>
      </form>
    </div>
</template>
<script>
export default {

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
    text-align: center;
}
form{
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
}
#useful-links ul{
    padding: 0;
}
#useful-links li{
    display: inline-block;
    margin-right: 10px;
}
form > div{
    padding: 20px;
    background: #eee;
    margin: 20px 0;
}
#form-header{
    background: #ddd;
    border: 1px solid #bbb;
}
</style>