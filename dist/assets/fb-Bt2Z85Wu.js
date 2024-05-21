import{_ as l}from"./logo-BWyZ_y9s.js";import{_ as a}from"./index-C58PDwY0.js";import{ao as p,o as n,c as o,a4 as i,q as t,e,F as d,at as r}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const u={},c=e("figure",{class:"plugin-persistedstate"},[e("img",{src:l,alt:""}),e("h1",null,"pinia-plugin-persistedstate")],-1),_=e("h2",null,"简介",-1),h=e("blockquote",null,[t(" 官网： "),e("a",{href:"https://prazdevs.github.io/pinia-plugin-persistedstate/zh/",style:{color:"#888"}}," https://prazdevs.github.io/pinia-plugin-persistedstate/zh/ ")],-1),m=e("p",null,"‘pinia-plugin-persistedstate’ 旨在通过一致的 API 为每个人和每个项目中的 Pinia Store 提供【持久化存储】。如果希望保存一个【完整】的 Store，或者需要【细粒化】配置 storage 和序列化的方式，该插件都提供了相应的功能，并且可以在需要持久化的 Store 上使用相同的配置。",-1),g=e("h2",null,"安装",-1),S=e("p",null,"使用如下命令安装 ‘pinia-plugin-persistedstate’：",-1),f=e("p",null,"引入 ‘pinia-plugin-persistedstate’ 并将其应用到 pinia：",-1),v=e("h2",null,"用法",-1),P=e("p",null,"创建 Store 时，将 ‘【persist】’ 选项设置为 ‘true’。",-1),b=e("p",null,"组合式语法：",-1),j=e("p",null,"选项式语法：",-1),x=r("<p>也可以传递一个对象给 Store 的 ‘persist’ 属性来进行自定义配置。</p><ul><li><em><strong>‘Key’</strong></em> 用于【引用 storage 中的数据】</li><li>将数据持久化到 <em><strong>‘storage’</strong></em> 中，必须具有 ‘getItem: (key: string) =&gt; string | null’ 和 ‘setItem: (key: string, value: string) =&gt; void’ 两个方法。</li><li><em><strong>‘paths’</strong></em> 用于指定 【state 中哪些数据需要被持久化】。‘【[]】’ 表示【不持久化任何状态】，‘【a;;undefined】’ 或 ‘【a;;null】’ 表示【持久化整个 state】。 </li><li><em><strong>‘【c;;beforeRestore】’</strong></em> 该 hook 将在【b;;从 storage 中恢复数据之前】触发，并且它可以访问整个 ‘PiniaPluginContext’，这可用于在恢复数据之前强制地执行特定的操作。</li><li><em><strong>‘【c;;afterRestore】’</strong></em> 该 hook 将在【b;;从 storage 中恢复数据之后】触发，并且它可以访问整个 ‘PiniaPluginContext’，这可用于在恢复数据之后强制地执行特定的操作。</li><li><em><strong>‘debug’</strong></em> 类型：‘boolean’；默认值：‘false’。当设置为 true 时，持久化/恢复 Store 时可能发生的任何错误都将使用 ‘console.error’ 输出。</li></ul>",2),k=e("section",{class:"warning"},[e("header",null,"警告"),e("p",null,"谨慎使用 ‘【PiniaPluginContext】’，意外可能会出现。")],-1),y=e("br",null,null,-1),$=e("hr",null,null,-1),R=e("h4",null,"全局持久化配置",-1),w=e("p",null,"在安装插件之后，可以使用 ‘createPersistedState()’ 来初始化插件。这些配置将会成为【项目内所有 Store 的默认选项】。",-1),D=e("blockquote",null,"这种方法有时被称为工厂函数。",-1),z=r('<p>上述例子中，每个声明 ‘【persist: true】’ 的 Store 都会默认将数据持久化到 ‘sessionStorage’ 中。可用的全局配置包括：</p><ul><li>‘storage’</li><li>‘beforeRestore’</li><li>‘afterRestore’</li><li>‘serializer’</li></ul><section class="info"><header>提示</header><p>传递给单个 Store 的 ‘persist’ 配置的任何选项都将【覆盖】全局配置中声明的对应项。</p></section><br><hr><h4>全局 key 配置</h4><p>全局 ‘key’ 配置接受传入 Store key 的【函数】，并返回一个【新的 storage 密钥】。</p>',7),C=e("p",null,"上述例子中，store 将保存在 ‘【__persisted__store】’ key 下，而不是 ‘store’ 下。",-1),N=e("section",{class:"info"},[e("header",null,"提示"),e("p",null,"当需要在全局范围内对所有 Store key 添加前缀/后缀时，应考虑此选项。")],-1),M=e("br",null,null,-1),q=e("hr",null,null,-1),B=e("h4",null,"启用所有 Store 默认持久化",-1),I=e("p",null,"该配置将会使所有 Store 持久化存储。",-1),L=e("p",null,"上述例子中，store 将使用默认配置（或者已有的全局配置）进行持久化存储。",-1),T={class:"resolvent"},V=e("header",null,"提示",-1),F=e("p",null,"当使用该配置后，也可以单独为一个 Store 设置是否持久化：",-1),A=e("br",null,null,-1),E=e("hr",null,null,-1),H=e("h4",null,"每个 Store 可以有多个持久化配置",-1),K=e("p",null,"在某些特定的用例中，需要将数据从单个 Store 持久化到不同的 storage 中。‘persist’ 选项还可以接受多个类似的配置。",-1),G=e("p",null,"上述例子中， ‘toLocal’ 的值将保存在 ‘【e;;localStorage】’ 中，而 ‘toSession’ 的值将保留在 ‘【e;;sessionStorage】’ 中，‘toNowhere’ 则不会持久化。",-1),J={class:"warning"},O=e("header",null,"警告",-1),Q=e("p",null,[t("在两种持久化配置中，"),e("ins",null,"不指定 ‘paths’ 选项"),t("或"),e("ins",null,"以同一路径为目标时"),t("要注意，因为这可能会导致【恢复后的数据不一致】。在恢复数据的过程中，持久化的处理顺序将与声明时的顺序【相同】。 ")],-1),U=e("p",null,"在上述特定情况下，恢复数据后，从 ‘sessionStorage’ 取回的数据将【替换】从 ‘localStorage’ 取回的数据。",-1),W=e("br",null,null,-1),X=e("hr",null,null,-1),Y=e("h4",null,"强制恢复数据",-1),Z=e("p",null,"每个 Store 都有 ‘$hydrate’ 方法来手动触发数据恢复。默认情况下，调用此方法还将触发 ‘beforeRestore’ 和 ‘afterRestore’ 钩子。但是可以通过配置方法来避免这两个钩子触发。",-1),ee=e("p",null,"例如在下面 Store 中：",-1),te=e("p",null,"可以调用 ‘$hydrate’ 方法：",-1),ne=e("p",null,"这将从 storage 中获取数据并用它替换当前的 state。并且在上面的示例中，钩子函数不会被触发。",-1),oe=e("section",{class:"warning"},[e("header",null,"警告"),e("p",null,"在大多数情况下，不需要手动恢复 state 。并且确保知道使用 ‘$hydrate’ 的原因不是因为 bug （无论是你的代码导致的还是插件本身原因）。")],-1),se=e("br",null,null,-1),ie=e("hr",null,null,-1),re=e("h4",null,"强制持久化",-1),le=e("p",null,"每个 Store 都有 ‘$persist’ 方法来手动触发持久化。",-1),ae=e("p",null,"例如在下面 store 中：",-1),pe=e("p",null,"可以调用 ‘$persist’ 方法：",-1),de=e("p",null,"这会强制将 Store state 保存在已配置的 storage 中。",-1),ue=e("section",{class:"warning"},[e("header",null,"警告"),e("p",null,"在大多数情况下，不需要手动保存 state 。并且确保知道使用 ‘$persist’ 的原因不是因为 bug （无论是你的代码导致的还是插件本身原因）。")],-1),ce=e("br",null,null,-1),_e=e("h2",null,"局限性",-1),he=e("p",null,"虽然该插件具有很大的灵活性以及丰富的功能，但也有一些限制需要考虑。",-1),me=e("br",null,null,-1),ge=e("hr",null,null,-1),Se=e("h4",null,"引用不会被持久化",-1),fe=e("p",null,"由于数据将会被序列化，因此引用在刷新时将会丢失。 我们来看看下面这个例子：",-1),ve=e("p",null,"在序列化之前， ‘a’ 和 ‘b’ 指向了同一个对象：",-1),Pe=e("p",null,"在反序列化之后, ‘a’ 和 ‘b’ 是【有着相同内容的不同对象】：",-1),be=e("p",null,"因此，‘a’ 和 ‘b’ 之间的联系将会丢失。",-1),je=e("section",{class:"resolvent"},[e("header",null,"解决方法"),e("p",null,"为了解决这个问题，可以采取避免 ‘a’ 或 ‘b’ 被持久化的方法(使用 ‘【paths】’ 选项)，并使用 ‘【afterRestore】’ 钩子在恢复数据后重新存储它们。这样 ‘a’ 和 ‘b’ 就又会有着相同的引用，两者之间的联系就恢复了。")],-1),xe=e("br",null,null,-1),ke=e("hr",null,null,-1),ye=e("h4",null,"基本类型之外的将不会被持久化",-1),$e=e("p",null,"由于数据将会被序列化，因此非基本类型（如 ‘Date’）不会以 ‘Date’ 对象形式存储，而是作为 ‘【string】’。",-1),Re=e("section",{class:"resolvent"},[e("header",null,"解决方法"),e("p",null,"为了解决这个问题，可以使用 ‘【afterRestore】’ 钩子在恢复数据后重新创建对象。")],-1);function we(De,ze){const s=p("code");return n(),o(d,null,[c,_,h,m,g,S,i((n(),o("pre",null,[t(`npm i pinia-plugin-persistedstate
`)])),[[s,void 0,"bash"]]),f,i((n(),o("pre",null,[t(`import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
`)])),[[s,void 0,"js---2,5"]]),v,P,b,i((n(),o("pre",null,[t(`import { defineStore } from 'pinia'

export const useStore = defineStore( 'main', () => {
    const someState = ref('你好 pinia')
    return { someState }
  },
  { persist: true, },
)
`)])),[[s,void 0,"js"]]),j,i((n(),o("pre",null,[t(`import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      someState: '你好 pinia',
    }
  },
  persist: true,
})
`)])),[[s,void 0,"js"]]),x,i((n(),o("pre",null,[t(`import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    someState: '你好 pinia',
    me: 'saved',
    notMe: 'not-saved',
  }),
  persist: {
    // 类型：【string】
    // 默认值：【store.$id】
    key: 'my-custom-key',

    // 默认值：【localStorage】
    storage: sessionStorage,

    // 类型：【string[]】
    // 默认值：【undefined】
    // 该 store 中, 只有 save.me 和 saveMeToo 被持久化，而 save.notMe 不会被持久化。
    paths: ['save.me', 'saveMeToo'],

    // 类型：(context: PiniaPluginContext) => void
    // 默认值：【undefined】
    // 该 Store 将会在恢复数据之前输出 即将恢复 'store'
    beforeRestore: (ctx) => {
      console.log(\`即将恢复 '\${ctx.store.$id}'\`)
    },

    // 类型：(context: PiniaPluginContext) => void
    // 默认值：【undefined】
    // 该 Store 将会在恢复数据之后输出 刚刚恢复完 'store'
    afterRestore: (ctx) => {
      console.log(\`刚刚恢复完 '\${ctx.store.$id}'\`)
    },
  },
})
`)])),[[s,void 0,"js"]]),k,y,$,R,w,D,i((n(),o("pre",null,[t(`import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(
  createPersistedState({
    storage: sessionStorage,
  })
)
`)])),[[s,void 0,"js"]]),z,i((n(),o("pre",null,[t(`import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(
  createPersistedState({
    key: id => \`__persisted__\${id}\`,
  })
)
`)])),[[s,void 0,"js"]]),i((n(),o("pre",null,[t(`import { defineStore } from 'pinia'

defineStore('store', {
  state: () => ({ saved: '' }),
  persist: true,
})
`)])),[[s,void 0,"js"]]),C,N,M,q,B,I,i((n(),o("pre",null,[t(`import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(
  createPersistedState({
    【auto: true】,
  })
)
`)])),[[s,void 0,"js"]]),i((n(),o("pre",null,[t(`import { defineStore } from 'pinia'

defineStore('persisted', {
  state: () => ({ saved: '' }),
})
`)])),[[s,void 0,"js"]]),L,e("section",T,[V,F,i((n(),o("pre",null,[t(`import { defineStore } from 'pinia'

defineStore('not-persisted', {
  state: () => ({ saved: '' }),
  【persist: false】,
})
`)])),[[s,void 0,"js"]])]),A,E,H,K,i((n(),o("pre",null,[t(`import { defineStore } from 'pinia'

defineStore('store', {
  state: () => ({
    toLocal: '',
    toSession: '',
    toNowhere: '',
  }),
  persist: [
    {
      paths: ['toLocal'],
      storage: localStorage,
    }, {
      paths: ['toSession'],
      storage: sessionStorage,
    },
  ],
})
`)])),[[s,void 0,"js"]]),G,e("section",J,[O,Q,i((n(),o("pre",null,[t(`import { defineStore } from 'pinia'

defineStore('store', {
  state: () => ({
    someData: '你好 Pinia',
  }),
  persist: [
    { storage: localStorage, },
    { storage: sessionStorage, },
  ],
})
`)])),[[s,void 0,"js"]]),U]),W,X,Y,Z,ee,i((n(),o("pre",null,[t(`import { defineStore } from 'pinia'

const useStore = defineStore('store', {
  state: () => ({
    someData: '你好 Pinia',
  }),
})
`)])),[[s,void 0,"js"]]),te,i((n(),o("pre",null,[t(`const store = useStore()

store.$hydrate({ runHooks: false })
`)])),[[s,void 0,"js"]]),ne,oe,se,ie,re,le,ae,i((n(),o("pre",null,[t(`import { defineStore } from 'pinia'

const useStore = defineStore('store', {
  state: () => ({
    someData: '你好 Pinia',
  }),
})
`)])),[[s,void 0,"js"]]),pe,i((n(),o("pre",null,[t(`const store = useStore()

store.$persist()
`)])),[[s,void 0,"js"]]),de,ue,ce,_e,he,me,ge,Se,fe,i((n(),o("pre",null,[t(`const a = {
  1: 'one',
  2: 'two',
  // ...
}
const b = a
`)])),[[s,void 0,"js"]]),ve,i((n(),o("pre",null,[t(`a === b // -> true
`)])),[[s,void 0,"js"]]),Pe,i((n(),o("pre",null,[t(`a === b // -> false
`)])),[[s,void 0,"js"]]),be,je,xe,ke,ye,$e,Re],64)}const pt=a(u,[["render",we]]);export{pt as default};
