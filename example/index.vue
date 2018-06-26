<template>
  <div id="app">
    <p>style1:</p>
    <vue-step :now-step="nowStep" :step-list="stepList"></vue-step>
    <p>style2:</p>
    <vue-step :now-step="nowStep" :step-list="stepList" style-type="style2"></vue-step>
    <p>vertical style1</p>
    <vue-step class="initHeight" :now-step="nowStep" :step-list="stepList" direction="vertical"></vue-step>
    <p>vertical style2</p>
    <vue-step class="initHeight" :now-step="nowStep" :step-list="stepList" direction="vertical" style-type="style2"></vue-step>
  </div>
</template>

<script>
import VueStep from '../src/vue-step.vue'

export default {
  name: 'app',
  data () {
    return {
      nowStep: 2,
      stepList: ['First Step', 'Second Step', 'Third Step', 'Four Step']
    }
  },
  components: {
    VueStep
  }
}
</script>

<style>
body {
  margin: 8px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.initHeight {
  height: 180px;
}
</style>
