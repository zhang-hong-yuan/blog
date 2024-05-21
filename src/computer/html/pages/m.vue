<template>
	<h1>移动端布局</h1>
	<p>移动端屏幕尺寸非常多，碎片化严重。</p>
	<p>视口(viewport)就是浏览器显示页面内容的屏幕区域。 视口可以分为布局视口、视觉视口和理想视口。</p>
	<div id="layout">
		<component :is="'style'">
			#layout{
			text-align:center;
			}
			#layout figure {
			display:inline-block;

			max-width: 48%;
			}

			#layout figure img{
			width: 280px;
			}
		</component>
		<figure>
			<img alt="" src="../assets/layout_viewports.png">
		</figure>
		<figure>
			<img alt="" src="../assets/visual_viewport.png" style="margin-left: 20px;">
		</figure>
	</div>
	<p>&nbsp;</p>
	<p>布局视口的宽度应该与理想视口的宽度一致，简单理解就是设备有多宽，我们布局的视口就多宽。</p>
	<pre v-code:html>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, user-scalable=no, 
initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0&quot;&gt;
</pre>
	<p>多倍图(物理像素和物理像素比)</p>
	<p>物理像素点指的是屏幕显示的最小颗粒，是物理真实存在的。开发时候的1px 不是一定等于1个物理像素的。</p>
	<p>PC端页面，1个px 等于1个物理像素，但是移动端就不尽相同。一个px的能显示的物理像素点的个数，称为物理像素比或屏幕像素比。</p>
	<h2>主流方案</h2>
	<table>
		<tr>
			<td>
				<div>单独制作移动端页面(主流)</div>
				<ul>
					<li>流式布局(百分比布局)</li>
					<li>flex 弹性布局(强烈推荐)</li>
					<li>less+rem+媒体查询布局</li>
					<li>混合布局</li>
				</ul>
			</td>
			<td>
				<div>响应式页面兼容移动端(其次)</div>
				<ul>
					<li>媒体查询</li>
					<li>bootstarp</li>
				</ul>
			</td>
		</tr>
	</table>
	<p>通常情况下，网址域名前面加 m(mobile) 可以打开移动端。通过判断设备，如果是移动设备打开，则跳到移动端页面。</p>
	<p>移动端 CSS 初始化推荐使用 normalize.css/ 官网地址：<a href='http://necolas.github.io/normalize.css/' target='_blank'
			class='url'>http://necolas.github.io/normalize.css/</a></p>
	<h2>流式布局</h2>
	<p>流式布局，就是百分比布局，也称非固定像素布局。流式布局方式是移动web开发使用的比较常见的布局方式。</p>
	<p>通过盒子的宽度设置成百分比来根据屏幕的宽度来进行伸缩，不受固定像素的限制，内容向两侧填充。</p>
	<p>流式布局主要是看宽度，对高度的控制不方便。</p>
	<p>&nbsp;</p>
	<p>二倍精灵图做法</p>
	<ul>
		<li>在firework里面把精灵图等比例缩放为原来的一半</li>
		<li>之后根据大小 测量坐标</li>
		<li>注意代码里面background-size也要写： 精灵图原来宽度的一半</li>

	</ul>
	<h2>flex 布局</h2>
	<p>flex 是 flexible Box 的缩写，意为&quot;弹性布局&quot;，用来为盒状模型提供最大的灵活性，任何一个容器都可以指定为 flex 布局。</p>
	<ul>
		<li>当为父盒子设为 flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。</li>
		<li>伸缩布局 = 弹性布局 = 伸缩盒布局 = 弹性盒布局 = flex布局</li>

	</ul>
	<p>采用 Flex 布局的元素，称为 Flex 容器(flex container)，简称&quot;容器&quot;。它的所有子元素自动成为容器成员，称为 Flex 项目(flex item)，简称&quot;项目&quot;。</p>
	<p>百分比布局和flex布局的文字大小不能随着页面的变化而变化。</p>
	<h2>rem 布局</h2>
	<p>使用媒体查询根据不同设备按比例设置html的字体大小，然后页面元素使用rem做尺寸单位，当html字体大小变化元素尺寸也会发生变化，从而达到等比缩放的适配。</p>
	<p>媒体查询+rem 就可以实现不同设备宽度，实现页面元素大小的动态变化。</p>
	<p>当样式比较繁多的时候，可以针对不同的媒体使用不同 stylesheets(样式表)。原理，就是直接在link中判断设备的尺寸，然后引用不同的css文件。</p>
	<pre v-code:html>&lt;link rel=&quot;stylesheet&quot; media=&quot;mediatype and|not|only (media feature)&quot; href=&quot;mystylesheet.css&quot;&gt;
</pre>
	<p>按照设计稿与设备宽度的比例，动态计算并设置 html 根标签的 font-size 大小；CSS 中，设计稿元素的宽、高、相对位置等取值，按照同等比例换算为 rem 为单位的值。</p>
	<p>一般情况下，我们以一套或两套效果图适应大部分的屏幕，放弃极端屏或对其优雅降级，牺牲一些效果。现在基本以750为准。</p>
	<br />
	<p><strong>元素大小取值方法</strong></p>
	<p>最后的公式：<code>页面元素的rem值 = 页面元素值(px) / (屏幕宽度 / 划分的份数)</code></p>
	<p>或者： <code>页面元素的rem值 = 页面元素值(px) / 1rem(html font-size)</code></p>
	<p>屏幕宽度/划分的份数 就是 html font-size 的大小</p>
	<p>flexible.js它的原理是把当前设备划分为10等份，但是不同设备下，比例还是一致的。</p>
	<p>github地址：<a href='https://github.com/amfe/lib-flexible' target='_blank'
			class='url'>https://github.com/amfe/lib-flexible</a></p>
	<h2>cssres</h2>
	<p>该插件功能：px 转换 rem</p>
	<p>设置html字体大小基准值：(默认 html 文字大小为16px)</p>
	<ol>
		<li>打开设置(快捷键是 ctrl + 逗号)</li>
		<li>扩展设置</li>
		<li>设置html字体大小基准值(即 1rem 为多少)</li>

	</ol>
	<h2>响应式布局</h2>
	<p>就是使用媒体查询针对不同宽度的设备进行布局和样式的设置，从而适配不同设备的目的。</p>
	<p>原理就是在不同屏幕下，通过媒体查询来改变这个布局容器的大小，再改变里面子元素的排列方式和大小，从而实现不同屏幕下，看到不同的页面布局和样式变化。</p>
	<p>响应式需要一个父级做为布局容器，来配合子级元素来实现变化效果。一般响应式尺寸划分：(也可以根据实际情况自己定义划分)</p>
	<ul>
		<li>超小屏幕(手机，小于 768px)：设置宽度为 100%</li>
		<li>小屏幕(平板，大于等于 768px)：设置宽度为 750px</li>
		<li>中等屏幕(桌面显示器，大于等于 992px)：宽度设置为 970px</li>
		<li>大屏幕(大桌面显示器，大于等于 1200px)：宽度设置为 1170px</li>

	</ul>
	<p>可参考Bootstrap前端开发框架</p>
	<h2>Bootstrap</h2>
	<p>Bootstrap 来自 Twitter(推特)，是目前最受欢迎的前端框架。Bootstrap 是基于 HTML、CSS 和 JAVASCRIPT 的，它简洁灵活，使得 Web 开发更加快捷。</p>
	<p>Bootstrap里面有normalize.css和清除浮动clearfix的样式，不需再额外引入。</p>
	<p>Bootstrap 使用四步曲：1.创建文件夹结构 2.创建 html 骨架结构 3.引入相关样式文件 4.书写内容(Bootstrap大都用类名控制样式，不受标签名限制。)</p>
	<br>
	<p>响应式布局</p>
	<p>Bootstrap 需要为页面内容和栅格系统包裹一个 .container 容器，它提供了两个作此用处的类。</p>
	<p>container 类</p>
	<ul>
		<li>响应式布局的容器 固定宽度</li>
		<li>大屏 ( &gt;=1200px) 宽度定为 1170px</li>
		<li>中屏 ( &gt;=992px) 宽度定为 970px</li>
		<li>小屏 ( &gt;=768px) 宽度定为 750px</li>
		<li>超小屏 (100%)</li>

	</ul>
	<p>container-fluid 类</p>
	<ul>
		<li>流式布局容器 百分百宽度</li>
		<li>占据全部视口(viewport)的容器</li>

	</ul>
	<p>栅格系统英文为“grid systems”,也有人翻译为“网格系统”，它是指将页面布局划分为等宽的列，然后通过列数的定义来模块化页面布局。</p>
	<p>Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口(viewport)尺寸的增加，系统会自动分为最多12列。</p>
	<ul>
		<li>如果子元素的份数等于12，则占满整个container的宽度</li>
		<li>如果子元素的份数小于12，则不占满整个container的宽度，会有空白</li>
		<li>如果子元素的份数大于12，则多出的列会另起一行显示</li>

	</ul>
	<p>栅格系统通过一系列的行(row)与列(column)的组合来创建页面布局，内容放入这些创建好的布局中。</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th>&nbsp;</th>
					<th>超小屏幕手机 (&lt;768px)</th>
					<th>小屏幕平板 (≥768px)</th>
					<th>中等屏幕桌面显示器 (≥992px)</th>
					<th>大屏幕大桌面显示器 (≥1200px)</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>栅格系统行为</td>
					<td>总是水平排列</td>
					<td>开始是堆叠在一起的，当大于这些阈值时将变为水平排列C</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td><code>.container</code> 最大宽度</td>
					<td>None (自动100%)</td>
					<td>750px</td>
					<td>970px</td>
					<td>1170px</td>
				</tr>
				<tr>
					<td>类前缀</td>
					<td><code>.col-xs-</code></td>
					<td><code>.col-sm-</code></td>
					<td><code>.col-md-</code></td>
					<td><code>.col-lg-</code></td>
				</tr>
			</tbody>
		</table>
	</figure>
	<ul>
		<li>按照不同屏幕划分为1~12等份</li>
		<li>可以同时为一列指定多个设备的类名，以便划分不同份数 例如 class=&quot;col-md-4 col-sm-6&quot;</li>
		<li>xs-extra small：超小； sm-small：小； md-medium：中等；lg-large：大</li>
		<li>每一列默认有左右15像素的padding，行(row)可以去除父容器作用15px的边距</li>

	</ul>
	<p>列嵌套时，最好加一个行(row)容器，这样可以取消父元素的padding值，并且高度自动和父级一样高。</p>
	<p>列嵌套：栅格系统内置的栅格系统将内容再次嵌套。简单理解就是一个列内再分成若干份小列。我们可以通过添加一个新的 .row 元素和一系列 .col-sm-* 元素到已经存在的 .col-sm-* 元素内。</p>
	<p>列偏移：使用 .col-md-offset-* 类可以将列向右侧偏移。这些类实际是通过使用 * 选择器为当前元素增加了左侧的边距(margin)。</p>
	<p>列排序：通过使用 .col-md-push-* 和 .col-md-pull-* 类就可以很容易的改变列(column)的顺序。</p>
	<p>&nbsp;</p>
	<p>通过媒体查询功能，这些工具类可以方便的针对不同设备展示或隐藏页面内容。</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th>&nbsp;</th>
					<th>超小屏幕手机 (&lt;768px)</th>
					<th>小屏幕平板 (≥768px)</th>
					<th>中等屏幕桌面 (≥992px)</th>
					<th>大屏幕桌面 (≥1200px)</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><code>.visible-xs-*</code></td>
					<td>可见</td>
					<td>隐藏</td>
					<td>隐藏</td>
					<td>隐藏</td>
				</tr>
				<tr>
					<td><code>.visible-sm-*</code></td>
					<td>隐藏</td>
					<td>可见</td>
					<td>隐藏</td>
					<td>隐藏</td>
				</tr>
				<tr>
					<td><code>.visible-md-*</code></td>
					<td>隐藏</td>
					<td>隐藏</td>
					<td>可见</td>
					<td>隐藏</td>
				</tr>
				<tr>
					<td><code>.visible-lg-*</code></td>
					<td>隐藏</td>
					<td>隐藏</td>
					<td>隐藏</td>
					<td>可见</td>
				</tr>
				<tr>
					<td><code>.hidden-xs</code></td>
					<td>隐藏</td>
					<td>可见</td>
					<td>可见</td>
					<td>可见</td>
				</tr>
				<tr>
					<td><code>.hidden-sm</code></td>
					<td>可见</td>
					<td>隐藏</td>
					<td>可见</td>
					<td>可见</td>
				</tr>
				<tr>
					<td><code>.hidden-md</code></td>
					<td>可见</td>
					<td>可见</td>
					<td>隐藏</td>
					<td>可见</td>
				</tr>
				<tr>
					<td><code>.hidden-lg</code></td>
					<td>可见</td>
					<td>可见</td>
					<td>可见</td>
					<td>隐藏</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p>不给 col 添加数字，而是让 bootstrap 处理布局，以创建等宽的列。</p>
</template>
	
<script setup lang='ts'>

</script>
	
<style></style>