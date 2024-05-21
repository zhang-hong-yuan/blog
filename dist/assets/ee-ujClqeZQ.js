import{_ as i}from"./index-C58PDwY0.js";import{ao as p,o as r,c as o,a4 as s,q as t,F as m,e}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const a={},c=e("h1",null,"路由独享的守卫",-1),u=e("p",null,"可以直接在路由配置上定义 ‘【beforeEnter】’ 守卫：",-1),l=e("p",null,[t("‘beforeEnter’ 守卫 "),e("strong",null,"只在【进入路由】时触发"),t("，不会在 ‘params’、‘query’ 或 ‘hash’ 改变时触发。例如，从 ‘/users/2’ 进入到 ‘/users/3’ 或者从 ‘/users/2#info’ 进入到 ‘/users/2#projects’。它们只有在 "),e("strong",null,"从一个【不同】的"),t(" 路由导航时，才会被触发。")],-1),h=e("p",null,"也可以将一个【函数数组】传递给 ‘beforeEnter’，这在为不同的路由重用守卫时很有用：",-1),_=e("p",null,"注意，也可以通过使用路径 ‘meta’ 字段和全局导航守卫来实现类似的行为。",-1);function f(d,v){const n=p("code");return r(),o(m,null,[c,u,s((r(),o("pre",null,[t(`const routes = [
  {
    path: '/users/:id',
    component: UserDetails,
    beforeEnter: (to, from) => {
      // reject the navigation
      return false
    },
  },
]
`)])),[[n,void 0,"js"]]),l,h,s((r(),o("pre",null,[t(`function removeQueryParams(to) {
  if (Object.keys(to.query).length)
    return { path: to.path, query: {}, hash: to.hash }
}

function removeHash(to) {
  if (to.hash) return { path: to.path, query: to.query, hash: '' }
}

const routes = [
  {
    path: '/users/:id',
    component: UserDetails,
    beforeEnter: [removeQueryParams, removeHash],
  }, {
    path: '/about',
    component: UserDetails,
    beforeEnter: [removeQueryParams],
  },
]
`)])),[[n,void 0,"js"]]),_],64)}const W=i(a,[["render",f]]);export{W as default};
