<template>
	<h1>Event</h1>
	<p>事件三要素：事件源、事件类型和事件处理程序。</p>
	<p>事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即 DOM 事件流。DOM 事件流分为3个阶段：⓵捕获阶段；⓶当前目标阶段；⓷冒泡阶段。</p>
	<p>JS 只能执行捕获或者冒泡其中的一个阶段。onclick 和 attachEvent 只能得到冒泡阶段。有些事件(onblur、onfocus、onmouseenter、onmouseleave)是没有冒泡的。</p>
	<p>事件冒泡：当一个元素的事件被触发时，同样的事件将会在该元素的所有祖先元素中依次被触发。</p>
	<br>
	<h2>注册/解绑事件</h2>
	<p>注册事件有两种方式：传统方式和方法监听注册方式。</p>
	<ul>
		<li><code>btn.onclick = function(){}</code> 同一元素同一事件只能设置一个处理函数，最后注册的处理函数会覆盖前面注册的处理函数。</li>
		<li><code>addEventListener()</code> 它是一个方法，IE9 之前的，可使用 <code>attachEvent()</code> 代替。</li>

	</ul>
	<pre v-code:js>eventTarget.addEventListener(type, listener[, useCapture])
</pre>
	<ul>
		<li><code>type</code>事件类型字符串，比如 click 、mouseover，注意这里不要带 on。</li>
		<li><code>listener</code>
			事件处理函数，事件发生时，会调用该监听函数。不能带小括号，如果要传递参数，即必须带小括号，则事件处理函数要返回一个函数：<code>function debounce(fn, t = 500) { return function () { ... } }</code>。如果不写
			return 返回一个函数，则事件处理函数直接执行，事件处理程序将不再触发。</li>
		<li><code>useCapture</code> 可选，默认是 false，表示在事件冒泡阶段调用事件处理程序；如果是 true，表示在事件捕获阶段调用事件处理程序。</li>

	</ul>
	<pre v-code:js>eventTarget.attachEvent(eventNameWithOn, callback)
</pre>
	<ul>
		<li>
			<p><code>eventNameWithOn</code> 事件类型字符串，比如 onclick 、onmouseover ，这里要带 on。</p>
			<p><code>callback</code> 事件处理函数，当目标触发事件时回调函数被调用。</p>
		</li>

	</ul>
	<p>删除事件</p>
	<ul>
		<li><code>eventTarget.onclick = null;</code></li>
		<li><code>eventTarget.removeEventListener(type, listener, [useCapture]);</code></li>
		<li><code>eventTarget.detachEvent(eventNameWithOn, callback);</code></li>

	</ul>
</template>