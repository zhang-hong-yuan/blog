<template>
	<figure class="logo">
		<img src="$logo/vue.svg" alt="">
		<h1>Vue.js</h1>
	</figure>
	<p>Vue (发音为 ‘/vjuː/’，类似 view)是一款用于构建用户界面的 JavaScript 框架。它基于标准 <strong>HTML</strong>、<strong>CSS</strong> 和
		<strong>JavaScript</strong> 构建，并提供了一套声明式的、组件化的编程模型。
	</p>

	<p>下面是一个最基本的示例：</p>

	<pre v-code:js>
import { createApp, ref } from 'vue'

createApp({
  setup() {
    return {
      count: ref(0)
    }
  }
}).mount('#app')
</pre>

	<pre v-code:html>
<div v-pre>&lt;div id="app"&gt;
  &lt;button @click="count++"&gt;
    Count is: {{ count }}
  &lt;/button&gt;
&lt;/div&gt;</div>
</pre>


	<p>上面的示例展示了 Vue 的两个核心功能：</p>

	<ul>
		<li><strong>声明式渲染</strong>：Vue 基于标准 HTML 拓展了一套模板语法，使得我们可以声明式地描述最终输出的 HTML 和 JavaScript 状态之间的关系。</li>
		<li><strong>响应性</strong>：Vue 会自动跟踪 JavaScript 状态并在其发生变化时响应式地更新 DOM。</li>
	</ul>
</template>