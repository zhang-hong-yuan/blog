import{_ as s}from"./index-C58PDwY0.js";import{ao as p,o as e,c as r,a4 as i,q as o,F as m,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},l=t("h1",null,"重置 state",-1),u=t("p",null,[o("使用"),t("em",null,"选项式 API"),o(" 时，可以通过调用 store 的 ‘【$reset()】’ 方法将 state 重置为初始值。")],-1),a=t("p",null,"在 ‘$reset()’ 内部，会调用 ‘state()’ 函数来创建一个新的状态对象，并用它替换当前状态。",-1),_=t("br",null,null,-1),d=t("p",null,[o("在 "),t("em",null,"Setup Stores"),o(" 中，需要自己动手创建 ‘$reset()’ 方法：")],-1);function f(h,v){const n=p("code");return e(),r(m,null,[l,u,i((e(),r("pre",null,[o(`const store = useStore()

store.$reset()
`)])),[[n,void 0,"js"]]),a,_,d,i((e(),r("pre",null,[o(`export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function $reset() {
    【count.value = 0】
  }

  return { count, $reset }
})
`)])),[[n,void 0,"js"]])],64)}const U=s(c,[["render",f]]);export{U as default};
