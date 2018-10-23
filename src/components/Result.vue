<template>
  <div class="wrapper">
    <div class="kojima" v-show="!counter && !imageUrl">
      <img src="../assets/kojima.jpg" alt="Genius">
    </div>
    <div class="result">
      <img v-if="imageUrl" :src="imageUrl" alt="Archillect">
      <div class="counter" v-if="counter">
        <p>10 Days 12:05:14</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
  name: 'Result',
  computed: mapState(['counter', 'imageUrl']),
};
</script>

<style scoped>
  .result {
    max-height: 400px;

    & > img {
      height: 400px;
      width: auto;
    }
  }

  .counter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 400px;

    font-size: 60px;
  }
</style>
