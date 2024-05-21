<template>
	<h1>@media</h1>

	<p>媒体查询（Media queries）非常实用，尤其是需要根据设备的大致类型（如打印设备与带屏幕的设备）或者特定的特征和设备参数（例如屏幕分辨率和浏览器视窗宽度）来修改网站或应用程序时。</p>



	<p>媒体查询常被用于以下目的：</p>
	<ul>
		<li>有条件的通过 ‘@media’ 和 ‘@import’ at-rules 用 CSS 装饰样式。</li>
		<li>用 ‘media=’ 属性为 <code v-code:html>&lt;style&gt;</code>, <code v-code:html>&lt;link&gt;</code>, <code
				v-code:html>&lt;source&gt;</code> 和其他HTML元素指定特定的媒体类型。</li>
		<li>使用 ‘Window.matchMedia()’ 和 ‘MediaQueryList.addListener()’ 方法来测试和监控媒体状态。</li>
	</ul>

	<p>‘@media’ CSS at 规则可用于基于一个或多个媒体查询的结果来应用样式表的一部分。使用它，可以指定一个媒体查询和一个 CSS 块，当且仅当该媒体查询与正在使用其内容的设备匹配时，该 CSS 块才能应用于该文档。</p>



	<p>
		每条媒体查询语句都由一个可选的<strong>媒体类型</strong>和任意数量的<strong>媒体特性</strong>表达式构成。可以使用多种<strong>逻辑操作符</strong>合并多条媒体查询语句。媒体查询语句不区分大小写。
	</p>


	<p>当媒体类型（如果指定）与在其上显示文档的设备匹配并且所有媒体功能表达式都计算为 ‘true’ 时，媒体查询将计算为 ‘true’。涉及未知媒体类型的查询始终为 ‘false’。</p>


	<p>‘@media’ at 规则可置于代码的顶层或嵌套至其他任何的 at 条件规则组中。</p>

	<pre>
		<code v-code:css>
/* 在代码的顶层 */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* 嵌套至其他的 at 条件规则中 */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}
		</code>
	</pre>


	<p>还可以针对不同的媒体使用不同的样式表：</p>


	<pre>
		<code v-code:html>
			&lt;link rel="stylesheet" media="mediatype and|not|only (media feature)" href="print.css"&gt;
		</code>
	</pre>

	<section class="note">
		<strong>备注：</strong>
		即使媒体查询返回 ‘false’，带有媒体查询附加到其 <code v-code:html.escape><link></code> 标记的样式表仍将下载。但是，除非查询结果变为 ‘true’，否则其内容将不适用。
	</section>







</template>