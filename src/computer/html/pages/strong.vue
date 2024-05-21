<template>
	<h1><span>&lt;strong&gt;</span> 元素</h1>


	<p>Strong 元素表示文本十分重要，一般用粗体显示。</p>

	<p>该元素只具有全局属性。</p>


	<figure>
		<figcaption>举例</figcaption>

		<pre>
			<code v-code:html.escape>
				<p>When doing x it is <strong>imperative</strong> to do y before proceeding.</p>
			</code>
		</pre>

		<p>效果</p>
		<blockquote>
			<p>When doing x it is <strong>imperative</strong> to do y before proceeding.</p>
		</blockquote>
	</figure>


	<h2>Bold vs. Strong</h2>

	<p>新的开发者经常感到疑惑，为什么在一个渲染的网站上会有这么多方式来表达同样的东西。Bold 和 Strong 可能就是这其中的一种。为什么使用 ‘&lt;strong&gt;&lt;/strong&gt;’ 而不是
		‘&lt;b&gt;&lt;/b&gt;’ ? 使用 strong 的话不得不打更多的字母，却产生出和 b 同样的效果。</p>


	<p>也许并不是；strong 是一个逻辑状态，而 bold
		是一个物理状态。逻辑状态分离内容和表现形式，使用逻辑状态允许用各种不同的方式来表达。比如把文字渲染成红色，使用其他大小的字体、带有下划线或其他样式，而不是加粗的样式。必须要理解使用 strong
		呈现出的表现形式不同于单纯的加粗。因为 bold 是一个物理状态，它没有区分表现形式和内容。如果让 bold 做了加粗文本外的其他任何事情，都将会令人困惑而且也不符合逻辑。</p>

	<p>同样应该注意 ‘&lt;b&gt;&lt;/b&gt;’ 还有其他用途，比如想单纯地吸引注意而不增加其重要性。</p>



	<h2>Emphasis vs. Strong</h2>

	<p>在 HTML4 时，Strong 简单地表示一个更强的强调 (emphasis)，而在 HTML5 中，这个元素被描述为表征“内容强烈的重要性 (strong importance for its contents)
		”。这是一个重要的区别。</p>


	<p>Em 标签 (Emphasis) 用于改变一个句子的意思 (比如"我&lt;em&gt;*喜欢&lt;/em&gt;*胡萝卜"
		和"我喜欢&lt;em&gt;胡萝卜&lt;/em&gt;"，分别强调<em>喜欢</em>和<em>胡萝卜</em>)。</p>

	<p>Strong 用来对一个句子的部分增加重要性 (比如 "警告！ 这非常危险。")。</p>

	<p>Strong 和 Emphasis 都可以分别通过嵌套来增加相对重要性或强调重点</p>





	<word word="strong---adj. 强读式的，重读的（某些词重读时的读音，如and的强式读音为 /ænd/ ）" />
</template>