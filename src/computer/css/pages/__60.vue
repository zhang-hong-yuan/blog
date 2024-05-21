<template>
	<h1>::after</h1>


	<p>CSS伪元素 ‘::after’ 用来创建一个伪元素，作为已选中元素的最后一个子元素。通常会配合 ‘content’ 属性来为该元素添加装饰内容。这个虚拟元素默认是行内元素。</p>


	<pre>
		<code v-code:css>
::after {
  /* ... */
}
		</code>
	</pre>


	<section class="note">
		<strong>注意：</strong>
		由 ‘::before’ 和 ‘::after’ 生成的伪元素包含在元素格式框内，因此不能应用在替换元素上，比如 <code v-code:html.escape><img> 或 <br></code> 元素。
	</section>


	<h6>简单用法</h6>


	<p>让我们创建两个类：一个无趣的和一个有趣的。我们可以在每个段尾添加伪元素来标记他们。</p>



	<pre>
		<code v-code:html.escape>
<p class="boring-text">这是些无聊的文字</p>
<p>这是不无聊也不有趣的文字</p>
<p class="exciting-text">
  在 MDN 上做贡献简单又轻松。按右上角的编辑按钮添加新示例或改进旧示例！
</p>
		</code>
	</pre>

	<p>CSS</p>

	<pre>
		<code v-code:css>
.exciting-text::after {
  content: "&lt;- 让人兴兴兴奋！";
  color: green;
}

.boring-text::after {
  content: "&lt;- 无聊！";
  color: red;
}
		</code>
	</pre>


	<p>渲染结果：</p>
	<figure id="demo-20240401-1935">
		<p class="boring-text">这是些无聊的文字</p>
		<p>这是不无聊也不有趣的文字</p>
		<p class="exciting-text">
			在 MDN 上做贡献简单又轻松。按右上角的编辑按钮添加新示例或改进旧示例！
		</p>
	</figure>




	<h6>装饰用法</h6>


	<p>几乎可以用想要的任何方法给 ‘content’ 属性里的文字和图片的加上样式。</p>


	<pre>
		<code v-code:html.escape>
			<span class="ribbon">Notice where the orange box is.</span>
		</code>
	</pre>

	<p>CSS</p>

	<pre>
		<code v-code:css>
			.ribbon {
  background-color: #5bc8f7;
}

.ribbon::after {
  content: "Look at this orange box.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}

		</code>
	</pre>


	<p>渲染结果：</p>
	<figure id="demo-20240401-1939">
		<span class="ribbon">Notice where the orange box is.</span>
	</figure>


	<h6>提示用法</h6>

	<p>接下来的示例展示了用 ‘::after’ 伪元素，‘attr()’ CSS 表达式和一个自定义数据属性 ‘data-descr’ 创建一个纯 CSS，词汇表提示工具。</p>


	<pre>
	<code v-code:html.escape>
<p>
  这是上面代码的实现<br />
  我们有一些
  <span data-descr="collection of words and punctuation">文字</span> 有一些
  <span data-descr="small popups which also hide again">提示</span>。<br />
  把鼠标放上去<span data-descr="not to be taken literally">看看</span>。
</p>
	</code>
</pre>


	<p>CSS</p>
	<pre>
	<code v-code:css>
span[data-descr] {
  position: relative;
  text-decoration: underline;
  color: #00f;
  cursor: help;
}

span[data-descr]:hover::after {
  content: attr(data-descr);
  position: absolute;
  left: 0;
  top: 24px;
  min-width: 200px;
  border: 1px #aaaaaa solid;
  border-radius: 10px;
  background-color: #ffffcc;
  padding: 12px;
  color: #000000;
  font-size: 14px;
  z-index: 1;
}
	</code>
</pre>


	<p>渲染结果：</p>

	<figure id="demo-20240401-1943">
		<p>
			这是上面代码的实现<br />
			我们有一些
			<span data-descr="collection of words and punctuation">文字</span> 有一些
			<span data-descr="small popups which also hide again">提示</span>。<br />
			把鼠标放上去<span data-descr="not to be taken literally">看看</span>。
		</p>

	</figure>

</template>