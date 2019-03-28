<template>
  <div class="home">
    <Header></Header>
    <AboutUs></AboutUs>
    <Footer></Footer>
  </div>
</template>




<script>
import AboutUs from "../components/AboutUs.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "home",
  components: {
    AboutUs,
    Header,
    Footer
  }
};
</script>
