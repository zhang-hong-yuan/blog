<template>
	<h1>:only-child</h1>

	<p>‘:only-child’ CSS 伪类表示没有任何兄弟元素的元素。这与 ‘:first-child:last-child’ 或 ‘:nth-child(1):nth-last-child(1)’ 相同，但前者具有更小的权重性。
	</p>


	<pre>
		<code v-code:css>
/* 父级元素不是必须的 */
:only-child {
  /* ... */
}
		</code>
	</pre>



	<h6>基础示例</h6>

	<p>HTML</p>
	<pre>
	<code v-code:html.escape>
<div>
  <div>我是唯一子元素。</div>
</div>

<div>
  <div>我是第一个兄弟元素。</div>
  <div>我是第二个兄弟元素。</div>
  <div>
    我是第三个兄弟元素。
    <div>但这又是唯一的子元素。</div>
  </div>
</div>
	</code>
</pre>

	<p>CSS</p>

	<pre>
	<code v-code:css>
div:only-child {
  color: red;
}

div {
  display: inline-block;
  margin: 6px;
  outline: 1px solid;
}
	</code>
</pre>


	<p>渲染结果：</p>

	<figure id="demo-20240331-1229">
		<div>
			<div>我是唯一子元素。</div>
		</div>

		<div>
			<div>我是第一个兄弟元素。</div>
			<div>我是第二个兄弟元素。</div>
			<div>
				我是第三个兄弟元素。
				<div>但这又是唯一的子元素。</div>
			</div>
		</div>
	</figure>



	<h6>一个列表示例</h6>
	<p>HTML</p>
	<pre>
	<code v-code:html.escape>
<ol>
  <li>
    第一
    <ul>
      <li>该列表仅有一个元素。</li>
    </ul>
  </li>
  <li>
    第二
    <ul>
      <li>该列表有三个元素。</li>
      <li>该列表有三个元素。</li>
      <li>该列表有三个元素。</li>
    </ul>
  </li>
</ol>
	</code>
</pre>


	<p>CSS</p>
	<pre>
<code v-code:css>
	li li {
  list-style-type: disc;
}

li:only-child {
  color: red;
  list-style-type: square;
}
</code>
</pre>


	<p>渲染结果：</p>
	<figure id="demo-20240331-1229">
		<ol>
			<li>
				第一
				<ul>
					<li>该列表仅有一个元素。</li>
				</ul>
			</li>
			<li>
				第二
				<ul>
					<li>该列表有三个元素。</li>
					<li>该列表有三个元素。</li>
					<li>该列表有三个元素。</li>
				</ul>
			</li>
		</ol>
	</figure>
</template>