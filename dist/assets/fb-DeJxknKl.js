import{_ as u}from"./index-C58PDwY0.js";import{ao as s,o,c as e,a4 as n,q as i,F as p,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const a={},l=t("h1",null,"添加路由",-1),c=t("p",null,"动态路由主要通过两个函数实现。‘【router.addRoute()】’ 和 ‘【router.removeRoute()】’。它们只注册一个新的路由，也就是说，如果新增加的路由与当前位置相匹配，就需要用 ‘【router.push()】’ 或 ‘【router.replace()】’ 来手动导航，才能显示该新路由。",-1),m=t("p",null,"想象一下，只有一个路由的以下路由：",-1),d=t("p",null,"进入任何页面，‘/about’，‘/store’，或者 ‘/3-tricks-to-improve-your-routing-code’ 最终都会呈现 ‘Article’ 组件。如果我们在 ‘/about’ 上添加一个新的路由： ",-1),_=t("p",null,"页面仍然会显示 ‘Article’ 组件，我们需要手动调用 ‘router.replace()’ 来改变当前的位置，并覆盖原来的位置（而不是添加一个新的路由，最后在历史中两次出现在同一个位置）：",-1),h=t("p",null,"记住，如果需要等待新的路由显示，可以使用 ‘await router.replace()’。",-1),R=t("h2",null,"添加嵌套路由",-1),f=t("p",null,"要将嵌套路由添加到现有的路由中，可以将路由的 ‘【name】’ 作为第一个参数传递给 ‘【router.addRoute()】’，这将有效地添加路由，就像通过 ‘【children】’ 添加的一样：",-1),v=t("p",null,"这等效于：",-1),b=t("h2",null,"在导航守卫中添加路由",-1),A=t("p",null,"如果在导航守卫内部添加或删除路由，不应该调用 ‘router.replace()’，而是通过返回【新的位置】来触发【重定向】：",-1),g=t("p",null,"上面的例子有两个假设：第一，新添加的路由记录将与 ‘【to】’ 位置相匹配，实际上导致与我们试图访问的位置不同。第二，‘hasNecessaryRoute()’ 在添加新的路由后返回 ‘false’，以避免无限重定向。",-1),j=t("p",null,"因为是在重定向中，所以是在【替换】将要跳转的导航，实际上行为就像之前的例子一样。而在实际场景中，添加路由的行为更有可能发生在导航守卫之外，例如，当一个【视图组件】挂载时，它会注册新的路由。",-1);function y(N,x){const r=s("code");return o(),e(p,null,[l,c,m,n((o(),e("pre",null,[i(`const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/:articleName', component: Article }],
})
`)])),[[r,void 0,"js"]]),d,n((o(),e("pre",null,[i(`router.【addRoute】({ path: '/about', component: About })
`)])),[[r,void 0,"js"]]),_,n((o(),e("pre",null,[i(`router.addRoute({ path: '/about', component: About })
// 也可以使用 this.$route 或 route = useRoute() （在 setup 中）
router.replace(router.currentRoute.value.fullPath)
`)])),[[r,void 0,"js"]]),h,R,f,n((o(),e("pre",null,[i(`router.addRoute({ name: 'admin', path: '/admin', component: Admin })
router.addRoute('admin', { path: 'settings', component: AdminSettings })
`)])),[[r,void 0,"js"]]),v,n((o(),e("pre",null,[i(`router.addRoute({
  name: 'admin',
  path: '/admin',
  component: Admin,
  children: [{ path: 'settings', component: AdminSettings }],
})
`)])),[[r,void 0,"js"]]),b,A,n((o(),e("pre",null,[i(`router.beforeEach(to => {
  if (!hasNecessaryRoute(to)) {
    router.addRoute(generateRoute(to))
    // 触发重定向
    return to.fullPath
  }
})
`)])),[[r,void 0,"js"]]),g,j],64)}const rt=u(a,[["render",y]]);export{rt as default};
