<template>
	<h1>History</h1>


	<p>window.history 对象包含浏览器的历史。<strong>window.history</strong>对象在编写时可不使用 window 这个前缀。一些方法：</p>
	<ul>
		<li>history.back() - 与在浏览器点击后退按钮相同。即，加载历史列表中的前一个 URL。这与在浏览器中点击后退按钮是相同的</li>
		<li>history.forward() - 与在浏览器中点击向前按钮相同。即，加载历史列表中的下一个 URL。这与在浏览器中点击前进按钮是相同的</li>
		<li>go(参数) - 前进后退功能。参数如果是1，前进一个页面；如果是-1，后退一个页面。</li>

	</ul>
	<blockquote>注：back()和forward()都没有参数。</blockquote>
</template>