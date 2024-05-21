<template>
	<h1>强调元素：<span>&lt;em&gt;</span></h1>


	<p>HTML ‘&lt;em&gt;’ 元素将文本标记为强调（emphasis）格式。‘&lt;em&gt;’ 元素可以嵌套，嵌套层次越深，则强调的程度越深。</p>

	<p>此元素只包括全局属性。</p>

	<p>通常地，该元素会被浏览器展示为斜体文本，但是，它不应该仅仅用于应用斜体样式；为此目的，要使用 CSS ‘font-style’ 样式。</p>

	<p>使用 ‘&lt;cite&gt;’ 元素标记作品的标题（书籍、戏剧、歌曲等）；它通常也采用斜体样式，但具有不同的含义。使用 ‘&lt;strong&gt;’ 元素标记比周围文本更重要的文本。</p>


	<figure>
		<figcaption>示例</figcaption>
		<p>在此示例中，‘&lt;cite&gt;’ 元素用于突出显示两个成分列表之间的隐式或显式的对比。</p>
		<pre>
			<code v-code:html.escape>
<p>
  冰淇淋是用牛奶、甜味剂和奶油制成的。而冷冻蛋奶冻则由牛奶、奶油、甜味剂和<em>蛋黄</em>制成。
</p>
			</code>
		</pre>

		<p>结果</p>

		<blockquote>
			<p>
				冰淇淋是用牛奶、甜味剂和奶油制成的。而冷冻蛋奶冻则由牛奶、奶油、甜味剂和<em>蛋黄</em>制成。
			</p>
		</blockquote>
	</figure>

	<h2>&lt;i&gt; vs. &lt;em&gt;</h2>


	<p>新的开发人员看到多个元素产生相似的效果，经常被混淆。‘&lt;em&gt;’ 和 ‘&lt;i&gt;’ 就是一对常见的例子，因为它们都对文字斜体化。它们的区别是什么？应该使用哪一个？</p>

	<p>在默认情况下，它们的视觉效果是一样的。但语义是不同的。 ‘&lt;em&gt;’ 标签表示其内容的着重强调，而 ‘&lt;i&gt;’
		标签表示从正常散文中区分出的文本，例如外来词，虚构人物的思想，或者当文本指的是一个词语的定义，而不是其语义含义。</p>

	<p>这意味着，正确使用哪一个取决于具体的场景。两者都不是纯粹为了装饰的目的，那是 CSS 样式所做的。</p>

	<ul>
		<li>一个 ‘&lt;em&gt;’ 的例子可能是："Just <em>do</em> it already!"，或："We <em>had</em> to do something about
			it"。人或软件在阅读文本时，会对斜体字的发音使用重读强调。</li>
		<li>一个 ‘&lt;i&gt;’ 的例子可能是："The <i>Queen Mary</i> sailed last night"。在这里，没有对 "Queen Mary"
			这个词添加强调或重要性。它只是表明，谈论的对象不是一个名叫玛丽的女王，而是一艘名字叫玛丽的船。另一个 ‘&lt;i&gt;’ 的例子可能是："The word <i>the</i> is an article"。</li>
	</ul>



	<word word="emphasis------n. （对某个词或短语的）强调，加重语气，重读" />
</template>