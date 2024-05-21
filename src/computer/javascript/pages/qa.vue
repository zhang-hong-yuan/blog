<template>
	<h1>获取元素</h1>
	<p><code>document.querySelector()</code> 方法可以返回选择器选择的第一个元素对象。</p>
	<p><code>querySelectorAll()</code> 方法可以返回选择器选择的对象的集合(伪数组)。</p>
	<p>&nbsp;</p>
	<p><code>getElementById(id)</code> 方法可以获取带有 ID 的元素对象。</p>
	<ul>
		<li>id是大小写敏感的字符串</li>
		<li>只有在作为 document 的方法时才能起作用</li>

	</ul>
	<p>&nbsp;</p>
	<p><code>getElementsByTagName()</code> 方法可以返回带有指定标签名的对象的集合。</p>
	<p><code>getElementsByClassName()</code> 方法可以返回带有指定类名的对象的集合。</p>
	<p><code>getElementsByName()</code> 方法可以返回带有指定name的对象的集合。</p>
	<ol>
		<li>因为得到的是一个对象的集合，所以我们想要操作里面的元素就需要遍历。</li>
		<li>得到元素对象是动态的。</li>

	</ol>
	<p>&nbsp;</p>
	<p><code>doucumnet.body</code> 获取body元素对象</p>
	<p><code>document.documentElement</code> 获取html元素对象</p>
	<br>
</template>