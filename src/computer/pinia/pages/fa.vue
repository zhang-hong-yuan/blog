<template>
	<h1>插件 Plugins</h1>

	<p>由于有了底层 API 的支持，Pinia store 现在完全支持扩展。以下是可以扩展的内容：</p>


	<ul>
		<li>为 store 添加新的属性</li>
		<li>定义 store 时增加新的选项</li>
		<li>为 store 增加新的方法</li>
		<li>包装现有的方法</li>
		<li>改变甚至取消 action</li>
		<li>实现副作用，如本地存储</li>
		<li><strong>仅</strong>应用插件于特定 store</li>
	</ul>

	<p>插件是通过 ‘【pinia.use()】’ 添加到 pinia 实例的。最简单的例子是通过返回一个【对象】将一个静态属性添加到所有 store。</p>

	<pre v-code:js>
import { createPinia } from 'pinia'

// 创建的每个 store 中都会添加一个名为 `secret` 的属性。
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
</pre>

	<p>这对添加全局对象很有用，如路由器、modal 或 toast 管理器。</p>
	<br>
	<hr>

	<h3>简介</h3>
	<p>Pinia 插件是一个【函数】，可以选择性地返回要添加到 store 的属性。它接收一个可选参数，即 ‘【context】’。</p>

	<pre v-code:js>
export function myPiniaPlugin(context) {
  context.【pinia】   // 用 `createPinia()` 创建的 pinia。 
  context.【app】     // 用 `createApp()` 创建的当前应用(仅 Vue 3)。
  context.【store】   // 该插件正在扩展的 store
  context.【options】 // 定义传给 `defineStore()` 的 store 的可选对象。
  // ...
}
</pre>

	<p>然后用 ‘pinia.use()’ 将这个函数传给 ‘pinia’：</p>

	<pre v-code:js>
pinia.use(myPiniaPlugin)
</pre>

	<p>插件只会应用于<strong>在 【‘pinia’ 传递给应用】后</strong>创建的 store，否则它们不会生效。</p>

	<br>

	<hr>

	<h3>添加新的 state</h3>

	<p>可以直接通过在一个插件中返回包含特定属性的对象来为【每个 store】 都添加上特定属性：</p>

	<pre v-code:js>
pinia.use(() => ({ hello: 'world' }))
</pre>

	<p>也可以直接在 ‘store’ 上设置该属性，但<strong>可以的话，请使用返回【对象】的方法，这样它们就能被 devtools 自动追踪到：</strong></p>

	<pre v-code:js>
pinia.use(({ store }) => {
  store.hello = 'world'
})
</pre>


	<p>值得注意的是，每个 ‘store’ 都被 ‘【reactive】’ 包装过(自动具有响应式)，所以可以自动解包任何它所包含的 Ref(‘ref()’、‘computed()’...)。</p>

	<pre v-code:js>
const sharedRef = ref('shared')
pinia.use(({ store }) => {
  // 每个 store 都有单独的 `hello` 属性
  store.hello = ref('secret')
  // 它会被自动解包
  store.hello // 'secret'

  // 所有的 store 都在共享 `shared` 属性的值
  store.shared = sharedRef
  store.shared // 'shared'
})
</pre>


	<p>这就是在没有 ‘【.value】’ 的情况下依旧可以访问所有计算属性的原因，也是它们为什么是响应式的原因。</p>


	<h5>添加新的外部属性</h5>

	<p>当添加外部属性、第三方库的类实例或非响应式的简单值时，应该先用 ‘【markRaw()】’ 来包装一下它，再将它传给 pinia。下面是一个在每个 store 中添加路由器的例子：</p>

	<pre v-code:js>
import { markRaw } from 'vue'
// 根据路由器的位置来调整
import { router } from './router'

pinia.use(({ store }) => {
  store.router = markRaw(router)
})
</pre>

	<br>

	<hr>

	<h3>在插件中调用 $subscribe</h3>

	<p>也可以在插件中使用 ‘store.$subscribe’ 和 ‘store.$onAction’。</p>

	<pre v-code:js>
pinia.use(({ store }) => {
  store.$subscribe(() => {
    // 响应 【store】 变化
  })
  store.$onAction(() => {
    // 响应 【store actions】
  })
})
</pre>

	<p>需要注意的是，在一个插件中， state 变更或添加(包括调用 ‘store.$patch()’)都是发生在 store 被激活之前，因此<strong>不会触发任何订阅函数</strong>。</p>

	<br>

	<hr>

	<h3>添加新的选项</h3>


	<p>在定义 store 时，可以创建新的选项，以便在插件中使用它们。例如，可以创建一个 ‘【debounce】’ 选项，允许任何 action 实现防抖。</p>


	<pre v-code:js>
defineStore('search', {
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
</pre>

	<p>然后，该插件可以读取该选项来包装 【a;;action】，并替换原始 【a;;action】：</p>

	<pre v-code:js>
// 使用任意防抖库
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
</pre>

	<p>在使用 setup 语法时，自定义选项作为第 3 个参数传递：</p>

	<pre v-code:js>
defineStore(
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
</pre>
</template>