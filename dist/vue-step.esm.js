(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" ul[data-v-3500aeb9], li[data-v-3500aeb9] { margin: 0; padding: 0; list-style-type: none; } .v-step-warp-horizontal[data-v-3500aeb9] { position: relative; padding: 10px 0; z-index: 2; } .v-step-warp-horizontal .v-step-progress-bg[data-v-3500aeb9] { position: absolute; width: 100%; height: 4px; bottom: 22px; background-color: #ddd; } .v-step-warp-horizontal .v-step-progress-value[data-v-3500aeb9] { position: inherit; top: 0; left: 0; height: inherit; } .v-step-list[data-v-3500aeb9] { position: relative; display: -webkit-flex; display: flex; } .v-step-warp-horizontal .v-step-list[data-v-3500aeb9] { justify-content: space-around; text-align: center; } .v-step-item-label[data-v-3500aeb9] { font-size: 12px; color: #666; } .v-step-item-number[data-v-3500aeb9] { width: 18px; height: 18px; line-height: 18px; font-size: 12px; border-radius: 50%; color: #666; background-color: #ddd; } .v-step-warp-horizontal .v-step-item-label[data-v-3500aeb9] { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .v-step-warp-horizontal .v-step-item-number[data-v-3500aeb9] { margin: 5px auto; } .v-step-warp-horizontal.style2 .v-step-progress-bg[data-v-3500aeb9] { height: 2px; bottom: 19px; } .v-step-warp-horizontal.style2 .v-step-item-number[data-v-3500aeb9] { width: 10px; height: 10px; line-height: 10px; } .v-step-warp-vertical[data-v-3500aeb9] { position: relative; padding: 0; z-index: 2; } .v-step-warp-vertical .v-step-progress-bg[data-v-3500aeb9] { position: absolute; width: 4px; height: 100%; top: 0; left: 15px; background-color: #ddd; } .v-step-warp-vertical .v-step-progress-value[data-v-3500aeb9] { position: absolute; top: 0; left: 0; width: inherit; } .v-step-warp-vertical .v-step-list[data-v-3500aeb9] { height: inherit; flex-direction: column; padding-left: 8px; } .v-step-warp-vertical .v-step-item[data-v-3500aeb9] { display: -webkit-flex; display: flex; height: 25%; align-items: center; } .v-step-warp-vertical .v-step-item-number[data-v-3500aeb9] { text-align: center; } .v-step-warp-vertical .v-step-item-label[data-v-3500aeb9] { position: absolute; order: 1; padding-left: 34px; } .v-step-warp-vertical.style2 .v-step-progress-bg[data-v-3500aeb9] { width: 2px; } .v-step-warp-vertical.style2 .v-step-item-number[data-v-3500aeb9] { width: 10px; height: 10px; line-height: 10px; margin-left: 3px; } .v-step-warp-vertical.style2 .v-step-item-label[data-v-3500aeb9] { padding-top: 0; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();














var component = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[("v-step-warp-" + (_vm.direction)), _vm.styleType]},[_c('div',{staticClass:"v-step-progress-bg"},[_c('div',{staticClass:"v-step-progress-value",style:(_vm.progressStyle)})]),_vm._v(" "),_c('ul',{staticClass:"v-step-list"},_vm._l((_vm.stepList),function(label,index){return _c('li',{key:index,staticClass:"v-step-item",style:(_vm.horizontalItemWidth)},[_c('label',{staticClass:"v-step-item-label"},[_vm._v(_vm._s(label))]),_vm._v(" "),_c('div',{staticClass:"v-step-item-number",style:(_vm.itemNumberStyle(index))},[_vm._v(_vm._s(_vm.showItemNumber(index)))])])}))])},staticRenderFns: [],_scopeId: 'data-v-3500aeb9',
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
      default: 'style1'
    },
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  computed: {
    stepItemWidth: function stepItemWidth () {
      return 100 / this.stepList.length
    },
    horizontalItemWidth: function horizontalItemWidth () {
      return this.direction === 'vertical' ? '' : { width: this.stepItemWidth + '%' }
    },
    progressStyle: function progressStyle () {
      var oStyle = {
        'background-color': this.activeColor
      };
      if (this.direction === 'vertical') {
        oStyle.height = this.stepItemWidth * this.nowStep + '%';
      } else {
        oStyle.width = this.stepItemWidth * this.nowStep + '%';
      }
      return oStyle
    }
  },
  methods: {
    itemNumberStyle: function itemNumberStyle (index) {
      var style = '';
      if (index < this.nowStep) {
        style = {
          'background-color': this.activeColor,
          'color': '#fff'
        };
      }
      return style
    },
    showItemNumber: function showItemNumber (index) {
      return this.styleType !== 'style2' ? index + 1 : ''
    }
  }
}

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
	if (install.installed) { return; }
	install.installed = true;
	Vue.component('VueStep', component);
}

// Create module definition for Vue.use()
var plugin = {
	install: install,
};

// To auto-install when vue is found
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default component;
export { install };
