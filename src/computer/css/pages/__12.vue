<template>
	<h1>子选择器 ‘A > B’</h1>


	<p>子组合器（‘>’）被放在两个 CSS 选择器之间。它只匹配那些被第二个选择器匹配的元素，这些元素是被第一个选择器匹配的元素的直接子元素。</p>


	<pre>
	<code v-code:css>
		元素 1 > 元素 2 { 样式声明 }
	</code>
</pre>

	<p>被第二个选择器匹配的元素必须是被第一个选择器匹配的元素的直接子元素。这比后代组合器更严格，后者匹配所有被第二个选择器匹配的元素，这些元素存在被第一个选择器匹配的祖先元素，无论在 DOM 上有多少“跳”。</p>

	<pre>
	<code v-code:css>
		/* 选择属于“my-things”类的无序列表（ul）的直接子列表元素（li） */
ul.my-things > li {
  margin: 2em;
}

	</code>
</pre>


	<h6>示例：</h6>
	<p>css 样式：</p>

	<pre>
		<code v-code:css>
			span {
  background-color: aqua;
}

div > span {
  background-color: yellow;
}

		</code>
	</pre>


	<p>html 结构：</p>
	<pre>
		<code v-code:html.escape>
			<div>
  <span>
    1 号 span，在 div 中。
    <span>2 号 span，在 div 中的 span 中。</span>
  </span>
</div>

<span>3 号 span，不在 div 中。</span>
		</code>
	</pre>


	<p>渲染结果：</p>


	<figure id="demo-20240329-1610">
		<div>
			<span>
				1 号 span，在 div 中。
				<span>2 号 span，在 div 中的 span 中。</span>
			</span>
		</div>
		<span>3 号 span，不在 div 中。</span>
	</figure>
</template>