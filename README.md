# vue-step

> 基于Vue.js的移动端步骤导航组件 Mobile Step Navigation Component Based On Vue.js
>
> [DEMO](https://luffyli.github.io/vue-step/) (Please use the mobile device to open the demo)

## Installation

``` bash
npm i vue-step -S
```

## Usage
``` bash
# example
<template>
  <div id="app">
    <Step :now-step="nowStep" :step-list="stepList"></Step>
  </div>
</template>

<script>
import Step from 'vue-step'

export default {
  name: 'app',
  data () {
    return {
      nowStep: 2,
      stepList: ['First Step', 'Second Step', 'Third Step', 'Four Step']
    }
  },
  components: {
    Step
  }
}
</script>
```
## API

| Param     | Description       | Type     | Default |
| --------- | ----------------- | -------- | ------- |
| now-step  | The current step, The starting value is 1.  | `Number` | -       |
| step-list | Name of all steps | `Array`  | -       |
| active-color | Active status color | `String`  | '#1fb11d'       |
| style-type | You can set 'style1' or 'style2' | `String`  | 'style1'       |
| direction | You can set 'horizontal' or 'vertical' | `String`  | 'horizontal'       |

## Demo Screenshot

![Demo Screenshot](./screenshot/demo.png)

## License
MIT