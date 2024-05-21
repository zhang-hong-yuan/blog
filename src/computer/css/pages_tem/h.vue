<template>
	<h1>Box Model</h1>
	<p>所有 HTML 元素都可以视为方框。在 CSS 中，在谈论设计和布局时，会使用术语“盒模型”或“框模型”。</p>
	<p>盒子模型(Box Model)就是把 HTML 页面中的布局元素看作是一个矩形的盒子，也就是一个盛装内容的容器。</p>
	<p>CSS 盒子模型本质上是一个盒子，封装周围的 HTML 元素，它包括：边框、外边距、内边距和实际内容。下图展示了框模型：</p>
	<p><img src="../assets/model-box.gif" referrerpolicy="no-referrer" alt="CSS 框模型"></p>
	<h2>display</h2>
	<p>元素显示模式就是元素(标签)以什么方式进行显示，比如 div 自己占一行，比如一行可以放多个 span 。HTML 元素一般分为块元素和行内元素两种类型。</p>
	<h3>块元素</h3>
	<p>常见的块元素有 &lt;h1&gt;~&lt;h6&gt;、&lt;p&gt;、&lt;div&gt;、&lt;ul&gt;、&lt;ol&gt;、&lt;li&gt;等，其中 &lt;div&gt;
		标签是最典型的块元素。块级元素的特点：</p>
	<ol>
		<li>高度、宽度、外边距以及内边距都可以控制。</li>
		<li>宽度默认是容器(父级宽度)的100%。</li>
		<li>是一个容器及盒子，里面可以放行内元素或者块级元素。</li>

	</ol>
	<p>注意：</p>
	<ul>
		<li>文字类的元素内不能使用块级元素</li>
		<li>&lt;p&gt; 标签主要用于存放文字，因此 &lt;p&gt; 里面不能放块级元素，特别是不能放 &lt;div&gt;</li>
		<li>同理，&lt;h1&gt;~&lt;h6&gt;等都是文字类块级标签，里面也不能放其他块级元素</li>

	</ul>
	<h3>行内元素</h3>
	<p>常见的行内元素有 &lt;a&gt; &lt;strong&gt; &lt;b&gt; &lt;em&gt; &lt;i&gt; &lt;del&gt; &lt;s&gt; &lt;ins&gt; &lt;u&gt;
		&lt;span&gt; 等，其中 &lt;span&gt; 标签是最典型的行内元素。有的地方也将行内元素称为内联元素。行内元素的特点：</p>
	<ol>
		<li>相邻行内元素在一行上，一行可以显示多个。</li>
		<li>高、宽直接设置是无效的。</li>
		<li>默认宽度就是它本身内容的宽度。</li>
		<li>行内元素只能容纳文本或其他行内元素。</li>

	</ol>
	<p>行内元素为了照顾兼容性，尽量只设置左右内外边距，不要设置上下内外边距。但是转换为块级和行内块元素就可以了。</p>
	<p>注意：</p>
	<ul>
		<li>链接里面不能再放链接</li>
		<li>特殊情况链接 &lt;a&gt; 里面可以放块级元素，但是给 &lt;a&gt; 转换一下块级模式最安全</li>

	</ul>
	<h3>行内块元素</h3>
	<p>在行内元素中有几个特殊的标签 —— &lt;img /&gt;、&lt;input /&gt;、&lt;td&gt;，它们同时具有块元素和行内元素的特点。有些资料称它们为行内块元素。行内块元素的特点：</p>
	<ol>
		<li>和相邻行内元素(行内块)在一行上，但是他们之间会有空白缝隙。一行可以显示多个(行内元素特点)。</li>
		<li>默认宽度就是它本身内容的宽度(行内元素特点)。</li>
		<li>高度，行高、外边距以及内边距都可以控制(块级元素特点)。</li>

	</ol>
	<h3>元素显示模式转换</h3>
	<p>特殊情况下，需要元素模式的转换，比如想要增加链接 &lt;a&gt; 的触发范围。即，一个模式的元素需要另外一种模式的特性。</p>
	<ul>
		<li>转换为块元素：display: block;</li>
		<li>转换为行内元素：display: inline;</li>
		<li>转换为行内块：display: inline-block;</li>

	</ul>
	<blockquote>
		<p>注意：设置元素的 display 属性仅会更改<em>元素的显示方式</em>，而不会更改元素的种类。因此，带有 <code>display: block;</code> 的行内元素不允许在其中包含其他块元素。</p>
	</blockquote>
	<h2>box-sizing</h2>
	<p>CSS3 通过 box-sizing 来指定盒模型，值为：content-box | border-box</p>
	<ul>
		<li>box-sizing: content-box; 盒子大小为 width + padding + border</li>
		<li>box-sizing: border-box; 盒子大小为 width</li>

	</ul>
	<h2>outline</h2>
	<p>轮廓与边框不同之处在于：轮廓是在元素边框之外绘制的，并且可能与其他内容重叠。同样，轮廓也不是元素尺寸的一部分；元素的总宽度和高度不受轮廓线宽度的影响。</p>
	<p>轮廓是在元素周围绘制的一条线，在边框之外，以凸显元素。CSS 拥有如下轮廓属性：</p>
	<ul>
		<li><code>outline-style</code></li>
		<li><code>outline-color</code></li>
		<li><code>outline-width</code></li>
		<li><code>outline-offset</code></li>
		<li><code>outline</code></li>

	</ul>
	<p>反转颜色 <code>outline-color: invert</code>，执行了颜色反转。这样可以确保无论颜色背景如何，轮廓都是可见的。</p>
	<p>轮廓偏移<code>outline-offset</code> 属性在元素的轮廓与边框之间添加空间。元素及其轮廓之间的空间是透明的。</p>
	<p>&nbsp;</p>
	<p><code>outline</code> 属性是用于设置以下各个轮廓属性的简写属性：</p>
	<ul>
		<li><code>outline-width</code></li>
		<li><code>outline-style</code>(必需)</li>
		<li><code>outline-color</code></li>

	</ul>
	<p>从上面的列表中，<code>outline</code> 属性可指定一个、两个或三个值。值的顺序无关紧要。除非设置了 <code>outline-style</code> 属性，否则其他轮廓属性都不会有任何作用！</p>
	<h2>border</h2>
	<p>border可以设置元素的边框。边框有三部分组成：边框宽度(粗细) 边框样式 边框颜色。</p>
	<pre v-code:css>border : border-width | border-style(必需) | border-color</pre>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>属性</th>
					<th style='text-align:left;'>作用</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>border-width</td>
					<td style='text-align:left;'>定义边框粗细</td>
				</tr>
				<tr>
					<td style='text-align:left;'>border-style</td>
					<td style='text-align:left;'>边框的样式</td>
				</tr>
				<tr>
					<td style='text-align:left;'>border-color</td>
					<td style='text-align:left;'>边框颜色</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p>border-width 属性指定四个边框的宽度。</p>
	<p>可以将宽度设置为特定大小(以 px、pt、cm、em 计)，也可以使用以下三个预定义值之一：thin、medium 或 thick：</p>
	<p>&nbsp;</p>
	<p>边框样式 border-style 可以设置如下值：</p>
	<ul>
		<li><code>solid</code> - 定义实线边框</li>
		<li><code>double</code> - 定义双边框</li>
		<li><code>dotted</code> - 定义点线边框</li>
		<li><code>dashed</code> - 定义虚线边框</li>
		<li><code>none</code> - 定义无边框</li>
		<li><code>hidden</code> - 与 &quot;none&quot; 相同。不过应用于表时除外，对于表，hidden 用于解决边框冲突。</li>
		<li><code>groove</code> - 定义 3D 坡口边框。效果取决于 border-color 值</li>
		<li><code>ridge</code> - 定义 3D 脊线边框。效果取决于 border-color 值</li>
		<li><code>inset</code> - 定义 3D inset 边框。效果取决于 border-color 值</li>
		<li><code>outset</code> - 定义 3D outset 边框。效果取决于 border-color 值</li>

	</ul>
	<p><code>border-style</code> 属性可以设置一到四个值(用于上边框、右边框、下边框和左边框)。边框简写：</p>
	<pre v-code:css>border: 1px solid red; /* 没有顺序*/</pre>
	<p>边框分开写法：</p>
	<pre v-code:css>border-top: 1px solid red; /* 只设定上边框，其余同理 */</pre>
	<p>除非设置了 <code>border-style</code> 属性，否则其他 CSS 边框属性都不会有任何作用！</p>
	<p>边框会额外增加盒子的实际大小。有两种方案解决：</p>
	<ol>
		<li>测量盒子大小的时候，不量边框。</li>
		<li>如果测量的时候包含了边框，则需要 width/height 减去边框宽度。</li>

	</ol>
	<h2>margin</h2>
	<p>margin 属性用于设置外边距，即控制盒子和盒子之间的距离。</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>属性</th>
					<th style='text-align:left;'>作用</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>margin-left</td>
					<td style='text-align:left;'>左外边距</td>
				</tr>
				<tr>
					<td style='text-align:left;'>margin-right</td>
					<td style='text-align:left;'>右外边距</td>
				</tr>
				<tr>
					<td style='text-align:left;'>margin-top</td>
					<td style='text-align:left;'>上外边距</td>
				</tr>
				<tr>
					<td style='text-align:left;'>margin-bottom</td>
					<td style='text-align:left;'>下外边距</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p>margin 简写方式代表的意义跟 padding 完全一致。</p>
	<p>外边距可以让块级盒子水平居中，但是必须满足两个条件：</p>
	<ol>
		<li>盒子必须指定了宽度(width)。</li>
		<li>盒子左右的外边距都设置为 auto (浏览器来计算外边距)。</li>

	</ol>
	<p>常见的写法，以下三种都可以：</p>
	<ul>
		<li>margin-left: auto; margin-right: auto;</li>
		<li>margin: auto;</li>
		<li>margin: 0 auto;</li>

	</ul>
	<blockquote>
		<p>注意：以上方法是让块级元素水平居中，行内元素或者行内块元素水平居中给其父元素添加 text-align:center 即可。</p>
	</blockquote>
	<p>&nbsp;</p>
	<p><strong>外边距合并</strong>：使用 margin 定义块元素的垂直外边距时，可能会出现外边距的合并。</p>
	<p>⑴ 相邻块元素垂直外边距的合并</p>
	<p>当上下相邻的两个块元素(兄弟关系)相遇时，如果上面的元素有下外边距 margin-bottom，下面的元素有上外边距 margin-top ，则他们之间的垂直间距不是 margin-bottom 与 margin-top
		之和。取两个值中的较大者这种现象被称为相邻块元素垂直外边距的合并。</p>
	<p><img src="../assets/margin-collapsing-a.gif" referrerpolicy="no-referrer" alt="img"></p>
	<p><strong>解决方案</strong>尽量只给一个盒子添加 margin 值。</p>
	<p>⑵ 嵌套块元素垂直外边距的塌陷</p>
	<p>当一个元素包含在另一个元素中时(假设没有内边距或边框把外边距分隔开)，它们的上和/或下外边距也会发生合并。请看下图：</p>
	<p><img src="../assets/margin-collapsing-b.gif" referrerpolicy="no-referrer" alt="img"></p>
	<p>解决方案：</p>
	<ol>
		<li>可以为父元素定义上边框。</li>
		<li>可以为父元素定义上内边距。</li>
		<li>可以为父元素添加 overflow: hidden。</li>

	</ol>
	<p>⑶ 尽管看上去有些奇怪，但是外边距甚至可以与自身发生合并。</p>
	<p>假设有一个空元素，它有外边距，但是没有边框或填充。在这种情况下，上外边距与下外边距就碰到了一起，它们会发生合并：</p>
	<p><img src="../assets/margin-collapsing-c.gif" referrerpolicy="no-referrer" alt="img"></p>
	<p>如果这个外边距遇到另一个元素的外边距，它还会发生合并：</p>
	<p><img src="../assets/margin-collapsing-d.gif" referrerpolicy="no-referrer" alt="img"></p>
	<p>这就是一系列的段落元素占用空间非常小的原因，因为它们的所有外边距都合并到一起，形成了一个小的外边距。</p>
	<p>
		外边距合并初看上去可能有点奇怪，但是实际上，它是有意义的。以由几个段落组成的典型文本页面为例。第一个段落上面的空间等于段落的上外边距。如果没有外边距合并，后续所有段落之间的外边距都将是相邻上外边距和下外边距的和。这意味着段落之间的空间是页面顶部的两倍。如果发生外边距合并，段落之间的上外边距和下外边距就合并在一起，这样各处的距离就一致了。
	</p>
	<p><img src="../assets/margin-collapsing-e.gif" referrerpolicy="no-referrer" alt="img"></p>
	<p>只有普通文档流中块框的垂直外边距才会发生外边距合并。行内框、浮动框、固定或绝对定位之间的外边距不会合并。</p>
	<h2>padding</h2>
	<p>padding 属性用于设置内边距，即边框与内容之间的距离。</p>
	<p>padding 属性(简写属性)可以有一到四个值。</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>值的个数</th>
					<th style='text-align:left;'>表达意思</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>padding: 5px;</td>
					<td style='text-align:left;'>一个值，代表上下左右都有5像素内边距</td>
				</tr>
				<tr>
					<td style='text-align:left;'>padding: 5px 10px;</td>
					<td style='text-align:left;'>两个值，代表上下内边距是5像素，左右内边距是10像素</td>
				</tr>
				<tr>
					<td style='text-align:left;'>padding: 5px 10px 20px;</td>
					<td style='text-align:left;'>三个值，代表上内边距5像素，左右内边距10像素，下内边距20像素</td>
				</tr>
				<tr>
					<td style='text-align:left;'>padding: 5px 10px 20px 30px;</td>
					<td style='text-align:left;'>四个值，上是5像素，右10像素，下20像素，左30像素</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p>当给盒子指定 padding 值之后，内容和边框有了距离，添加了内边距，会撑大盒子。实际影响了盒子大小。</p>
	<ol>
		<li>如果保证盒子跟效果图大小保持一致，则让 width/height 减去多出来的内边距大小即可。</li>
		<li>如果盒子本身没有指定width/height属性，则此时padding不会撑开盒子大小。</li>

	</ol>
	<h2>scroll-behavior</h2>
	<p>scroll-behavior 属性规定当用户单击可滚动框中的链接时，是否平滑地（具动画效果）滚动位置，而不是直线跳转。语法：</p>
	<pre v-code:css>scroll-behavior: auto | smooth;</pre>
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
					<td style='text-align:left;'>auto</td>
					<td style='text-align:left;'>默认值。允许在滚动框内的元素间直接跳转的“滚动效果”。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>smooth</td>
					<td style='text-align:left;'>允许在滚动框内的元素间平滑的“滚动效果”。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>box-shadow</h2>
	<p>box-shadow 向框添加一个或多个阴影。盒子阴影不占用空间，不会影响其他盒子排列。</p>
	<pre v-code:css>box-shadow: h-shadow v-shadow blur spread color inset;</pre>
	<p>该属性是由逗号分隔的阴影列表，每个阴影由 2-4 个长度值、可选的颜色值以及可选的 inset 关键词来规定。省略长度的值是 0。</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>值</th>
					<th style='text-align:left;'>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'><em>h-shadow</em></td>
					<td style='text-align:left;'>必需。水平阴影的位置。允许负值。</td>
				</tr>
				<tr>
					<td style='text-align:left;'><em>v-shadow</em></td>
					<td style='text-align:left;'>必需。垂直阴影的位置。允许负值。</td>
				</tr>
				<tr>
					<td style='text-align:left;'><em>blur</em></td>
					<td style='text-align:left;'>可选。模糊距离。</td>
				</tr>
				<tr>
					<td style='text-align:left;'><em>spread</em></td>
					<td style='text-align:left;'>可选。阴影的尺寸。</td>
				</tr>
				<tr>
					<td style='text-align:left;'><em>color</em></td>
					<td style='text-align:left;'>可选。阴影的颜色。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>inset</td>
					<td style='text-align:left;'>可选。将外部阴影 (outset) 改为内部阴影。默认的是外阴影(outset), 但是不可以写这个单词，否则造成阴影无效。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h1>元素的显示与隐藏</h1>
	<p>hidden 属性规定对元素进行隐藏。可以对 hidden 属性进行设置，使用户在满足某些条件时才能看到某个元素(比如选中复选框，等等)。然后，可使用 JavaScript 来删除 hidden 属性，使该元素变得可见。</p>
	<h2>display</h2>
	<p>display 属性用于设置一个元素应如何显示。</p>
	<ul>
		<li>display: none; 隐藏对象</li>
		<li>display: block; 除了转换为块级元素之外，同时还有显示元素的意思</li>

	</ul>
	<p>display 隐藏元素后，不再占有原来的位置。</p>
	<p>应用广泛，搭配 JS 可以做网页特效。</p>
	<h2>visibility</h2>
	<p>visibility 属性用于指定一个元素应可见还是隐藏。</p>
	<ul>
		<li>visibility: visible; 元素可视</li>
		<li>visibility: hidden; 元素隐藏</li>

	</ul>
	<p>visibility 隐藏元素后，继续占有原来的位置。</p>
	<p>如果隐藏元素想要原来位置，就用 visibility：hidden。如果隐藏元素不想要原来位置，就用 display：none</p>
	<h2>overflow</h2>
	<p>overflow 属性指定了如果内容溢出一个元素的框(超过其指定高度及宽度)时，会发生什么。</p>
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
					<td style='text-align:left;'>visible</td>
					<td style='text-align:left;'>不剪切内容也不添加滚动条</td>
				</tr>
				<tr>
					<td style='text-align:left;'>hidden</td>
					<td style='text-align:left;'>不显示超过对象尺寸的内容，超出的部分隐藏掉</td>
				</tr>
				<tr>
					<td style='text-align:left;'>scroll</td>
					<td style='text-align:left;'>不管超出内容否，总是显示滚动条</td>
				</tr>
				<tr>
					<td style='text-align:left;'>auto</td>
					<td style='text-align:left;'>超出自动显示滚动条，不超出不显示滚动条</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p><code>overflow</code> 属性仅适用于具有指定高度的块元素。</p>
	<p><code>overflow-x</code> 和 <code>overflow-y</code> 属性规定是仅水平还是垂直地更改内容的溢出：</p>
	<ul>
		<li><code>overflow-x</code> 指定如何处理内容的左/右边缘。</li>
		<li><code>overflow-y</code> 指定如何处理内容的上/下边缘。</li>

	</ul>
	<p>一般情况下，我们都不想让溢出的内容显示出来，因为溢出的部分会影响布局。但是如果有定位的盒子，请慎用overflow: hidden 因为它会隐藏多余的部分。</p>
	<p>&nbsp;</p>
</template>