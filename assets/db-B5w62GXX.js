import{_ as n}from"./index-C58PDwY0.js";import{ao as p,o as r,c as s,a4 as i,q as t,F as m,e}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},u=e("h1",null,"向 getter 传递参数",-1),d=e("p",null,"Getter 只是幕后的计算属性，所以不可以向它们传递任何参数。不过，可以从 getter 返回一个【a;;函数】，该【a;;函数】可以接受任意参数：",-1),a=e("p",null,"并在组件中使用：",-1),l=e("div",null,`<script setup>
import { useUserListStore } from './store'
const userList = useUserListStore()
const { getUserById } = storeToRefs(userList)
// 请注意，你需要使用 \`getUserById.value\` 来访问
// <script setup> 中的函数
<\/script>

<template>
  <p>User 2: {{ 【getUserById(2)】 }}</p>
</template>`,-1),_=e("p",null,[t("请注意，这样做时，getter 将"),e("em",null,"不再被缓存"),t("，它们只是一个被调用的函数。不过，可以在 getter 本身中【缓存】一些结果，虽然这种做法并不常见，但有证明表明它的性能会更好：")],-1);function f(v,g){const o=p("code");return r(),s(m,null,[u,d,i((r(),s("pre",null,[t(`export const useUserListStore = defineStore('userList', {
  getters: {
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    },
  },
})
`)])),[[o,void 0,"js"]]),a,i((r(),s("pre",null,[t(""),l,t(`
`)])),[[o,void 0,"html"]]),_,i((r(),s("pre",null,[t(`export const useUserListStore = defineStore('userList', {
  getters: {
    getActiveUserById(state) {
      const activeUsers = state.users.filter((user) => user.active)
      return (userId) => activeUsers.find((user) => user.id === userId)
    },
  },
})
`)])),[[o,void 0,"js"]])],64)}const W=n(c,[["render",f]]);export{W as default};
