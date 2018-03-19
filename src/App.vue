<template>
  <div id="app">
    <Step :now-step="2" :stepList="stepList"></Step>
  </div>
</template>

<script>
import Step from "./components/Step.vue"

export default {
  name: "app",
  data() {
    return {
      stepList: ['填写申请表', '上传资料', '客户信息确认', '完成']
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
