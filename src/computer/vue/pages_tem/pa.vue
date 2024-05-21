<template>
	<h1>provide()</h1>
	<p>提供一个值，可以被后代组件注入。</p>
	<p>【provide()】 接受两个参数：第一个参数是要注入的 key，可以是一个字符串或者一个 symbol，第二个参数是要注入的值。</p>

	<pre v-code:ts>function provide&lt;T&gt;(key: InjectionKey&lt;T&gt; | string, value: T): void</pre>




	<h2>示例</h2>
	<pre v-code:html>&lt;script setup&gt;
import { ref, provide } from 'vue'
import { fooSymbol } from './injectionSymbols'

// 提供静态值
provide('foo', 'bar')

// 提供响应式的值
const count = ref(0)
provide('count', count)

// 提供时将 Symbol 作为 key
provide(fooSymbol, count)
&lt;/script&gt;</pre>

	<h2>app.provide()</h2>
	<p>提供一个值，可以在应用中的所有后代组件中注入使用。</p>
	<pre v-code:ts>interface App {
  provide&lt;T&gt;(key: InjectionKey&lt;T&gt; | symbol | string, value: T): this
}</pre>

	<p>示例：</p>
	<pre v-code:js>import { createApp } from 'vue'

const app = createApp(/* ... */)

app.provide('message', 'hello')</pre>

	<p>在应用的某个组件中：</p>

	<pre v-code:js>import { inject } from 'vue'

export default {
  setup() {
    console.log(inject('message')) // 'hello'
  }
}</pre>
</template>