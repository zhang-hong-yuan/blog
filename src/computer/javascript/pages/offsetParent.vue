<template>
	<h1>HTMLElement.offsetParent</h1>


	<p>‘HTMLElement.offsetParent’ 是一个只读属性，返回一个指向最近的（指包含层级上的最近）包含该元素的定位元素或者最近的 ‘table’, ‘td’, ‘th’, ‘body’ 元素。当元素的
		‘style.display’ 设置为 ‘none’ 时，‘offsetParent’ 返回 ‘null’。</p>


	<p>‘offsetParent’ 很有用，因为 ‘offsetTop’ 和 ‘offsetLeft’ 都是相对于其内边距边界的。</p>


	<pre>
		<code v-code:js.nocopy>
			parentObj = element.offsetParent;
		</code>
	</pre>

	<dl>
		<dt>‘parentObj’</dt>
		<dd>是一个对象引用，当前元素相对于该对象偏移（offset）。</dd>
	</dl>
</template>