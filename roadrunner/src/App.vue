<template>
  <div id="app">
    <NavBar></NavBar>
    <AboutUs></AboutUs>

<NavBar></NavBar>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>

  </div>
</template>

<script>

import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";
import AboutUs from "./components/AboutUs.vue";


export default {
  name: "app",
  components: {

    HelloWorld,
    NavBar,
    AboutUs,

  },
  data() {
    return {
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
