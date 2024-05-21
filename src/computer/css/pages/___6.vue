<template>
	<h1>类选择器 ‘.classname’</h1>

	<p>CSS 类选择器根据 ‘class’ 属性的内容匹配元素。</p>

	<pre>
		<code v-code:css>
			.类名 { 样式声明 }

		</code>
	</pre>

	<p>注意它与下面的‘属性选择器’语句等价：</p>
	<pre>
		<code v-code:css>
			[class~=类名] { 样式声明 }

		</code>
	</pre>


	<h6>示例</h6>

	<p>样式如下：</p>

	<pre>
	 <code v-code:css>
		.red {
  color: #f33;
}

.yellow-bg {
  background: #ffa;
}

.fancy {
  font-weight: bold;
  text-shadow: 4px 4px 3px #77f;
}

	 </code>
</pre>


	<p>结构如下：</p>


	<pre>
	<code v-code:html.escape>
		<p class="red">这段文字是红色的。</p>
<p class="red yellow-bg">这段文字是红色的，背景是黄色的。</p>
<p class="red fancy">这段文字是红色的，有“fancy”样式。</p>
<p>这只是普通的段落。</p>

	</code>
</pre>

	<p>渲染结果：</p>



	<figure id="demo-20240329-1447">
		<p class="red">这段文字是红色的。</p>
		<p class="red yellow-bg">这段文字是红色的，背景是黄色的。</p>
		<p class="red fancy">这段文字是红色的，有“fancy”样式。</p>
		<p>这只是普通的段落。</p>
	</figure>
</template>