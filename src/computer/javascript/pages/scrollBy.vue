<script setup>
	import scrollToOptions from '../view/scrollToOptions'
	import scrollTo_vs_scrollBy from '../view/scrollTo_vs_scrollBy'
</script>

<template>
	<h1>Element.scrollBy()</h1>

	<p>‘scrollBy()’ 方法是使得元素滚动一段特定距离的 Element 接口。</p>


	<pre>
		<code v-code:js.nocopy>
			element.scrollBy(x-coord, y-coord);
			element.scrollBy(options)
		</code>
	</pre>

	<dl>
		<dt>‘x-coord’</dt>
		<dd>是元素要在横轴上滚动的距离。</dd>

		<dt>‘y-coord’</dt>
		<dd>是元素要在纵轴上滚动的距离。</dd>


		<scrollToOptions />
	</dl>


	<figure>
		<figcaption>例子</figcaption>

		<p>让元素滚动：</p>
		<pre>
			<code v-code:js>
				element.scrollBy(300, 300)

				// 使用 options:
				element.scrollBy({
					top: 100,
					left: 100,
					behavior: "smooth",
				})
			</code>
		</pre>
	</figure>


	<scrollTo_vs_scrollBy />
</template>