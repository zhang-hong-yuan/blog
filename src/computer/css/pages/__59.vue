<template>
	<h1>:nth-last-of-type</h1>


	<p>‘:nth-last-of-type()’ CSS 伪类基于元素在相同类型（标签名）的兄弟元素中相对最后一个元素的位置来匹配元素。</p>


	<pre>
		<code v-code:css>
:nth-last-of-type(&lt;an-plus-b&gt; | even | odd) {
  /* ... */
}
		</code>
	</pre>


	<p>‘nth-last-of-type’ 伪类通过单个参数来指定元素的匹配模式，从元素列表的末尾开始计数。</p>


	<h6>示例：</h6>


	<p>HTML</p>


	<pre>
		<code v-code:html.escape>
<div>
  <span>这是一个 span。</span>
  <span>这是另一个 span。</span>
  <em>这是起强调作用的。</em>
  <span>哇，这个 span 元素变成了绿色！！！</span>
  <del>这里被删除了。</del>
  <span>这是最后一个 span。</span>
</div>
		</code>
	</pre>

	<p>CSS</p>

	<pre>
	<code v-code:css>
span:nth-last-of-type(2) {
  background-color: lime;
}
	</code>
</pre>

	<p>结果：</p>

	<figure id="demo-20240331-1216">
		<div>
			<span>这是一个 span。</span>
			<span>这是另一个 span。</span>
			<em>这是起强调作用的。</em>
			<span>哇，这个 span 元素变成了绿色！！！</span>
			<del>这里被删除了。</del>
			<span>这是最后一个 span。</span>
		</div>
	</figure>
</template>