<template>
	<h1>重置 state</h1>

	<p>使用<em>选项式 API</em> 时，可以通过调用 store 的 ‘【$reset()】’ 方法将 state 重置为初始值。</p>

	<pre v-code:js>
const store = useStore()

store.$reset()
</pre>

	<p>在 ‘$reset()’ 内部，会调用 ‘state()’ 函数来创建一个新的状态对象，并用它替换当前状态。</p>

	<br>

	<p>在 <em>Setup Stores</em> 中，需要自己动手创建 ‘$reset()’ 方法：</p>

	<pre v-code:js>
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function $reset() {
    【count.value = 0】
  }

  return { count, $reset }
})
</pre>
</template>
