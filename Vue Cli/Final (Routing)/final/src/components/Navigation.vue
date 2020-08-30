<template>
 <div class="navbar">
  <a href="addBlog">ADD Bolg</a>
  <a href="showBlog">Show Blog</a>
  <a href="listBlog">List Blog</a>
</div>


</template>
<style>
.navbar {
  overflow: hidden;
  background-color: rgb(10, 10, 10);
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  left: 0;
}

/* Links inside the navbar */
.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change background on mouse-over */
.navbar a:hover {
  background: #ddd;
  color: black;
}

/* Main content */
.main {
  margin-top: 30px; /* Add a top margin to avoid content overlay */
}
</style>