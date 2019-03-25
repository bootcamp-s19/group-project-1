<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <button id="show-modal" @click="showModal = true">Suscribe</button>
    <Suscribe v-if="showModal" @close="showModal = false"></Suscribe>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Suscribe from "./components/Suscribe";

export default {
  name: "app",
  components: {
    HelloWorld,
    Suscribe
  },
  data() {
    return {
      showModal: false,
      cars: [
        {
          make: "dodge",
          model: "viper",
          color: "red",
          rented: false,
          img: "image location",
          location: "123 awesome inc way"
        },
        {
          make: "chevy",
          model: "corvette",
          color: "blue",
          rented: true,
          img: "image location",
          location: "456 lexington road"
        }
      ],
      users: [
        {
          name: "name",
          email: "email address",
          age: 34,
          phone: "895-555-5555",
          password: "password",
          senior: false
        },
        {
          name: "name",
          email: "email address",
          age: 66,
          phone: "895-555-5555",
          password: "password",
          senior: true
        }
      ]
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
