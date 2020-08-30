<template>
<div class="navbar">
    <nav>
        <ul>
            <li><router-link to="/" exact>Blog</router-link></li>
            <li><router-link to="/add" exact>Add a new blog</router-link></li>
        </ul>
    </nav>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar {
  padding: 10px 0;
  background-color: rgb(10, 10, 10);
  position: fixed; 
  top: 0; 
  width: 100%; 
 
}
ul{
    list-style-type: none;
    text-align: left;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}

.router-link-active{
    background: #eee;
    color: rgb(7, 68, 109);
}
</style>