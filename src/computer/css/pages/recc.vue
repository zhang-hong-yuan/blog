<template>
	<h1>结合 flex-grow 和 flex-basis</h1>

	<p>根据 ‘flex-grow’ 和 ‘flex-basis’ 的相互影响，有些东西会变得迷惑起来。例如三个不同内容大小的弹性元素，并应用 ‘flex: 1 1 auto;’ flex
		规则。</p>


	<p>这个例子中设置 ‘flex-basis’ 的值为 ‘auto’ 且没有设置它们的宽，因此它们是自动调整大小的。这意味着弹性盒子的大小取决于元素的 ‘max-content’
		大小。在布局完元素之后，弹性容器中还有一些正可用空间，展示在这幅图片的阴影区域中：</p>

	<figure>
		<img src="../assets/flex-grow_flex-basis.png" alt="">
	</figure>

	<p>这个示例中使用与内容大小相等的
		‘flex-basis’，以便从总可用空间（弹性容器的宽度）中减去可用分配空间，然后剩余空间在每个元素之间平均分配。我们比较大的元素最终会变得更大，因为它一开始就有一个比较大的尺寸，即使它与其他元素具有相同的分配空间：</p>


	<figure>
		<img src="../assets/flex-grow_flex-basis_2.png" alt="">
	</figure>


	<p>如果需要的是三个同样尺寸的元素，即使它们开始具有不同的尺寸，应该使用 ‘flex: 1 1 0;’。</p>


	<p>为了达到上述的空间分配，元素的尺寸计算值是 0——所有空间都用来争夺，并且所有元素具有相同的 ‘flex-grow’ 值，它们每个都获得相等的空间分配。最终结果是三个等宽的可伸缩元素。</p>



	<h6>示例</h6>
	<p>HTML</p>
	<pre>
<code v-code:html.escape>
<div class="box grow-1">
<div>One</div>
<div>Two</div>
<div>Three has more content</div>
</div>

<div class="box grow-0">
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
	margin-bottom: 10px;
	border: 2px dotted #698aa5;
 }

 .box > * {
	border: 2px solid #698aa5;
	border-radius: 6px;
	background-color: #e1e8ed;
 }

.grow-1 > * { flex: 1 1 0; }
.grow-0 > * { flex: 0 1 0; }
</code>
</pre>

	<p>结果</p>


	<figure id="demo-20240409-0924">
		<div class="box grow-1">
			<div>One</div>
			<div>Two</div>
			<div>Three has more content</div>
		</div>

		<div class="box grow-0">
			<div>One</div>
			<div>Two</div>
			<div>Three has more content</div>
		</div>
	</figure>



	<h6>为元素设置不同的 flex-grow 因子</h6>

	<p>对 ‘flex-grow’ 和 ‘flex-basis’ 如何工作的理解使我们能够通过分配不同的 ‘flex-grow’ 值来进一步控制单个元素的大小。如果设置 ‘flex-basis’ 值为 0
		则所用空间都可以被分配，我们可以给每个弹性元素分配不同的 ‘flex-grow’ 因子。在下面的示例中，我们会使用下面的值：</p>


	<ul>
		<li>设置第一个元素的 ‘flex-grow’ 值为 ‘1’。</li>
		<li>设置第二个元素的 ‘flex-grow’ 值为 ‘1’。</li>
		<li>设置第三个元素的 ‘flex-grow’ 值为 ‘2’。</li>
	</ul>


	<p>‘flex-basis’ 值为 ‘0’ 意味着可用空间会根据以下规则分配。首先将弹性增长因子相加，然后将弹性容器的正可用空间总量除以该值，在这个例子中为
		4。而后就可以根据每一个的值分配空间——第一个元素得到一个单位、第二个元素得到一个单位、第三个元素得到二个单位。也就是说第三个元素是第一个和第二个元素的两倍。</p>



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
	border: 2px dotted #698aa5;
}

.box > * {
	border: 2px solid #698aa5;
	border-radius: 6px;
	background-color: #e1e8ed;
 }

.one { flex: 1 1 0; }
.two { flex: 1 1 0; }
.three { flex: 2 1 0; }
	</code>
</pre>


	<p>结果</p>
	<figure id="demo-202040409-0934">
		<div class="box">
			<div class="one">One</div>
			<div class="two">Two</div>
			<div class="three">Three</div>
		</div>
	</figure>


	<p>注意这里使用正值。这是一个元素和其他元素之间的比例。还可以使用更大的数字或者更小的数字——把上例中分配的值更改为 .25、.25 和 .50 会得到相同的结果。</p>
</template>