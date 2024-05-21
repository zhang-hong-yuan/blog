<template>
	<h1>Action</h1>

	<p>Action 相当于组件中的 【method】。它们可以通过 ‘defineStore()’ 中的 actions 属性来定义，并且它们也是定义业务逻辑的完美选择。</p>


	<pre v-code:js>
export const useCounterStore = defineStore('main', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
  },
})
</pre>

	<p>类似 getter，action 也可通过 ‘this’ 访问整个 store 实例。不同的是，action 可以是【异步】的，可以在它们里面 await 调用任何 API，以及【其他 action】！</p>

	<p>下面是一个使用 Mande 的例子。请注意，使用什么库并不重要，只要得到的是一个‘【Promise】’，甚至可以在浏览器中使用原生 fetch 函数：</p>

	<pre v-code:js>
import { mande } from 'mande'

const api = mande('/api/users')

export const useUsers = defineStore('users', {
  state: () => ({
    userData: null,
    // ...
  }),

  actions: {
    async registerUser(login, password) {
      try {
        this.userData = await api.post({ login, password })
        showTooltip(`Welcome back ${this.userData.name}!`)
      } catch (error) {
        showTooltip(error)
        // 让表单组件显示错误
        return error
      }
    },
  },
})
</pre>


	<p>也完全可以自由地设置任何需要的参数以及返回任何结果。Action 可以像函数或者通常意义上的【方法】一样被调用：</p>


	<pre v-code:html>
&lt;script setup&gt;
const store = useCounterStore()
// 将 action 作为 store 的方法进行调用
store.randomizeCounter()
&lt;/script&gt;
&lt;template&gt;
  &lt;!-- 即使在模板中也可以 --&gt;
  &lt;button @click="store.randomizeCounter()"&gt;Randomize&lt;/button&gt;
&lt;/template&gt;
</pre>



</template>