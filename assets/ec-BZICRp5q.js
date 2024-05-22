import{_ as n}from"./index-C58PDwY0.js";import{ao as m,o as e,c as t,a4 as s,q as o,F as p,e as r}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const a={},c=r("h1",null,"全局解析守卫",-1),l=r("p",null,[o("可以用 ‘router.【beforeResolve】’ 注册一个全局守卫。这和 ‘router.beforeEach’ 类似，因为它在"),r("strong",null,"每次导航"),o("时都会触发，不同的是，解析守卫刚好会在导航被确认之前、"),r("strong",null,"所有组件内守卫和异步路由组件被解析之后"),o("调用。这里有一个例子，确保用户可以访问自定义 meta 属性 ‘requiresCamera’ 的路由：")],-1),u=r("p",null,"‘router.beforeResolve’ 是【获取数据】或执行任何其他操作（如果用户无法进入页面时希望避免执行的操作）的理想位置。",-1);function _(f,d){const i=m("code");return e(),t(p,null,[c,l,s((e(),t("pre",null,[o(`router.beforeResolve(async to => {
  if (to.meta.requiresCamera) {
    try {
      await askForCameraPermission()
    } catch (error) {
      if (error instanceof NotAllowedError) {
        // ... 处理错误，然后取消导航
        return false
      } else {
        // 意料之外的错误，取消导航并把错误传给全局处理器
        throw error
      }
    }
  }
})
`)])),[[i,void 0,"js"]]),u],64)}const S=n(a,[["render",_]]);export{S as default};
