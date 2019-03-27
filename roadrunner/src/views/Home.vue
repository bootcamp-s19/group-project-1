<template>
  <div class="home">
    <carCards></carCards>
  <Header></Header>
  <AboutUs></AboutUs>
  

   

  </div>
</template>

<script>
    
  import AboutUs from '../components/AboutUs.vue';
  import Header from '../components/Header.vue';
  import carCards from '../components/carCards.vue'

export default {
  name: 'home',
  components: {
    carCards,
    AboutUs,
    Header
  }
}
</script>
