<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <a class="navbar-brand" href="#">
        <img src="/img/RoadRunner.png">
      </a>

     

      <b-navbar-toggle target="nav_collapse"/>

 <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-navbar-brand href="#">Home</b-navbar-brand>
        </b-navbar-nav>


    
        <b-navbar-nav>
          <b-navbar-brand href="#AboutUs">About Us</b-navbar-brand>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <button id="show-modal" @click="showModal = true">Subscribe</button>
                <Subscribe v-if="showModal" @close="showModal = false"></Subscribe>
                <span class="sr-only">(current)</span>
              </a>
            </li>
          </b-navbar-nav>
          <b-navbar-nav>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <button id="show-modal" @click="showLoginModal = true">Login</button>
                <Login v-if="showLoginModal" @close="showLoginModal = false"></Login>
                <span class="sr-only">(current)</span>
              </a>
            </li>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>

  <!-- <div>
    <nav class="navbar navbar-expand-sm navbar-light bg-light navbar-collapse">
      <a class="navbar-brand" href="#">
        <img src="/img/RoadRunner.png">
      </a>

      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>


      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#AboutUs">
              About Us
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <button id="show-modal" @click="showModal = true">Subscribe</button>
              <Subscribe v-if="showModal" @close="showModal = false"></Subscribe>
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <button id="show-modal" @click="showLoginModal = true">Login</button>
              <Login v-if="showLoginModal" @close="showLoginModal = false"></Login>
              <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>-->
</template>


<script>
import Subscribe from "./Subscribe";
import Login from "./Login";

export default {
  name: "NavBar",
  components: {
    Subscribe,
    Login
  },
  props: {
    msg: String
  },
  data() {
    return {
      showModal: false,
      showLoginModal: false
    };
  }
};
</script>

<style scoped>
#NavBar {
  background-color: pink;
}
</style>