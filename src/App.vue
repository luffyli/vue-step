<template>
  <div id="app">
    <Step :now-step="2" :step-list="stepList"></Step>
  </div>
</template>

<script>
import Step from "./components/Step.vue"

export default {
  name: "app",
  data() {
    return {
      stepList: ['First Step', 'Second Step', 'Third Step', 'Four Step']
    };
  },
  components: {
    Step
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
