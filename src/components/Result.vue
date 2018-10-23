<template>
  <div class="kojima">
    <img alt="Genius" src="../assets/kojima.jpg">
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

</style>
