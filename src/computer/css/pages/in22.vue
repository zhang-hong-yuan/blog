<script setup>
import flex from '../view/flex'
</script>

<template>
	<h1>flex 元素上的属性</h1>


	<p>为了更好地控制 flex 元素，有三个属性可以作用于它们：</p>

	<ul>
		<li>‘flex-grow’ 该元素获得（伸张）多少正可用空间（positive free space）？</li>
		<li>‘flex-shrink’ 该元素要消除（收缩）多少负可用空间（negative free space）？</li>
		<li>‘flex-basis’ 在该元素未伸张和收缩之前，它的大小是多少？</li>
	</ul>


	<p>在考虑这几个属性的作用之前，需要先了解一下<strong>可用空间</strong>（available space）这个概念。这几个 flex 属性的作用其实就是改变了 flex 容器中的可用空间的行为。同时，可用空间对于
		flex 元素的对齐行为也是很重要的。</p>


	<flex />


	<p>如果期望这些元素能自动地扩展去填充满剩下的空间，那么需要去控制可用空间在这几个元素间如何分配，这就是元素上的那些 flex 属性要做的事。</p>



	<h2>Flex 属性的简写</h2>

	<p>‘flex-grow’，‘flex-shrink’，和 ‘flex-basis’ 属性很少单独使用，而是混合着写在 ‘flex’ 简写形式中。 Flex 简写形式允许把三个数值按这个顺序书写 —
		‘flex-grow’，‘flex-shrink’，‘flex-basis’。</p>

	<p>大多数情况下 flex 可以用预定义的简写形式：</p>
	<figure>
		<table>
			<tr>
				<th>属性值</th>
				<th>描述</th>
			</tr>
			<tr>
				<td>‘initial’</td>
				<td>把 flex 元素重置为 ‘Flexbox’ 的初始值，它相当于 ‘flex: 0 1 auto’。在这里 ‘flex-grow’ 的值为 0，所以 flex 元素不会超过它们 ‘flex-basis’
					的尺寸。‘flex-shrink’ 的值为 1, 所以可以缩小 flex 元素来防止它们溢出。‘flex-basis’ 的值为 ‘auto’。 Flex 元素尺寸可以是在主维度上设置的，也可以是根据内容自动得到的。
				</td>
			</tr>
			<tr>
				<td>‘auto’</td>
				<td>等同于 ‘flex: 1 1 auto;’ 和上面的 ‘flex: initial;’ 基本相同，但是这种情况下，flex 元素在需要的时候既可以拉伸也可以收缩。</td>
			</tr>
			<tr>
				<td>‘none’</td>
				<td>可以把 flex 元素设置为不可伸缩。它和设置为 ‘flex: 0 0 auto’ 是一样的。元素既不能拉伸或者收缩，但是元素会按具有 ‘flex-basis: auto’ 属性的 flexbox 进行布局。
				</td>
			</tr>
			<tr>
				<td class="nowrap">‘&lt;positive-number&gt;’</td>
				<td>在教程中常看到的 ‘flex: 1’ 或者 ‘flex: 2’ 等等。它相当于 ‘flex: 1 1 0’ 或者 ‘flex: 2 1 0’。元素可以在 ‘flex-basis’ 为 0 的基础上伸缩。</td>
			</tr>
		</table>
	</figure>


	<h2>掌握弹性元素的大小</h2>

	<p>真正理解弹性元素如何工作的关键是理解有多少因素参与影响弹性元素。思考以下方面：</p>

	<h4>什么设置了元素的基本大小？</h4>

	<ol>
		<li>‘flex-basis’ 设置为 ‘auto’，且元素设置了宽度吗？如果设置了，元素的大小将会基于设置的宽度。</li>
		<li>‘flex-basis’ 设为了 ‘auto’ 或 ‘content’（在支持的浏览器中）? 如果设置了，元素的大小为原始大小。</li>
		<li>‘flex-basis’ 是不是为 0 的长度单位吗？如果是这样，那这就是元素的大小。</li>
		<li>‘flex-basis’ 设为了 0？如果是这样，则元素的大小不在空间分配计算的考虑之内。</li>
	</ol>


	<h4>有可用空间吗？</h4>

	<p>元素没有正可用空间就不会增长，没有负可用空间就不会缩小。</p>

	<ol>
		<li>如果把所有元素的宽度相加（如果在列方向工作则为高度），总和是否小于容器的总宽度（或高度）？如果是这样，有正可用空间，‘flex-grow’ 就会发挥作用。</li>
		<li>如果把所有的元素的宽度相加（如果在列方向工作则为高度），总和是否大于容器的总宽度（或高度）？如果是这样，有负可用空间，‘flex-shrink’ 就会发挥作用。</li>
	</ol>


	<h4>分配空间的其他方式</h4>


	<p>如果不想将空间添加到元素中，‘justify-content’ 属性能够在元素之间或元素周围分配空闲空间。还可以在弹性元素上使用自动边距（auto margin）来吸收空间并在元素之间创建间距。</p>
</template>