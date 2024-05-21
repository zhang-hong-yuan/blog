<template>
	<h1>:only-of-type</h1>


	<p>‘:only-of-type’ CSS 伪类代表了任意一个元素，这个元素没有其他相同类型的兄弟元素。</p>

	<pre>
		<code v-code:css>
/* 父元素不是必须的 */
:only-of-type {
  /* ... */
}
		</code>
	</pre>



	<h6>为没有同类型兄弟元素的元素设置样式</h6>

	<p>HTML</p>
	<pre>
	<code v-code:html.escape>
<main>
  <div>I am `div` #1.</div>
  <p>I am the only `p` among my siblings.</p>
  <div>I am `div` #2.</div>
  <div>
    I am `div` #3.
    <i>I am the only `i` child.</i>
    <em>I am `em` #1.</em>
    <em>I am `em` #2.</em>
  </div>
</main>
	</code>
</pre>

	<p>CSS</p>
	<pre>
	<code v-code:css>
main :only-of-type {
  color: red;
}
	</code>
</pre>

	<p>渲染结果：</p>
	<figure id="demo-20240331-1239">
		<main>
			<div>I am `div` #1.</div>
			<p>I am the only `p` among my siblings.</p>
			<div>I am `div` #2.</div>
			<div>
				I am `div` #3.
				<i>I am the only `i` child.</i>
				<em>I am `em` #1.</em>
				<em>I am `em` #2.</em>
			</div>
		</main>
	</figure>
</template>