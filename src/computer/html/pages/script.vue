<template>
	<h1>&lt;script&gt;</h1>
	<p>【&lt;script&gt;】 标签用于定义客户端脚本，比如 JavaScript。JavaScript 通常用于图像操作、表单验证以及动态内容更改。</p>
	<p>【&lt;script&gt;】 元素既可包含脚本语句，也可以通过 【&quot;src&quot;】 属性指向外部脚本文件。如果使用 【&quot;src&quot;】 属性，则 【&lt;script&gt;】
		元素必须是空的。有多种执行外部脚本的方法：</p>

	<table>
		<tr>
			<th>属性</th>
			<th>值</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>src</td>
			<td><em>URL</em></td>
			<td>规定外部脚本的 URL。</td>
		</tr>
		<tr>
			<td>async</td>
			<td>async</td>
			<td>规定异步执行脚本。</td>
		</tr>
		<tr>
			<td>defer</td>
			<td>defer</td>
			<td>规定当页面已完成解析后，执行脚本。</td>
		</tr>
		<tr>
			<td>charset</td>
			<td><em>charset</em></td>
			<td>规定在脚本中使用的字符编码。</td>
		</tr>
		<tr>
			<td>type</td>
			<td><em>MIME-type</em></td>
			<td>规定脚本的 MIME 类型。默认为 【text/javascript】</td>
		</tr>
	</table>
	<p>【async】 【defer】 【charset】 仅适用于外部脚本。</p>
	<p>defer 和 async 都是用于异步加载 JavaScript 脚本的属性，但它们之间有一些区别：</p>
	<ol>
		<li><strong>加载顺序</strong>：使用defer属性加载的脚本会在HTML文档解析完成后按照顺序依次执行；而使用async属性加载的脚本则不保证执行的顺序，只要下载完成就会立即执行。</li>
		<li><strong>执行时机</strong>：使用defer属性加载的脚本会在文档解析完成后、DOMContentLoaded事件之前执行；而使用async属性加载的脚本则会在下载完成后立即执行，不会等待文档解析完成。</li>
		<li>
			<strong>对DOM的影响</strong>：使用defer属性加载的脚本不会阻塞DOM的解析和渲染，也不会影响页面的加载速度，因为它会等到HTML文档解析完成后再执行。而使用async属性加载的脚本可能会影响DOM的解析和渲染，因为它会在下载完成后立即执行，如果脚本需要操作DOM元素，可能会影响到页面的加载速度和用户体验。
		</li>
	</ol>
	<p>综上所述，使用defer属性加载的脚本适用于需要按顺序执行的脚本，并且不依赖于DOM元素的脚本；而使用async属性加载的脚本适用于独立的、不依赖于其他脚本和DOM元素的脚本。</p>
	<p>如果既不使用 async 也不使用 defer：在浏览器继续解析页面之前，立即读取并执行脚本。</p>
</template>