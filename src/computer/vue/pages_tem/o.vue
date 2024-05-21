<template>
	<h1>生命周期函数</h1>
	<p>每个 Vue 组件实例在创建时都需要经历一系列的初始化步骤，比如设置好数据侦听，编译模板，挂载实例到 DOM，以及在数据改变时更新 DOM。在此过程中，它也会运行被称为生命周期钩子的函数，让开发者有机会在特定阶段运行自己的代码。
	</p>
	<p>当调用生命周期函数时，Vue 会自动将回调函数注册到当前正被初始化的组件实例上。这意味着这些钩子应当在组件初始化时被同步注册。例如，请不要这样做：</p>
	<pre v-code:js>setTimeout(() => {
  onMounted(() => {
    // 异步注册时当前组件实例已丢失
    // 这将不会正常工作
  })
}, 100)</pre>
	<p>注意这并不意味着对 【onMounted】 的调用必须放在 【setup()】 或 【&lt;script setup&gt;】 内的词法上下文中。【onMounted()】
		也可以在一个外部函数中调用，只要调用栈是同步的，且最终起源自
		【setup()】 就可以。</p>
	<p>最常用的是 【onMounted】、【onUpdated】 和 【onUnmounted】。</p>
	<p>
		【onBeforeMount()】、【onMounted】、【onBeforeUpdate()】、【onUpdated()】、【onBeforeUnmount()】、【onUnmounted()】、【onActivated()】、【onDeactivated()】钩子在服务器端渲染期间不会被调用。
	</p>
	<h2>生命周期图示</h2>
	<p>下面是实例生命周期的图表。你现在并不需要完全理解图中的所有内容，但以后它将是一个有用的参考。</p>
	<figure>
		<img src="../assets/lifecycle.png" alt="">
	</figure>
</template>