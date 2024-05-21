import{_ as i}from"./index-C58PDwY0.js";import{ao as a,o as n,c as r,a4 as s,q as e,F as m,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},u=t("h1",null,"组合式 Store",-1),p=t("p",null,"组合式 store 是可以【相互】使用，Pinia 当然也支持它。但有一个规则需要遵循：",-1),l=t("p",null,[e("如果"),t("strong",null,"两个或更多的 store 相互使用"),e("，它们不可以通过 getters 或 actions 创建一个无限循环。它们也不可以"),t("strong",null,"【同时】"),e("在它们的 setup 函数中直接互相读取对方的 state：")],-1),d=t("h3",null,"嵌套 store",-1),_=t("p",null,"如果一个 store 使用另一个 store，可以直接导入并在 【a;;actions】 和 【a;;getters】 中调用 ‘【useStore()】’ 函数。然后就可以像在 Vue 组件中那样使用 store。",-1),h=t("p",null,"对于 setup store ，直接使用 store 函数顶部的一个 store：",-1),f=t("h3",null,"共享 Getter",-1),S=t("p",null,"可以直接在一个 getter 中调用 ‘useOtherStore()’：",-1),y=t("h3",null,"共享 Actions",-1),x=t("p",null,"actions 也一样：",-1);function v(g,C){const o=a("code");return n(),r(m,null,[u,p,l,s((n(),r("pre",null,[e(`const useX = defineStore('x', () => {
  const y = useY()

  y.name // ❌ 这是不可以的，因为 y 也试图读取 x.name

  function doSomething() {
    // ✅ 读取 computed 或 action 中的 y 属性
    const yName = y.name
    // ...
  }

  return { name: ref('I am X'), }
})

const useY = defineStore('y', () => {
  const x = useX()

  x.name // ❌ 这是不可以的，因为 x 也试图读取 y.name

  function doSomething() {
    // ✅ 读取 computed 或 action 中的 x 属性
    const xName = x.name
    // ...
  }

  return { name: ref('I am Y'), }
})
`)])),[[o,void 0,"js"]]),d,_,h,s((n(),r("pre",null,[e(`import { useUserStore } from './user'

export const useCartStore = defineStore('cart', () => {
  const user = 【useUserStore()】
  const list = ref([])

  const summary = computed(() => {
    return \`Hi \${user.name}, you have \${list.value.length} items in your cart. It costs \${price.value}.\`
  })

  function purchase() {
    return apiPurchase(user.id, this.list)
  }

  return { summary, purchase }
})
`)])),[[o,void 0,"js"]]),f,S,s((n(),r("pre",null,[e(`import { defineStore } from 'pinia'
import { useUserStore } from './user'

export const useCartStore = defineStore('cart', {
  getters: {
    summary(state) {
      const user = 【useUserStore()】

      return \`Hi \${user.name}, you have \${state.list.length} items in your cart. It costs \${state.price}.\`
    },
  },
})
`)])),[[o,void 0,"js"]]),y,x,s((n(),r("pre",null,[e(`import { defineStore } from 'pinia'
import { useUserStore } from './user'

export const useCartStore = defineStore('cart', {
  actions: {
    async orderCart() {
      const user = 【useUserStore()】

      try {
        await apiOrderCart(user.token, this.items)
        // 其他 action
        this.emptyCart()
      } catch (err) {
        displayError(err)
      }
    },
  },
})
`)])),[[o,void 0,"js"]])],64)}const tt=i(c,[["render",v]]);export{tt as default};
