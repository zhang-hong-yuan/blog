<template>
	<h2>元素内容</h2>
	<p>以下三个方法的参数也可以使用函数来设置所有匹配元素的内容。</p>
	<pre v-code:js>$(selector).html(function([index],[oldcontent]))</pre>
	<ul>
		<li><code>index</code> 可选。接收选择器的 index 位置。</li>
		<li><code>oldcontent</code> 可选。接收选择器的当前内容。</li>

	</ul>
	<br>
	<p>普通元素内容 <code>html()</code> (相当于原生innerHTML)</p>
	<ul>
		<li>获取元素的内容 <code>html()</code></li>
		<li>设置元素的内容 <code>html(&quot;内容&quot;)</code></li>

	</ul>

	<p>普通元素文本内容 <code>text()</code> (相当与原生 innerText)</p>
	<ul>
		<li>获取元素的文本内容 <code>text()</code></li>
		<li>设置元素的文本内容 <code>text(&quot;文本内容&quot;)</code></li>

	</ul>

	<p>表单的值 <code>val()</code> (相当于原生value)</p>
	<ul>
		<li>获取表单的值 <code>val()</code></li>
		<li>设置表单的值 <code>val(&quot;内容&quot;)</code></li>

	</ul>
</template>