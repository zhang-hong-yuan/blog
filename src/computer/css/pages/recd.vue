<template>
	<h1>结合 flex-shrink 和 flex-basis</h1>


	<p>‘flex-shrink’ 和 ‘flex-grow’ 工作的一样好。但有两个原因使它们不完全一样。</p>


	<p>即使它微不足道，但规范中的定义内容是 ‘flex-shrink’ 对于负空间和 ‘flex-grow’ 对于正空间不完全相同的原因：</p>

	<blockquote>
		当分配负空间时，弹性收缩因子乘以弹性元素的基本尺寸。这会根据元素能够缩小的比例分配负空间。例如，在较大的元素明显缩小之前，较小的子元素不会缩小到 0。
	</blockquote>



	<p>第二个原因是在负可用空间消除期间弹性盒子会阻止小的元素缩小到 0。这些元素会以 ‘min-content’ 的大小进行铺设——这个大小是它们利用任何可以利用的自动换行机会后所变成的。</p>


	<figure>
		<figcaption>示例</figcaption>

		<p>在下面的例子中，‘flex-basis’ 解析为内容大小。如果改变弹性容器的宽度——比如增加到 700px 宽，再减少弹性元素的宽度，将会看到前两个元素将换行，但是它们绝不会小于 ‘min-content’
			的大小。随着盒子变得越来越小，第三个元素随后从空间中溢出。</p>



		<pre>
			<code v-code:html.escape>
<div class="box width-500">
  <div>Item One</div>
  <div>Item Two</div>
  <div>Item Three has more content and so has a larger size</div>
</div>

<div class="box width-100">
  <div>Item One</div>
  <div>Item Two</div>
  <div>Item Three has more content and so has a larger size</div>
</div>
			</code>
		</pre>

		<p>CSS</p>
		<pre>
	<code v-code:css>
		.box {
		display: flex;
		margin: 10px 0;
		border: 2px dotted #698aa5;
	}

	.width-500 { width: 500px; }
	.width-100 { width: 100px; }

	.box > * {
		flex: 1 1 auto;
		border: 2px solid #698aa5;
		border-radius: 5px;
		background-color: #e1e8ed;
	}
	</code>
</pre>

		<p>结果</p>
		<figure id="demo-20240409-1427">
			<div class="box width-500">
				<div>Item One</div>
				<div>Item Two</div>
				<div>Item Three has more content and so has a larger size</div>
			</div>

			<div class="box width-100">
				<div>Item One</div>
				<div>Item Two</div>
				<div>Item Three has more content and so has a larger size</div>
			</div>
		</figure>
	</figure>


	<p>在实践中，收缩行为会倾向于合理的结果。通常内容不会完全消失，或者文本框比自己的最小内容要小，因此上述规则对于需要缩小以适应容器的内容的合理行为而言是有意义的。</p>
</template>