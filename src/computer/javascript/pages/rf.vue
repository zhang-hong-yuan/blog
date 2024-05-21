<template>
	<h1>Location</h1>


	<p>window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。<strong>window.location</strong> 对象在编写时可不使用 window 这个前缀。 一些例子：</p>
	<ul>
		<li>location.href 属性返回当前页面的 URL。</li>
		<li>location.hostname 返回 web 主机的域名</li>
		<li>location.pathname 返回当前页面的路径名和文件名</li>
		<li>location.port 返回 web 主机的端口 (80 或 443)</li>
		<li>location.protocol 返回所使用的 web 协议(http: 或 https:)</li>

	</ul>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>location对象方法</th>
					<th style='text-align:left;'>返回值</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>location.assign()</td>
					<td style='text-align:left;'>跟 href 一样，可以跳转页面(也称为重定向页面)。记录浏览历史，所以可以实现后退功能。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>location.replace()</td>
					<td style='text-align:left;'>替换当前页面，因为不记录历史，所以不能后退页面。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>location.reload()</td>
					<td style='text-align:left;'>重新加载页面，相当于刷新按钮或者 F5，如果参数为 true ，强制刷新 ctrl+F5。</td>
				</tr>
			</tbody>
		</table>
	</figure>
</template>