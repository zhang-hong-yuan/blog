<template>
	<h1>块级引用元素：<span>&lt;blockquote&gt;</span></h1>

	<p>块级元素</p>
	<p>HTML ‘&lt;blockquote&gt;’ 元素，代表其中的文字是引用内容。通常在渲染时，这部分的内容会有一定的缩进。若引文来源于网络，则可以将原内容的出处 URL 地址设置到 ‘cite’
		特性上，若要以文本的形式告知读者引文的出处时，可以通过 ‘ &lt;cite&gt;’ 元素。</p>

	<p>若想使用在行内引用较短的内容而非创建一个单独的引用块，可使用 ‘&lt;q&gt;’（Quotation）元素。浏览器经常会在这种引用的周围插入引号。</p>


	<p>此元素的属性包含 全局属性。</p>


	<p>‘&lt;q&gt;’ 标签和 ‘&lt;blockquote&gt;’ 标签共有的属性：</p>


	<figure>
		<table>
			<tr>
				<th>属性</th>
				<th>值</th>
				<th>描述</th>
			</tr>
			<tr>
				<td>cite</td>
				<td>URL</td>
				<td>是一个标注引用的信息的来源文档或者相关信息的 URL。通常用来描述能够解释引文的上下文或者引用的信息。</td>
			</tr>
		</table>
	</figure>



	<figure>
		<figcaption>示例</figcaption>

		<p>下面的这个例子演示了使用 ‘&lt;blockquote&gt;’ 元素引用一段来自 <a href="https://datatracker.ietf.org/doc/html/rfc1149"
				target="_blank">RFC 1149</a> 的内容，以禽类作为载体的 IP 数据包传输标准。</p>


		<pre>
			<code v-code:html.escape>
<blockquote cite="https://tools.ietf.org/html/rfc1149">
  <p>
    Avian carriers can provide high delay, low throughput, and low altitude
    service. The connection topology is limited to a single point-to-point path
    for each carrier, used with standard carriers, but many carriers can be used
    without significant interference with each other, outside of early spring.
    This is because of the 3D ether space available to the carriers, in contrast
    to the 1D ether used by IEEE802.3. The carriers have an intrinsic collision
    avoidance system, which increases availability.
  </p>
</blockquote>
			</code>
		</pre>

		<p>上面的 HTML 代码将会生成：</p>
		<blockquote>
			<blockquote cite="https://tools.ietf.org/html/rfc1149" style="margin: revert;">
				<p>
					Avian carriers can provide high delay, low throughput, and low altitude
					service. The connection topology is limited to a single point-to-point path
					for each carrier, used with standard carriers, but many carriers can be used
					without significant interference with each other, outside of early spring.
					This is because of the 3D ether space available to the carriers, in contrast
					to the 1D ether used by IEEE802.3. The carriers have an intrinsic collision
					avoidance system, which increases availability.
				</p>
			</blockquote>
		</blockquote>
	</figure>
</template>