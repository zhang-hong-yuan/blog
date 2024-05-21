<template>
	<h1>变更 state</h1>

	<p>除了用 ‘store.count++’ 直接改变 store，还可以调用 ‘【$patch】’ 方法。它允许用一个 state 的【补丁对象】在同一时间更改多个属性：</p>


	<pre v-code:js>
store.$patch({
  count: store.count + 1,
  age: 120,
  name: 'DIO',
})
</pre>

	<p>不过，用这种语法的话，有些变更真的很难实现或者很耗时：任何集合的修改（例如，向数组中添加、移除一个元素或是做 ‘splice’ 操作）都需要创建一个新的集合。因此，‘$patch’
		方法也接受一个【函数】来组合这种难以用补丁对象实现的变更。</p>


	<pre v-code:js>
store.$patch((【state】) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
</pre>

	<p>两种变更 store 方法的主要区别是，‘$patch()’ 允许将多个变更归入 devtools 的同一个条目中。同时请注意，<strong>直接修改 state，‘$patch()’ 也会出现在 devtools
			中</strong>，而且可以进行
		time travel。</p>




	<p>注意：<strong>不能完全替换掉</strong> store 的 state，因为那样会破坏其响应性。但是，可以 patch 它。</p>

	<pre v-code:js>
// 这实际上并没有替换`$state`
store.$state = { count: 24 }
// 在它内部调用 `$patch()`：
store.$patch({ count: 24 })
</pre>


</template>