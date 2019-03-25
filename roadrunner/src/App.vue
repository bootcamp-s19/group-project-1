<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data: { cars: [
        {
          make: 'dodge', 
          model: 'viper',
          color: 'red',
          rented: false,
          img: 'image location',
          location: '123 awesome inc way'
        },
        {
          make: 'chevy', 
          model: 'corvette',
          color: 'blue',
          rented: true,
          img: 'image location',
          location: '456 lexington road'},
          ],
          
          users: [
          {
          name: 'name',
          email: 'email address',
          age: 34,
          phone: '895-555-5555',
          password: 'password',
          senior: false,
          },
          {
          name: 'name',
          email: 'email address',
          age: 66,
          phone: '895-555-5555',
          password: 'password',
          senior: true,
          },
         ],
  
  components: {
    HelloWorld
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
