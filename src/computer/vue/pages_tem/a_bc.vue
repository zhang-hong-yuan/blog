<template>
	<h1>app.component()</h1>
	<p>如果同时传递一个组件名字符串及其定义，则注册一个全局组件；如果只传递一个名字，则会返回用该名字注册的组件 (如果存在的话)。</p>
	<pre v-code:ts>interface App {
  component(name: string): Component | undefined
  component(name: string, component: Component): this
}</pre>
	<p>示例：</p>
	<pre v-code:js>import { createApp } from 'vue'

const app = createApp({})

// 注册一个选项对象
app.component('my-component', {
  /* ... */
})

// 得到一个已注册的组件
const MyComponent = app.component('my-component')</pre>
</template>