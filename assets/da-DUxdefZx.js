import{_ as i}from"./index-C58PDwY0.js";import{ao as u,o,c as r,a4 as s,q as t,F as p,e}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m={},c=e("h1",null,"Getter",-1),l=e("p",null,[t("Getter 完全等同于 store 的 【state】 的计算属性。可以通过 ‘defineStore()’ 中的 getters 属性来定义它们。"),e("em",null,"推荐"),t("使用【箭头】函数，并且它将接收 【state】 作为第一个参数： ")],-1),a=e("p",null,[t("大多数时候，getter 仅依赖 state，不过，有时它们也可能会"),e("em",null,"使用【其他 getter】"),t("。因此，即使在使用常规函数定义 getter 时，也可以通过 this 访问到整个 store 实例。")],-1),d=e("p",null,"作为 store 的一个属性，可以直接访问任何 getter(与 state 属性完全一样)：",-1),_=e("div",null,`<script setup>
import { useCounterStore } from './counterStore'

const store = useCounterStore()
store.count = 3
store.doubleCount // 6
<\/script>

<template>
  <p>Double count is {{ 【store.doubleCount】 }}</p>
</template>`,-1);function f(h,C){const n=u("code");return o(),r(p,null,[c,l,s((o(),r("pre",null,[t(`export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
})
`)])),[[n,void 0,"js"]]),a,s((o(),r("pre",null,[t(`export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    // 等价于：
    // doubleCount: (state) => state.count * 2,
    doubleCount(state) {
      return state.count * 2
    },
    // 返回类型**必须**明确设置
    doublePlusOne(): number {
      // 整个 store 的 自动补全和类型标注 ✨
      return this.doubleCount + 1
    },
  },
})
`)])),[[n,void 0,"js"]]),d,s((o(),r("pre",null,[t(""),_,t(`
`)])),[[n,void 0,"html"]])],64)}const W=i(m,[["render",f]]);export{W as default};
