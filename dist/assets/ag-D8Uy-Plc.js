import{_ as i}from"./index-C58PDwY0.js";import{ao as p,o as t,c as e,a4 as n,q as s,F as m,e as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const l={},c=o("h1",null,"别名",-1),a=o("p",null,"重定向是指当用户访问 ‘/home’ 时，URL 会被 ‘/’ 替换，然后匹配成 ‘/’。那么什么是别名呢？",-1),u=o("p",null,[o("strong",null,"将 ‘/’ 别名为 ‘/home’，意味着当用户访问 ‘/home’ 时，URL 仍然是 ‘【/home】’，但会被匹配为用户正在访问 ‘【/】’。")],-1),_=o("p",null,"对应的路由配置为：",-1),d=o("p",null,"通过别名，可以自由地将 UI 结构映射到一个任意的 URL，而不受配置的嵌套结构的限制。使别名以 ‘/’ 开头，以使嵌套路径中的路径成为绝对路径。甚至可以将两者结合起来，用一个【数组】提供多个别名：",-1),h=o("p",null,"如果路由有参数，请确保在任何绝对别名中包含它们：",-1);function U(f,L){const r=p("code");return t(),e(m,null,[c,a,u,_,n((t(),e("pre",null,[s("const routes = [{ path: '/', component: Homepage, 【alias】: '/home' }]")])),[[r,void 0,"js"]]),d,n((t(),e("pre",null,[s(`const routes = [
  {
    path: '/users',
    component: UsersLayout,
    children: [
      // 为这 3 个 URL 呈现 UserList
      // - 【/users】
      // - 【/users/list】
      // - 【/people】
      { path: '', component: UserList, alias: ['/people', 'list'] },
    ],
  },
]
`)])),[[r,void 0,"js"]]),h,n((t(),e("pre",null,[s(`const routes = [
  {
    path: '/users/:id',
    component: UsersByIdLayout,
    children: [
      // 为这 3 个 URL 呈现 UserDetails
      // - 【/users/24】
      // - 【/users/24/profile】
      // - 【/24】
      { path: 'profile', component: UserDetails, alias: ['/:id', ''] },
    ],
  },
]
`)])),[[r,void 0,"js"]])],64)}const X=i(l,[["render",U]]);export{X as default};
