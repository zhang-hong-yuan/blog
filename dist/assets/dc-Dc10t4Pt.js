import{_ as a}from"./index-C58PDwY0.js";import{ao as i,o,c as r,a4 as s,q as e,F as p,e as t,at as u}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const l={},m=t("h1",null,"params",-1),d=t("p",null,[e("很多时候，需要将给定匹配模式的路由映射到同一个组件。例如，我们可能有一个 User 组件，它应该对所有用户进行渲染，但用户 ID 不同。在 Vue Router 中，我们可以在路径中使用一个动态字段来实现，我们称之为 "),t("em",null,"【路径参数】"),e("： ")],-1),c=t("blockquote",null,[t("strong",null,"注意："),e("传递 ‘params’ 参数时，需要提前【在规则中占位】。")],-1),h=t("p",null,"现在像 ‘/users/johnny’ 和 ‘/users/jolyne’ 这样的 URL 都会映射到同一个路由。",-1),_=t("p",null,[e("路径参数 用冒号 ‘:’ 表示。当一个路由被匹配时，它的 "),t("em",null,"params"),e(" 的值将在每个组件中以 ‘this.$route.params’ 的形式暴露出来。因此，我们可以通过更新 ‘User’ 的模板来呈现当前的用户 ID：")],-1),v=t("div",null,`const User = {
  template: '<div>User {{ 【$route.params.id】 }}</div>',
}`,-1),U=u("<p>可以在同一个路由中设置有多个 <strong>路径参数</strong>，它们会映射到 ‘$route.params’ 上的相应字段。例如：</p><table><thead><tr><th>匹配模式(routes_path)</th><th>匹配路径(routeLins_to)</th><th>【$route.params】</th></tr></thead><tbody><tr><td>/users/:username</td><td>/users/eduardo</td><td>‘{ username: &#39;eduardo&#39; }’</td></tr><tr><td>/users/:username/posts/:postId</td><td>/users/eduardo/posts/123</td><td>‘{ username: &#39;eduardo&#39;, postId: &#39;123&#39; }’</td></tr></tbody></table><p>除了 ‘$route.params’ 之外，‘$route’ 对象还公开了其他有用的信息，如 ‘$route.query’（如果 URL 中存在参数）、‘$route.hash’ 等。</p><h6>示例</h6><p>传递参数：</p>",5),f=t("div",null,`<!-- 跳转并携带 params 参数（to的【字符串】写法） -->
<RouterLink :to="\`/news/detail/001/新闻001/内容001\`">{{ news.title }}</RouterLink>
				
  <!-- 跳转并携带params参数（to的对象写法） -->
  <RouterLink 
    :to="{
      name: 'xiang', // 用name跳转
      【params】: {
        id: news.id,
        title: news.title,
        content: news.title
      }
    }"
  >
    {{news.title}}
</RouterLink>`,-1),R=t("blockquote",null,[t("strong",null,"注意："),e("传递 ‘params’ 参数时，若使用 ‘to’ 的对象写法，必须使用 ‘【b;;name】’ 配置项，不能用 ‘【b;;path】’。")],-1),$=t("p",null,"接收参数：",-1),b=t("h2",null,"响应路由参数的变化",-1),w=t("p",null,[e("使用带有参数的路由时需要注意的是，当用户从 ‘/users/johnny’ 导航到 ‘/users/jolyne’ 时，"),t("strong",null,"相同的组件实例将被重复使用"),e(" 。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着"),t("strong",null,"组件的【生命周期钩子】不会被调用"),e("。")],-1),g=t("p",null,"要对同一个组件中参数的变化做出响应，可以 watch ‘$route’ 对象上的任意属性，在这个场景中，就是 ‘$route.params’ ：",-1),j=t("p",null,"或者，使用 ‘【beforeRouteUpdate】’ 导航守卫，它也可以取消导航：",-1);function k(y,L){const n=i("code");return o(),r(p,null,[m,d,s((o(),r("pre",null,[e(`const User = {
  template: '<div>User</div>',
}

// 这些都会传递给 \`createRouter\`
const routes = [
  // 动态字段以【a;;冒号】开始
  { path: '/users/【a;;:】id', component: User },
]
`)])),[[n,void 0,"js"]]),c,h,_,s((o(),r("pre",null,[e(""),v,e(`
`)])),[[n,void 0,"js"]]),U,s((o(),r("pre",null,[e(""),f,e(`
`)])),[[n,void 0,"html"]]),R,$,s((o(),r("pre",null,[e(`import { useRoute } from 'vue-router'
const route = useRoute()
// 打印params参数
console.log(【route.params】)
`)])),[[n,void 0,"js"]]),b,w,g,s((o(),r("pre",null,[e(`const User = {
  template: '...',
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        // 对路由变化做出响应...
      }
    )
  },
}
`)])),[[n,void 0,"js"]]),j,s((o(),r("pre",null,[e(`const User = {
  template: '...',
  async beforeRouteUpdate(to, from) {
    // 对路由变化做出响应...
    this.userData = await fetchUser(to.params.id)
  },
}
`)])),[[n,void 0,"js"]])],64)}const st=a(l,[["render",k]]);export{st as default};
