import{_ as i}from"./index-C58PDwY0.js";import{ao as l,o as n,c as e,a4 as s,q as t,F as a,e as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},p=o("h1",null,"滚动行为",-1),u=o("p",null,"使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 能做到，而且更好，它可以自定义路由切换时页面如何【滚动】。",-1),m=o("blockquote",null,[o("strong",null,"注意："),t("这个功能只在支持 ‘history.pushState’ 的浏览器中可用。")],-1),d=o("p",null,"当创建一个 Router 实例，可以提供一个 ‘【scrollBehavior】’ 方法：",-1),h=o("p",null,"‘scrollBehavior’ 函数接收 ‘to’ 和 ‘from’ 路由对象，如 Navigation Guards。第三个参数 ‘【savedPosition】’，只有当这是一个 ‘popstate’ 导航时才可用（由浏览器的后退/前进按钮触发）。",-1),_=o("p",null,"该函数可以返回一个 ‘ScrollToOptions’ 位置对象:",-1),v=o("p",null,"也可以通过 ‘【el】’ 传递一个 【CSS 选择器】或一个 【DOM 元素】。在这种情况下，‘top’ 和 ‘left’ 将被视为该元素的【相对偏移量】。",-1),f=o("p",null,"如果返回一个 ‘falsy’ 的值，或者是一个空对象，那么【不会发生滚动】。",-1),B=o("p",null,[t("返回 ‘【savedPosition】’，在按下 "),o("strong",null,"后退/前进"),t(" 按钮时，就会像浏览器的原生表现那样：")],-1),P=o("p",null,"如果要模拟 “滚动到锚点” 的行为：",-1),j=o("p",null,"如果浏览器支持滚动行为，可以让它变得更流畅：",-1),R=o("h2",null,"延迟滚动",-1),g=o("p",null,"有时候，需要在页面中滚动之前稍作等待。例如，当处理过渡时，我们希望等待过渡结束后再滚动。要做到这一点，可以返回一个 【Promise】，它可以返回所需的位置描述符。下面是一个例子，在滚动前等待 500ms：",-1),x=o("p",null,"可以将其与页面级过渡组件的事件挂钩，以使滚动行为与页面过渡很好地结合起来。",-1);function y(S,b){const r=l("code");return n(),e(a,null,[p,u,m,d,s((n(),e("pre",null,[t(`const router = createRouter({
  history: createWebHashHistory(),
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
  }
})
`)])),[[r,void 0,"js"]]),h,_,s((n(),e("pre",null,[t(`const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { 【top: 0】 }
  },
})
`)])),[[r,void 0,"js"]]),v,s((n(),e("pre",null,[t(`const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // 始终在元素 #main 上方滚动 10px
    return {
      // 也可以这么写
      // el: document.getElementById('main'),
      el: '#main',
      // 在元素上 10 像素
      top: 10,
    }
  },
})
`)])),[[r,void 0,"js"]]),f,B,s((n(),e("pre",null,[t(`const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
`)])),[[r,void 0,"js"]]),P,s((n(),e("pre",null,[t(`const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
  },
})
`)])),[[r,void 0,"js"]]),j,s((n(),e("pre",null,[t(`const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 【'smooth'】,
      }
    }
  }
})
`)])),[[r,void 0,"js"]]),R,g,s((n(),e("pre",null,[t(`const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })
  },
})
`)])),[[r,void 0,"js"]]),x],64)}const ro=i(c,[["render",y]]);export{ro as default};
