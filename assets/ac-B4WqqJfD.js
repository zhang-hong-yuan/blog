import{_ as i}from"./index-C58PDwY0.js";import{ao as c,o,c as r,a4 as n,q as p,F as m,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const s={},u=t("h1",null,"基础示例",-1),a=t("p",null,"下面就是 pinia API 的基本用法。先使用一个函数 (与组件 ‘setup()’ 类似) 来创建一个 Store：",-1),l=t("p",null,"然后就可以在一个组件中使用该 store 了：",-1),_=t("div",null,`<script setup>
import { useCounterStore } from '@/stores/counter'
const counter = 【useCounterStore()】

counter.count++
counter.$patch({ count: counter.count + 1 })

// 或使用 action 代替
counter.increment()
<\/script>

<template>
  <!-- 直接从 store 中访问 state -->
  <div>Current Count: {{ 【counter.count】 }}</div>
</template>
`,-1),d=[_];function f(v,h){const e=c("code");return o(),r(m,null,[u,a,n((o(),r("pre",null,[p(`import { ref } from 'vue'
import { 【a;;defineStore】 } from 'pinia'

export const useCounterStore = 【a;;defineStore】('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})
`)])),[[e,void 0,"js"]]),l,n((o(),r("pre",null,d)),[[e,void 0,"html"]])],64)}const U=i(s,[["render",f]]);export{U as default};
