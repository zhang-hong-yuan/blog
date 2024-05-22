import{_ as i}from"./index-C58PDwY0.js";import{ao as p,o,c as e,a4 as n,q as s,F as c,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m={},a=t("h1",null,"从 Store 解构",-1),u=t("p",null,"store 是一个用 ‘【reactive】’ 包装的对象，这意味着不需要在 ‘getters’ 后面写 ‘.value’，就像 setup 中的 props 一样，如果写了，也不能解构它：",-1),l={class:"notice"},d=t("p",null,"为了从 store 中提取属性时保持其响应性，可以使用 ‘【storeToRefs()】’。它将为每一个响应式属性创建引用。当只使用 store 的状态而不调用任何 action 时，它会非常有用。",-1),_=t("p",null,"请注意，可以直接从 store 中解构 action，因为它们也被绑定到 store 上。",-1),f=t("section",{class:"tip"},[t("header",null,"TIP"),t("p",null,"Vue 中的 ‘【toRefs()】’ 会转换 store 中返回的所有数据，包括 state、getter 和 action，而 getter 和 action 是没有必要包装成响应式数据的。")],-1);function h(v,b){const r=p("code");return o(),e(c,null,[a,u,n((o(),e("pre",l,[s(`<script setup>
const store = useCounterStore()

// ❌ 这将不起作用，因为它破坏了响应性
// 这就和直接解构 \`props\` 一样
const { name, doubleCount } = store
name // 将始终是 "Eduardo"
doubleCount // 将始终是 0

setTimeout(() => store.increment(), 1000)

// ✅ 这样写是响应式的
// 💡 当然也可以直接使用 \`store.doubleCount\`
const doubleValue = computed(() => store.doubleCount)
<\/script>
`)])),[[r,void 0,"html---6,7,8"]]),d,n((o(),e("pre",null,[s(`<script setup>
import { storeToRefs } from 'pinia'
const store = useCounterStore()
// \`name\` 和 \`doubleCount\` 是响应式的 ref
// 同时通过插件添加的属性也会被提取为 ref
// 并且会跳过所有的 action 或非响应式 (不是 ref 或 reactive) 的属性
const { name, doubleCount } = 【storeToRefs(store)】
// 作为 【action】 的 increment 可以直接解构
const { increment } = store
<\/script>
`)])),[[r,void 0,"js"]]),_,f],64)}const X=i(m,[["render",h]]);export{X as default};
