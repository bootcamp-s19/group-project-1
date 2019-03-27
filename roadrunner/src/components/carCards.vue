<template>
    <div class="card">
      <img class="card-img-top shadow pl-1 pr-1" src={{store.state.img}} alt={{store.state.make}}{{store.state.model}}>
      <div class="card-body">
        <h4 class="card-title">{{store.state.model}}</h4>
        <p class="card-text">This is a {{store.state.year}} {{store.state.make}} {{store.state.model}}</p>
        <router-link to="/confirmation" class="btn btn-primary btn-lg">Rent</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'carCards',
  props: {
    img: Image,
    model: String,
    year: Number,
    make: String,
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  background-color: rgb(112, 112, 112);
}
img {
  max-width: 100%;
  height: auto;
  background-color: silver;
}
</style>
