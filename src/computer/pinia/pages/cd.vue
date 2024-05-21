<template>
	<h1>订阅 state</h1>


	<p>可以通过 store 的 ‘【$subscribe()】’ 方法侦听 state 及其变化。比起普通的 ‘watch()’，使用 ‘$subscribe()’ 的好处是 subscriptions 在 patch 后只触发一次
		(例如，当使用 patch 的函数版本时)。</p>

	<p>在【组件::什么位置？】中设置一个回调，当【状态发生变化】时被调用。返回一个用来【移除此回调】的函数。</p>


	<pre v-code:js class="nocopy">
stateStore.$subscribe(callback, [options])
</pre>



	<p>回调函数有两个参数：第一个是【修改】的相关信息；第二个是 【state】</p>

	<pre v-code:js>
cartStore.$subscribe((mutation, state) => {
// import { MutationType } from 'pinia'
mutation.type // 'direct' | 'patch object' | 'patch function'
// 和 cartStore.$id 一样
mutation.storeId // 'cart'
// 只有 mutation.type === 'patch object'的情况下才可用
mutation.payload // 传递给 cartStore.$patch() 的补丁对象。

// 每当状态发生变化时，将整个 state 持久化到本地存储。
localStorage.setItem('cart', JSON.stringify(state))
})
</pre>


	<p>默认情况下，state subscription 会被绑定到添加它们的组件上 (如果 store 在组件的 ‘setup()’ 里面)。这意味着，当该组件被卸载时，它们将被自动删除。如果想在组件卸载后依旧保留它们，可以将 ‘{
		【detached】: true }’ 作为第二个参数，以将 state subscription 从当前组件中分离：</p>

	<pre v-code:html>
&lt;script setup&gt;
const someStore = useSomeStore()
// 此订阅器即便在组件卸载之后仍会被保留
someStore.$subscribe(callback, { detached: true })
&lt;/script&gt;
</pre>

	<section class="tip">
		<header>TIP</header>
		<p>可以在 ‘pinia’ 实例上使用 ‘【watch()】’ 函数侦听整个 state。</p>

		<pre v-code:js>
watch(
  pinia.state,
  (state) => {
    // 每当状态发生变化时，将整个 state 持久化到本地存储。
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)
</pre>
	</section>

</template>