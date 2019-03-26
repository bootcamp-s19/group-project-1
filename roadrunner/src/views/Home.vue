<template>
  <div class="home">
  <AboutUs></AboutUs>
  <Header></Header>

   

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
