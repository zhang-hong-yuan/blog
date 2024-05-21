<template>
	<h1>Float</h1>
	<p>float 属性用于定位和格式化内容，例如让图像向左浮动到容器中的文本那里。<code>float</code> 属性可以设置以下值之一：</p>
	<ul>
		<li>left - 元素浮动到其容器的左侧</li>
		<li>right - 元素浮动在其容器的右侧</li>
		<li>none - 元素不会浮动(将显示在文本中刚出现的位置)。默认值。</li>

	</ul>
	<p>最简单的用法是，<code>float</code> 属性可实现(报纸上)文字包围图片的效果。</p>
	<br />
	<p>clear 属性指定哪些元素可以浮动于被清除元素的旁边以及哪一侧。<code>clear</code> 属性可设置以下值之一：</p>
	<ul>
		<li>none - 允许两侧都有浮动元素。默认值</li>
		<li>left - 左侧不允许浮动元素</li>
		<li>right- 右侧不允许浮动元素</li>
		<li>both - 左侧或右侧均不允许浮动元素</li>

	</ul>
	<p>使用 <code>clear</code> 属性的最常见用法是在元素上使用了 <code>float</code> 属性之后。</p>
	<p>在清除浮动时，应该对清除与浮动进行匹配：如果某个元素浮动到左侧，则应清除左侧。您的浮动元素会继续浮动，但是被清除的元素将显示在其下方。</p>
</template>
	
<script setup lang='ts'>

</script>
	
<style></style>