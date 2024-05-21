<template>
	<h1>app.use()</h1>
	<p>安装一个插件。</p>

	<pre v-code:ts>interface App {
  use(plugin: Plugin, ...options: any[]): this
}</pre>

	<p>第一个参数应是插件本身，可选的第二个参数是要传递给插件的选项。</p>

	<p>插件可以是一个带 【install()】 方法的对象，亦或直接是一个将被用作 【install()】 方法的函数。插件选项 (【app.use()】 的第二个参数) 将会传递给插件的 【install()】 方法。</p>
	<p>若 【app.use()】 对同一个插件多次调用，该插件只会被安装一次。</p>


	<pre v-code:js>import { createApp } from 'vue'
import MyPlugin from './plugins/MyPlugin'

const app = createApp({
  /* ... */
})

app.use(MyPlugin)</pre>
</template>