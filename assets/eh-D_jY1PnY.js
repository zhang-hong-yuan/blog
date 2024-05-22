import{_ as i}from"./index-C58PDwY0.js";import{ao as p,o,c as t,a4 as n,q as m,F as s,e as r}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const a={},c=r("h1",null,"在守卫内的全局注入",-1),l=r("p",null,"可以在导航守卫内使用 ‘inject()’ 方法。这在注入像 pinia stores 这样的全局属性时很有用。在 ‘app.provide()’ 中提供的所有内容都可以在 ‘【router.beforeEach()】’、‘【router.beforeResolve()】’、‘【router.afterEach()】’ 内获取到：",-1);function _(u,d){const e=p("code");return o(),t(s,null,[c,l,n((o(),t("pre",null,[m(`// main.ts
const app = createApp(App)
app.provide('global', 'hello injections')

// router.ts or main.ts
router.beforeEach((to, from) => {
  const global = 【inject('global')】 // 'hello injections'
  // a pinia store
  const userStore = 【useUserStore()】
  // ...
})
`)])),[[e,void 0,"js"]])],64)}const O=i(a,[["render",_]]);export{O as default};
