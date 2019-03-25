<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
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
            <a class="nav-link" href="#">
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
              Login
              <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import Subscribe from "./Subscribe";

export default {
  name: "NavBar",
  components: {
    Subscribe
  },
  props: {
    msg: String
  },
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<style scoped>
#NavBar {
  background-color: pink;
}
</style>