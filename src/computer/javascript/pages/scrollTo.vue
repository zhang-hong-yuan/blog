<script setup>
	import scrollToOptions from '../view/scrollToOptions'
	import scrollTo_vs_scrollBy from '../view/scrollTo_vs_scrollBy'
</script>

<template>

	<h1>Element.scrollTo()</h1>


	<p>‘Element’ 的 ‘scrollTo()’ 方法可以使界面滚动到给定元素的指定坐标位置。</p>

	<p>没有返回值。</p>

	<pre>
	<code v-code:js.nocopy>
		element.scrollTo(x-coord, y-coord)
		element.scrollTo(options)
	</code>
</pre>

	<dl>
		<dt>‘x-coord’</dt>
		<dd>是期望滚动到位置水平轴上距元素左上角的像素。</dd>

		<dt>‘y-coord’</dt>
		<dd>是期望滚动到位置竖直轴上距元素左上角的像素。</dd>

		<scrollToOptions />


	</dl>


	<figure>
		<figcaption>示例：</figcaption>

		<pre>
			<code v-code:js>
				element.scrollTo(0, 1000)

				// 使用 options:
				element.scrollTo({
					top: 100,
					left: 100,
					behavior: "smooth",
				})
			</code>
		</pre>

	</figure>


	<scrollTo_vs_scrollBy />
</template>