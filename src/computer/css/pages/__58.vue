<template>
	<h1>:nth-of-type</h1>


	<p>‘:nth-of-type()’ CSS 伪类基于相同类型（标签名称）的兄弟元素中的位置来匹配元素。</p>


	<p>‘:nth-of-type’ 伪类用单个参数指定，该参数表示匹配元素的模式。</p>

	<pre>
		<code v-code:css>
:nth-of-type(&lt;an-plus-b&gt; | even | odd) {
  /* ... */
}
		</code>
	</pre>

	<p>有关其语法的详细说明，请参阅 ‘:nth-child’。</p>




	<h6>基本示例</h6>


	<pre>
		<code v-code:html.escape>
<div>
  <div>这段不参与计数。</div>
  <p>这是第一段。</p>
  <p class="fancy">这是第二段。</p>
  <div>这段不参与计数。</div>
  <p class="fancy">这是第三段。</p>
  <p>这是第四段。</p>
</div>
		</code>
	</pre>

	<p>CSS</p>


	<pre>
	<code v-code:css>
		/* 奇数段 */
p:nth-of-type(2n + 1) { color: red; }

/* 偶数段 */
p:nth-of-type(2n) { color: blue; }

/* 第一段 */
p:nth-of-type(1) { font-weight: bold; }

/* 这将匹配第三个段落，因为它匹配的元素是 2n+1 并且具有 fancy 类。
   第二个段落具有 fancy 类，但不匹配，因为它不是:nth-of-type(2n+1)。
*/
p.fancy:nth-of-type(2n + 1) { text-decoration: underline; }
	</code>
</pre>

	<p>渲染结果：</p>

	<figure id="demo-20240401-1921">
		<div>
			<div>这段不参与计数。</div>
			<p>这是第一段。</p>
			<p class="fancy">这是第二段。</p>
			<div>这段不参与计数。</div>
			<p class="fancy">这是第三段。</p>
			<p>这是第四段。</p>
		</div>
	</figure>
</template>