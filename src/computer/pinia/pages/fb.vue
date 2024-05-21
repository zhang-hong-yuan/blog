<template>
	<figure class="plugin-persistedstate">
		<img src="../assets/logo.svg" alt="">
		<h1>pinia-plugin-persistedstate</h1>
	</figure>

	<h2>简介</h2>

	<blockquote>
		官网：
		<a href="https://prazdevs.github.io/pinia-plugin-persistedstate/zh/" style="color: #888;">
			https://prazdevs.github.io/pinia-plugin-persistedstate/zh/
		</a>
	</blockquote>

	<p>‘pinia-plugin-persistedstate’ 旨在通过一致的 API 为每个人和每个项目中的 Pinia Store 提供【持久化存储】。如果希望保存一个【完整】的 Store，或者需要【细粒化】配置 storage
		和序列化的方式，该插件都提供了相应的功能，并且可以在需要持久化的 Store 上使用相同的配置。</p>


	<h2>安装</h2>

	<p>使用如下命令安装 ‘pinia-plugin-persistedstate’：</p>

	<pre v-code:bash>
npm i pinia-plugin-persistedstate
</pre>


	<p>引入 ‘pinia-plugin-persistedstate’ 并将其应用到 pinia：</p>

	<pre v-code:js---2,5>
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
</pre>

	<h2>用法</h2>

	<p>创建 Store 时，将 ‘【persist】’ 选项设置为 ‘true’。</p>


	<p>组合式语法：</p>

	<pre v-code:js>
import { defineStore } from 'pinia'

export const useStore = defineStore( 'main', () => {
    const someState = ref('你好 pinia')
    return { someState }
  },
  { persist: true, },
)
</pre>

	<p>选项式语法：</p>
	<pre v-code:js>
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      someState: '你好 pinia',
    }
  },
  persist: true,
})
</pre>


	<p>也可以传递一个对象给 Store 的 ‘persist’ 属性来进行自定义配置。</p>
	<ul>
		<li><em><strong>‘Key’</strong></em> 用于【引用 storage 中的数据】</li>
		<li>将数据持久化到 <em><strong>‘storage’</strong></em> 中，必须具有 ‘getItem: (key: string) => string | null’ 和 ‘setItem: (key:
			string,
			value: string) =>
			void’ 两个方法。</li>
		<li><em><strong>‘paths’</strong></em> 用于指定 【state 中哪些数据需要被持久化】。‘【[]】’ 表示【不持久化任何状态】，‘【a;;undefined】’ 或 ‘【a;;null】’
			表示【持久化整个 state】。
		</li>

		<li><em><strong>‘【c;;beforeRestore】’</strong></em> 该 hook 将在【b;;从 storage 中恢复数据之前】触发，并且它可以访问整个
			‘PiniaPluginContext’，这可用于在恢复数据之前强制地执行特定的操作。</li>

		<li><em><strong>‘【c;;afterRestore】’</strong></em> 该 hook 将在【b;;从 storage 中恢复数据之后】触发，并且它可以访问整个
			‘PiniaPluginContext’，这可用于在恢复数据之后强制地执行特定的操作。</li>

		<li><em><strong>‘debug’</strong></em> 类型：‘boolean’；默认值：‘false’。当设置为 true 时，持久化/恢复 Store 时可能发生的任何错误都将使用
			‘console.error’ 输出。</li>
	</ul>

	<pre v-code:js>
import { defineStore } from 'pinia'

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
      console.log(`即将恢复 '${ctx.store.$id}'`)
    },

    // 类型：(context: PiniaPluginContext) => void
    // 默认值：【undefined】
    // 该 Store 将会在恢复数据之后输出 刚刚恢复完 'store'
    afterRestore: (ctx) => {
      console.log(`刚刚恢复完 '${ctx.store.$id}'`)
    },
  },
})
</pre>

	<section class="warning">
		<header>警告</header>
		<p>谨慎使用 ‘【PiniaPluginContext】’，意外可能会出现。</p>
	</section>


	<br>

	<hr>

	<h4>全局持久化配置</h4>

	<p>在安装插件之后，可以使用 ‘createPersistedState()’ 来初始化插件。这些配置将会成为【项目内所有 Store 的默认选项】。</p>
	<blockquote>这种方法有时被称为工厂函数。</blockquote>


	<pre v-code:js>
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(
  createPersistedState({
    storage: sessionStorage,
  })
)
</pre>

	<p>上述例子中，每个声明 ‘【persist: true】’ 的 Store 都会默认将数据持久化到 ‘sessionStorage’ 中。可用的全局配置包括：</p>
	<ul>
		<li>‘storage’</li>
		<li>‘beforeRestore’</li>
		<li>‘afterRestore’</li>
		<li>‘serializer’</li>
	</ul>

	<section class="info">
		<header>提示</header>
		<p>传递给单个 Store 的 ‘persist’ 配置的任何选项都将【覆盖】全局配置中声明的对应项。</p>
	</section>

	<br>

	<hr>

	<h4>全局 key 配置</h4>

	<p>全局 ‘key’ 配置接受传入 Store key 的【函数】，并返回一个【新的 storage 密钥】。</p>


	<pre v-code:js>
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(
  createPersistedState({
    key: id => `__persisted__${id}`,
  })
)
</pre>

	<pre v-code:js>
import { defineStore } from 'pinia'

defineStore('store', {
  state: () => ({ saved: '' }),
  persist: true,
})
</pre>

	<p>上述例子中，store 将保存在 ‘【__persisted__store】’ key 下，而不是 ‘store’ 下。</p>

	<section class="info">
		<header>提示</header>
		<p>当需要在全局范围内对所有 Store key 添加前缀/后缀时，应考虑此选项。</p>
	</section>


	<br>
	<hr>

	<h4>启用所有 Store 默认持久化</h4>


	<p>该配置将会使所有 Store 持久化存储。</p>


	<pre v-code:js>
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(
  createPersistedState({
    【auto: true】,
  })
)
</pre>

	<pre v-code:js>
import { defineStore } from 'pinia'

defineStore('persisted', {
  state: () => ({ saved: '' }),
})
</pre>


	<p>上述例子中，store 将使用默认配置（或者已有的全局配置）进行持久化存储。</p>


	<section class="resolvent">
		<header>提示</header>
		<p>当使用该配置后，也可以单独为一个 Store 设置是否持久化：</p>

		<pre v-code:js>
import { defineStore } from 'pinia'

defineStore('not-persisted', {
  state: () => ({ saved: '' }),
  【persist: false】,
})
</pre>
	</section>

	<br>

	<hr>


	<h4>每个 Store 可以有多个持久化配置</h4>

	<p>在某些特定的用例中，需要将数据从单个 Store 持久化到不同的 storage 中。‘persist’ 选项还可以接受多个类似的配置。</p>

	<pre v-code:js>
import { defineStore } from 'pinia'

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
</pre>

	<p>上述例子中， ‘toLocal’ 的值将保存在 ‘【e;;localStorage】’ 中，而 ‘toSession’ 的值将保留在 ‘【e;;sessionStorage】’ 中，‘toNowhere’ 则不会持久化。</p>


	<section class="warning">
		<header>警告</header>
		<p>在两种持久化配置中，<ins>不指定 ‘paths’ 选项</ins>或<ins>以同一路径为目标时</ins>要注意，因为这可能会导致【恢复后的数据不一致】。在恢复数据的过程中，持久化的处理顺序将与声明时的顺序【相同】。
		</p>

		<pre v-code:js>
import { defineStore } from 'pinia'

defineStore('store', {
  state: () => ({
    someData: '你好 Pinia',
  }),
  persist: [
    { storage: localStorage, },
    { storage: sessionStorage, },
  ],
})
</pre>

		<p>在上述特定情况下，恢复数据后，从 ‘sessionStorage’ 取回的数据将【替换】从 ‘localStorage’ 取回的数据。</p>
	</section>

	<br>

	<hr>

	<h4>强制恢复数据</h4>


	<p>每个 Store 都有 ‘$hydrate’ 方法来手动触发数据恢复。默认情况下，调用此方法还将触发 ‘beforeRestore’ 和 ‘afterRestore’ 钩子。但是可以通过配置方法来避免这两个钩子触发。</p>

	<p>例如在下面 Store 中：</p>

	<pre v-code:js>
import { defineStore } from 'pinia'

const useStore = defineStore('store', {
  state: () => ({
    someData: '你好 Pinia',
  }),
})
</pre>

	<p>可以调用 ‘$hydrate’ 方法：</p>

	<pre v-code:js>
const store = useStore()

store.$hydrate({ runHooks: false })
</pre>


	<p>这将从 storage 中获取数据并用它替换当前的 state。并且在上面的示例中，钩子函数不会被触发。</p>


	<section class="warning">
		<header>警告</header>
		<p>在大多数情况下，不需要手动恢复 state 。并且确保知道使用 ‘$hydrate’ 的原因不是因为 bug （无论是你的代码导致的还是插件本身原因）。</p>
	</section>


	<br>

	<hr>


	<h4>强制持久化</h4>

	<p>每个 Store 都有 ‘$persist’ 方法来手动触发持久化。</p>

	<p>例如在下面 store 中：</p>
	<pre v-code:js>
import { defineStore } from 'pinia'

const useStore = defineStore('store', {
  state: () => ({
    someData: '你好 Pinia',
  }),
})
</pre>

	<p>可以调用 ‘$persist’ 方法：</p>

	<pre v-code:js>
const store = useStore()

store.$persist()
</pre>

	<p>这会强制将 Store state 保存在已配置的 storage 中。</p>


	<section class="warning">
		<header>警告</header>
		<p>在大多数情况下，不需要手动保存 state 。并且确保知道使用 ‘$persist’ 的原因不是因为 bug （无论是你的代码导致的还是插件本身原因）。</p>
	</section>


	<br>
	<h2>局限性</h2>
	<p>虽然该插件具有很大的灵活性以及丰富的功能，但也有一些限制需要考虑。</p>
	<br>
	<hr>

	<h4>引用不会被持久化</h4>
	<p>由于数据将会被序列化，因此引用在刷新时将会丢失。 我们来看看下面这个例子：</p>

	<pre v-code:js>
const a = {
  1: 'one',
  2: 'two',
  // ...
}
const b = a
</pre>

	<p>在序列化之前， ‘a’ 和 ‘b’ 指向了同一个对象：</p>

	<pre v-code:js>
a === b // -> true
</pre>


	<p>在反序列化之后, ‘a’ 和 ‘b’ 是【有着相同内容的不同对象】：</p>

	<pre v-code:js>
a === b // -> false
</pre>

	<p>因此，‘a’ 和 ‘b’ 之间的联系将会丢失。</p>

	<section class="resolvent">
		<header>解决方法</header>
		<p>为了解决这个问题，可以采取避免 ‘a’ 或 ‘b’ 被持久化的方法(使用 ‘【paths】’ 选项)，并使用 ‘【afterRestore】’ 钩子在恢复数据后重新存储它们。这样 ‘a’ 和 ‘b’
			就又会有着相同的引用，两者之间的联系就恢复了。</p>
	</section>
	<br>
	<hr>

	<h4>基本类型之外的将不会被持久化</h4>

	<p>由于数据将会被序列化，因此非基本类型（如 ‘Date’）不会以 ‘Date’ 对象形式存储，而是作为 ‘【string】’。</p>

	<section class="resolvent">
		<header>解决方法</header>
		<p>为了解决这个问题，可以使用 ‘【afterRestore】’ 钩子在恢复数据后重新创建对象。</p>
	</section>
</template>