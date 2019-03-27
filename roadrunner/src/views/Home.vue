<template>
  <div class="home">
  <Header></Header>
  <AboutUs></AboutUs>
<<<<<<< HEAD
    <div class="container">
    <div class="card-deck">
        <carCards v-for="carObj in cars" v-bind:carObj="carObj" :key="carObj.id"></carCards>
    </div>
</div>
  
=======
>>>>>>> a690d7087eb930945b14d04d9b64f2ad3e7547bd

  </div>
</template>

<script>
  import { mapState } from 'vuex';
      
  import AboutUs from '../components/AboutUs.vue';
  import Header from '../components/Header.vue';
<<<<<<< HEAD
  import carCards from '../components/carCards.vue';
=======


>>>>>>> a690d7087eb930945b14d04d9b64f2ad3e7547bd

export default {
  name: 'home',
  components: {
    AboutUs,
    Header,
<<<<<<< HEAD
    carCards,
  },
  data (){
    return {
    }
  },
  methods: {

  },
  computed: mapState({
    cars: state => state.cars
  })
=======

  }
>>>>>>> a690d7087eb930945b14d04d9b64f2ad3e7547bd
}
</script>
