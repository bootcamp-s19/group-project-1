<template>
  <div class="home">
  <Header></Header>
  <AboutUs></AboutUs>
  

   

  </div>
</template>

<script>
    
  import AboutUs from '../components/AboutUs.vue';
  import Header from '../components/Header.vue';




export default {
  name: 'home',
  components: {

    AboutUs,
    Header
    

  }
}
</script>
