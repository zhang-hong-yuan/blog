import{_ as n}from"./index-C58PDwY0.js";import{ao as a,o,c as e,a4 as s,q as r,e as t,F as c}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p={},m=t("h1",null,"订阅 state",-1),l=t("p",null,"可以通过 store 的 ‘【$subscribe()】’ 方法侦听 state 及其变化。比起普通的 ‘watch()’，使用 ‘$subscribe()’ 的好处是 subscriptions 在 patch 后只触发一次 (例如，当使用 patch 的函数版本时)。",-1),u=t("p",null,"在【组件::什么位置？】中设置一个回调，当【状态发生变化】时被调用。返回一个用来【移除此回调】的函数。",-1),d={class:"nocopy"},_=t("p",null,"回调函数有两个参数：第一个是【修改】的相关信息；第二个是 【state】",-1),h=t("p",null,"默认情况下，state subscription 会被绑定到添加它们的组件上 (如果 store 在组件的 ‘setup()’ 里面)。这意味着，当该组件被卸载时，它们将被自动删除。如果想在组件卸载后依旧保留它们，可以将 ‘{ 【detached】: true }’ 作为第二个参数，以将 state subscription 从当前组件中分离：",-1),b={class:"tip"},S=t("header",null,"TIP",-1),f=t("p",null,"可以在 ‘pinia’ 实例上使用 ‘【watch()】’ 函数侦听整个 state。",-1);function v(y,$){const i=a("code");return o(),e(c,null,[m,l,u,s((o(),e("pre",d,[r(`stateStore.$subscribe(callback, [options])
`)])),[[i,void 0,"js"]]),_,s((o(),e("pre",null,[r(`cartStore.$subscribe((mutation, state) => {
// import { MutationType } from 'pinia'
mutation.type // 'direct' | 'patch object' | 'patch function'
// 和 cartStore.$id 一样
mutation.storeId // 'cart'
// 只有 mutation.type === 'patch object'的情况下才可用
mutation.payload // 传递给 cartStore.$patch() 的补丁对象。

// 每当状态发生变化时，将整个 state 持久化到本地存储。
localStorage.setItem('cart', JSON.stringify(state))
})
`)])),[[i,void 0,"js"]]),h,s((o(),e("pre",null,[r(`<script setup>
const someStore = useSomeStore()
// 此订阅器即便在组件卸载之后仍会被保留
someStore.$subscribe(callback, { detached: true })
<\/script>
`)])),[[i,void 0,"html"]]),t("section",b,[S,f,s((o(),e("pre",null,[r(`watch(
  pinia.state,
  (state) => {
    // 每当状态发生变化时，将整个 state 持久化到本地存储。
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)
`)])),[[i,void 0,"js"]])])],64)}const Z=n(p,[["render",v]]);export{Z as default};
