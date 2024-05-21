<template>
	<h1>引用标签：<span>&lt;cite&gt;</span></h1>


	<p>HTML 引用（Citation）标签 (‘&lt;cite&gt;’) 表示一个作品的引用，且必须包含作品的标题。这个引用可能是一个根据适当的上下文约定关联引用的元数据的缩写。</p>

	<p>通常，浏览器默认使用斜体来展示 ‘&lt;cite&gt;’ 元素中的内容。可以通过指定 ‘&lt;cite&gt;’ 元素的 ‘font-style’ 样式来覆盖这种默认行为。</p>

	<p>这个元素仅包含了 所有的全局属性。</p>

	<p>
		适用场合可能包括一本书，一张纸，一篇散文，一首诗，一个分数，一首歌，一部电影，一个电视节目，一个游戏，一个雕塑，一幅画，戏剧制作，一个剧本，一个歌剧，一种音乐，一个展览，一个法律案件报告，一个计算机程序，一个网站，一个网页，博客或评论，论坛帖子或评论，鸣叫，或者书面或口头陈述，等等。
	</p>


	<figure>
		<figcaption>示例</figcaption>


		<pre>
			<code v-code:html.escape>
				More information can be found in <cite>[ISO-0000]</cite>.
			</code>
		</pre>

		<p>该段代码的输出如下：</p>
		<blockquote>
			More information can be found in <cite>[ISO-0000]</cite>.
		</blockquote>
	</figure>
</template>