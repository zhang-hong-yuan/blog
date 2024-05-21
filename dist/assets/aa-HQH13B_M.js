import{_ as n}from"./index-C58PDwY0.js";import{ao as s,o as t,c as o,a4 as r,q as i,F as u,at as a,e as p}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m="/blog/assets/logo-CG91Magl.png",l={},c=a('<figure class="logo"><img src="'+m+'" alt=""><h1>Vue Router</h1></figure><p>Vue Router 是 Vue.js 的官方路由。它与 Vue.js 核心深度集成，让用 Vue.js 构建单页应用变得轻而易举。功能包括：</p><ul><li>嵌套路由映射</li><li>动态路由选择</li><li>模块化、基于组件的路由配置</li><li>路由参数、查询、通配符</li><li>展示由 Vue.js 的过渡系统提供的过渡效果</li><li>细致的导航控制</li><li>自动激活 CSS 类的链接</li><li>HTML5 history 模式或 hash 模式</li><li>可定制的滚动行为</li><li>URL 的正确编码</li></ul><h2>安装</h2><p>对于一个现有的使用 JavaScript 包管理器的项目，可以从 npm registry 中安装 Vue Router：</p>',5),_=p("p",null,"使用包管理器的项目通常会使用 ES 模块来访问 Vue Router，例如 ‘import { 【createRouter】 } from 'vue-router'’。",-1),h=p("p",null,"通过调用 ‘app.use(router)’，会触发第一次导航且可以在任意组件中用 ‘【a;;useRouter()】’ 访问它，用 ‘【a;;useRoute()】’ 访问当前路由。",-1);function d(V,v){const e=s("code");return t(),o(u,null,[c,r((t(),o("pre",null,[i("npm install vue-router@4")])),[[e,void 0,"bash"]]),_,r((t(),o("pre",null,[i(`// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// 3. 创建路由实例并传递 \`routes\` 配置
const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes, // \`routes: routes\` 的缩写
})

// 5. 创建并挂载根实例
const app = Vue.createApp({})
// 确保 _use_ 路由实例使
// 整个应用支持路由。
app.use(router)

app.mount('#app')

// 现在，应用已经启动了！
`)])),[[e,void 0,"js"]]),h],64)}const Q=n(l,[["render",d]]);export{Q as default};
