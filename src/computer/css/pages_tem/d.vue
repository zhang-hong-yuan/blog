<template>
	<h1>CSS 函数</h1>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>函数</th>
					<th style='text-align:left;'>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>var()</td>
					<td style='text-align:left;'>用于插入自定义的属性值。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>attr()</td>
					<td style='text-align:left;'>返回选择元素的属性值。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>calc()</td>
					<td style='text-align:left;'>允许计算 CSS 的属性值，比如动态计算长度值。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>max()</td>
					<td style='text-align:left;'>从一个逗号分隔的表达式列表中选择最大的值作为属性的值。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>min()</td>
					<td style='text-align:left;'>从一个逗号分隔的表达式列表中选择最小的值作为属性的值。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>cubic-bezier()</td>
					<td style='text-align:left;'>定义了一个贝塞尔曲线(Cubic Bezier)。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>counter()</td>
					<td style='text-align:left;'>设置计数器。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>conic-gradient()</td>
					<td style='text-align:left;'>定义了一个圆锥渐变。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>repeating-conic-gradient()</td>
					<td style='text-align:left;'>重复的圆锥渐变。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>linear-gradient()</td>
					<td style='text-align:left;'>创建一个线性渐变的图像</td>
				</tr>
				<tr>
					<td style='text-align:left;'>repeating-linear-gradient()</td>
					<td style='text-align:left;'>用重复的线性渐变创建图像。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>radial-gradient()</td>
					<td style='text-align:left;'>用径向渐变创建图像。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>repeating-radial-gradient()</td>
					<td style='text-align:left;'>类似 radial-gradient()，用重复的径向渐变创建图像。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>rgb()</td>
					<td style='text-align:left;'>使用红(R)、绿(G)、蓝(B)三个颜色的叠加来生成各式各样的颜色。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>rgba()</td>
					<td style='text-align:left;'>使用红(R)、绿(G)、蓝(B)、透明度(A)的叠加来生成各式各样的颜色。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>hsl()</td>
					<td style='text-align:left;'>使用色相、饱和度、亮度来定义颜色。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>hsla()</td>
					<td style='text-align:left;'>使用色相、饱和度、亮度、透明度来定义颜色。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>var()</h2>
	<p>var() 函数用于插入自定义属性的值，而不是另一个属性的值的任何部分。</p>
	<pre v-code:css>var(custom-property-name, [value])</pre>
	<ul>
		<li><mark>custom-property-name</mark> 必需。自定义属性的名称(必须以两个破折号开头)。 </li>
		<li><mark>value</mark> 可选。回退值(在自定义属性无效时使用)。</li>

	</ul>
	<p>实例：首先定义自定义属性，然后使用 var() 函数在样式表中插入自定义属性的值：</p>
	<pre v-code:css>:root {
  --main-bg-color: coral;
  --main-padding: 15px;
}

div {
  background-color: var(--main-bg-color);
  padding: var(--main-padding);
}</pre>
	<h2>attr()</h2>
	<p>attr() 函数返回所选元素的属性值。</p>
	<pre v-code:css>attr(attribute-name)</pre>
	<ul>
		<li><mark>attribute-name</mark> 必需。HTML 元素的属性名称。</li>

	</ul>
	<p>实例：在每个链接后的括号中插入 href 属性的值：<code>访问 W3School (https://www.w3school.com.cn/)</code></p>
	<pre v-code:html>&lt;style&gt;
  a:after {
    content: &quot; (&quot; attr(href) &quot;)&quot;;
  }
&lt;/style&gt;

&lt;p&gt;&lt;a href=&quot;https://www.w3school.com.cn&quot;&gt;访问 W3School&lt;/a&gt;&lt;/p&gt;</pre>
	<h2>calc()</h2>
	<p>calc() 函数执行用作属性值的计算。</p>
	<pre v-code:css>width: calc(100% - 80px);</pre>
	<ul>
		<li>注意，运算符前后都需要保留一个空格</li>
		<li>任何长度值都可以使用 calc() 函数进行计算；</li>
		<li>calc()函数支持 <code>+</code> <code>-</code> <code>*</code> <code>\</code> 运算；</li>
		<li>calc()函数使用标准的数学运算优先级规则；</li>

	</ul>
	<h2>max() min()</h2>
	<p>max() 函数使用以逗号分隔的值列表中的最大值作为属性值。</p>
	<p>min() 函数使用以逗号分隔的值列表中的最小值作为属性值。</p>
	<pre v-code:css>max(value1, value2, ...)</pre>
	<ul>
		<li><mark>value1, value2, ...</mark> 必需。逗号分隔的值列表 - 在其中选择最大值。</li>

	</ul>
	<p>例子：使用 max() 将 #div 的宽度设置为最大的值，50% 或 300px：</p>
	<pre v-code:css>#div {
  background-color: yellow;
  height: 100px;
  width: max(50%, 300px);
}</pre>
	<h2>counter()</h2>
	<p>counter() 函数以字符串形式返回指定计数器的当前值。</p>
	<pre v-code:css>counter(countername, [counterstyle])</pre>
	<ul>
		<li><mark>countername</mark> 必需。计数器的名称（与 counter-reset 和 counter-increment 属性使用的名称相同）。</li>
		<li><mark>counterstyle</mark> 可选。计数器的样式（可以是 list-style-type 的值）。</li>

	</ul>
	<p>例子：设置计数器的样式</p>
	<pre v-code:html>&lt;head&gt;
  &lt;style&gt;
    body { counter-reset: section; }

    h2::before {
      counter-increment: section;
      content: &quot;第 &quot; counter(section, upper-roman) &quot; 章：&quot;;
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

  &lt;h1&gt;使用 CSS 计数器：&lt;/h1&gt;
  &lt;h2&gt;HTML 教程&lt;/h2&gt;
  &lt;h2&gt;CSS 教程&lt;/h2&gt;
  &lt;h2&gt;JavaScript 教程&lt;/h2&gt;

&lt;/body&gt;</pre>
	<p>&nbsp;</p>
	<h3>content</h3>
	<p>content 属性与 ::before 及 ::after 伪元素配合使用，来插入生成内容。</p>
	<p>该属性用于定义元素之前或之后放置的生成内容。默认地，这往往是行内内容，不过该内容创建的框类型可以用属性 display 控制。</p>
	<pre
		v-code:css>content: normal|none|counter|attr|string|open-quote|close-quote|no-open-quote|no-close-quote|url|initial|inherit;</pre>
	<h3>counter-increment</h3>
	<p>counter-increment 属性设置某个选取器每次出现的计数器增量。默认增量是 1。</p>
	<p>利用这个属性，计数器可以递增（或递减）某个值，这可以是正值或负值。如果没有提供 number 值，则默认为 1。</p>
	<pre v-code:css>counter-increment: none|id|initial|inherit;</pre>
	<ul>
		<li><mark>none</mark> 默认。选择器无计数器增量。</li>
		<li><mark>id number</mark> id 定义将增加计数的选择器、id 或 class。<br>&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;number 定义增量。number
			可以是正数、零或者负数。</li>

	</ul>
	<blockquote>
		<p>如果使用了 &quot;display: none&quot;，则无法增加计数。如使用 &quot;visibility: hidden&quot;，则可增加计数。</p>
	</blockquote>
	<h3>counter-reset</h3>
	<p>counter-reset 属性设置某个选择器出现次数的计数器的值。默认为 0。</p>
	<p>利用这个属性，计数器可以设置或重置为任何值，可以是正值或负值。如果没有提供 number，则默认为 0。</p>
	<pre v-code:css>counter-reset: none|name number|initial|inherit;</pre>
	<ul>
		<li><mark>none</mark> 默认。不能对选择器的计数器进行重置。</li>
		<li><mark>id number</mark> id 定义重置计数器的选择器、id 或 class<br>&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;number
			可设置此选择器出现次数的计数器的值。可以是正数、零或负数。</li>

	</ul>
	<p>实例：对部分和子部分进行编号（比如 &quot;Section 1&quot;、&quot;1.1&quot;、&quot;1.2&quot;）</p>
	<pre v-code:html>&lt;head&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    body { counter-reset: section; }
    h1 { counter-reset: subsection; }

    h1:before {
      counter-increment: section;
      content: &quot;Section &quot; counter(section) &quot;. &quot;;
    }

    h2:before {
      counter-increment: subsection;
      content: counter(section) &quot;.&quot; counter(subsection) &quot; &quot;;
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;h1&gt;HTML tutorials&lt;/h1&gt;
  &lt;h2&gt;HTML Tutorial&lt;/h2&gt;
  &lt;h2&gt;XHTML Tutorial&lt;/h2&gt;
  &lt;h2&gt;CSS Tutorial&lt;/h2&gt;

  &lt;h1&gt;Scripting tutorials&lt;/h1&gt;
  &lt;h2&gt;JavaScript&lt;/h2&gt;
  &lt;h2&gt;VBScript&lt;/h2&gt;

  &lt;h1&gt;XML tutorials&lt;/h1&gt;
  &lt;h2&gt;XML&lt;/h2&gt;
  &lt;h2&gt;XSL&lt;/h2&gt;
&lt;/body&gt;</pre>
	<h2>gradient()</h2>
	<p>CSS 定义了三种渐变类型的函数：</p>
	<pre v-code:less>conic-gradient([from angle] [at position,] color degree, color degree, ...);
repeating-conic-gradient([from angle] [at position,] color degree, color degree, ...);

linear-gradient(direction, color-stop1, color-stop2, ...);
repeating-linear-gradient(angle | to side-or-corner, color-stop1, color-stop2, ...);

radial-gradient(shape size at position, start-color, ..., last-color);
repeating-radial-gradient(shape size at position, start-color, ..., last-color);</pre>
	<h3>conic-gradient()</h3>
	<p>conic-gradient() 函数将圆锥渐变设置为背景图像。</p>
	<p>圆锥渐变是颜色过渡围绕中心点旋转的渐变。如需创建圆锥渐变，必须至少定义两个色标。</p>
	<pre v-code:css>background-image: conic-gradient([from angle] [at position,] color degree, color degree, ...);</pre>
	<ul>
		<li><mark>from angle</mark> 可选。整个锥形渐变旋转此角度。默认值为 0 度(垂直向上，顺时针渐变)。</li>
		<li><mark>at position</mark> 可选。规定圆锥渐变的渐变中心。默认值为 center。</li>
		<li><mark>color degree, ..., color degree</mark> 色标是要呈现平滑过渡的颜色。该值由一个颜色值和一个可选的停止位置（介于 0 和 360 之间的度数或介于 0% 和 100%
			之间的百分比）组成。</li>

	</ul>
	<p>例子：</p>
	<pre v-code:css>[id*=grad] {
  height: 200px;
  width: 200px;
}

[id*=grad]:nth-child(n + 3) {
  border-radius: 50%;
}

/* 有三种颜色的圆锥渐变： */
#grad1 {
  background-image: conic-gradient(red, yellow, green);
}

/* 有三种颜色和每种颜色的度数的圆锥渐变： */
#grad2 {
  background-image: conic-gradient(red 45deg, yellow 90deg, green 210deg);
}

/* 规定了 from angle 的圆锥渐变： */
#grad3 {
  background-image: conic-gradient(from 90deg, red, yellow, green);
}

/* 规定了 at position 的圆锥渐变： */
#grad4 {
  background-image: conic-gradient(at 60% 45%, red, yellow, green);
}

/* 规定了 from angle 和 at position 的圆锥渐变： */
#grad5 {
  background-image: conic-gradient(from 90deg at 60% 45%, red, yellow, green);
}

/* 一个饼图： */
#grad6 {
  background-image: conic-gradient(red 0deg, red 90deg, yellow 90deg, yellow 180deg, green 180deg);
  /* 可省略重复部分，如下 repeating-conic-gradient() 中 grad2 */
}</pre>
	<h3>repeating-conic-gradient()</h3>
	<p>repeating-conic-gradient() 函数用于重复锥形渐变。</p>
	<pre
		v-code:css>background-image: repeating-conic-gradient([from angle] [at position,] color degree, color degree, ...);</pre>
	<ul>
		<li><mark>from angle</mark> 可选。整个锥形渐变旋转了此角度。默认值为 0 度。</li>
		<li><mark>at position</mark> 可选。规定圆锥渐变的渐变中心。默认值为 center。</li>
		<li><mark>color degree, ..., color degree</mark> 色标是想要呈现平滑过渡的颜色。该值由一个颜色值和一个可选的停止位置（介于 0 和 360 之间的度数或介于 0% 和 100%
			之间的百分比）组成。</li>

	</ul>
	<p>例子：</p>
	<pre v-code:css>[id*=grad] {
  height: 200px;
  width: 200px;
  border-radius: 50%;
}

/* 一个重复的圆锥渐变： */
#grad1 {
  background-image: repeating-conic-gradient(red 10%, yellow 20%);
}

/* 重复的锥形渐变，拥有被定义的颜色起点和颜色终点： */
#grad2 {
  background-image: repeating-conic-gradient(red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);
}</pre>
	<h3>linear-gradient()</h3>
	<p>linear-gradient() 函数把线性渐变设置为背景图像。</p>
	<p>如需创建线性渐变，必须至少定义两个色标。色标是希望在其间呈现平滑过渡的颜色。还可以在渐变效果中设置起点和方向（或角度）。</p>
	<pre v-code:css>background-image: linear-gradient(direction, color-stop1, color-stop2, ...);</pre>
	<ul>
		<li>
			<p><mark>direction</mark> 定义渐变效果的起点和方向（或角度）。</p>
			<ul>
				<li>可省略，默认从上到下；</li>
				<li>to right/left……关键词；to bottom right 线性渐变对角线；</li>
				<li>定义一个角度，0deg 等于向上(to top)。90deg 等于向右(to right)。180deg 等于向下(to bottom)</li>

			</ul>
		</li>
		<li>
			<p><mark>color-stop1, color-stop2,...</mark> 色标是您要在其间呈现平滑过渡的颜色。该值由一个颜色值组成，其后是一个可选的停止位置（0％ 到 100％ 之间的百分比值，或沿渐变轴的长度值）。
			</p>
		</li>

	</ul>
	<p>例子：</p>
	<pre v-code:css>[id*=grad] {
  height: 200px;
  margin: 16px;
}

/* 这个线性渐变从顶部开始。它从红色开始，过渡到黄色，然后过渡到蓝色： */
#grad1 {
  background-image: linear-gradient(red, yellow, blue);
}

/* 从左侧开始的线性渐变。它从红色开始，过渡到蓝色： */
#grad2 {
  background-image: linear-gradient(to right, red, blue);
}

/* 从左上角开始（到右下角）的线性渐变： */
#grad3 {
  background-image: linear-gradient(to bottom right, red, blue);
}

/* 有给定角度的线性渐变： */
#grad4 { /* 垂直向上 */
  background-image: linear-gradient(0deg, red, blue);
}

#grad5 { /* 水平向右 */
  background-image: linear-gradient(90deg, red, blue);
}

#grad6 { /* 垂直向下 */
  background-image: linear-gradient(180deg, red, blue);
}

#grad7 {  /* 水平向左 */
  background-image: linear-gradient(-90deg, red, blue);
}

/* 拥有多个色标的线性渐变： */
#grad8 {
  background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
}

/* 带透明度的线性渐变： */
#grad9 {
  background-image: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1));
}</pre>
	<h3>repeating-linear-gradient()</h3>
	<p>repeating-linear-gradient() 函数用于重复线性渐变。</p>
	<pre
		v-code:css>background-image: repeating-linear-gradient(angle | to side-or-corner, color-stop1, color-stop2, ...);</pre>
	<ul>
		<li><mark>angle</mark> 定义渐变的方向角。从 0 度到 360 度。默认值为 180deg。</li>
		<li><mark>side-or-corner</mark> 定义渐变线起点的位置。它由两个关键字组成：第一个关键字指示水平边，左或右，第二个关键字指示垂直边，上或下。顺序无关紧要，每个关键字都是可选的。</li>
		<li><mark>color-stop1*, *color-stop2</mark> 色标是在其间呈现平滑过渡的颜色。该值包括一个颜色值，其后是一个可选的停止位置（0％ 到 100％ 之间的百分比值，或沿渐变轴的长度值）。</li>

	</ul>
	<pre v-code:css>[id*=grad] {
  height: 200px;
  margin: 16px;
}

/* 重复的线性渐变： */
#grad1 {
  background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
}

/* 不同的重复线性渐变： */
#grad2 {
  background-image: repeating-linear-gradient(45deg, red, blue 7%, green 10%);
}

#grad3 {
  background-image: repeating-linear-gradient(190deg, red, blue 7%, green 10%);
}

#grad4 {
  background-image: repeating-linear-gradient(90deg, red, blue 7%, green 10%);
}</pre>
	<h3>radial-gradient()</h3>
	<p>radial-gradient() 函数将径向渐变设置为背景图像。</p>
	<p>径向渐变由其中心定义。如需创建径向渐变，必须定义至少两个色标。</p>
	<pre v-code:css>background-image: radial-gradient(shape size at position, start-color, ..., last-color);</pre>
	<ul>
		<li>
			<p><mark>shape</mark> 定义渐变的形状。可能的值：</p>
			<ul>
				<li>ellipse(默认)</li>
				<li>circle</li>

			</ul>
		</li>
		<li>
			<p><mark>size</mark> 定义渐变的尺寸。可能的值：</p>
			<ul>
				<li>farthest-corner(默认)</li>
				<li>farthest-side</li>
				<li>closest-side</li>
				<li>closest-corner </li>

			</ul>
			<p><mark>position</mark> 定义渐变的位置。默认值是 &quot;center&quot;。关键字或百分数</p>
			<p><mark>start-color, ..., last-color</mark> 色标是要在其间呈现平滑过渡的颜色。该值由一个颜色值组成，其后是一个可选的停止位置（0％ 到 100％
				之间的百分比值，或沿渐变轴的长度值，表示其色标之间的间隔不同）。</p>
		</li>

	</ul>
	<p>例子：</p>
	<pre v-code:css>[id*=grad] {
  height: 150px;
  width: 150px;
}

[id*=grad]:nth-child(-n + 4) {
  width: 200px;
}

/* 带有均匀间隔色标的径向渐变： */
#grad1 {
  background-image: radial-gradient(red, green, blue);
}

/* 具有不同色标间距的径向渐变： */
#grad2 {
  background-image: radial-gradient(red 5%, green 15%, blue 60%);
}

/* 圆形的径向渐变：椭圆(默认)  圆*/
#grad3 {
  background-image: radial-gradient(red, yellow, green);
}

#grad4 {
  background-image: radial-gradient(circle, red, yellow, green);
}

/* 使用不同 size 关键字的径向渐变： */
#grad5 {
  background-image: radial-gradient(closest-side at 60% 55%, blue, green, yellow, black);
}

#grad6 {
  background-image: radial-gradient(farthest-side at 60% 55%, blue, green, yellow, black);
}

#grad7 {
  background-image: radial-gradient(closest-corner at 60% 55%, blue, green, yellow, black);
}

#grad8 {
  background-image: radial-gradient(farthest-corner at 60% 55%, blue, green, yellow, black);
}</pre>
	<h3>repeating-radial-gradient()</h3>
	<p>repeating-radial-gradient() 函数用于重复径向渐变。</p>
	<pre v-code:css>background-image: repeating-radial-gradient(shape size at position, start-color, ..., last-color);</pre>
	<ul>
		<li>
			<p><mark>shape</mark> 定义渐变的形状。可能的值：</p>
			<ul>
				<li>ellipse (default)</li>
				<li>circle</li>

			</ul>
			<p><mark>size</mark> 定义渐变的尺寸。可能的值：</p>
			<ul>
				<li>farthest-corner (default)</li>
				<li>closest-side</li>
				<li>closest-corner</li>
				<li>farthest-side</li>

			</ul>
			<p><mark>position</mark> 定义渐变的位置。默认值是 &quot;center&quot;。</p>
			<p><mark>start-color, ..., last-color</mark> 色标是在其间呈现平滑过渡的颜色。该值包括一个颜色值，其后是一个可选的停止位置（0％ 到 100％ 之间的百分比值，或沿渐变轴的长度值）。
			</p>
		</li>

	</ul>
	<p>例子：</p>
	<pre v-code:css>/* 重复的径向渐变： */
#grad {
  height: 200px;
  background-image: repeating-radial-gradient(red, yellow 10%, green 15%);
}</pre>
	<h1></h1>
</template>
	
<script setup lang='ts'>

</script>
	
<style></style>