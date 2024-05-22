import{_ as n}from"./index-C58PDwY0.js";import{ao as p,o as e,c as r,a4 as s,q as o,F as m,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const l={},c=t("h1",null,"路由懒加载",-1),a=t("p",null,"当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。",-1),u=t("p",null,"Vue Router 支持开箱即用的【动态】导入，这意味着可以用动态导入代替静态导入：",-1),_=t("p",null,[o("‘component’ (和 ‘components’) 配置接收一个返回 【Promise 组件】的函数，Vue Router "),t("strong",null,"只会在【第一次进入页面】时才会获取这个函数"),o("，然后使用【缓存】数据。这意味着也可以使用更复杂的函数，只要它们返回一个 【Promise】： ")],-1),d=t("p",null,[o("一般来说，对所有的路由"),t("strong",null,"都使用【动态导入】"),o("是个好主意。")],-1),v=t("section",{class:"tip"},[t("header",null,"注意"),t("p",null,[t("strong",null,"不要"),o("在路由中使用"),t("em",null,"异步组件"),o("。异步组件仍然可以在路由组件中使用，但路由组件本身就是动态导入的。")])],-1);function h(D,f){const i=p("code");return e(),r(m,null,[c,a,u,s((e(),r("pre",null,[o(`// 将
// import UserDetails from './views/UserDetails.vue'
// 替换成
const UserDetails = 【() => import('./views/UserDetails.vue')】

const router = createRouter({
  // ...
  routes: [
    { path: '/users/:id', component: UserDetails }
    // 或在路由定义里直接使用它
    { path: '/users/:id', component: () => import('./views/UserDetails.vue') },
  ],
})
`)])),[[i,void 0,"js"]]),_,s((e(),r("pre",null,[o(`const UserDetails = () =>
  Promise.resolve({
    /* 组件定义 */
  })
`)])),[[i,void 0,"js"]]),d,v],64)}const X=n(l,[["render",h]]);export{X as default};
