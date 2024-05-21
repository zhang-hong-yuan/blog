<template>
	<h1>Fonts</h1>
	<p>CSS Fonts (字体)属性用于定义字体系列、大小、粗细、和文字样式(如斜体)。</p>
	<p>字体复合属性<code>font: font-style font-weight font-size/line-height font-family;</code></p>
	<ul>
		<li>使用 font 属性时，必须按上面语法格式中的顺序书写，并且各个属性间以空格隔开</li>
		<li>不需要设置的属性可以省略(取默认值)，但必须保留 font-size 和 font-family 属性，否则 font 属性将不起作用</li>

	</ul>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>属性</th>
					<th style='text-align:left;'>表示</th>
					<th style='text-align:left;'>注意点</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>font-style</td>
					<td style='text-align:left;'>字体样式</td>
					<td style='text-align:left;'>斜体是italic，不倾斜是normal。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>font-weight</td>
					<td style='text-align:left;'>字体粗细</td>
					<td style='text-align:left;'>加粗是700或者bold，不加粗是normal或者400。数字不跟单位。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>font-size</td>
					<td style='text-align:left;'>字号</td>
					<td style='text-align:left;'>通常用的单位是px像素。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>font-family</td>
					<td style='text-align:left;'>字体</td>
					<td style='text-align:left;'>实际工作中按照团队约定来写字体。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>font-style</h2>
	<p>CSS 使用 font-style 属性设置文本的风格。</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>属性值</th>
					<th style='text-align:left;'>作用</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>normal</td>
					<td style='text-align:left;'>默认值，浏览器会显示标准的字体样式。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>italic</td>
					<td style='text-align:left;'>浏览器会显示斜体的字体样式。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p>注意：很少给文字加斜体，反而要给斜体标签(em，i)改为不倾斜字体。</p>
	<h2>font-weight</h2>
	<p>CSS 使用 font-weight 属性设置文本字体的粗细。</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>属性值</th>
					<th style='text-align:left;'>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>normal</td>
					<td style='text-align:left;'>默认值(不加粗的)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>bold</td>
					<td style='text-align:left;'>定义粗体(加粗的)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>100～900</td>
					<td style='text-align:left;'>400等同于normal，而700等同于bold。注意数字后面不跟单位。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>font-size</h2>
	<p>CSS 使用 font-size 属性定义字体大小。</p>
	<ul>
		<li>px(像素)大小是我们网页的最常用的单位</li>
		<li>谷歌浏览器默认的文字大小为16px</li>
		<li>不同浏览器默认字号大小不一致，尽量给一个明确值大小，不要默认大小</li>
		<li>可以给 body 指定整个页面文字的大小</li>

	</ul>
	<h2>font-family</h2>
	<p>CSS 使用 font-family 属性定义文本的字体系列。</p>
	<p>font-family 属性应包含多个字体名称作为“后备”系统，以确保浏览器/操作系统之间的最大兼容性。请以需要的字体开始，并以通用系列结束。</p>
	<ul>
		<li>各种字体之间必须使用英文状态下的逗号隔开</li>
		<li>如果有空格隔开的多个单词组成的字体，加引号</li>
		<li>尽量使用系统默认自带字体，保证在任何用户的浏览器中都能正确显示</li>

	</ul>
	<h2>line-height</h2>
	<p>line-height 属性用于设置行间的距离(行高)。可以控制文字行与行之间的距离。</p>
	<figure><img src="../assets/line-height.png" referrerpolicy="no-referrer" alt="img"></figure>
	<br>
	<p><strong>单行文字垂直居中</strong>：CSS 没有提供文字垂直居中的代码。</p>
	<p>解决方案：让文字的行高等于盒子的高度，就可以让文字在当前盒子内垂直居中：</p>

	<p>(注：如果行高小于盒子高度，文字会偏上，如果行高大于盒子高度，则文字偏下。)</p>
	<h2>IconFont</h2>
	<p>字体图标主要用于显示网页中通用、常用的一些小图标。</p>
	<p>精灵图是有诸多优点的，但是缺点很明显。</p>
	<ol>
		<li>图片文件还是比较大的。</li>
		<li>图片本身放大和缩小会失真。</li>
		<li>一旦图片制作完毕想要更换非常复杂。</li>

	</ol>
	<p><br>字体图标展示的是图标，本质属于字体。字体图标的优点</p>
	<ul>
		<li>轻量级：一个图标字体要比一系列的图像要小。一旦字体加载了，图标就会马上渲染出来，减少了服务器请求。</li>
		<li>灵活性：本质其实是文字，可以很随意的改变颜色、产生阴影、透明效果、旋转等。</li>
		<li>兼容性：几乎支持所有的浏览器。</li>

	</ul>
	<p><br>字体图标不能替代精灵技术，只是对工作中图标部分技术的提升和优化。</p>
	<ul>
		<li>如果遇到一些结构和样式比较简单的小图标，就用字体图标。</li>
		<li>如果遇到一些结构和样式复杂一点的小图片，就用精灵图。</li>

	</ul>
	<p>字体图标的使用</p>
	<p>一、字体图标的下载</p>
	<ul>
		<li>icomoon 字库 <a href='http://icomoon.io' target='_blank' class='url'>http://icomoon.io</a></li>
		<li>阿里 iconfont 字库 <a href='http://www.iconfont.cn/' target='_blank' class='url'>http://www.iconfont.cn/</a></li>

	</ul>
	<p>二、字体图标的引入</p>
	<p>⑴. 把下载包里面的 fonts 文件夹放入页面根目录下(注意原先的文件不要删)</p>
	<p>字体文件格式(.ttf .woff .eot .svg)：不同浏览器所支持的字体格式是不一样的，字体图标之所以兼容，就是因为包含了主流浏览器支持的字体文件。</p>
	<p>⑵. 在 CSS 样式中全局声明字体，注意字体文件路径的问题。</p>
	<pre v-code:css>@font-face {
  font-style: normal;
  font-weight: normal;
  font-family: &#39;icomoon&#39;;
  src: url(&#39;fonts/icomoon.eot?7kkyc2&#39;);
  src: url(&#39;fonts/icomoon.eot?7kkyc2#iefix&#39;) format(&#39;embedded-opentype&#39;),
       url(&#39;fonts/icomoon.ttf?7kkyc2&#39;) format(&#39;truetype&#39;),
       url(&#39;fonts/icomoon.woff?7kkyc2&#39;) format(&#39;woff&#39;),
       url(&#39;fonts/icomoon.svg?7kkyc2#icomoon&#39;) format(&#39;svg&#39;);
}</pre>
	<p>⑶. html 标签内添加小图标。</p>
	<p>⑷. 给标签定义字体：务必保证 这个字体和上面@font-face里面的字体保持一致</p>
	<pre v-code:css>span {font-family: &quot;icomoon&quot;;}</pre>
	<p>三、字体图标的追加</p>
	<p>如果原来的字体图标不够用了，需要添加新的字体图标到原来的字体文件中。把压缩包里面的 selection.json 重新上传，然后选中需要的新图标，重新下载压缩包，并替换原来的文件即可。</p>
	<h1></h1>
</template>