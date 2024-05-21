import{_ as s}from"./index-C58PDwY0.js";import{ao as m,o,c as n,a4 as i,q as r,F as p,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const a={},l=t("h1",null,"过渡动效",-1),c=t("p",null,"想要在路径组件上使用转场，并对导航进行动画处理，需要使用 【‘<RouterView>’ 插槽】：",-1),u=t("h2",null,"单个路由的过渡",-1),h=t("p",null,"上面的用法会对所有的路由使用相同的过渡。如果想让每个路由的组件有不同的过渡，可以将【元信息】和动态的 ‘【name】’ 结合在一起，放在 ‘<transition>’ 上：",-1),d=t("h2",null,"基于路由的动态过渡",-1),_=t("p",null,"也可以根据目标路由和当前路由之间的关系，动态地确定使用的过渡。使用和刚才非常相似的片段：",-1),v=t("p",null,"可以添加一个 ‘after navigation hook’，根据路径的深度动态添加信息到 ‘meta’ 字段。",-1),f=t("h2",null,"强制在复用的视图之间进行过渡",-1),w=t("p",null,"Vue 可能会自动复用看起来相似的组件，从而忽略了任何过渡。幸运的是，可以添加一个 ‘【key】’ 属性来强制过渡。这也允许在相同路由上使用不同的参数触发过渡：",-1);function C(g,D){const e=m("code");return o(),n(p,null,[l,c,i((o(),n("pre",null,[r(`<router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view>
`)])),[[e,void 0,"html"]]),u,h,i((o(),n("pre",null,[r(`const routes = [
  {
    path: '/custom-transition',
    component: PanelLeft,
    meta: { transition: 'slide-left' },
  }, {
    path: '/other-transition',
    component: PanelRight,
    meta: { transition: 'slide-right' },
  },
]
`)])),[[e,void 0,"js"]]),i((o(),n("pre",null,[r(`<router-view v-slot="{ Component, route }">
  <!-- 使用任何自定义过渡和回退到 \`fade\` -->
  <transition :name="【route.meta.transition】 || 'fade'">
    <component :is="Component" />
  </transition>
</router-view>
`)])),[[e,void 0,"html"]]),d,_,i((o(),n("pre",null,[r(`<!-- 使用动态过渡名称 -->
<router-view v-slot="{ Component, route }">
  <transition :name="route.meta.transition">
    <component :is="Component" />
  </transition>
</router-view>
`)])),[[e,void 0,"html"]]),v,i((o(),n("pre",null,[r(`router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transition = 【toDepth < fromDepth】 ? 'slide-right' : 'slide-left'
})
`)])),[[e,void 0,"js"]]),f,w,i((o(),n("pre",null,[r(`<router-view v-slot="{ Component, route }">
  <transition name="fade">
    <component :is="Component" :key="route.path" />
  </transition>
</router-view>
`)])),[[e,void 0,"html"]])],64)}const $=s(a,[["render",C]]);export{$ as default};
