<template>
	<h2>HTTP响应消息</h2>
	<p>响应消息就是服务器响应给客户端的消息内容，也叫作响应报文。</p>
	<p>HTTP响应消息由状态行、响应头部、空行 和 响应体 4 个部分组成，如下图所示：</p>
	<figure>
		<img src="../assets/HTTP响应消息.png" alt=" " style="width:80%;" />
	</figure>
	<p><strong>状态行</strong>由 HTTP 协议版本、状态码和状态码的描述文本 3 个部分组成，他们之间使用空格隔开。</p>
	<figure>
		<img src="../assets/HTTP响应消息状态行.png" style="width:50%;" />
	</figure>
	<p>HTTP 响应状态码 (HTTP Status Code)，也属于 HTTP 协议的一部分，用来标识响应的状态。</p>
	<p>响应状态码会随着响应消息一起被发送至客户端浏览器，浏览器根据服务器返回的响应状态码，就能知道这次 HTTP 请求的结果是成功还是失败了。</p>
	<p>HTTP 状态码由三个十进制数字组成，第一个十进制数字定义了状态码的类型，后两个数字用来对状态码进行细分。HTTP 状态码共分为 5 种类型：</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th>分类</th>
					<th>分类描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1**</td>
					<td><strong>信息</strong>，服务器收到请求，需要请求者继续执行操作（实际开发中很少遇到 1** 类型的状态码）</td>
				</tr>
				<tr>
					<td>2**</td>
					<td><strong>成功</strong>，操作被成功接收并处理</td>
				</tr>
				<tr>
					<td>3**</td>
					<td><strong>重定向</strong>，需要进一步的操作以完成请求</td>
				</tr>
				<tr>
					<td>4**</td>
					<td><strong>客户端错误</strong>，请求包含语法错误或无法完成请求</td>
				</tr>
				<tr>
					<td>5**</td>
					<td><strong>服务器错误</strong>，服务器在处理请求的过程中发生了错误</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p><code>2**</code> 范围的状态码，表示服务器已成功接收到请求并进行处理。常见的 <code>2**</code> 类型的状态码如下：</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th>状态码</th>
					<th>状态码英文名称</th>
					<th>中文描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>200</td>
					<td>OK</td>
					<td><strong>请求成功</strong>。一般用于 GET 与 POST 请求</td>
				</tr>
				<tr>
					<td>201</td>
					<td>Created</td>
					<td><strong>已创建</strong>。成功请求并创建了新的资源，通常用于 POST 或 PUT 请求</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p><code>3**</code> 范围的状态码，表示表示服务器要求客户端重定向，需要客户端进一步的操作以完成资源的请求。常见的 <code>3**</code> 类型的状态码如下：</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th>状态码</th>
					<th>状态码英文名称</th>
					<th>中文描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>301</td>
					<td>Moved Permanently</td>
					<td><strong>永久移动</strong>。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替</td>
				</tr>
				<tr>
					<td>302</td>
					<td>Found</td>
					<td><strong>临时移动</strong>。与301类似。但资源只是临时被移动。客户端应继续使用原有URI</td>
				</tr>
				<tr>
					<td>304</td>
					<td>Not Modified</td>
					<td><strong>未修改</strong>。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源（响应消息中不包含响应体）。客户端通常会缓存访问过的资源。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p><code>4**</code> 范围的状态码，表示客户端的请求有非法内容，从而导致这次请求失败。常见的 <code>4**</code> 类型的状态码如下：</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th>状态码</th>
					<th>状态码英文名称</th>
					<th>中文描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>400</td>
					<td>Bad Request</td>
					<td>1、语义有误，当前请求无法被服务器理解。除非进行修改，否则客户端不应该重复提交这个请求。<br>2、请求参数有误。</td>
				</tr>
				<tr>
					<td>401</td>
					<td>Unauthorized</td>
					<td>当前请求需要用户验证。</td>
				</tr>
				<tr>
					<td>403</td>
					<td>Forbidden</td>
					<td>服务器已经理解请求，但是拒绝执行它。</td>
				</tr>
				<tr>
					<td>404</td>
					<td>Not Found</td>
					<td>服务器无法根据客户端的请求找到资源（网页）。</td>
				</tr>
				<tr>
					<td>408</td>
					<td>Request Timeout</td>
					<td>请求超时。服务器等待客户端发送的请求时间过长，超时。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p><code>5**</code> 范围的状态码，表示服务器未能正常处理客户端的请求而出现意外错误。常见的 <code>5**</code> 类型的状态码如下：</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th>状态码</th>
					<th>状态码英文名称</th>
					<th>中文描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>500</td>
					<td>Internal Server Error</td>
					<td>服务器内部错误，无法完成请求。</td>
				</tr>
				<tr>
					<td>501</td>
					<td>Not Implemented</td>
					<td>服务器不支持该请求方法，无法完成请求。只有 GET 和 HEAD 请求方法是要求每个服务器必须支持的，其它请求方法在不支持的服务器上会返回501</td>
				</tr>
				<tr>
					<td>503</td>
					<td>Service Unavailable</td>
					<td>由于超载或系统维护，服务器暂时的无法处理客户端的请求。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<blockquote>
		<p>完整的 HTTP 响应状态码，可以参考 MDN 官方文档 <a href='https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status' target='_blank'
				class='url'>https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status</a></p>
	</blockquote>
	<br>
	<p><strong>响应头部</strong>用来描述服务器的基本信息。响应头部由多行 键/值对 组成，每行的键和值之间用英文的冒号分隔。</p>
	<figure>
		<img src="../assets/HTTP响应消息响应头部.png" style="width:60%;" />
	</figure>
	<blockquote>
		<p>更多响应头字段的描述，可以查看 MDN 官方文档：<a href='https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers' target='_blank'
				class='url'>https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers</a></p>
	</blockquote>
	<br>
	<p>在最后一个响应头部字段结束之后，会紧跟一个<strong>空行</strong>，用来通知客户端响应头部至此结束。响应消息中的空行，用来分隔响应头部与响应体。</p>
	<br>
	<p><strong>响应体</strong>中存放的，是服务器响应给客户端的资源内容。</p>
	<figure>
		<img src="../assets/HTTP响应消息响应体.png" style="width:60%;" />
	</figure>
	<p>&nbsp;</p>
	<p>&nbsp;</p>
	<p>&nbsp;</p>
	<p>&nbsp;</p>
	<p>&nbsp;</p>
	<p>&nbsp;</p>
</template>
	
<script setup lang='ts'>

</script>
	
<style></style>