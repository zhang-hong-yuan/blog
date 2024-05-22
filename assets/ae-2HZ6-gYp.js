import{_ as s}from"./index-C58PDwY0.js";import{ao as m,o as e,c as r,a4 as i,q as o,F as p,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const a={},c=t("h1",null,"路由元信息",-1),u=t("p",null,"有时，可能需要将任意信息【附加】到路由上，如过渡名称、谁可以访问路由等。这些事情可以通过接收属性对象的 ‘【a;;meta】’ 属性来实现，并且它可以在【路由地址】和【导航守卫】上都被访问到。定义路由的时候可以这样配置 ‘【a;;meta】’ 字段：",-1),l=t("p",null,"那么如何访问这个 ‘meta’ 字段呢？",-1),h=t("p",null,[o("首先，我们称呼 ‘routes’ 配置中的每个路由对象为 "),t("strong",null,"【路由记录】"),o("。路由记录可以是嵌套的，因此，当一个路由匹配成功后，它可能匹配【多个路由记录】。")],-1),d=t("p",null,"例如，根据上面的路由配置，‘/posts/new’ 这个 URL 将会匹配父路由记录 (‘path: '/posts'’) 以及子路由记录 (‘path: 'new'’)。",-1),_=t("p",null,"一个路由匹配到的所有【路由记录】会暴露为 ‘$route’ 对象(还有在导航守卫中的路由对象)的 【‘$route.matched’ 数组】。我们需要遍历这个数组来检查路由记录中的 ‘meta’ 字段，但是 Vue Router 提供了一个 ‘【$route.meta】’ 方法，它是一个非递归合并所有 ‘meta’ 字段（从父字段到子字段）的方法。这意味着可以简单地写：",-1);function f(q,v){const n=m("code");return e(),r(p,null,[c,u,i((e(),r("pre",null,[o(`const routes = [
  {
    path: '/posts',
    component: PostsLayout,
    children: [
      {
        path: 'new',
        component: PostsNew,
        // 只有经过身份验证的用户才能创建帖子
        meta: { requiresAuth: true },
      }, {
        path: ':id',
        component: PostsDetail
        // 任何人都可以阅读文章
        meta: { requiresAuth: false },
      }
    ]
  }
]
`)])),[[n,void 0,"js"]]),l,h,d,_,i((e(),r("pre",null,[o(`router.beforeEach((to, from) => {
  // 而不是去检查每条路由记录
  // to.matched.some(record => record.meta.requiresAuth)
  if (【to.meta.requiresAuth】 && !auth.isLoggedIn()) {
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    return {
      path: '/login',
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath },
    }
  }
})
`)])),[[n,void 0,"js"]])],64)}const W=s(a,[["render",f]]);export{W as default};
