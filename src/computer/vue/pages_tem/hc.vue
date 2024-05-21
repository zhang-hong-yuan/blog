<template>
	<h1>v-text</h1>
	<p>更新元素的文本内容。期望的绑定值类型：【string】。</p>

	<p>v-text 会把 【&lt;】 【&gt;】转换为【&amp;lt;】 【&amp;gt;】</p>

	<pre v-code:html><div v-pre>&lt;span v-text="msg"&gt;&lt;/span&gt;
&lt;!-- 等同于 --&gt;
&lt;span&gt;{{ msg }}&lt;/span&gt;</div></pre>

	<p>【v-text】 通过设置元素的 【textContent】 属性来工作，因此它将覆盖元素中所有现有的内容。如果需要更新 【textContent】 的部分，应该使用插值语法代替。</p>


	<h1>v-html</h1>
	<p>更新元素的 【innerHTML】。期望的绑定值类型：【string】。</p>

	<p>【v-html】 的内容直接作为普通 HTML 插入——Vue 模板语法是不会被解析的。</p>

	<pre v-code:html>&lt;div v-html="html"&gt;&lt;/div&gt;</pre>

	<p>数据绑定将会被忽略。注意，不能使用 【v-html】 来拼接组合模板，因为 Vue 不是一个基于字符串的模板引擎。在使用 Vue 时，应当使用组件作为 UI 重用和组合的基本单元。</p>

	<section class="warning">
		<header>安全说明</header>
		<p>在你的站点上动态渲染任意的 HTML 是非常危险的，因为它很容易导致 XSS 攻击。请只对可信内容使用 HTML 插值，绝不要将用户提供的内容作为插值。</p>
	</section>
	<p>在单文件组件，【scoped】 样式将不会作用于 【v-html】 里的内容，因为 HTML 内容不会被 Vue 的模板编译器解析。如果需要让 【v-html】 的内容也支持 【scoped CSS】，可以使用 深度选择器
		【:deep()】</p>
</template>