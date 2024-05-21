<template>
	<h1>onBeforeUnmount()</h1>
	<p>注册一个钩子，在组件实例被卸载之前调用。</p>
	<pre v-code:ts>function onBeforeUnmount(callback: () => void): void</pre>
	<p>当这个钩子被调用时，组件实例依然还保有全部的功能。</p>


	<h1>onUnmounted()</h1>

	<p>注册一个回调函数，在组件实例被卸载之后调用。一个组件在以下情况下被视为已卸载：</p>

	<ul>
		<li>其所有子组件都已经被卸载。</li>
		<li>所有相关的响应式作用 (渲染作用以及 【setup()】 时创建的计算属性和侦听器) 都已经停止。</li>
	</ul>
	<pre v-code:ts>function onUnmounted(callback: () => void): void</pre>
	<p>可以在这个钩子中手动清理一些副作用，例如计时器、DOM 事件监听器或者与服务器的连接。</p>


	<p><b>示例：</b></p>
	<pre v-code:html><div v-pre>&lt;script setup&gt;
import { onMounted, onUnmounted } from 'vue'

let intervalId
onMounted(() =&gt; {
  intervalId = setInterval(() =&gt; {
    // ...
  })
})

onUnmounted(() =&gt; clearInterval(intervalId))
&lt;/script&gt;</div></pre>
</template>