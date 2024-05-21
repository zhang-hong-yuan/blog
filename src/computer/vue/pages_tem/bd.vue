<template>
	<h1>app.directive()</h1>
	<p>如果同时传递一个名字和一个指令定义，则注册一个全局指令；如果只传递一个名字，则会返回用该名字注册的指令 (如果存在的话)。</p>

	<pre v-code:ts>interface App {
  directive(name: string): Directive | undefined
  directive(name: string, directive: Directive): this
}</pre>

	<p>示例：</p>
	<pre v-code:js>import { createApp } from 'vue'

const app = createApp({
  /* ... */
})

// 注册（对象形式的指令）
app.directive('my-directive', {
  /* 自定义指令钩子 */
})

// 注册（函数形式的指令）
app.directive('my-directive', () => {
  /* ... */
})

// 得到一个已注册的指令
const myDirective = app.directive('my-directive')</pre>
</template>