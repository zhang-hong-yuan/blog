import{_ as p}from"./index-C58PDwY0.js";import{ao as i,o as t,c as e,a4 as r,q as s,F as l,e as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const u={},c=o("h1",null,"将 props 传递给路由组件",-1),d=o("p",null,"在组件中使用 ‘$route’ 会与路由紧密耦合，这限制了组件的灵活性，因为它只能用于特定的 URL。虽然这不一定是件坏事，但我们可以通过 ‘props’ 配置来解除这种行为：",-1),_=o("p",null,"可以将下面的代码：",-1),m=o("div",null,`const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}

const routes = [{ path: '/user/:id', component: User }]
`,-1),a=[m],h=o("p",null,"替换成：",-1),v=o("div",null,`const User = {
  // 请确保添加一个与路由参数完全相同的 prop 名
  【props】: ['id'],
  template: '<div>User {{ id }}</div>'
}

const routes = [{ path: '【/user/:id】', component: User, 【props】: true }]
`,-1),f=[v],w=o("p",null,"这允许在任何地方使用该组件，使得该组件更容易重用和测试。",-1),U=o("p",null,[o("strong",null,"当 ‘props’ 设置为 ‘true’ 时，‘【route.params】’ 将被设置为组件的 ‘props’。")],-1),R=o("h2",null,"命名视图",-1),q=o("p",null,"对于有命名视图的路由，必须为每个命名视图定义 ‘props’ 配置：",-1),V=o("h2",null,"对象模式",-1),j=o("p",null,"当 ‘props’ 是一个【对象】时，它将原样设置为组件 ‘props’。当 ‘props’ 是静态的时候很有用。",-1),g=o("h2",null,"函数模式",-1),x=o("p",null,"也可以创建一个返回 ‘props’ 的函数。这允许将参数转换为【其他类型】，将静态值与基于路由的值相结合等等。",-1),N=o("p",null,"URL ‘/search?q=vue’ 将传递 ‘{query: 'vue'}’ 作为 ‘props’ 传给 ‘SearchUser’ 组件。",-1),b=o("p",null,"请尽可能保持 ‘props’ 函数为无状态的，因为它只会在路由发生变化时起作用。如果需要状态来定义 ‘props’，请使用包装组件，这样 vue 才可以对状态变化做出反应。",-1),y=o("h2",null,"通过 RouterView",-1),B=o("p",null,"还可以通过 ‘<RouterView>’ 插槽 传递任意参数：",-1),S=o("section",{class:"warning"},[o("header",null,"WARNING"),o("p",null,[s("在这种情况下，"),o("strong",null,"所有视图组件"),s("都会接收到 ‘view-prop’。通常这并不是一个好主意，因为这意味着所有的视图组件都声明了一个 ‘view-prop’ prop，但这未必需要。所以请尽可能使用上述的其他选项。")])],-1);function k(C,D){const n=i("code");return t(),e(l,null,[c,d,_,r((t(),e("pre",null,a)),[[n,void 0,"js"]]),h,r((t(),e("pre",null,f)),[[n,void 0,"js"]]),w,U,R,q,r((t(),e("pre",null,[s(`const routes = [
  {
    path: '/user/:id',
    components: { default: User, sidebar: Sidebar },
    props: 【{ default: true, sidebar: false }】
  }
]
`)])),[[n,void 0,"js"]]),V,j,r((t(),e("pre",null,[s(`const routes = [
  {
    path: '/promotion/from-newsletter',
    component: Promotion,
    props: { newsletterPopup: false }
  }
]
`)])),[[n,void 0,"js"]]),g,x,r((t(),e("pre",null,[s(`const routes = [
  {
    path: '/search',
    component: SearchUser,
    props: route => ({ query: route.query.q })
  }
]
`)])),[[n,void 0,"js"]]),N,b,y,B,r((t(),e("pre",null,[s(`<RouterView v-slot="{ Component }">
  <component
    :is="Component"
    view-prop="value"
   />
</RouterView>
`)])),[[n,void 0,"html"]]),S],64)}const _o=p(u,[["render",k]]);export{_o as default};
