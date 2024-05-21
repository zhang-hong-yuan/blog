<template>
	<h1>onActivated()</h1>
	<p>注册一个回调函数，若组件实例是 【&lt;KeepAlive&gt;】 缓存树的一部分，当组件被插入到 DOM 中时调用。</p>
	<pre v-code:ts>function onActivated(callback: () => void): void</pre>

	<h1>onDeactivated()</h1>
	<p>注册一个回调函数，若组件实例是 【&lt;KeepAlive&gt;】 缓存树的一部分，当组件从 DOM 中被移除时调用。</p>
	<pre v-code:ts>function onDeactivated(callback: () => void): void</pre>
</template>