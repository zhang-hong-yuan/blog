<template>
	<h1>inject()</h1>
	<p>注入一个由祖先组件或整个应用 (通过 【app.provide()】) 提供的值。</p>
	<pre v-code:ts>// 没有默认值
function inject&lt;T&gt;(key: InjectionKey&lt;T&gt; | string): T | undefined

// 带有默认值
function inject&lt;T&gt;(key: InjectionKey&lt;T&gt; | string, defaultValue: T): T

// 使用工厂函数
function inject&lt;T&gt;(
  key: InjectionKey&lt;T&gt; | string,
  defaultValue: () =&gt; T,
  treatDefaultAsFactory: true
): T
</pre>

	<p>第一个参数是注入的 key。Vue 会遍历父组件链，通过匹配 key 来确定所提供的值。如果父组件链上多个组件对同一个 key 提供了值，那么离得更近的组件将会“覆盖”链上更远的组件所提供的值。如果没有能通过 key
		匹配到值，【inject()】 将返回 【undefined】，除非提供了一个默认值。</p>

	<p>第二个参数是可选的，即在没有匹配到 key 时使用的默认值。</p>

	<p>第二个参数也可以是一个工厂函数，用来返回某些创建起来比较复杂的值。在这种情况下，必须将 【true】 作为第三个参数传入，表明这个函数将作为工厂函数使用，而非值本身。</p>

	<br>
	<p>假设有一个父组件已经提供了一些值，如前面 provide() 的例子中所示：</p>
	<pre v-code:html>&lt;script setup&gt;
import { inject } from 'vue'
import { fooSymbol } from './injectionSymbols'

// 注入不含默认值的静态值
const foo = inject('foo')

// 注入响应式的值
const count = inject('count')

// 通过 Symbol 类型的 key 注入
const foo2 = inject(fooSymbol)

// 注入一个值，若为空则使用提供的默认值
const bar = inject('foo', 'default value')

// 注入一个值，若为空则使用提供的函数类型的默认值
const fn = inject('function', () =&gt; {})

// 注入一个值，若为空则使用提供的工厂函数
const baz = inject('factory', () =&gt; new ExpensiveObject(), true)
&lt;/script&gt;</pre>
</template>