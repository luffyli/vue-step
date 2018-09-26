<template>
  <div id="app">
    <h4>Horizontal</h4>
    <p>style1:</p>
    <vue-step
      :now-step="nowStep"
      :step-list="stepList"
    />
    <p>style2:</p>
    <vue-step
      :now-step="nowStep"
      :step-list="stepList"
      style-type="style2"
    />

    <h4>Vertical</h4>
    <p>style1:</p>
    <vue-step
      class="initHeight"
      :now-step="nowStep"
      :step-list="stepList"
      direction="vertical"
    />
    <p>style2:</p>
    <vue-step
      class="initHeight"
      :now-step="nowStep"
      :step-list="stepList"
      direction="vertical"
      style-type="style2"
    />

    <h4>With @selected event</h4>
    <p>Event issued when an item is selected / clicked</p>
    <vue-step
      :now-step="nowStep"
      :step-list="stepList"
      @selected="item => nowStep = item"
    />
  </div>
</template>

<script>
import VueStep from '../src/vue-step.vue'

export default {
  name: 'app',
  data () {
    return {
      nowStep: 2,
      stepList: [
        'First Step',
        'Second Step',
        'Third Step',
        'Four Step'
      ]
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
