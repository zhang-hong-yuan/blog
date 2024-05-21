<template>
	<h1>:target</h1>

	<p>‘:target’ CSS 伪类表示一个唯一的元素（目标元素），其 ‘id’ 与当前 URL 片段匹配。</p>


	<pre>
		<code v-code:css>
/* 选择一个 ID 与当前 URL 片段匹配的元素*/
:target {
  border: 2px solid black;
}
		</code>
	</pre>


	<p>例如，以下 URL 具有一个片段（由 # 符号表示），指向名为 ‘section2’ 的元素：</p>


	<pre>
		<code v-code:url>http://www.example.com/index.html#section2</code>
	</pre>


	<p>若当前 URL 等于上面的 URL 时，以下元素将被 ‘:target’ 选择器被选中：</p>


	<pre>
	<code v-code:html.escape>
		<section id="section2">Example</section>
	</code>
</pre>



	<h6>一个目录</h6>

	<p>‘:target’ 伪类可用于高亮显示页面中可从目录中链接到的部分。</p>



	<pre>
	<code v-code:html.escape>
		<h3>目录</h3>
<ol>
  <li><a href="#p1">跳转到第一个段落！</a></li>
  <li><a href="#p2">跳转到第二个段落！</a></li>
  <li><a href="#nowhere">此链接不会跳转，因为目标不存在。</a></li>
</ol>

<h3>我的趣味文章</h3>
<p id="p1">你可以使用 URL 片段定位此<i>段落</i>。点击上面的链接试试吧！</p>
<p id="p2">这是<i>另一个段落</i>，也可以从上面的链接访问。这不是很愉快吗？</p>
	</code>
</pre>

	<p>CSS</p>
	<pre>
	<code v-code:css>
p:target {
  background-color: gold;
}

/* 在目标元素中增加一个伪元素*/
p:target::before {
  font: 70% sans-serif;
  content: "►";
  color: limegreen;
  margin-right: 0.25em;
}

/*在目标元素中使用 italic 样式*/
p:target i {
  color: red;
}
	</code>
</pre>


	<p>渲染结果：</p>
	<figure id="demo-20240401-1519">
		<h3>目录</h3>
		<ol>
			<li><a href="#p1">跳转到第一个段落！</a></li>
			<li><a href="#p2">跳转到第二个段落！</a></li>
			<li><a href="#nowhere">此链接不会跳转，因为目标不存在。</a></li>
		</ol>

		<h3>我的趣味文章</h3>
		<p id="p1">你可以使用 URL 片段定位此<i>段落</i>。点击上面的链接试试吧！</p>
		<p id="p2">这是<i>另一个段落</i>，也可以从上面的链接访问。这不是很愉快吗？</p>
	</figure>


	<blockquote>注意：锚点链接会影响 ‘router’ 的功能，引起前进后退的功能障碍。重新刷新就可以。</blockquote>
</template>