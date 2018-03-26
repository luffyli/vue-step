<template>
    <div class="v-step-warp" :class="styleType" ref="step">
        <div class="v-step-progress-bg">
            <div class="v-step-progress-value" :style="progressStyle"></div>
        </div>
        <ul class="v-step-list">
            <li class="v-step-item" v-for="(label, index) in stepList" :key="index" :style="{width: stepItemWidth + '%'}">
                <label class="v-step-item-label">{{ label }}</label>
                <div class="v-step-item-number" :style="[index < nowStep ? itemNumberClass : '']">{{ styleType !== 'style2' ? index + 1 : ''}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "step",
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
      default: "#1fb11d"
    },
    styleType: {
      type: String,
      default: "style1"
    }
  },
  computed: {
    stepItemWidth() {
      return 100 / this.stepList.length
    },
    progressStyle() {
      return {
        width: this.stepItemWidth * 2 + "%",
        "background-color": this.activeColor
      }
    },
    itemNumberClass() {
      return {
        "background-color": this.activeColor,
        color: "#fff"
      }
    }
  }
};
</script>

<style scoped>
.v-step-warp {
  position: relative;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  z-index: 2;
}
.v-step-progress-bg {
  position: absolute;
  width: 100%;
  height: 4px;
  bottom: 22px;
  background-color: #ddd;
}
.v-step-progress-value {
  position: inherit;
  top: 0;
  left: 0;
  height: inherit;
}
.v-step-list {
  position: relative;
  display: -webkit-flex;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
}
.v-step-item-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #666;
}
.v-step-item-number {
  width: 18px;
  height: 18px;
  line-height: 18px;
  margin: 5px auto;
  font-size: 12px;
  border-radius: 50%;
  color: #666;
  background-color: #ddd;
}
.style2 .v-step-progress-bg {
  height: 3px;
  bottom: 18px;
}
.style2 .v-step-item-number {
  width: 10px;
  height: 10px;
  line-height: 10px;
}
</style>