<template>
    <div class="card">
      <img class="card-img-top shadow pl-1 pr-1" src="/img/2016NissanGT-R.png" alt="Nissan Skyline">
      <div class="card-body">
        <h4 class="card-title">GT-R</h4>
        <p class="card-text">This is a 2016 Nissan GT-R</p>
        <a href="#" class="btn btn-primary btn-lg">Rent</a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'carCards',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  background-color: ;
}
img {
  max-width: 100%;
  height: auto;
  background-color: silver;
}
</style>
