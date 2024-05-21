<template>
	<h1>Heading <span>&lt;h1&gt; ~ &lt;h6&gt;</span></h1>


	<p>标题元素可用于指定内容的标题和子标题。就像一本书的书名、每章的大标题、小标题，等。HTML 文档也是一样。</p>


	<p>HTML ‘&lt;h1&gt; ~ &lt;h6&gt;’ 标题 (Heading) 元素呈现了六个不同的级别的标题，‘&lt;h1&gt;’ 级别最高，而 ‘&lt;h6&gt;’ 级别最低。一般最多用到
		3-4 级标题。</p>

	<p>注意：所有标题标签不允许相互嵌套。</p>

	<figure>
		<figcaption>所有标题</figcaption>

		<p>下面的代码展示了所有可用的标题级别。</p>


		<pre>
		<code v-code:html.escape>
			<h1>一级标题</h1>
			<h2>二级标题</h2>
			<h3>三级标题</h3>
			<h4>四级标题</h4>
			<h5>五级标题</h5>
			<h6>六级标题</h6>
		</code>
	</pre>


		<p>下面是这些代码的结果：</p>


		<blockquote>
			<h1>一级标题</h1>
			<h2>二级标题</h2>
			<h3>三级标题</h3>
			<h4>四级标题</h4>
			<h5>五级标题</h5>
			<h6>六级标题</h6>
		</blockquote>

	</figure>


	<word word="heading---n.（讲话或作品各章节的）主题" />

</template>