<template>
	<h1>@import</h1>


	<p>‘@import’ CSS@规则，用于从其他样式表导入样式规则。这些规则必须先于所有其他类型的规则，‘@charset’ 规则除外; 因为它不是一个嵌套语句，‘@import’ 不能在条件组的规则中使用。</p>


	<p>用户可以避免为不支持的媒体类型检索资源，作者可以指定依赖媒体的 ‘@import’ 规则。这些条件在 URI 之后指定逗号分隔的媒体查询。在没有任何媒体查询的情况下，导入是无条件的。指定所有的媒体具有相同的效果。</p>


	<pre>
		<code v-code:css>
@import url;
@import url list-of-media-queries;
		</code>
	</pre>


	<dl>
		<dt>‘url’</dt>
		<dd>是一个表示要引入资源位置的 <code v-code:html>&lt;string&gt;</code> 或者 <code
				v-code:html>&lt;uri&gt;()</code>。这个 URL 可以是绝对路径或者相对路径。要注意的是这个 URL 不需要指明一个文件；可以只指明包名，然后合适的文件会被自动选择。</dd>


		<dt>‘list-of-media-queries’</dt>
		<dd>是一个逗号分隔的 媒体查询 条件列表，决定通过 URL 引入的 CSS 规则 在什么条件下应用。如果浏览器不支持列表中的任何一条媒体查询条件，就不会引入 URL 指明的 CSS 文件。</dd>
	</dl>


	<h6>示例</h6>

	<pre>
		<code v-code:css>
@import url("fineprint.css") print;
@import url("bluish.css") projection, tv;
@import "custom.css";
@import url("chrome://communicator/skin/");
@import "common.css" screen, projection;
@import url("landscape.css") screen and (orientation: landscape);
		</code>
	</pre>

</template>