<template>
	<h1>createApp()</h1>
	<p>每个 Vue 应用都是通过 ‘createApp()’ 函数创建一个新的 <b>应用实例</b>：</p>
	<pre v-code:ts>function createApp(rootComponent: Component, rootProps?: object): App</pre>

	<p>第一个参数是根组件。第二个参数可选，它是要传递给根组件的 props。</p>

	<p>可以直接内联根组件：</p>
	<pre v-code:js>import { createApp } from 'vue'

const app = createApp({
  /* 根组件选项 */
})</pre>
	<p>也可以使用从别处导入的组件：</p>
	<pre v-code:js>import { createApp } from 'vue'
// 从一个单文件组件中导入根组件
import App from './App.vue'

const app = createApp(App)</pre>

	<p>每个应用都需要一个“根组件”，其他组件将作为其子组件。大多数真实的应用都是由一棵嵌套的、可重用的组件树组成的。</p>
</template>