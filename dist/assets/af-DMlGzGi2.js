import{_ as i}from"./index-C58PDwY0.js";import{ao as p,o,c as r,a4 as s,q as e,F as c,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m={},l=t("h1",null,"重定向",-1),a=t("p",null,"重定向也是通过 ‘routes’ 配置来完成，下面例子是从 ‘【a;;/home】’ 重定向到 ‘【a;;/】’：",-1),h=t("p",null,"重定向的目标也可以是一个命名的路由：",-1),u=t("p",null,"甚至是一个方法，动态返回【重定向目标】：",-1),d=t("p",null,[e("请注意，"),t("strong",null,[t("em",null,"导航守卫"),e("并没有应用在跳转路由上，而仅仅应用在其【目标】上")]),e("。在上面的例子中，在 ‘/home’ 路由中添加 ‘beforeEnter’ 守卫【不会有任何效果::有没有效果？】。")],-1),_=t("p",null,[e("在写 ‘redirect’ 的时候，可以省略 ‘【component】’ 配置，因为它从来没有被直接访问过，所以没有组件要渲染。唯一的例外是"),t("em",null,"嵌套路由"),e("：如果一个路由记录有 ‘children’ 和 ‘redirect’ 属性，它也应该有 ‘component’ 属性。")],-1),f=t("h3",null,"相对重定向",-1),v=t("p",null,"也可以重定向到相对位置：",-1);function x(j,q){const n=p("code");return o(),r(c,null,[l,a,s((o(),r("pre",null,[e("const routes = [{ path: '/home', 【redirect】: '/' }]")])),[[n,void 0,"js"]]),h,s((o(),r("pre",null,[e("const routes = [{ path: '/home', redirect: 【{ name: 'homepage' }】 }]")])),[[n,void 0,"js"]]),u,s((o(),r("pre",null,[e(`const routes = [
  {
    // /search/screens -> /search?q=screens
    path: '/search/:searchText',
    redirect: to => {
      // 方法接收目标路由作为参数
      // return 重定向的字符串路径/路径对象
      return { path: '/search', query: { q: to.params.searchText } }
    },
  }, {
    path: '/search',
    // ...
  },
]
`)])),[[n,void 0,"js"]]),d,_,f,v,s((o(),r("pre",null,[e(`const routes = [
  {
    // 将总是把/users/123/posts重定向到/users/123/profile。
    path: '/users/:id/posts',
    redirect: to => {
      // 该函数接收目标路由作为参数
      // 相对位置不以 【/】 开头
      // 或 { path: 'profile'}
      return 'profile'
    },
  },
]
`)])),[[n,void 0,"js"]])],64)}const Z=i(m,[["render",x]]);export{Z as default};
