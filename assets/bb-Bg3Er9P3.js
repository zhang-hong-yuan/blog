import{_ as s}from"./index-C58PDwY0.js";import{ao as p,o,c as t,a4 as n,q as i,F as m,e as r}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const l={},a=r("h1",null,"命名路由",-1),u=r("p",null,"除了 ‘path’ 之外，还可以为任何路由提供 ‘【name】’。这有以下优点：",-1),c=r("ul",null,[r("li",null,"没有硬编码的 URL"),r("li",null,"‘params’ 的自动编码/解码。"),r("li",null,"防止在 url 中出现打字错误。"),r("li",null,"绕过路径排序（如显示一个）")],-1),_=r("p",null,"要链接到一个命名的路由，可以向 ‘router-link’ 组件的 ‘to’ 属性传递一个【对象】：",-1),d=r("p",null,"这跟代码调用 ‘router.push()’ 是一回事：",-1),h=r("p",null,"在这两种情况下，路由将导航到路径 ‘【/user/erina】’。",-1),f=r("p",null,"所有路由的命名都必须是【唯一】的。如果为多条路由添加相同的命名，路由器只会保留【最后那一条】。",-1);function v(k,x){const e=p("code");return o(),t(m,null,[a,u,c,n((o(),t("pre",null,[i(`const routes = [
  {
    path: '/user/:username',
    name: 'user',
    component: User,
  },
]
`)])),[[e,void 0,"js"]]),_,n((o(),t("pre",null,[i(`<router-link :to="{ name: 'user', params: { username: 'erina' }}">
  User
</router-link>
`)])),[[e,void 0,"html"]]),d,n((o(),t("pre",null,[i(`router.push({ name: 'user', params: { username: 'erina' } })
`)])),[[e,void 0,"js"]]),h,f],64)}const Y=s(l,[["render",v]]);export{Y as default};
