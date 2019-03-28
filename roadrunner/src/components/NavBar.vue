<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="navbar fixed-top navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="/img/logo3.png">
      </a>

     

      <b-navbar-toggle target="nav_collapse"/>

 <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-navbar-brand href="#">HOME</b-navbar-brand>
        </b-navbar-nav>


    
        <b-navbar-nav>
          <b-navbar-brand href="#AboutUs">ABOUT US</b-navbar-brand>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <button id="show-modal" @click="showModal = true">SUBSCRIBE</button>
                <Subscribe v-if="showModal" @close="showModal = false"></Subscribe>
                <span class="sr-only">(current)</span>
              </a>
            </li>
          </b-navbar-nav>
          <b-navbar-nav>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <button id="show-modal" @click="showLoginModal = true">LOGIN</button>
                <Login v-if="showLoginModal" @close="showLoginModal = false"></Login>
                <span class="sr-only">(current)</span>
              </a>
            </li>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>

  
</template>


















<script>
import Subscribe from "./Subscribe";
import Login from "./Login";

export default {
  name: "NavBar",
  components: {
    Subscribe,
    Login,
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

