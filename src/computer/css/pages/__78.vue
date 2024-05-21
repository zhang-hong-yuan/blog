<template>
	<h1>@font-face</h1>

	<p>‘@font-face’ CSS at-rule 指定一个用于显示文本的自定义字体；字体能从远程服务器或者用户本地安装的字体加载。如果提供了 ‘local()’
		函数，从用户本地查找指定的字体名称，并且找到了一个匹配项，本地字体就会被使用。否则，字体就会使用 ‘url()’ 函数下载的资源。</p>

	<p>通过允许作者提供他们自己的字体，‘@font-face’ 让设计内容成为了一种可能，同时并不会被所谓的"网络 - 安全"字体所限制
		(字体如此普遍以至于它们能被广泛的使用)。指定查找和使用本地安装的字体名称可以让字体的自定义化程度超过基本字体，同时在不依赖网络情况下实现此功能。</p>


	<p>在同时使用 ‘url()’ 和 ‘local()’
		功能时，为了用户已经安装的字体副本在需要使用时被使用，如果在用户本地没有找到字体副本就会去使用户下载的副本查找字体。</p>





	<pre>
			<code v-code:css>
@font-face {
  font-family: "Open Sans";
  src:
    url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
    url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}
			</code>
		</pre>

	<dl>
		<dt>‘font-family’</dt>
		<dd>所指定的字体名字将会被用于 ‘font’ 或 ‘font-family’ 属性。</dd>


		<dt>‘src’</dt>
		<dd>远程字体文件位置的 URL 或者用户计算机上的字体名称，可以使用 local 语法通过名称指定用户的本地计算机上的字体 ( i.e. src: local('Arial');
			)。如果找不到该字体，将会尝试其他来源，直到找到它。</dd>
	</dl>



	<p>这是一个叫做 ‘@font-face’ 的 CSS @规则 ，它允许网页开发者为其网页指定在线字体。通过这种作者自备字体的方式，‘@font-face’ 可以消除对用户电脑字体的依赖。</p>


	<p>‘@font-face’ 规则不仅仅使用在 CSS 的顶层，还可以用在任何 CSS 条件组规则中。</p>



	<h6>示例</h6>


	<p>下面的例子简单定义了一个可下载的字体，并应用到了文档的整个 body 标签上。</p>


	<pre>
		<code v-code:html>
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Web Font Sample&lt;/title&gt;
    &lt;style type="text/css" media="screen, print"&gt;
      @font-face {
        font-family: "Bitstream Vera Serif Bold";
        src: url("https://mdn.github.io/css-examples/web-fonts/VeraSeBd.ttf");
      }

      body {
        font-family: "Bitstream Vera Serif Bold", serif;
      }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
    This is Bitstream Vera Serif Bold.
  &lt;/body&gt;
&lt;/html&gt;
		</code>
	</pre>


	<p>在下面的例子中，用到了用户本地字体"Helvetica Neue Bold"的备份；如果当前用户 (浏览器) 未安装该字体 (两种可能的字体名都已经试过)，就会用下载的字体"MgOpenModernaBold.ttf"来代替：
	</p>


	<pre>
		<code v-code:css>
@font-face {
  font-family: MyHelvetica;
	font-weight: bold;
  src: local("Helvetica Neue Bold"),
			 local("HelveticaNeue-Bold"),
			 url(MgOpenModernaBold.ttf);
}
		</code>
	</pre>




	<p>不能在一个 CSS 选择器中定义 ‘@font-face’。例如，这样写是无效的：</p>


	<pre>
		<code v-code:css.error>
.className {
  @font-face {
    font-family: MyHelvetica;
		font-weight: bold;
    src: local("Helvetica Neue Bold"),
				 local("HelveticaNeue-Bold"),
      	 url(MgOpenModernaBold.ttf);
  }
}
		</code>
	</pre>




	<p>这个例子新定义了一个字体，正常粗细的字采用字体 Times New Roman，粗体字采用 Consolas。</p>


	<pre>
		<code v-code:css>
@font-face {
  font-family: myFirstFont;
  src: local("Times New Roman");
  font-weight: normal;
}

@font-face {
  font-family: myFirstFont;
  src: local(Consolas);
  font-weight: bold;
}
		</code>
	</pre>
</template>