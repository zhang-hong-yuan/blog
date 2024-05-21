import{_ as s}from"./index-C58PDwY0.js";import{ao as p,o as e,c as o,a4 as n,q as i,F as u,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},m=t("h1",null,"使用 Store",-1),a=t("p",null,"在定义了一个 store 之后、使用 ‘<script setup>’ 调用 ‘【useStore()】’之前，store 实例是不会被创建的：",-1),l=t("div",null,`<script setup>
import { useCounterStore } from '@/stores/counter'
// 可以在组件中的任意位置访问 \`store\` 变量 ✨
const counter = 【useCounterStore()】
<\/script>

<template>
  <div>Current Count: {{ counter.count }}</div>
  <div>Current doubleCount: {{ counter.doubleCount }}</div>
  <br>
  <button @click="counter.increment" type="button" class="btn btn-danger">自增 +1</button>
</template>
`,-1),d=[l],_=t("p",null,"一旦 store 被实例化，就可以直接访问在 store 的 ‘state’、‘getters’ 和 ‘actions’ 中定义的任何属性。",-1),h=t("h3",null,"在组件外使用 store",-1),f=t("p",null,"Pinia store 依靠 pinia 实例在所有调用中共享同一个 store 实例。大多数时候，只需调用定义的 ‘useStore()’ 函数，完全开箱即用。",-1),v=t("p",null,"但在组件之外，情况就有点不同了。在用 ‘app.use(pinia)’ 安装 pinia 插件后，对 ‘useStore()’ 的任何调用都会正常执行：",-1),S=t("p",null,"为确保 pinia 实例被激活，最简单的方法就是将 ‘useStore()’ 的调用放在 【pinia 安装后才会执行的函数】中。",-1),b=t("p",null,"下面这个示例是在 Vue Router 的导航守卫中使用 store",-1);function g(x,C){const r=p("code");return e(),o(u,null,[m,a,n((e(),o("pre",null,d)),[[r,void 0,"html"]]),_,h,f,v,n((e(),o("pre",null,[i(`import { useUserStore } from '@/stores/user'
import { createApp } from 'vue'
import App from './App.vue'

// ❌  失败，因为它是在创建 pinia 之前被调用的
const userStore = useUserStore()

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

// ✅ 成功，因为 pinia 实例现在激活了
const userStore = useUserStore()
`)])),[[r,void 0,"js"]]),S,b,n((e(),o("pre",null,[i(`import { createRouter } from 'vue-router'
const router = createRouter({
  // ...
})

// ❌ 由于引入顺序的问题，这将失败
const store = useStore()

router.beforeEach((to, from, next) => {
  // 我们想要在这里使用 store
  if (store.isLoggedIn) next()
  else next('/login')
})

router.beforeEach((to) => {
  // ✅ 这样做是可行的，因为路由器是在其被安装之后开始导航的，
  // 而此时 Pinia 也已经被安装。
  const store = useStore()

  if (to.meta.requiresAuth && !store.isLoggedIn) return '/login'
})
`)])),[[r,void 0,"js"]])],64)}const tt=s(c,[["render",g]]);export{tt as default};
