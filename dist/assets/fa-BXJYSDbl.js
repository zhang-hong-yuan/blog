import{_ as r}from"./index-C58PDwY0.js";import{ao as l,o as t,c as e,a4 as i,q as o,F as c,at as a,e as n}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const u={},p=a("<h1>插件 Plugins</h1><p>由于有了底层 API 的支持，Pinia store 现在完全支持扩展。以下是可以扩展的内容：</p><ul><li>为 store 添加新的属性</li><li>定义 store 时增加新的选项</li><li>为 store 增加新的方法</li><li>包装现有的方法</li><li>改变甚至取消 action</li><li>实现副作用，如本地存储</li><li><strong>仅</strong>应用插件于特定 store</li></ul><p>插件是通过 ‘【pinia.use()】’ 添加到 pinia 实例的。最简单的例子是通过返回一个【对象】将一个静态属性添加到所有 store。</p>",4),d=n("p",null,"这对添加全局对象很有用，如路由器、modal 或 toast 管理器。",-1),_=n("br",null,null,-1),h=n("hr",null,null,-1),m=n("h3",null,"简介",-1),f=n("p",null,"Pinia 插件是一个【函数】，可以选择性地返回要添加到 store 的属性。它接收一个可选参数，即 ‘【context】’。",-1),b=n("p",null,"然后用 ‘pinia.use()’ 将这个函数传给 ‘pinia’：",-1),v=n("p",null,[o("插件只会应用于"),n("strong",null,"在 【‘pinia’ 传递给应用】后"),o("创建的 store，否则它们不会生效。")],-1),P=n("br",null,null,-1),j=n("hr",null,null,-1),g=n("h3",null,"添加新的 state",-1),x=n("p",null,"可以直接通过在一个插件中返回包含特定属性的对象来为【每个 store】 都添加上特定属性：",-1),k=n("p",null,[o("也可以直接在 ‘store’ 上设置该属性，但"),n("strong",null,"可以的话，请使用返回【对象】的方法，这样它们就能被 devtools 自动追踪到：")],-1),A=n("p",null,"值得注意的是，每个 ‘store’ 都被 ‘【reactive】’ 包装过(自动具有响应式)，所以可以自动解包任何它所包含的 Ref(‘ref()’、‘computed()’...)。",-1),S=n("p",null,"这就是在没有 ‘【.value】’ 的情况下依旧可以访问所有计算属性的原因，也是它们为什么是响应式的原因。",-1),w=n("h5",null,"添加新的外部属性",-1),R=n("p",null,"当添加外部属性、第三方库的类实例或非响应式的简单值时，应该先用 ‘【markRaw()】’ 来包装一下它，再将它传给 pinia。下面是一个在每个 store 中添加路由器的例子：",-1),$=n("br",null,null,-1),C=n("hr",null,null,-1),V=n("h3",null,"在插件中调用 $subscribe",-1),y=n("p",null,"也可以在插件中使用 ‘store.$subscribe’ 和 ‘store.$onAction’。",-1),B=n("p",null,[o("需要注意的是，在一个插件中， state 变更或添加(包括调用 ‘store.$patch()’)都是发生在 store 被激活之前，因此"),n("strong",null,"不会触发任何订阅函数"),o("。")],-1),N=n("br",null,null,-1),D=n("hr",null,null,-1),F=n("h3",null,"添加新的选项",-1),q=n("p",null,"在定义 store 时，可以创建新的选项，以便在插件中使用它们。例如，可以创建一个 ‘【debounce】’ 选项，允许任何 action 实现防抖。",-1),E=n("p",null,"然后，该插件可以读取该选项来包装 【a;;action】，并替换原始 【a;;action】：",-1),I=n("p",null,"在使用 setup 语法时，自定义选项作为第 3 个参数传递：",-1);function O(T,z){const s=l("code");return t(),e(c,null,[p,i((t(),e("pre",null,[o(`import { createPinia } from 'pinia'

// 创建的每个 store 中都会添加一个名为 \`secret\` 的属性。
// 在安装此插件后，插件可以保存在不同的文件中
function SecretPiniaPlugin() {
  return { secret: 'the cake is a lie' }
}

const pinia = createPinia()
// 将该插件交给 Pinia
pinia.use(SecretPiniaPlugin)

// 在另一个文件中
const store = useStore()
store.secret // 'the cake is a lie'
`)])),[[s,void 0,"js"]]),d,_,h,m,f,i((t(),e("pre",null,[o(`export function myPiniaPlugin(context) {
  context.【pinia】   // 用 \`createPinia()\` 创建的 pinia。 
  context.【app】     // 用 \`createApp()\` 创建的当前应用(仅 Vue 3)。
  context.【store】   // 该插件正在扩展的 store
  context.【options】 // 定义传给 \`defineStore()\` 的 store 的可选对象。
  // ...
}
`)])),[[s,void 0,"js"]]),b,i((t(),e("pre",null,[o(`pinia.use(myPiniaPlugin)
`)])),[[s,void 0,"js"]]),v,P,j,g,x,i((t(),e("pre",null,[o(`pinia.use(() => ({ hello: 'world' }))
`)])),[[s,void 0,"js"]]),k,i((t(),e("pre",null,[o(`pinia.use(({ store }) => {
  store.hello = 'world'
})
`)])),[[s,void 0,"js"]]),A,i((t(),e("pre",null,[o(`const sharedRef = ref('shared')
pinia.use(({ store }) => {
  // 每个 store 都有单独的 \`hello\` 属性
  store.hello = ref('secret')
  // 它会被自动解包
  store.hello // 'secret'

  // 所有的 store 都在共享 \`shared\` 属性的值
  store.shared = sharedRef
  store.shared // 'shared'
})
`)])),[[s,void 0,"js"]]),S,w,R,i((t(),e("pre",null,[o(`import { markRaw } from 'vue'
// 根据路由器的位置来调整
import { router } from './router'

pinia.use(({ store }) => {
  store.router = markRaw(router)
})
`)])),[[s,void 0,"js"]]),$,C,V,y,i((t(),e("pre",null,[o(`pinia.use(({ store }) => {
  store.$subscribe(() => {
    // 响应 【store】 变化
  })
  store.$onAction(() => {
    // 响应 【store actions】
  })
})
`)])),[[s,void 0,"js"]]),B,N,D,F,q,i((t(),e("pre",null,[o(`defineStore('search', {
  actions: {
    searchContacts() {
      // ...
    },
  },

  // 这将在后面被一个插件读取
  debounce: {
    // 让 action searchContacts 防抖 300ms
    searchContacts: 300,
  },
})
`)])),[[s,void 0,"js"]]),E,i((t(),e("pre",null,[o(`// 使用任意防抖库
import debounce from 'lodash/debounce'

pinia.use(({ options, store }) => {
  if (options.debounce) {
    // 正在用新的 action 来覆盖这些 action
    return Object.keys(options.debounce).reduce((debouncedActions, action) => {
      debouncedActions[action] = debounce(
        store[action],
        options.debounce[action]
      )
      return debouncedActions
    }, {})
  }
})
`)])),[[s,void 0,"js"]]),I,i((t(),e("pre",null,[o(`defineStore(
  'search',
  () => {
    // ...
  }, {
    // 这将在后面被一个插件读取
    debounce: {
      // 让 action searchContacts 防抖 300ms
      searchContacts: 300,
    },
  }
)
`)])),[[s,void 0,"js"]])],64)}const jn=r(u,[["render",O]]);export{jn as default};
