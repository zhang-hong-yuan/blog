import{_ as i}from"./index-C58PDwY0.js";import{ao as p,o as n,c as o,a4 as s,q as r,F as l,e}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const u={},c=e("h1",null,"嵌套路由",-1),d=e("p",null,"一些应用程序的 UI 由多层嵌套的组件组成。在这种情况下，URL 的片段通常对应于特定的嵌套【组件】结构，例如：",-1),m={class:"nocopy"},_=e("p",null,"通过 Vue Router，可以使用嵌套路由配置来表达这种关系。",-1),a=e("div",null,`const User = {
  template: '<div>User {{ $route.params.id }}</div>',
}

// 这些都会传递给 \`createRouter\`
const routes = [{ path: '/user/:id', component: User }]
`,-1),h=[a],v=e("p",null,"这里的 ‘<router-view>’ 是一个【顶层】的 ‘router-view’。它渲染顶层路由匹配的组件。同样地，一个被渲染的组件也可以包含自己嵌套的 ‘【<router-view>】’。例如，如果在 ‘User’ 组件的模板内添加一个 ‘<router-view>’：",-1),U=e("div",null,`const User = {
  template: \`
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  \`,
}
`,-1),f=[U],w=e("p",null,"要将组件渲染到这个嵌套的 ‘router-view’ 中，需要在路由中配置 ‘【children】’：",-1),x=e("p",null,[e("strong",null,"注意，以 ‘/’ 开头的嵌套路径将被视为【根路径】。这就允许利用组件嵌套，而不必使用嵌套的 URL。")],-1),j=e("p",null,"如上所见，‘children’ 配置只是另一个路由数组，就像 ‘【routes】’ 本身一样。因此，可以根据自己的需要，不断地嵌套视图。",-1),k=e("p",null,"此时，按照上面的配置，当访问 ‘/user/eduardo’ 时，在 ‘User’ 的 ‘router-view’ 里面【什么都不会呈现】，因为没有匹配到嵌套路由。也许确实想在那里渲染一些东西。在这种情况下，可以提供一个【空的嵌套】路径：",-1),P=e("p",null,"跳转路由要写【完整路径】：",-1),g=e("h2",null,"嵌套的命名路由",-1),H=e("p",null,"在处理命名路由时，通常会给子路由命名：",-1),R=e("p",null,"这将确保导航到 ‘/user/:id’ 时始终显示嵌套路由。",-1),y=e("p",null,[r("在一些场景中，可能希望导航到命名路由而不导航到嵌套路由。例如，想导航 ‘/user/:id’ 而不显示嵌套路由。那样的话，还可以"),e("strong",null,"【命名父路由】"),r("，但请注意"),e("strong",null,"重新加载页面将始终显示嵌套的子路由"),r("，因为它被视为指向路径 ‘/users/:id’ 的导航，而不是命名路由： ")],-1);function B(V,D){const t=p("code");return n(),o(l,null,[c,d,s((n(),o("pre",m,[r(`/user/johnny/profile                  /user/johnny/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
`)])),[[t,void 0,"md"]]),_,s((n(),o("pre",null,[r(`<div id="app">
  <router-view></router-view>
</div>
`)])),[[t,void 0,"html"]]),s((n(),o("pre",null,h)),[[t,void 0,"js"]]),v,s((n(),o("pre",null,f)),[[t,void 0,"js"]]),w,s((n(),o("pre",null,[r(`const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'profile',
        component: UserProfile,
      }, {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 将被渲染到 User 的 <router-view> 内部
        path: 'posts',
        component: UserPosts,
      },
    ],
  },
]
`)])),[[t,void 0,"js"]]),x,j,k,s((n(),o("pre",null,[r(`const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      // 当 /user/:id 匹配成功
      // UserHome 将被渲染到 User 的 <router-view> 内部
      { path: 【''】, component: UserHome },

      // ...其他子路由
    ],
  },
]
`)])),[[t,void 0,"js"]]),P,s((n(),o("pre",null,[r(`<router-link to="/user/profile">xxxx</router-link>
<!-- 或 -->
<router-link :to="{path:'/user/profile'}">xxxx</router-link>
`)])),[[t,void 0,"html"]]),g,H,s((n(),o("pre",null,[r(`const routes = [
  {
    path: '/user/:id',
    component: User,
    // 请注意，只有子路由具有名称
    children: [{ path: '', 【name】: 'user', component: UserHome }],
  },
]
`)])),[[t,void 0,"js"]]),R,y,s((n(),o("pre",null,[r(`const routes = [
  {
    path: '/user/:id',
    name: 'user-parent',
    component: User,
    children: [{ path: '', name: 'user', component: UserHome }],
  },
]
`)])),[[t,void 0,"js"]])],64)}const le=i(u,[["render",B]]);export{le as default};
