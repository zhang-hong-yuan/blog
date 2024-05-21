<template>
	<h1>flex-shrink</h1>
	<p>‘flex-shrink’ 属性指定了<strong>弹性收缩因子</strong>（flex shrink factor），它确定在分配负可用空间时，弹性元素相对于弹性容器中其余弹性元素收缩的程度。</p>

	<p>‘flex-shrink’ 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 ‘flex-shrink’ 的值。</p>


	<pre>
		<code v-code:css>
/* 初始值为 1，只能是 &lt;number&gt;，不允许负值 */
flex-shrink: 2;
flex-shrink: 0.6;

/* Global values */
flex-shrink: inherit;
flex-shrink: initial;
flex-shrink: unset;
		</code>
	</pre>

	<p>该属性用于处理浏览器计算弹性元素的 ‘flex-basis’ 值，并发现它们太大以至于无法适应弹性容器的情形。只要 ‘flex-shrink’ 有正值，元素就会收缩以至于它们不会溢出容器。</p>


	<p>因此 ‘flex-grow’ 用于添加可用空间，而 ‘flex-shrink’ 减少空间来使盒子适应它们的容器而不溢出。</p>


	<figure>
		<figcaption>示例</figcaption>

		<p>下面示例中弹性容器有三个元素，每一个设置了 200px 的宽度，并且设置容器为 500px 宽。分别设置 ‘flex-shrink’ 为 0 和 1。</p>

		<ul>
			<li>‘flex-shrink’ 为 0 的元素不允许收缩，以使它们溢出了盒子；</li>
			<li>‘flex-shrink’ 值为 1 的元素都收缩了同样大小的量，以至所有元素都适应盒子。这样做后它们已变得比它们的初始宽度还小。</li>
		</ul>



		<pre>
		<code v-code:html.escape>
<div class="box shrink-0">
  <div>One</div>
  <div>Two</div>
  <div>Three has more content</div>
</div>

<div class="box shrink-1">
  <div>One</div>
  <div>Two</div>
  <div>Three has more content</div>
</div>
		</code>
	</pre>


		<p>CSS</p>
		<pre>
	<code v-code:css>
		.box {
		display: flex;
		width: 500px;
		margin: 10px 0;
		border: 2px dotted #698aa5;
	}

	.box > * {
		width: 200px;
		border: 2px solid #698aa5;
		border-radius: 5px;
		background-color: #e1e8ed;
	}

	.shrink-0 > * { flex: 0 0 auto; }
	.shrink-1 > * { flex: 0 1 auto; }
	</code>
</pre>


		<p>结果</p>
		<figure id="demo-20240409-1019">
			<div class="box shrink-0">
				<div>One</div>
				<div>Two</div>
				<div>Three has more content</div>
			</div>

			<div class="box shrink-1">
				<div>One</div>
				<div>Two</div>
				<div>Three has more content</div>
			</div>
		</figure>
	</figure>


	<figure>
		<figcaption>示例</figcaption>

		<p>HTML</p>
		<pre>
	<code v-code:html>
&lt;p&gt;the width of content is 500px, flex-basic of flex item is 120px.&lt;/p&gt;
&lt;p&gt;A, B, C are flex-shrink:1. D and E are flex-shrink:2&lt;/p&gt;
&lt;p&gt;the width of D is not the same as A's&lt;/p&gt;
&lt;div id="content"&gt;
  &lt;div class="box"  style="background-color:red;"       &gt;A&lt;/div&gt;
  &lt;div class="box"  style="background-color:lightblue;" &gt;B&lt;/div&gt;
  &lt;div class="box"  style="background-color:yellow;"    &gt;C&lt;/div&gt;
  &lt;div class="box1" style="background-color:brown;"     &gt;D&lt;/div&gt;
  &lt;div class="box1" style="background-color:lightgreen;"&gt;E&lt;/div&gt;
&lt;/div&gt;
	</code>
</pre>

		<p>CSS</p>

		<pre>
	<code v-code:css>
#content {
  display: flex;
  width: 500px;
	border: 1px solid #ccc;
	padding: 5px;
}

#content div {
  flex-basis: 120px;
  border: 3px solid rgba(0, 0, 0, 0.2);
}

.box  { flex-shrink: 1; }
.box1 { flex-shrink: 2; }
	</code>
</pre>


		<p>结果</p>
		<figure id="demo-20240409-1003">
			<p>the width of content is 500px, flex-basic of flex item is 120px.</p>
			<p>A, B, C are flex-shrink:1. D and E are flex-shrink:2</p>
			<p>the width of D is not the same as A's</p>
			<div id="content">
				<div class="box" style="background-color:red;">A</div>
				<div class="box" style="background-color:lightblue;">B</div>
				<div class="box" style="background-color:yellow;">C</div>
				<div class="box1" style="background-color:brown;">D</div>
				<div class="box1" style="background-color:lightgreen;">E</div>
			</div>
		</figure>
	</figure>

	<p>如果 flex 容器中没有足够排列 flex 元素的空间（即：只有在 flex 元素总和超出主轴才会生效），那么可以把 flex 元素
		‘flex-shrink’ 属性设置为正整数来缩小它所占空间到 ‘flex-basis’ 以下。</p>

	<p>与 ‘flex-grow’ 属性一样，可以赋予不同的值来控制 flex 元素收缩的程度——给 ‘flex-shrink’
		属性赋予更大的数值可以比赋予小数值的同级元素收缩程度更大。</p>


	<p>在计算 flex 元素收缩的大小时，它的最小尺寸也会被考虑进去，就是说实际上 ‘flex-shrink’ 属性可能会和 ‘flex-grow’ 属性表现的不一致。</p>

	<br>
	<section class="note">
		<strong>备注：</strong>
		在给 ‘flex-grow’ 和 ‘flex-shrink’ 赋值时要注意比例。如果给所有 flex 元素的 ‘flex’ 属性赋值为 ‘1 1 200px’ ，并且希望其中一个元素可以增加到 2 倍，可以给该元素的 ‘flex’
		属性赋值为 ‘2 1 200px’。当然，也可以选择赋值为 ‘flex: 10 1 200px’ 和 ‘flex: 20 1 200px’。
	</section>



	<figure>
		<figcaption>给元素设置不同的 flex-shrink 因子</figcaption>

		<p>在 ‘flex-grow’ 值相同的情形下，可以给弹性元素设置不同的 ‘flex-shrink’ 因子。假如想让一个元素比它的兄弟元素收缩的更快或更慢，或者不再收缩，这会改变它的默认行为。</p>


		<p>在下面的示例中第一个元素设置 ‘flex-shrink’ 的值为 1、第二个为 0（因此它将不会收缩）、第三个为 4。第三个元素比第一个收缩的更快。任意设置不同的值——可以给 ‘flex-grow’ 使用小数或者大一点的数。
		</p>



		<pre>
			<code v-code:html.escape>
<div class="box">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
</div>
			</code>
		</pre>

		<p>CSS</p>

		<pre>
			<code v-code:css>
				.box {
		display: flex;
		width: 500px;
		margin: 10px 0;
		border: 2px dotted #698aa5;
	}

	.box > * {
		width: 200px;
		border: 2px solid #698aa5;
		border-radius: 5px;
		background-color: #e1e8ed;
	}

	.one   { flex: 1 1 auto; }
	.two   { flex: 1 0 auto; }
	.three { flex: 2 4 auto; }
			</code>
		</pre>


		<p>结果</p>
		<figure id="demo-20240409-1505">
			<div class="box">
				<div class="one">One</div>
				<div class="two">Two</div>
				<div class="three">Three</div>
			</div>
		</figure>
	</figure>
</template>