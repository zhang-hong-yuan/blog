<template>
	<h1>Animation</h1>
	<p>CSS3 可以创建动画，它可以取代许多网页动画图像、Flash 动画和 JavaScript 实现的效果。</p>
	<p>动画是使元素从一种样式逐渐变化为另一种样式的效果。</p>
	<p>animation可以改变任意多的样式任意多的次数。用百分比来规定变化发生的时间，或用关键词 &quot;from&quot; 和 &quot;to&quot;，等同于 0% 和 100%。0% 是动画的开始，100%
		是动画的完成。为了得到最佳的浏览器支持，应该始终定义 0% 和 100% 选择器。</p>
	<p>@keyframes 规则是创建动画。@keyframes 规则内指定一个 CSS 样式和动画将逐步从目前的样式更改为新的样式。</p>
	<pre v-code:css>@keyframes myfirst {
  from { background: red; }
  to { background: yellow; }
}</pre>
	<p>创建 <strong>@keyframes</strong> 动画后，需把它绑定到一个选择器上，否则动画不会有任何效果。指定至少这两个CSS3的动画属性绑定在一个选择器：</p>
	<ul>
		<li>规定动画的名称</li>
		<li>规定动画的时长(如果省略持续时间，动画将无法运行，因为默认值是0。)</li>

	</ul>
	<pre v-code:css>div {
  animation: myfirst 5s;
}</pre>
	<p>下面的表格列出了 @keyframes 规则和所有动画属性：</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>属性</th>
					<th style='text-align:left;'>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>@keyframes</td>
					<td style='text-align:left;'>规定动画。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>animation</td>
					<td style='text-align:left;'>
						所有动画属性的简写属性：(顺序很重要)<br /><code>animation: name duration timing-function delay iteration-count direction fill-mode;</code>
					</td>
				</tr>
				<tr>
					<td style='text-align:left;'>animation-name</td>
					<td style='text-align:left;'>规定 @keyframes 动画的名称。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>animation-duration</td>
					<td style='text-align:left;'>规定动画完成一个周期所花费的秒或毫秒。默认是 0。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>animation-timing-function</td>
					<td style='text-align:left;'>规定动画的速度曲线。默认是 &quot;ease&quot;。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>animation-fill-mode</td>
					<td style='text-align:left;'>规定当动画不播放时(当动画完成时，或当动画有一个延迟未开始播放时)，要应用到元素的样式。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>animation-delay</td>
					<td style='text-align:left;'>规定动画何时开始。默认是 0。负值也是允许的。如果使用负值，则动画将开始播放，如同已播放 N 秒。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>animation-iteration-count</td>
					<td style='text-align:left;'>规定动画被播放的次数，n 或 infinite。默认是 1。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>animation-direction</td>
					<td style='text-align:left;'>定义是否循环交替反向播放动画。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>animation-play-state</td>
					<td style='text-align:left;'>规定动画是否正在运行或暂停。默认是 &quot;running&quot;。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>@keyframes 规则</h2>
	<p>使用animation属性来控制动画的外观，还使用选择器绑定动画。</p>
	<pre v-code:css>@keyframes animationname {
  keyframes-selector {
    css-styles: value;
  }
}</pre>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>值</th>
					<th style='text-align:left;'>说明</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'><em>animationname</em></td>
					<td style='text-align:left;'>必需的。定义animation的名称。</td>
				</tr>
				<tr>
					<td style='text-align:left;'><em>keyframes-selector</em></td>
					<td style='text-align:left;'>必需的。动画持续时间的百分比。合法值：<br />0-100%<br />from (和0%相同)<br />to (和100%相同)</td>
				</tr>
				<tr>
					<td style='text-align:left;'><em>css-styles</em></td>
					<td style='text-align:left;'>必需的。一个或多个合法的CSS样式属性。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>animation-timing-function</h2>
	<p>animation-timing-function指定动画将如何完成一个周期。</p>
	<p>速度曲线定义动画从一套 CSS 样式变为另一套所用的时间。速度曲线用于使变化更为平滑。</p>
	<pre v-code:css>animation-timing-function: value;</pre>
	<p>animation-timing-function使用的数学函数，称为三次贝塞尔曲线，速度曲线。使用此函数，您可以使用您自己的值，或使用预先定义的值之一：</p>
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
					<td style='text-align:left;'>linear</td>
					<td style='text-align:left;'>动画从头到尾的速度是相同的。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>ease</td>
					<td style='text-align:left;'>默认。动画以低速开始，然后加快，在结束前变慢。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>ease-in</td>
					<td style='text-align:left;'>动画以低速开始。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>ease-out</td>
					<td style='text-align:left;'>动画以低速结束。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>ease-in-out</td>
					<td style='text-align:left;'>动画以低速开始和结束。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>steps(int,start|end)</td>
					<td style='text-align:left;'>指定了时间函数中的间隔数量(步长)。有两个参数，第一个参数指定函数的间隔数，该参数是一个正整数(大于 0)。
						第二个参数是可选的，表示动画是从时间段的开头连续还是末尾连续。含义分别如下：<br /> start：表示直接开始。<br /> end：默认值，表示戛然而止。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>cubic-bezier(<em>n,n,n,n</em>)</td>
					<td style='text-align:left;'>在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>animation-fill-mode</h2>
	<p>animation-fill-mode 属性规定当动画不播放时(当动画完成时，或当动画有一个延迟未开始播放时)，要应用到元素的样式。默认情况下，CSS
		动画在第一个关键帧播放完之前不会影响元素，在最后一个关键帧完成后停止影响元素。animation-fill-mode 属性可重写该行为。</p>
	<pre v-code:css>animation-fill-mode: none|forwards|backwards|both;</pre>
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
					<td style='text-align:left;'>none</td>
					<td style='text-align:left;'>默认值。动画在动画执行之前和之后不会应用任何样式到目标元素。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>forwards</td>
					<td style='text-align:left;'>在动画结束后(由 animation-iteration-count 决定)，动画将应用该属性值。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>backwards</td>
					<td style='text-align:left;'>动画将应用在 animation-delay 定义期间启动动画的第一次迭代的关键帧中定义的属性值。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>both</td>
					<td style='text-align:left;'>动画遵循 forwards 和 backwards 的规则。也就是说，动画会在两个方向上扩展动画属性。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>animation-direction</h2>
	<p>animation-direction 属性定义是否循环交替反向播放动画。如果动画被设置为只播放一次，该属性将不起作用。</p>
	<pre v-code:css>animation-direction: normal|reverse|alternate|alternate-reverse;</pre>
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
					<td style='text-align:left;'>默认值。动画按正常播放。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>reverse</td>
					<td style='text-align:left;'>动画反向播放。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>alternate</td>
					<td style='text-align:left;'>动画在奇数次(1、3、5...)正向播放，在偶数次(2、4、6...)反向播放。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>alternate-reverse</td>
					<td style='text-align:left;'>动画在奇数次(1、3、5...)反向播放，在偶数次(2、4、6...)正向播放。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h1></h1>
</template>
	
<script setup lang='ts'>

</script>
	
<style></style>