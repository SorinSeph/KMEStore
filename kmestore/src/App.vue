<template>
  <div id="app">
    <!-- <SearchBar /> -->
    <NavBar />
    <router-view />
  </div>
</template>

<script>
// import SearchBar from "./components/search-bar.vue";
import NavBar from "./components/nav-bar.vue";

export default {
  name: "App",
  components: {
    // SearchBar,
    NavBar,
  },
};
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
