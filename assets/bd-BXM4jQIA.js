import{_ as s}from"./index-C58PDwY0.js";import{ao as a,o as r,c as t,a4 as u,q as e,F as i,at as n,e as p}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m={},h=n("<h1>编程式导航</h1><p>除了使用 ‘&lt;router-link&gt;’ 创建 a 标签来定义导航链接，还可以借助 ‘【router】’ 的实例方法，通过编写代码来实现。</p><p><strong>下面的示例中的 ‘router’ 指代路由器实例。在组件内部，可以使用 ‘$router’ 属性访问路由，例如 ‘this.$router.push(...)’。如果使用组合式 API，可以通过调用 ‘【useRouter()】’ 来访问路由器。</strong></p><p>想要导航到不同的 URL，可以使用 ‘【router.push】’ 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，会回到之前的 URL。</p><p>当点击 ‘&lt;router-link&gt;’ 时，内部会调用这个方法，所以点击 ‘&lt;router-link :to=&quot;...&quot;&gt;’ 相当于调用 ‘router.push(...)’ ：</p><table><thead><tr><th>声明式</th><th>编程式</th></tr></thead><tbody><tr><td>‘&lt;router-link :to=&quot;...&quot;&gt;’</td><td>‘router.push(...)’</td></tr></tbody></table><p>该方法的参数可以是一个字符串路径，或者一个描述地址的对象。例如：</p>",7),d=p("p",null,[p("strong",null,"注意："),e("如果提供了 ‘【path】’，‘【params】’ 会被忽略，‘【query】’ 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 ‘name’ 或手写完整的带有参数的 ‘path’：")],-1),l=n("<p>当指定 ‘params’ 时，可提供 ‘string’ 或 ‘number’ 参数（或者对于<em>可重复的参数</em>可提供一个数组）。<strong>任何其他类型（如对象、布尔等）都将被自动字符串化</strong>。对于<em>可选参数</em>，可以提供一个空字符串（‘&quot;&quot;’）或 ‘null’ 来移除它。</p><p>由于属性 ‘【to】’ 与 ‘【router.push】’ 接受的对象种类相同，所以两者的规则完全相同。</p><p>‘router.push’ 和所有其他导航方法都会返回一个 【Promise】，让我们可以等到导航完成后才知道是成功还是失败。</p><h2>替换当前位置</h2><p>它的作用类似于 ‘router.push’，唯一不同的是，它在导航时不会向 history 添加新记录，正如它的名字所暗示的那样——它【取代】了当前的条目。</p><table><thead><tr><th>声明式</th><th>编程式</th></tr></thead><tbody><tr><td>‘&lt;router-link :to=&quot;...&quot; replace&gt;’</td><td>‘router.replace(...)’</td></tr></tbody></table><p>也可以直接在传递给 ‘router.push’ 的 ‘to’ 参数中增加一个属性 ‘replace: true’ ：</p>",7),c=p("h2",null,"横跨历史",-1),g=p("p",null,"该方法采用一个整数作为参数，表示在历史堆栈中前进或后退多少步，类似于 ‘window.history.go(n)’。",-1);function _(b,q){const o=a("code");return r(),t(i,null,[h,u((r(),t("pre",null,[e(`// 字符串路径
router.push('/users/eduardo')

// 带有路径的对象
router.push({ path: '/users/eduardo' })

// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'eduardo' } })

// 带查询参数，结果是 /register?plan=private
router.push({ path: '/register', 【query】: { plan: 'private' } })

// 带 hash，结果是 /about#team
router.push({ path: '/about', hash: '#team' })
`)])),[[o,void 0,"js"]]),d,u((r(),t("pre",null,[e("const username = 'eduardo'\n\n// 可以手动建立 url，但必须自己处理编码\nrouter.push(`/user/${username}`) // -> /user/eduardo\n\n// 同样\nrouter.push({ path: `/user/${username}` }) // -> /user/eduardo\n\n// 如果可能的话，使用 `name` 和 `params` 从自动 URL 编码中获益\nrouter.push({ name: 'user', params: { username } }) // -> /user/eduardo\n\n// `【params】` 不能与 `【path】` 一起使用\nrouter.push({ path: '/user', params: { username } }) // -> /user\n")])),[[o,void 0,"js"]]),l,u((r(),t("pre",null,[e(`router.push({ path: '/home', 【replace: true】 })
// 相当于
router.replace({ path: '/home' })
`)])),[[o,void 0,"js"]]),c,g,u((r(),t("pre",null,[e(`// 向前移动一条记录，与 router.forward() 相同
router.【g;;go】(1)

// 返回一条记录，与 router.back() 相同
router.【g;;go】(-1)

// 前进 3 条记录
router.【g;;go】(3)

// 如果没有那么多记录，静默失败
router.【g;;go】(-100)
router.【g;;go】(100)
`)])),[[o,void 0,"js"]])],64)}const W=s(m,[["render",_]]);export{W as default};
