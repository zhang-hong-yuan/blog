import{_ as s}from"./index-C58PDwY0.js";import{ao as a,o,c as n,a4 as r,q as i,F as p,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m={},c=t("h1",null,"Action",-1),l=t("p",null,"Action 相当于组件中的 【method】。它们可以通过 ‘defineStore()’ 中的 actions 属性来定义，并且它们也是定义业务逻辑的完美选择。",-1),u=t("p",null,"类似 getter，action 也可通过 ‘this’ 访问整个 store 实例。不同的是，action 可以是【异步】的，可以在它们里面 await 调用任何 API，以及【其他 action】！",-1),d=t("p",null,"下面是一个使用 Mande 的例子。请注意，使用什么库并不重要，只要得到的是一个‘【Promise】’，甚至可以在浏览器中使用原生 fetch 函数：",-1),h=t("p",null,"也完全可以自由地设置任何需要的参数以及返回任何结果。Action 可以像函数或者通常意义上的【方法】一样被调用：",-1);function _(f,v){const e=a("code");return o(),n(p,null,[c,l,r((o(),n("pre",null,[i(`export const useCounterStore = defineStore('main', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
  },
})
`)])),[[e,void 0,"js"]]),u,d,r((o(),n("pre",null,[i(`import { mande } from 'mande'

const api = mande('/api/users')

export const useUsers = defineStore('users', {
  state: () => ({
    userData: null,
    // ...
  }),

  actions: {
    async registerUser(login, password) {
      try {
        this.userData = await api.post({ login, password })
        showTooltip(\`Welcome back \${this.userData.name}!\`)
      } catch (error) {
        showTooltip(error)
        // 让表单组件显示错误
        return error
      }
    },
  },
})
`)])),[[e,void 0,"js"]]),h,r((o(),n("pre",null,[i(`<script setup>
const store = useCounterStore()
// 将 action 作为 store 的方法进行调用
store.randomizeCounter()
<\/script>
<template>
  <!-- 即使在模板中也可以 -->
  <button @click="store.randomizeCounter()">Randomize</button>
</template>
`)])),[[e,void 0,"html"]])],64)}const O=s(m,[["render",_]]);export{O as default};
