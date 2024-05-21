<template>
	<h1>元数据：<span>&lt;meta&gt;</span> 元素</h1>

	<p>元数据(Metadata)是数据的数据信息。‘&lt;meta&gt;’ 标签提供了 HTML 文档的元数据。元数据不会显示在客户端，但是会被浏览器解析。</p>

	<p>‘&lt;meta&gt;’ 元素表示那些不能由其他 HTML
		元相关（meta-related）元素表示的元数据信息。如：‘&lt;base&gt;’、‘&lt;link&gt;’、‘&lt;script&gt;’、‘&lt;style&gt;’ 或 ‘&lt;title&gt;’。
	</p>




	<p>‘&lt;meta&gt;’ 标签通常位于 ‘&lt;head&gt;’ 区域内。元数据通常以 名称/值 对出现。如果没有提供 name 属性，那么名称/值对中的名称会采用 http-equiv 属性的值。</p>



	<p>‘&lt;meta&gt;’ 元素定义的元数据的类型包括以下几种：</p>

	<figure>
		<table>
			<tr>
				<th>属性</th>
				<th>值</th>
				<th>描述</th>
			</tr>
			<tr>
				<td>charset</td>
				<td>
					<ul>
						<li>character_set</li>
					</ul>
				</td>
				<td>
					<p>该属性声明了文档的字符编码，告诉文档使用哪种字符编码。</p>
					<p>如果存在该属性，则其值必须是字符串 ‘"utf-8"’(不区分大小写)，因为 UTF-8 是 HTML5 文档的唯一有效编码。声明字符编码的
						‘&lt;meta&gt;’ 元素必须完全位于文档的前 1024 个字节内。</p>
				</td>
			</tr>

			<tr>
				<td class="nowrap">http-equiv</td>
				<td>
					<ul>
						<li>content-type</li>
						<li>default-style</li>
						<li>refresh</li>
					</ul>
				</td>
				<td>
					<p>属性定义了一个编译指示指令。这个属性叫做 ‘http-equiv(alent)’ 是因为所有允许的值都是特定 HTTP 标头的名称，如下：</p>

					<ul>
						<li>‘default-style’ 设置默认 CSS 样式表组的名称。</li>
						<li>
							‘refresh’ 这个属性指定：
							<ul>
								<li>页面重新加载的秒数——仅当 content 属性包含非负整数时。</li>
								<li>页面重定向到指定链接的秒数——仅当 content 属性包含非负整数后跟字符串“;url=”和有效的 URL 时。</li>
							</ul>
						</li>
					</ul>
				</td>
			</tr>
			<tr>
				<td>name</td>
				<td class="nowrap">
					<ul>
						<li>application-name</li>
						<li>author</li>
						<li>description</li>
						<li>keywords</li>
						<li>viewport</li>
						<li>generator</li>
					</ul>
				</td>
				<td>
					<p>如果设置了 ‘name’ 属性，‘&lt;meta&gt;’ 元素提供的是文档级别（document-level）的元数据，应用于整个页面。</p>
					<p>‘name’ 和 ‘content’ 属性可以一起使用，以‘名 - 值’对的方式给文档提供元数据，其中 ‘name’ 作为元数据的名称，‘content’ 作为元数据的值。</p>
				</td>
			</tr>

			<tr>
				<td>content</td>
				<td>
					<ul>
						<li>text</li>
					</ul>
				</td>
				<td>此属性包含 ‘http-equiv’ 或 ‘name’ 属性的值，具体取决于所使用的值。</td>
			</tr>
		</table>
	</figure>


	<p>META元素通常用于指定网页的描述，关键词，字符集，文件的最后修改时间，作者及其他元数据。元数据可以被浏览器(如何显示内容或重新加载页面)，搜索引擎(关键词)，或其他 Web 服务调用。</p>

	<pre>
		<code v-code:html>
&lt;!-- 定义文档字符编码： --&gt;
&lt;meta charset="utf-8" /&gt;

&lt;!-- 定义文档关键词，用于搜索引擎： --&gt;
&lt;meta name=&quot;keywords&quot; content=&quot;HTML, CSS, XML, XHTML, JavaScript&quot;&gt;

&lt;!-- 定义web页面描述： --&gt;
&lt;meta name=&quot;description&quot; content=&quot;Free Web tutorials on HTML and CSS&quot;&gt;

&lt;!-- 定义页面作者： --&gt;
&lt;meta name=&quot;author&quot; content=&quot;Hege Refsnes&quot;&gt;

&lt;!-- 每30秒刷新页面： --&gt;
&lt;meta http-equiv=&quot;refresh&quot; content=&quot;30&quot;&gt;

&lt;!-- Redirect page after 3 seconds --&gt;
&lt;meta http-equiv="refresh" content="3;url=https://www.mozilla.org" /&gt;
</code>
</pre>






</template>