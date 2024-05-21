<template>
	<br>
	<h2>HTTP请求消息</h2>
	<p>由于 HTTP 协议属于客户端浏览器和服务器之间的通信协议。因此，客户端发起的请求叫做 HTTP 请求，客户端发送到服务器的消息，叫做 HTTP 请求消息/报文。</p>
	<p>HTTP 请求消息由请求行 (request line)、请求头部 (header)、空行 和 请求体 4 个部分组成。</p>
	<figure>
		<img src="../assets/HTTP请求消息.png" alt=" " style="width:80%;" />
	</figure>
	<p><strong>请求行</strong>由 请求方式、URL 和 HTTP 协议版本 3 个部分组成，他们之间使用空格隔开。</p>
	<figure>
		<img src="../assets/HTTP请求消息请求行.png" style="width:50%;" />
	</figure>
	<p>HTTP 请求方法，属于 HTTP 协议中的一部分，请求方法的作用是：用来表明要对服务器上的资源执行的操作。最常用的请求方法是 GET 和 POST。</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th>方法</th>
					<th>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><strong>GET</strong></td>
					<td>(<strong>查询</strong>)发送请求来获得服务器上的资源，请求体中不会包含请求数据，请求数据放在协议头中。</td>
				</tr>
				<tr>
					<td><strong>POST</strong></td>
					<td>(<strong>新增</strong>)向服务器提交资源（例如提交表单或上传文件）。数据被包含在请求体中提交给服务器。</td>
				</tr>
				<tr>
					<td><strong>PUT</strong></td>
					<td>(<strong>修改</strong>)向服务器提交资源，并使用提交的新资源，替换掉服务器对应的旧资源。</td>
				</tr>
				<tr>
					<td><strong>DELETE</strong></td>
					<td>(<strong>删除</strong>)请求服务器删除指定的资源。</td>
				</tr>
				<tr>
					<td>HEAD</td>
					<td>HEAD 方法请求一个与 GET 请求的响应相同的响应，但没有响应体。</td>
				</tr>
				<tr>
					<td>OPTIONS</td>
					<td>获取http服务器支持的http请求方法，允许客户端查看服务器的性能，比如ajax跨域时的预检等。</td>
				</tr>
				<tr>
					<td>CONNECT</td>
					<td>建立一个到由目标资源标识的服务器的隧道。</td>
				</tr>
				<tr>
					<td>TRACE</td>
					<td>沿着到目标资源的路径执行一个消息环回测试，主要用于测试或诊断。</td>
				</tr>
				<tr>
					<td>PATCH</td>
					<td>是对 PUT 方法的补充，用来对已知资源进行局部更新 。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<br>
	<p><strong>请求头部</strong>用来描述客户端的基本信息，从而把客户端相关的信息告知服务器。请求头部由多行 键/值对 组成，每行的键和值之间用英文的冒号分隔。</p>
	<figure>
		<img src="../assets/HTTP请求消息请求头部.png" style="width:100%;" />
	</figure>
	<figure>
		<table>
			<thead>
				<tr>
					<th>常见的请求头字段</th>
					<th>说明</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Host</td>
					<td>要请求的服务器域名</td>
				</tr>
				<tr>
					<td>Connection</td>
					<td>客户端与服务器的连接方式(close 或 keepalive)</td>
				</tr>
				<tr>
					<td>Content-Length</td>
					<td>用来描述请求体的大小</td>
				</tr>
				<tr>
					<td><strong>Accept</strong></td>
					<td>用来描述客户端可识别的响应内容类型列表</td>
				</tr>
				<tr>
					<td><strong>User-Agent</strong></td>
					<td>请求的浏览器类型</td>
				</tr>
				<tr>
					<td><strong>Content-Type</strong></td>
					<td>客户端告诉服务器实际发送的数据类型</td>
				</tr>
				<tr>
					<td>Accept-Encoding</td>
					<td>客户端可接收的内容压缩编码形式</td>
				</tr>
				<tr>
					<td><strong>Accept-Language</strong></td>
					<td>用户期望获得的自然语言的优先顺序</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<blockquote>
		<p>更多请求头字段的描述，可以查看 MDN 官方文档：<a href='https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers' target='_blank'
				class='url'>https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers</a></p>
	</blockquote>
	<br>
	<p>最后一个请求头字段的后面是一个<strong>空行</strong>，通知服务器请求头部至此结束。请求消息中的空行，用来分隔请求头部与请求体。</p>
	<br>
	<p><strong>请求体</strong>中存放的是要通过 POST 方式提交到服务器的数据。(<strong>注意：</strong>只有 POST 请求才有请求体，GET 请求没有请求体！)</p>
	<br>
</template>
	
<script setup lang='ts'>

</script>
	
<style></style>