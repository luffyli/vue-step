<template>
  <div :class="[`v-step-warp-${direction}`, styleType]">
    <div class="v-step-progress-bg">
      <div
        class="v-step-progress-value"
        :style="progressStyle"
      >
      </div>
    </div>
    <ul class="v-step-list">
      <li
        v-for="(label, index) in stepList"
        :key="index"
        class="v-step-item"
        :style="horizontalItemWidth"
        @click="selectItem(index)"
      >
        <label class="v-step-item-label">
          {{ label }}
        </label>
        <div
          class="v-step-item-number"
          :style="itemNumberStyle(index)"
        >
          {{ showItemNumber(index) }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vue-step',
  props: {
    nowStep: {
      type: Number,
      required: true
    },
    stepList: {
      type: Array,
      required: true
    },
    activeColor: {
      type: String,
      default: '#1fb11d'
    },
    styleType: {
      type: String,
      default: 'style1',
      validator: (value) => {
        return ['style1', 'style2'].indexOf(value) !== -1
      }
    },
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  computed: {
    stepItemWidth () {
      return 100 / this.stepList.length
    },
    horizontalItemWidth () {
      return this.direction === 'vertical'
        ? ''
        : { width: this.stepItemWidth + '%' }
    },
    progressStyle () {
      let oStyle = {
        'background-color': this.activeColor
      }
      if (this.direction === 'vertical') {
        oStyle.height = this.stepItemWidth * this.nowStep + '%'
      } else {
        oStyle.width = this.stepItemWidth * this.nowStep + '%'
      }
      return oStyle
    }
  },
  methods: {
    itemNumberStyle (index) {
      let style = ''
      if (index < this.nowStep) {
        style = {
          'background-color': this.activeColor,
          'color': '#fff'
        }
      }
      return style
    },
    showItemNumber (index) {
      return this.styleType !== 'style2' ? index + 1 : ''
    },
    selectItem (itemIndex) {
      this.$emit('selected', this.showItemNumber(itemIndex))
    }
  }
}
</script>

<style scoped>
.v-step-warp-horizontal {
  position: relative;
  padding: 10px 0;
  z-index: 2;
}
.v-step-warp-horizontal .v-step-progress-bg {
  position: absolute;
  width: 100%;
  height: 4px;
  bottom: 22px;
  background-color: #ddd;
}
.v-step-warp-horizontal .v-step-progress-value {
  position: inherit;
  top: 0;
  left: 0;
  height: inherit;
}
.v-step-list {
  position: relative;
  display: -webkit-flex;
  display: flex;
  cursor: pointer;
  user-select: none;
}
.v-step-list,
.v-step-item {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.v-step-warp-horizontal .v-step-list {
  justify-content: space-around;
  text-align: center;
}
.v-step-item-label {
  font-size: 12px;
  color: #666;
}
.v-step-item-number {
  width: 18px;
  height: 18px;
  line-height: 18px;
  font-size: 12px;
  border-radius: 50%;
  color: #666;
  background-color: #ddd;
}
.v-step-warp-horizontal .v-step-item-label {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.v-step-warp-horizontal .v-step-item-number {
  margin: 5px auto;
}
.v-step-warp-horizontal.style2 .v-step-progress-bg {
  height: 2px;
  bottom: 19px;
}
.v-step-warp-horizontal.style2 .v-step-item-number {
  width: 10px;
  height: 10px;
  line-height: 10px;
}

.v-step-warp-vertical {
  position: relative;
  padding: 0;
  z-index: 2;
}
.v-step-warp-vertical .v-step-progress-bg {
  position: absolute;
  width: 4px;
  height: 100%;
  top: 0;
  left: 15px;
  background-color: #ddd;
}
.v-step-warp-vertical .v-step-progress-value {
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
}
.v-step-warp-vertical .v-step-list {
  height: inherit;
  flex-direction: column;
  padding-left: 8px;
}
.v-step-warp-vertical .v-step-item {
  display: -webkit-flex;
  display: flex;
  height: 25%;
  align-items: center;
}
.v-step-warp-vertical .v-step-item-number {
  text-align: center;
}
.v-step-warp-vertical .v-step-item-label {
  position: absolute;
  order: 1;
  padding-left: 34px;
}
.v-step-warp-vertical.style2 .v-step-progress-bg {
  width: 2px;
}
.v-step-warp-vertical.style2 .v-step-item-number {
  width: 10px;
  height: 10px;
  line-height: 10px;
  margin-left: 3px;
}
.v-step-warp-vertical.style2 .v-step-item-label {
  padding-top: 0;
}
</style>
