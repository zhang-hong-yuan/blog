<template>
	<h1>Element.getBoundingClientRect()</h1>


	<p><code></code>该方法返回一个 <strong>DOMRect</strong> 对象，其提供了元素的大小及其相对于<strong>视口</strong>的位置。没有参数。</p>

	<pre>
	<code v-code:js.nocopy>
		element.getBoundingClientRect()
	</code>
</pre>





	<p><strong>DOMRect</strong> 对象包含整个元素的最小矩形（包括 ‘padding’ 和 ‘border-width’）。该对象使用
		‘left’、‘top’、‘right’、‘bottom’、‘x’、‘y’、‘width’ 和 ‘height’
		这几个以像素为单位的只读属性描述整个矩形的位置和大小。除了 ‘width’ 和 ‘height’ 以外的属性是相对于视图窗口的左上角来计算的。</p>

	<picture>
		<img
			src="../assets/getBoundingClientRect.png"
			alt="getBoundingClientRect.png"
			style="width: 88vw;">
	</picture>

	<p>其中 ‘width’ 和 ‘height’ 属性是包含了 ‘padding’ 和 ‘border-width’ 的，而不仅仅是内容部分的宽度和高度。</p>

	<ul>
		<li>在标准盒子模型中，这两个属性值分别与元素的 ‘width/height’ + ‘padding’ + ‘border-width’ 相等。</li>
		<li>如果是 ‘box-sizing: border-box’，两个属性则直接与元素的 ‘width’ 或 ‘height’ 相等。</li>
	</ul>

	<p>空边框盒（没有内容的边框）会被忽略。如果所有的元素边框都是空边框，那么这个矩形给该元素返回的 ‘width’、‘height’ 值为 0，‘left’、‘top’ 值为第一个 CSS 盒子（按内容顺序）的 ‘top-left’
		值。</p>



</template>