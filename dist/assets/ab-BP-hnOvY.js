import{_ as i}from"./index-C58PDwY0.js";import{ao as p,o as r,c as e,a4 as n,q as o,F as c,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m={},l=t("h1",null,"不同的历史模式",-1),u=t("p",null,"在创建路由器实例时，‘history’ 配置允许我们在不同的历史模式中进行选择。",-1),a=t("h2",null,"Hash 模式",-1),_=t("p",null,"hash 模式是用 ‘createWebHashHistory()’ 创建的：",-1),h=t("p",null,[o("它在内部传递的实际 URL 之前使用了一个哈希字符（‘#’）。由于这部分 URL 从未被发送到服务器，所以它不需要在服务器层面上进行任何特殊处理。不过，"),t("strong",null,"它在 【SEO】 中确实有不好的影响。"),o("如果担心这个问题，可以使用 HTML5 模式。")],-1),d=t("h2",null,"Memory 模式",-1),y=t("p",null,[o("Memory 模式不会假定自己处于浏览器环境，因此不会与 URL 交互也"),t("strong",null,"不会自动触发初始导航"),o("。这使得它非常适合 Node 环境和 SSR。它是用 ‘createMemoryHistory()’ 创建的，并且"),t("strong",null,"需要在调用 ‘app.use(router)’ 之后手动 push 到初始导航"),o("。")],-1),H=t("p",null,[o("虽然不推荐，但仍可以在浏览器应用程序中使用此模式，但请注意"),t("strong",null,"它不会有历史记录"),o("，这意味着无法后退或前进。")],-1),R=t("h2",null,"HTML5 模式",-1),f=t("p",null,"用 ‘createWebHistory()’ 创建 HTML5 模式，推荐使用这个模式：",-1),v=t("p",null,'当使用这种历史模式时，URL 会看起来很 "正常"，例如 ‘https://example.com/user/id’。漂亮!',-1),L=t("p",null,"不过，问题来了。由于我们的应用是一个单页的客户端应用，如果没有适当的服务器配置，用户在浏览器中直接访问 ‘https://example.com/user/id’，就会得到一个 404 错误。这就尴尬了。",-1),M=t("p",null,"不用担心：要解决这个问题，需要做的就是在服务器上添加一个简单的回退路由。如果 URL 不匹配任何静态资源，它应提供与你的应用程序中的 ‘index.html’ 相同的页面。漂亮依旧!",-1);function b(x,W){const s=p("code");return r(),e(c,null,[l,u,a,_,n((r(),e("pre",null,[o(`import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    //...
  ],
})
`)])),[[s,void 0,"js"]]),h,d,y,n((r(),e("pre",null,[o(`import { createRouter, createMemoryHistory } from 'vue-router'
const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    //...
  ],
})
`)])),[[s,void 0,"js"]]),H,R,f,n((r(),e("pre",null,[o(`import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //...
  ],
})
`)])),[[s,void 0,"js"]]),v,L,M],64)}const et=i(m,[["render",b]]);export{et as default};
