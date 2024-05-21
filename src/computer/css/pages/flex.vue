<template>
	<h1>Flex</h1>


	<p>Flexible Box 模型，通常被称为 flexbox，是一种一维的布局模型。它给 flexbox 的子元素之间提供了强大的空间分布和对齐能力。本文给出了 flexbox 的主要特性，更多的细节将在别的文档中探索。</p>


	<p>说 flexbox 是一种一维的布局，是因为一个 flexbox 一次只能处理一个维度上的元素布局，一行或者一列。作为对比的是另外一个二维布局 CSS Grid Layout，可以同时处理行和列上的布局。</p>


	<p>文档中采用了 flexbox 的区域就叫做 flex 容器。为了创建 flex 容器，可以把一个容器的 ‘display’ 属性值改为 ‘flex’ 或者 ‘inline-flex’。完成这一步之后，容器中的直系子元素就会变为
		<strong>flex 元素</strong>。由于所有 CSS 属性都会有一个初始值，所以 flex 容器中的所有 flex 元素都会有下列行为：
	</p>

	<ul>
		<li>元素排列为一行。</li>
		<li>元素从主轴的起始线开始。</li>
		<li>元素不会在主维度方向拉伸，但是可以缩小。</li>
		<li>元素被拉伸来填充交叉轴大小。</li>
		<li>‘flex-basis’ 属性为 ‘auto’。</li>
		<li>‘flex-wrap’ 属性为 ‘nowrap’。</li>
	</ul>


	<p>这会让 flex元素 呈线形排列，并且把自己的大小作为主轴上的大小。如果有太多元素超出容器，它们会溢出而不会换行。如果一些元素比其他元素高，那么元素会沿交叉轴被拉伸来填满它的大小。</p>


</template>