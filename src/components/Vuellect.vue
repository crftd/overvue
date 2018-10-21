<template>
  <div class="wrapper">
    <h1>{{ msg }}</h1>
    <form>
      <input class="image-id" type="text" v-model="result">
    </form>
    <div class="result">{{ result }}</div>
  </div>
</template>

<script>
export default {
  name: 'Vuellect',
  data: () => ({
    result: '',
  }),
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

  .result {
    margin-top: 10px;
    font-size: 24px;
  }
</style>
