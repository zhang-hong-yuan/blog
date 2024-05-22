import{_ as p}from"./index-C58PDwY0.js";import{ao as a,o as s,c as r,a4 as n,q as e,F as u,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const i={},l=t("h1",null,"路由的匹配语法",-1),c=t("p",null,"大多数应用都会使用 ‘/about’ 这样的【a;;静态】路由和 ‘/users/:userId’ 这样的【a;;动态】路由，但是 Vue Router 可以提供更多的方式！",-1),h=t("section",{class:"tip"},[t("header",null,"TIP"),t("p",null,[e("为了简单起见，所有的路由"),t("strong",null,"都省略了 ‘component’ 属性"),e("，只关注 ‘path’ 值。")])],-1),d=t("h2",null,"在参数中自定义正则",-1),m=t("p",null,"当定义像 ‘:userId’ 这样的参数时，我们内部使用以下的正则 ‘([^/]+)’ (至少一个不是斜杠 ‘/’ 的字符)来从 URL 中提取参数。这很好用，除非需要根据参数的内容来区分两个路由。想象一下，两个路由 ‘/:orderId’ 和 ‘/:productName’，两者会匹配完全相同的 URL，所以我们需要一种方法来区分它们。最简单的方法就是在路径中添加一个静态部分来区分它们：",-1),_=t("p",null,"但在某些情况下，我们并不想添加静态的 ‘/o’ ‘/p’ 部分。由于，‘orderId’ 总是一个数字，而 ‘productName’ 可以是任何东西，所以我们可以在【括号】中为参数指定一个自定义的正则：",-1),v=t("p",null,"现在，转到 ‘/25’ 将匹配 ‘/:orderId’，其他情况将会匹配 ‘/:productName’。‘routes’ 数组的【顺序】并不重要!",-1),f=t("section",{class:"tip"},[t("header",null,"TIP"),t("p",null,[e("确保"),t("strong",null,"转义【反斜杠(‘\\ ’)】"),e("，就像上面对 ‘\\d’ (变成‘\\\\d’)所做的那样，在 JavaScript 中实际传递字符串中的反斜杠字符。")])],-1),I=t("h2",null,"可重复的参数",-1),N=t("p",null,"如果需要匹配具有多个部分的路由，如 ‘/first/second/third’，应该用 ‘【*】’（0 个或多个）和 ‘【+】’（1 个或多个）将参数标记为可重复：",-1),b=t("p",null,"这将会提供一个参数【数组】，而不是一个字符串，并且在使用命名路由时也需要你传递一个数组：",-1),j=t("p",null,"这些也可以通过在右括号后添加它们与自定义正则结合使用：",-1),U=t("h2",null,"Sensitive 与 strict 路由配置",-1),g=t("p",null,"默认情况下，所有路由是【不区分::是否区分】大小写的，并且能匹配带有或不带有【尾部斜线】的路由。例如，路由 ‘/users’ 将匹配 ‘/users’、‘/users/’、甚至 ‘/Users/’。这种行为可以通过 ‘【strict】’ 和 ‘【sensitive】’ 选项来修改，它们既可以应用在整个全局路由上，又可以应用于当前路由上：",-1),R=t("ul",null,[t("li",null,[e("‘可选’ "),t("strong",null,"【d;;sensitive】"),e(": ‘boolean’——【c;;使该 RegExp 区分大小写】。")]),t("li",null,[e("‘可选’ "),t("strong",null,"【d;;strict】"),e(": ‘boolean’——【c;;是否禁止尾部斜线】。")])],-1),$=t("h2",null,"可选参数",-1),w=t("p",null,"也可以通过使用 ‘【?】’ 修饰符(0 个或 1 个)将一个参数标记为可选：",-1),x=t("p",null,"请注意，‘*’ 在技术上也标志着一个参数是可选的，但 ‘?’ 参数不能重复。",-1),F=t("h2",null,"捕获所有路由或 404 Not found 路由",-1),y=t("p",null,[e("常规参数只匹配 url 片段之间的字符，用 ‘/’ 分隔。如果想匹配"),t("strong",null,"任意路径"),e("，可以使用自定义的 "),t("em",null,"路径参数"),e(" 正则表达式，在 路径参数 后面的括号中加入 正则表达式 : ")],-1),M=t("p",null,"在这个特定的场景中，我们在括号之间使用了自定义正则表达式，并将 ‘pathMatch’ 参数标记为可选可重复。这样做是为了让我们在需要的时候，可以通过将 ‘path’ 拆分成一个数组，直接导航到路由：",-1);function k(q,B){const o=a("code");return s(),r(u,null,[l,c,h,d,m,n((s(),r("pre",null,[e(`const routes = [
  // 匹配 /o/3549
  { path: '/o/:orderId' },
  // 匹配 /p/books
  { path: '/p/:productName' },
]
`)])),[[o,void 0,"js"]]),_,n((s(),r("pre",null,[e(`const routes = [
  // /:orderId -> 仅匹配数字
  { path: '/:orderId(\\\\d+)' },
  // /:productName -> 匹配其他任何内容
  { path: '/:productName' },
]
`)])),[[o,void 0,"js"]]),v,f,I,N,n((s(),r("pre",null,[e(`const routes = [
  // /:chapters ->  匹配 /one, /one/two, /one/two/three, 等
  { path: '/:chapters+' },
  // /:chapters -> 匹配 /, /one, /one/two, /one/two/three, 等
  { path: '/:chapters*' },
]
`)])),[[o,void 0,"js"]]),b,n((s(),r("pre",null,[e(`// 给定 { path: '/:chapters【b;;*】', name: 'chapters' },
router.resolve({ name: 'chapters', params: { chapters: [] } }).href
// 产生 /
router.resolve({ name: 'chapters', params: { chapters: ['a', 'b'] } }).href
// 产生 /a/b

// 给定 { path: '/:chapters【b;;+】', name: 'chapters' },
router.resolve({ name: 'chapters', params: { chapters: [] } }).href
// 抛出错误，因为 \`chapters\` 为空
`)])),[[o,void 0,"js"]]),j,n((s(),r("pre",null,[e(`const routes = [
  // 仅匹配数字
  // 匹配 /1, /1/2, 等
  { path: '/:chapters(\\\\d+)+' },
  // 匹配 /, /1, /1/2, 等
  { path: '/:chapters(\\\\d+)*' },
]
`)])),[[o,void 0,"js"]]),U,g,R,n((s(),r("pre",null,[e(`const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 将匹配 /users/posva 而非：
    // - /users/posva/ 当 strict: true
    // - /Users/posva 当 sensitive: true
    { path: '/users/:id', sensitive: true },
    // 将匹配 /users, /Users, 以及 /users/42 而非 /users/ 或 /users/42/
    { path: '/users/:id?' },
  ],
  strict: true, // applies to all routes
})
`)])),[[o,void 0,"js"]]),$,w,n((s(),r("pre",null,[e(`const routes = [
  // 匹配 /users 和 /users/posva
  { path: '/users/:userId?' },
  // 匹配 /users 和 /users/42
  { path: '/users/:userId(\\\\d+)?' },
]
`)])),[[o,void 0,"js"]]),x,F,y,n((s(),r("pre",null,[e("const routes = [\n  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下\n  { path: '/:pathMatch【(.*)*】', name: 'NotFound', component: NotFound },\n  // 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下\n  { path: '/user-:afterUser(.*)', component: UserGeneric },\n]\n")])),[[o,void 0,"js"]]),M,n((s(),r("pre",null,[e(`this.$router.push({
  name: 'NotFound',
  // 保留当前路径并删除第一个字符，以避免目标 URL 以 \`//\` 开头。
  params: { pathMatch: this.$route.path.substring(1).split('/') },
  // 保留现有的查询和 hash 值，如果有的话
  query: this.$route.query,
  hash: this.$route.hash,
})
`)])),[[o,void 0,"js"]])],64)}const ct=p(i,[["render",k]]);export{ct as default};
