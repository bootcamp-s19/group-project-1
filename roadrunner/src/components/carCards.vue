<template>
    <div class="card">
      <img class="card-img-top" src="holder.js/100x180/" alt="">
      <div class="card-body">
        <h4 class="card-title">Car Name</h4>
        <p class="card-text">Car info</p>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
