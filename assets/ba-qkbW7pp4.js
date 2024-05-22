import{_ as s}from"./index-C58PDwY0.js";import{ao as p,o,c as n,a4 as i,q as e,F as u,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},l=t("h1",null,"定义 Store",-1),d=t("p",null,"store 可以定义任意多个，但为了让使用 pinia 的益处最大化(比如允许构建工具自动进行代码分割以及 TypeScript 推断)，应该【在不同的文件中】去定义 store。",-1),m=t("p",null,[e("在深入研究核心概念之前，我们得知道 Store 是用 ‘【defineStore()】’ 定义的，它的第一个参数要求是一个"),t("em",null,"【独一无二】"),e("的名字。这个"),t("strong",null,"名字"),e(" ，也被用作 id ，是必须传入的， Pinia 将用它来连接 【store】 和 devtools。")],-1),a=t("p",null,"对 ‘defineStore()’ 的返回值可以进行任意命名。为了养成习惯性的用法，最好使用 store 的名字，同时以 ‘【a;;use】’ 开头且以 ‘【a;;Store】’ 结尾，比如 ‘useUserStore’、‘useCartStore’、‘useProductStore’。",-1),_=t("p",null,"‘defineStore()’ 的第二个参数可接受两类值：【Setup 函数】或 Option 对象。",-1),S=t("h3",null,"Setup Store",-1),f=t("p",null,"与 Vue 组合式 API 的 ‘setup()’ 函数相似，‘defineStore()’ 的第二个参数可以传入一个函数，该函数定义了一些响应式属性和方法，并且返回一个带有想暴露出去的属性和方法的对象。在 Setup Store 中：",-1),h=t("ul",null,[t("li",null,"‘ref()’ 就是 【state】 属性"),t("li",null,"‘computed()’ 就是 【getters】"),t("li",null,"‘function()’ 就是 【actions】")],-1),v=t("p",null,"Setup store 比 Option Store 带来了更多的灵活性，因为可以在一个 store 内创建侦听器，并自由地使用任何组合式函数。",-1),P=t("p",null,"Setup store 也可以依赖于全局提供的属性，比如路由。任何应用层面提供的属性都可以在 store 中使用 ‘【inject()】’ 访问，就像在组件中一样：",-1),j=t("section",{class:"warning"},[t("header",null,"WARNING"),t("p",null,"不要返回像 ‘route’ 或 ‘appProvided’ 之类的属性，因为它们不属于 store，而且在组件中可以直接用 ‘useRoute()’ 和 ‘inject('appProvided')’ 访问。")],-1),x=t("h3",null,"Option Store",-1),g=t("p",null,"与 Vue 的选项式 API 类似，可以传入一个带有 state、actions 与 getters 属性的 Option 对象。",-1),C=t("p",null,"可以认为 ‘state’ 是 store 的数据 ‘data’，‘getters’ 是 store 的计算属性 ‘computed’，而 ‘actions’ 则是方法 ‘methods’。",-1);function b(A,N){const r=p("code");return o(),n(u,null,[l,d,m,i((o(),n("pre",null,[e(`import { defineStore } from 'pinia'

export const useAlertsStore = defineStore('alerts', {
  // 其他配置...
})
`)])),[[r,void 0,"js"]]),a,_,S,f,h,i((o(),n("pre",null,[e(`import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(1)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
`)])),[[r,void 0,"js"]]),v,P,i((o(),n("pre",null,[e(`import { inject } from 'vue'
import { useRoute } from 'vue-router'

export const useSearchFilters = defineStore('search-filters', () => {
  const route = useRoute()
  // 这里假定 \`app.provide('appProvided', 'value')\` 已经调用过
  const appProvided = inject('appProvided')

  // ...

  return { ... }
})
`)])),[[r,void 0,"js"]]),j,x,g,i((o(),n("pre",null,[e(`export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 1 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() { this.count++ },
  },
})
`)])),[[r,void 0,"js"]]),C],64)}const rt=s(c,[["render",b]]);export{rt as default};
