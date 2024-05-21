<template>
	<h1>Window</h1>

	<p>所有浏览器都支持 window 对象。它表示浏览器窗口。所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。</p>
	<ul>
		<li>全局变量是 window 对象的属性。</li>
		<li>全局函数是 window 对象的方法。</li>

	</ul>
	<p>甚至 HTML DOM 的 document 也是 window 对象的属性之一：<code>window.document.getElementById(&quot;header&quot;);</code>等价于
		<code>document.getElementById(&quot;header&quot;);</code>
	</p>


	<p>有三种方法能够确定浏览器窗口的尺寸。</p>
	<p>对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari：</p>
	<ul>
		<li><code>window.innerHeight</code> 浏览器窗口的内部高度(包括滚动条)</li>
		<li><code>window.innerWidth</code> 浏览器窗口的内部宽度(包括滚动条)</li>

	</ul>
	<p>对于 Internet Explorer 8、7、6、5：</p>
	<ul>
		<li><code>document.documentElement.clientHeight</code></li>
		<li><code>document.documentElement.clientWidth</code></li>

	</ul>
	<p>或者</p>
	<ul>
		<li><code>document.body.clientHeight</code></li>
		<li><code>document.body.clientWidth</code></li>

	</ul>
	<p>实用的 JavaScript 方案(涵盖所有浏览器，包含 IE8 及以下版本的浏览器)：该例显示浏览器窗口的高度和宽度。</p>
	<pre v-code:js>var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
</pre>
	<h3>window 对象的常见事件</h3>
	<p>窗口加载事件，当文档内容完全加载完成会触发该事件(包括图像、脚本文件、CSS 文件等)，就调用的处理函数。窗口加载事件可以把 JS 代码写到页面元素的上方。(①a标签的超链接；②刷新页面；③前进后退按钮。三种情况都会刷新页面触发
		load 事件)</p>
	<ul>
		<li><code>window.onload = function(){}</code></li>
		<li><code>window.addEventListener(&quot;load&quot;,function(){})</code></li>
		<li><code>document.addEventListener(&#39;DOMContentLoaded&#39;,function(){})</code></li>

	</ul>
	<p>DOMContentLoaded 仅当DOM加载完成时触发，不包括样式表，图片，flash等等。</p>

	<p>调整窗口大小事件</p>
	<ul>
		<li><code>window.onresize = function(){}</code></li>
		<li><code>window.addEventListener(&quot;resize&quot;,function(){})</code></li>

	</ul>
</template>