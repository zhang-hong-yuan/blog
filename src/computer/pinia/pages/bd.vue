<template>
	<h1>组合式 Store</h1>
	<p>组合式 store 是可以【相互】使用，Pinia 当然也支持它。但有一个规则需要遵循：</p>


	<p>如果<strong>两个或更多的 store 相互使用</strong>，它们不可以通过 getters 或 actions 创建一个无限循环。它们也不可以<strong>【同时】</strong>在它们的 setup
		函数中直接互相读取对方的 state：</p>


	<pre v-code:js>
const useX = defineStore('x', () => {
  const y = useY()

  y.name // ❌ 这是不可以的，因为 y 也试图读取 x.name

  function doSomething() {
    // ✅ 读取 computed 或 action 中的 y 属性
    const yName = y.name
    // ...
  }

  return { name: ref('I am X'), }
})

const useY = defineStore('y', () => {
  const x = useX()

  x.name // ❌ 这是不可以的，因为 x 也试图读取 y.name

  function doSomething() {
    // ✅ 读取 computed 或 action 中的 x 属性
    const xName = x.name
    // ...
  }

  return { name: ref('I am Y'), }
})
</pre>


	<h3>嵌套 store</h3>

	<p>如果一个 store 使用另一个 store，可以直接导入并在 【a;;actions】 和 【a;;getters】 中调用 ‘【useStore()】’ 函数。然后就可以像在 Vue 组件中那样使用 store。</p>

	<p>对于 setup store ，直接使用 store 函数顶部的一个 store：</p>

	<pre v-code:js>
import { useUserStore } from './user'

export const useCartStore = defineStore('cart', () => {
  const user = 【useUserStore()】
  const list = ref([])

  const summary = computed(() => {
    return `Hi ${user.name}, you have ${list.value.length} items in your cart. It costs ${price.value}.`
  })

  function purchase() {
    return apiPurchase(user.id, this.list)
  }

  return { summary, purchase }
})
</pre>


	<h3>共享 Getter</h3>

	<p>可以直接在一个 getter 中调用 ‘useOtherStore()’：</p>
	<pre v-code:js>
import { defineStore } from 'pinia'
import { useUserStore } from './user'

export const useCartStore = defineStore('cart', {
  getters: {
    summary(state) {
      const user = 【useUserStore()】

      return `Hi ${user.name}, you have ${state.list.length} items in your cart. It costs ${state.price}.`
    },
  },
})
</pre>


	<h3>共享 Actions</h3>

	<p>actions 也一样：</p>

	<pre v-code:js>
import { defineStore } from 'pinia'
import { useUserStore } from './user'

export const useCartStore = defineStore('cart', {
  actions: {
    async orderCart() {
      const user = 【useUserStore()】

      try {
        await apiOrderCart(user.token, this.items)
        // 其他 action
        this.emptyCart()
      } catch (err) {
        displayError(err)
      }
    },
  },
})
</pre>


</template>