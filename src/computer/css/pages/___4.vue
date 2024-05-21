<template>
	<h1>通配选择器 ‘*’</h1>

	<p>在 CSS 中，一个星号 (‘*’) 就是一个通配选择器。它可以匹配任意类型的 HTML 元素。在配合其他简单选择器的时候，省略掉通配选择器会有同样的效果。比如，‘*.warning’ 和 ‘.warning’ 的效果完全相同。
	</p>

	<p>在 CSS3 中，星号 (‘*’) 可以和命名空间组合使用：</p>

	<ul>
		<li>‘ns|*’ - 会匹配‘ns’命名空间下的所有元素</li>
		<li>‘*|*’ - 会匹配所有命名空间下的所有元素</li>
		<li>‘|*’ - 会匹配所有没有命名空间的元素</li>
	</ul>


	<h6>示例</h6>


	<pre>
		<code v-code:css>
			*[lang^="en"] {
  color: green;
}

*.warning {
  color: red;
}

*#maincontent {
  border: 1px solid blue;
}

		</code>
	</pre>

	<p>上面的 CSS 作用于下面的 HTML:</p>


	<pre>
		<code v-code:html.escape>

			<p class="warning">
  <span lang="en-us">A green span</span> in a red paragraph.
</p>

<p id="maincontent" lang="en-gb">
  <span class="warning">A red span</span> in a green paragraph.
</p>

		</code>
	</pre>

	<p>则会产生这样的效果：</p>

	<figure id="demo-20240329-1229">
		<p class="warning">

			<span lang="en-us">A green span</span> in a red paragraph.
		</p>
		<p id="maincontent" lang="en-gb">
			<span class="warning">A red span</span> in a green paragraph.
		</p>
	</figure>
</template>