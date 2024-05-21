<template>
	<h1>router-link</h1>

	<p>请注意，Vue Router 没有使用常规的 ‘a’ 标签，而是使用一个自定义组件 ‘router-link’ 来创建链接。这使得 Vue Router 可以在【不重新加载页面】的情况下更改 URL，处理 URL 的生成以及编码。
	</p>

	<br>
	<h3>RouterLinkProps</h3>
	<hr>
	<h3>to</h3>
	<ul>
		<li>to: ‘RouteLocationRaw’</li>
	</ul>

	<p>当点击该链接时应该进入的【路由地址】。</p>

	<p>‘to’ 的两种写法：</p>

	<pre v-code:html>
&lt;!-- 第一种：to的字符串写法 --&gt;
&lt;router-link to="【/home】"&gt;主页&lt;/router-link&gt;

&lt;!-- 第二种：to的对象写法 --&gt;
&lt;router-link :to="【{ path:'/home】' }"&gt;Home&lt;/router-link&gt;
</pre>

	<h3>activeClass</h3>
	<ul>
		<li>‘可选’ activeClass: ‘string’</li>
	</ul>
	<p>链接在匹配当前路由时被应用到 【class】。</p>

	<h3>replace</h3>
	<ul>
		<li>‘可选’ replace: ‘boolean’</li>
	</ul>

	<p>调用 ‘【router.replace】’ 以替换 ‘router.push’。</p>


</template>