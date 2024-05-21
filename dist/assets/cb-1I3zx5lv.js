import{_ as s}from"./index-C58PDwY0.js";import{ao as l,o as r,c as n,a4 as o,q as t,F as p,e}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const a={},m=e("h1",null,"命名视图",-1),c=e("p",null,"有时候想【同时 (同级)】 展示多个视图，而不是嵌套展示，例如创建一个布局，有 ‘sidebar’ (侧导航) 和 ‘main’ (主内容) 两个视图，这个时候命名视图就派上用场了。可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果 ‘router-view’ 没有设置名字，那么默认为 ‘【default】’。",-1),u=e("p",null,[t("一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 ‘【components】’ 配置 (带上 "),e("strong",null,"s"),t(")：")],-1),d=e("h2",null,"嵌套命名视图",-1),v=e("p",null,"也有可能使用命名视图创建【嵌套】视图的复杂布局。这时也需要命名用到的嵌套 ‘router-view’ 组件。下面以一个设置面板为例：",-1),h=e("ul",null,[e("li",null,"‘Nav’ 只是一个常规组件。"),e("li",null,"‘UserSettings’ 是一个视图组件。"),e("li",null,"‘UserEmailsSubscriptions’、‘UserProfile’、‘UserProfilePreview’ 是嵌套的视图组件。")],-1),_=e("blockquote",null,[e("strong",null,"注意："),t("我们先忘记 ‘HTML’ ‘CSS’ 具体的布局的样子，只专注在用到的组件上。")],-1),f=e("p",null,"‘UserSettings’ 组件的 ‘<template>’ 部分应该是类似下面的这段代码:",-1),w=e("p",null,"那么就可以通过这个路由配置来实现上面的布局：",-1);function S(g,U){const i=l("code");return r(),n(p,null,[m,c,o((r(),n("pre",null,[t(`<router-view class="view left-sidebar" name="LeftSidebar"></router-view>
<router-view class="view main-content"></router-view>
<router-view class="view right-sidebar" name="RightSidebar"></router-view>
`)])),[[i,void 0,"html"]]),u,o((r(),n("pre",null,[t(`const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        // LeftSidebar: LeftSidebar 的缩写
        LeftSidebar,
        // 它们与 \`<router-view>\` 上的 \`name\` 属性匹配
        RightSidebar,
      },
    },
  ],
})
`)])),[[i,void 0,"js"]]),d,v,h,o((r(),n("pre",null,[t(`/settings/emails                                       /settings/profile
+-----------------------------------+                  +------------------------------+
| UserSettings                      |                  | UserSettings                 |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
| | Nav | UserEmailsSubscriptions | |  +------------>  | | Nav | UserProfile        | |
| |     +-------------------------+ |                  | |     +--------------------+ |
| |     |                         | |                  | |     | UserProfilePreview | |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
+-----------------------------------+                  +------------------------------+
`)])),[[i,void 0,"md"]]),_,f,o((r(),n("pre",null,[t(`<!-- UserSettings.vue -->
<div>
  <h1>User Settings</h1>
  <NavBar />
  <router-view />
  <router-view 【name】="helper" />
</div>
`)])),[[i,void 0,"html"]]),w,o((r(),n("pre",null,[t(`{
  path: '/settings',
  // 你也可以在顶级路由就配置命名视图
  component: UserSettings,
  children: [{
    path: 'emails',
    component: UserEmailsSubscriptions
  }, {
    path: 'profile',
    【components】: {
      default: UserProfile,
      helper: UserProfilePreview
    }
  }]
}
`)])),[[i,void 0,"js"]])],64)}const $=s(a,[["render",S]]);export{$ as default};
