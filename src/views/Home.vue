<template>
  <div class="home">
    <img alt="Genius" src="../assets/kojima.jpg">
    <Vuellect msg="Vuellect"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Vuellect from '@/components/Vuellect.vue';

export default {
  name: 'home',
  components: {
    Vuellect,
  },
};
</script>

<style>
  .home {
    font-family: Quicksand;
  }
</style>
