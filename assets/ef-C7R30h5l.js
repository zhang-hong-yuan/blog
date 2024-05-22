import{_ as i}from"./index-C58PDwY0.js";import{ao as a,o as t,c as n,a4 as s,q as o,F as u,e}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const l={},p=e("h1",null,"组件内的守卫",-1),m=e("p",null,"在路由组件内也可以直接定义路由导航守卫(传递给路由配置的)。",-1),f=e("p",null,"可以为路由组件添加以下配置：",-1),d=e("ul",null,[e("li",null,"‘【a;;beforeRouteEnter】’"),e("li",null,"‘【a;;beforeRouteUpdate】’"),e("li",null,"‘【a;;beforeRouteLeave】’")],-1),c=e("p",null,[o("‘beforeRouteEnter’ 守卫 "),e("strong",null,"不能"),o(" 访问 ‘this’，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建。")],-1),_=e("p",null,"不过，可以通过传一个回调给 ‘【next】’ 来访问组件实例。在【导航被确认】的时候执行回调，并且把组件实例作为回调方法的【参数】：",-1),h=e("p",null,[o("注意 ‘【beforeRouteEnter】’ 是支持给 ‘next’ 传递回调的唯一守卫。对于 ‘beforeRouteUpdate’ 和 ‘beforeRouteLeave’ 来说，‘this’ 已经可用了，所以"),e("i",null,"不支持"),o(" 传递回调，因为没有必要了：")],-1),v=e("p",null,[o("这个 "),e("strong",null,"离开守卫"),o(" 通常用来预防用户在还【未保存修改】前突然离开。该导航可以通过返回 ‘false’ 来取消。")],-1),R=e("h2",null,"使用组合 API",-1),b=e("p",null,"当使用组合 API 和 setup 函数来编写组件时，可以通过 ‘【b;;onBeforeRouteUpdate】’ 和 ‘【b;;onBeforeRouteLeave】’ 分别添加 ‘update’ 和 ‘leave’ 守卫。 ",-1),w=e("p",null,"组合式 API 守卫也可以用在【任何由 ‘<router-view>’ 渲染的】组件中，它们不必像组件内守卫那样直接用在路由组件上。",-1);function U(x,B){const r=a("code");return t(),n(u,null,[p,m,f,d,s((t(),n("pre",null,[o("const UserDetails = {\n  template: `...`,\n  beforeRouteEnter(to, from) {\n    // 在【渲染该组件的对应路由被验证前】调用\n    // 不能获取组件实例 `this` ！\n    // 因为当守卫执行时，组件实例还没被创建！\n  },\n  beforeRouteUpdate(to, from) {\n    // 在【当前路由改变，但是该组件被复用】时调用\n    // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，\n    // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。\n    // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`\n  },\n  beforeRouteLeave(to, from) {\n    // 在【导航离开渲染该组件的对应路由】时调用\n    // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`\n  },\n}\n")])),[[r,void 0,"js"]]),c,_,s((t(),n("pre",null,[o(`beforeRouteEnter (to, from, next) {
  next(【vm】 => {
    // 通过 \`vm\` 访问组件实例
  })
}
`)])),[[r,void 0,"js"]]),h,s((t(),n("pre",null,[o(`beforeRouteUpdate (to, from) {
  // just use \`this\`
  this.name = to.params.name
}
`)])),[[r,void 0,"js"]]),v,s((t(),n("pre",null,[o(`beforeRouteLeave (to, from) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (!answer) return false
}
`)])),[[r,void 0,"js"]]),R,b,s((t(),n("pre",null,[o(`import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { ref } from 'vue'

export default {
  setup() {
    // 与 beforeRouteLeave 相同，无法访问 \`this\`
    onBeforeRouteLeave((to, from) => {
      const answer = window.confirm(
        'Do you really want to leave? you have unsaved changes!'
      )
      // 取消导航并停留在同一页面上
      if (!answer) return false
    })

    const userData = ref()

    // 与 beforeRouteUpdate 相同，无法访问 \`this\`
    onBeforeRouteUpdate(async (to, from) => {
      //仅当 id 更改时才获取用户，例如仅 query 或 hash 值已更改
      if (to.params.id !== from.params.id) {
        userData.value = await fetchUser(to.params.id)
      }
    })
  },
}
`)])),[[r,void 0,"js"]]),w],64)}const oe=i(l,[["render",U]]);export{oe as default};
