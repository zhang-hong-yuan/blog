<template>
	<h2>节点操作</h2>
	<p>一般地，节点至少拥有nodeType(节点类型)、nodeName(节点名称)和nodeValue(节点值)这三个基本属性。</p>
	<ul>
		<li>元素节点nodeType为1 (节点操作主要操作的是元素节点)</li>
		<li>属性节点nodeType为2</li>
		<li>文本节点nodeType为3(文本节点包含文字、空格、换行等)</li>

	</ul>
	<p>如果是元素节点，nodeName属性和tagName属性返回相同的值，但如果是文本节点，nodeName属性会返回&quot;#text&quot;，而tagName属性会返回undefined。</p>
	<p>利用 DOM 树可以把节点划分为不同的层级关系，常见的是父子兄层级关系。</p>
	<h3>父级节点</h3>
	<p><code>node.parentNode</code> 属性可返回某节点的父节点，注意是最近的一个父节点。如果指定的节点没有父节点则返回 null</p>
	<h3>子节点</h3>
	<p><code>parentNode.children</code> 以伪数组的形式，返回所有的子元素节点。</p>
	<ul>
		<li>第一个子元素节点：<code>parentNode.chilren[0]</code></li>
		<li>最后一个子元素节点：<code>parentNode.chilren[parentNode.chilren.length - 1]</code></li>

	</ul>
	<p><code>parentNode.firstElementChild</code> 返回第一个子元素节点，找不到则返回null。</p>
	<p><code>parentNode.lastElementChild</code> 返回最后一个子元素节点，找不到则返回null。</p>
	<blockquote>
		<p>firstElementChild 和 lastElementChild 这两个方法有兼容性问题。</p>
	</blockquote>
	<p>&nbsp;</p>
	<p><code>parentNode.childNodes</code> 返回包含指定节点的子节点的集合，该集合为即时更新的集合。</p>
	<p><code>parentNode.firstChild</code> 返回第一个子节点，找不到则返回null。包含所有的节点。</p>
	<p><code>parentNode.lastChild</code> 返回最后一个子节点，找不到则返回null。包含所有的节点。</p>
	<blockquote>
		<p>childNodes、firstChild 和 lastChild：返回值包含了所有的子节点，包括元素节点，文本节点等。不提倡使用</p>
	</blockquote>
	<h3>兄弟节点</h3>
	<p><code>node.previousElementSibling</code> 返回当前元素上一个兄弟节点，找不到则返回null。</p>
	<p><code>node.nextElementSibling</code> 返回当前元素下一个兄弟元素节点，找不到则返回null。</p>
	<blockquote>
		<p>previousElementSibling 和 nextElementSibling 这两个方法有兼容性问题。</p>
	</blockquote>
	<p>&nbsp;</p>
	<p><code>node.previousSibling</code> 返回当前元素上一个兄弟元素节点，找不到则返回null。包含所有节点。</p>
	<p><code>node.nextSibling</code> 返回当前元素的下一个兄弟元素节点，找不到则返回null。包含所有节点。</p>
	<h3>创建节点</h3>
	<p><code>document.createElement('tagName')</code> 创建由 tagName 指定的 HTML 元素。也称为动态创建元素节点。</p>
	<h3>添加节点</h3>
	<p><code>node.appendChild()</code> 方法将一个节点添加到指定父节点的子节点列表末尾。</p>
	<p><code>node.insertBefore()</code> 方法将一个节点添加到父节点的指定子节点前面。</p>
	<h3>删除节点</h3>
	<p><code>node.removeChild()</code> 方法从 DOM 中删除一个子节点，返回删除的节点。素必须通过父元素删除。</p>
	<p>删除节点和隐藏节点(display:none)的区别：前者节点还存在；但删除意味着DOM树中不存在该节点。</p>
	<h3>复制节点</h3>
	<p><code>node.cloneNode(false | true)</code> 方法返回调用该方法的节点的一个副本。 也称为克隆节点/拷贝节点。</p>
	<ul>
		<li>参数为空或者 false，则是浅拷贝。即只克隆复制节点本身，不克隆里面的子节点。</li>
		<li>参数为 true，则是深度拷贝。会复制节点本身以及里面所有的子节点。</li>

	</ul>
</template>