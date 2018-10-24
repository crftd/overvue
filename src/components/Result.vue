<template>
  <div class="wrapper">
    <div class="kojima" v-show="!counter && !imageUrl">
      <img src="../assets/kojima.jpg" alt="Genius">
    </div>
    <div class="result">
      <img v-if="imageUrl" :src="imageUrl" alt="Archillect">
      <div class="counter" v-if="counter">
        <p>{{ duration }}</p>
        <p class="date">{{ estimatedTimeOfPost.format('MMMM DD YYYY hh:mm:ss') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);


export default {
  name: 'Result',
  data() {
    return {
      duration: '',
      intervalId: '',
    };
  },
  computed: {
    ...mapState(['counter', 'imageUrl']),
    ...mapGetters(['estimatedTimeOfPost']),
  },
  watch: {
    estimatedTimeOfPost() {
      this.updateDuration();
    },
  },
  created() {
    this.intervalId = setInterval(this.updateDuration, 1000);
  },
  destroyed() {
    clearInterval(this.intervalId);
  },
  methods: {
    updateDuration() {
      this.duration = moment.duration(this.estimatedTimeOfPost.diff(moment())).format('M [months] d [days] hh:mm:ss');
    },
  },
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

  .date {
    font-size: 37px;
  }
</style>
