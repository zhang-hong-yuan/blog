import{_ as s}from"./index-C58PDwY0.js";import{ao as i,o,c as r,a4 as u,q as e,F as p,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m={},c=t("h1",null,"组合式 API",-1),a=t("p",null,"引入 setup 和 Vue 的组合式 API，开辟了新的可能性，但要想充分发挥 Vue Router 的潜力，需要使用一些新的函数来代替访问 ‘【this】’ 和组件内导航守卫。",-1),l=t("h3",null,"在 setup 中访问路由和当前路由",-1),d=t("p",null,"因为在 ‘setup’ 里面 ‘this’ 是 ‘【underfined】’，所以不能再直接访问 ‘this.$router’ 或 ‘this.$route’。作为替代，可以使用 ‘【a;;useRouter】’ 和 ‘【a;;useRoute】’ 函数：",-1),_=t("p",null,[e("‘route’ 对象是一个【响应式】对象，所以它的任何属性都可以被监听，但应该"),t("strong",null,"避免监听整个 ‘route’ 对象"),e("。在大多数情况下，应该直接监听【期望改变的参数】。")],-1),h=t("p",null,"请注意，在模板中仍然可以访问 ‘【b;;$router】’ 和 ‘【b;;$route】’，所以不需要在 ‘setup’ 中返回 ‘router’ 或 ‘route’。",-1);function f(v,R){const n=i("code");return o(),r(p,null,[c,a,l,d,u((o(),r("pre",null,[e(`import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    function pushWithQuery(query) {
      router.push({
        name: 'search',
        query: {
          ...route.query,
          ...query,
        },
      })
    }
  },
}
`)])),[[n,void 0,"js"]]),_,u((o(),r("pre",null,[e(`import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

export default {
  setup() {
    const route = useRoute()
    const userData = ref()

    // 当参数更改时获取用户信息
    watch(
      () => route.params.id,
      async newId => {
        userData.value = await fetchUser(newId)
      }
    )
  },
}
`)])),[[n,void 0,"js"]]),h],64)}const S=s(m,[["render",f]]);export{S as default};
