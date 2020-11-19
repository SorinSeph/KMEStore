<template>
  <div>
    <ul class="nav">
      <li><SearchBar /></li>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/admin">Admin</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li></li>
    </ul>
    <ShoppingCart />
  </div>
</template>

<script src="./nav-bar.js"></script>

<style scoped>
.nav {
  border-width: 1px 0;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: dimgray;
}
.nav li {
  display: inline;
}
.nav a {
  display: inline-block;
  text-decoration: none;
  padding: 10px;
}
</style>

