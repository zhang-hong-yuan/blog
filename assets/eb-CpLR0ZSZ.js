import{_ as s}from"./index-C58PDwY0.js";import{ao as c,o as t,c as e,a4 as i,q as r,F as p,e as o,at as a}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m={},l=o("h1",null,"全局前置守卫",-1),u=o("p",null,"可以使用 ‘router.【beforeEach】’ 注册一个全局前置守卫：",-1),f=a("<p>当一个导航触发时，全局前置守卫按照【创建】顺序调用。守卫是异步解析执行，此时导航在所有守卫 ‘resolve’ 完之前一直处于<strong>等待中</strong>。</p><p>每个守卫方法接收两个参数：</p><ul><li>‘【a;;to】’: 【b;;即将要进入的目标】</li><li>‘【a;;from】’: 【b;;当前导航正要离开的路由】</li></ul><p>可以返回的值如下:</p><ul><li>‘<strong>【false】</strong>’: 【取消当前的导航】。如果浏览器的 URL 改变了(可能是用户手动或者浏览器后退按钮)，那么 URL 地址会【重置到 ‘from’ 路由对应的地址】。</li><li>一个<strong>【路由地址】</strong>: 通过一个路由地址【重定向到一个不同的地址】，如同调用 ‘router.push()’，且可以传入诸如 ‘replace: true’ 或 ‘name: &#39;home&#39;’ 之类的选项。它会中断当前的导航，同时用相同的 ‘【from】’ 创建一个新导航。</li></ul>",5),_=o("p",null,"如果遇到了意料之外的情况，可能会抛出一个‘Error’。这会取消导航并且调用 ‘router.onError()’ 注册过的回调。",-1),d=o("p",null,"如果什么都没有，‘【undefined】’ 或返回 ‘【true】’，则导航是【有效】的，并【调用下一个导航守卫】。",-1),h=o("p",null,[r("以上所有都同 "),o("strong",null,"‘async’ 函数"),r(" 和 ‘Promise’ 工作方式一样：")],-1);function g(v,b){const n=c("code");return t(),e(p,null,[l,u,i((t(),e("pre",null,[r(`const router = createRouter({ ... })

router.beforeEach((to, from) => {
  // ...
  // 返回 false 以【取消导航】
  return false
})
`)])),[[n,void 0,"js"]]),f,i((t(),e("pre",null,[r(`router.beforeEach(async (to, from) => {
  if (
    !isAuthenticated &&      // 检查用户是否已登录
    to.name !== 'Login'      // ❗️ 避免无限重定向
  ) return { name: 'Login' } // 将用户重定向到登录页面
})
`)])),[[n,void 0,"js"]]),_,d,h,i((t(),e("pre",null,[r(`router.beforeEach(async (to, from) => {
  // canUserAccess() 返回 \`true\` 或 \`false\`
  const canAccess = await canUserAccess(to)
  if (!canAccess) return '/login'
})
`)])),[[n,void 0,"js"]])],64)}const Y=s(m,[["render",g]]);export{Y as default};
