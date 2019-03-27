<template>
  <div class="home">
    <carCards></carCards>
  </div>
</template>

<script>
// @ is an alias to /src

import carCards from '../components/carCards.vue'

export default {
  name: 'home',
  components: {
    carCards,
  }
}
</script>
