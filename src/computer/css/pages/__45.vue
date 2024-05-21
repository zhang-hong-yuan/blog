<template>
	<h1>::marker</h1>

	<p>‘::marker’ CSS 伪元素匹配列表的标记框（通常为一个符号或数字）。它作用在任何设置了 ‘display: list-item’ 的元素或伪元素上，例如 <code
			v-code:html>&lt;li&gt;</code> 和 <code v-code:html>&lt;summary&gt;</code> 元素。</p>


	<pre>
				<code v-code:css>
::marker {
  /* ... */
}
				</code>
			</pre>

	<p>在将 ‘::marker’ 作为选择器的规则中，只能使用某些 CSS 属性，<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/::marker"
			target="_blank">详情请看</a>。</p>


	<h6>示例</h6>
	<p>HTML</p>

	<pre>
				<code v-code:html.escape>
<ul>
  <li>Peaches</li>
  <li>Apples</li>
  <li>Plums</li>
</ul>
				</code>
			</pre>


	<p>CSS</p>

	<pre>
				<code v-code:css>
ul li::marker {
  color: red;
  font-size: 1.5em;
}
				</code>
			</pre>



	<p>结果</p>

	<figure id="demo-20240404-0902">
		<ul>
			<li>Peaches</li>
			<li>Apples</li>
			<li>Plums</li>
		</ul>
	</figure>
</template>