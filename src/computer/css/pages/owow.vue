<template>
	<h1>弹性元素的尺寸</h1>


	<p>为了计算出有多少可用空间能用于放置弹性元素，浏览器必须知道这个元素有多大。它是如何解决没有应用绝对单位的宽度和高度的弹性元素？</p>


	<p>在 CSS 中还有 ‘min-content’ 和 ‘max-content’ 这两个概念；这两个关键字可以用来代替长度单位。</p>


	<h6>例如</h6>

	<p>有两段包含一个文本字符串的段落。</p>

	<p>第一段设置了 ‘min-content’ 的宽度。在支持这个关键字的浏览器可以看见文本已尽可能抓住机会来自动换行，使之变得尽可能小且没有溢出。这就是该字符串的 ‘min-content’
		大小。本质上讲，字符串中最长的单词决定了大小。</p>

	<p>第二段设置了 ‘max-content’ 值，其与前者相反。它会变得尽可能大，没有自动换行的机会。如果容器太窄，它就会溢出其自身的盒子。</p>


	<pre>
		<code v-code:html.escape>
<p class="min-content">I am sized with min-content and so I will take all of the soft-wrapping opportunities.</p>
<p class="max-content">I am sized with max-content and so I will take none of the soft-wrapping opportunities.</p>
		</code>
	</pre>

	<p>CSS</p>

	<pre>
		<code v-code:css>
.min-content {
  width: min-content;
  border: 2px dotted rgb(96, 139, 168);
}
.max-content {
  width: max-content;
  border: 2px dotted rgb(96, 139, 168);
}
		</code>
	</pre>


	<p>结果</p>
	<figure id="demo-20240408-2321">
		<p class="min-content">I am sized with min-content and so I will take all of the soft-wrapping opportunities.</p>
		<p class="max-content">I am sized with max-content and so I will take none of the soft-wrapping opportunities.</p>
	</figure>


	<p>记住这种行为，以及 ‘min-content’ 和 ‘max-content’ 所产生的影响，将在后文中探索 ‘flex-grow’ 和 ‘flex-shrink’。</p>
</template>