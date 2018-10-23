<template>
  <div class="wrapper">
    <h1 class="title">{{ msg }}</h1>
    <form @submit.prevent="submit()">
      <input class="image-id" type="text" v-model="result">
      <button class="button">Get inspired</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Vuellect',
  data: () => ({
    result: '',
  }),
  methods: {
    submit() {
      console.log(this.result);
    },
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
  .wrapper {
    max-width: 600px;
    margin: 0 auto;
  }

  .image-id {
    width: 100%;
    height: 40pt;

    font-family: Arvo;
    font-size: 27pt;
    text-align: center;
  }

  .title {
    font-family: Arvo;
    font-size: 27pt;
  }

  .button {
    margin-top: 50px;
    width: 400px;
    height: 68px;
    font-weight: 400;
    font-family: Quicksand;

    color: #fff;
    border: none;
    border-radius: 40px;
    background-color: #42b983;
    font-size: 27pt;
  }
</style>
