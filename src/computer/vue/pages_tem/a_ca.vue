<template>
	<h1>&lt;template&gt;</h1>

	<p>每个 ‘*.vue’ 文件最多可以包含一个顶层 ‘&lt;template&gt;’ 块。</p>


	<h2>模板语法</h2>
	<p>最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)。</p>

	<pre v-code:html><div v-pre>&lt;span&gt;Message: {{ msg }}&lt;/span&gt;</div></pre>

	<p>双大括号不能在 HTML attributes 中使用。想要响应式地绑定一个 attribute，应该使用 ‘v-bind’ 指令。</p>
	<p>双大括号会将数据解释为纯文本，而不是 HTML。若想插入 HTML，需要使用 ‘v-html’ 指令。</p>

	<pre v-code:html><div v-pre>&lt;p&gt;Using text interpolation: {{ rawHtml }}&lt;/p&gt;
&lt;p&gt;Using v-html directive: &lt;span v-html="rawHtml"&gt;&lt;/span&gt;&lt;/p&gt;
</div></pre>

	<section class="demo">
		<p>Using text interpolation: &lt;span style="color: red"&gt;This should be red.&lt;/span&gt;</p>
		<p>Using v-html directive: <span style="color: red">This should be red.</span></p>
	</section>

	<br>
	<p>在 Vue 模板内，JavaScript 表达式(语句无效)可以被使用在如下场景上：</p>

	<ul class="mb0">
		<li>在文本插值中 (双大括号)</li>
		<li>在任何 Vue 指令attribute 的值中</li>
	</ul>

	<pre v-code:html---1,3.escape>
<ul class="mb0">
	<li>在文本插值中 (双大括号)</li>
	<li>在任何 Vue 指令attribute 的值中</li>
</ul>
</pre>


	<pre v-code:html><div v-pre>{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

&lt;div :id="`list-${id}`"&gt;&lt;/div&gt;
</div></pre>




	<p>绑定在表达式中的方法在组件每次更新时都会被重新调用，因此不应该产生任何副作用，比如改变数据或触发异步操作。</p>
	<br>

	<h2>受限的全局访问</h2>
	<p>模板中的表达式将被沙盒化，仅能够访问到有限的全局对象列表。该列表中会暴露常用的内置全局对象，比如 ‘Math’ 和 ‘Date’。</p>
	<p>没有显式包含在列表中的全局对象将不能在模板内表达式中访问，例如用户附加在 ‘window’ 上的属性。然而，你也可以自行在 ‘app.config.globalProperties’ 上显式地添加它们，供所有的 Vue
		表达式使用。
	</p>
</template>