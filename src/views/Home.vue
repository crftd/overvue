<template>
  <div class="home">
    <Result/>
    <Vuellect msg="Vuellect"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Vuellect from '@/components/Vuellect.vue';
import Result from '@/components/Result.vue';

export default {
  name: 'home',
  components: {
    Vuellect,
    Result,
  },
};
</script>

<style>
  .home {
    font-family: Quicksand;
  }
</style>
