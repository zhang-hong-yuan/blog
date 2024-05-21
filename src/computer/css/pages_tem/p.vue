<template>
	<h1>Flex</h1>
	<p>在 Flexbox 布局模块(问世)之前，可用的布局模式有以下四种：</p>
	<ul>
		<li>块(Block)，用于网页中的部分(节)</li>
		<li>行内(Inline)，用于文本</li>
		<li>表，用于二维表数据</li>
		<li>定位，用于元素的明确位置</li>

	</ul>
	<p>通过将 <code>display</code> 属性设置为 <code>flex</code>，flex 容器将可伸缩。</p>
	<p>如果元素不是弹性项目，则 flex 属性无效。</p>
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
					<td style='text-align:left;'>display</td>
					<td style='text-align:left;'>规定用于 HTML 元素的盒类型。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>flex-direction</td>
					<td style='text-align:left;'>规定弹性容器内的弹性项目的方向。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>flex-wrap</td>
					<td style='text-align:left;'>规定弹性项目是否应该换行，若一条 flex 线上没有足够的空间容纳它们。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>flex-flow</td>
					<td style='text-align:left;'>flex-direction 和 flex-wrap 的简写属性。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>justify-content</td>
					<td style='text-align:left;'>当弹性项目没有用到主轴上的所有可用空间时，水平对齐这些项目。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>align-items</td>
					<td style='text-align:left;'>当弹性项目没有用到主轴上的所有可用空间时，垂直对齐这些项。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>align-content</td>
					<td style='text-align:left;'>修改 flex-wrap 属性的行为。与 align-items 相似，但它不对齐弹性项目，而是对齐 flex 线。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>order</td>
					<td style='text-align:left;'>规定弹性项目相对于同一容器内其余弹性项目的顺序。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>flex</td>
					<td style='text-align:left;'>flex-grow、flex-shrink 以及 flex-basis 属性的简写属性。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>align-self</td>
					<td style='text-align:left;'>用于弹性项目。覆盖容器的 align-items 属性。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>flex-direction</h2>
	<p><code>flex-direction</code> 属性定义容器要在哪个方向上堆叠 flex 项目。</p>
	<pre v-code:css>flex-direction: row | row-reverse | column | column-reverse;</pre>
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
					<td style='text-align:left;'>row</td>
					<td style='text-align:left;'>默认值。作为一行，水平地显示弹性项目。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>row-reverse</td>
					<td style='text-align:left;'>等同行，但方向相反。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>column</td>
					<td style='text-align:left;'>作为列，垂直地显示弹性项目。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>column-reverse</td>
					<td style='text-align:left;'>等同列，但方向相反。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>flex-wrap</h2>
	<p><code>flex-wrap</code> 属性规定是否应该对 flex 项目换行。</p>
	<pre v-code:css>flex-wrap: nowrap | wrap | wrap-reverse;</pre>
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
					<td style='text-align:left;'>nowrap</td>
					<td style='text-align:left;'>默认值。规定弹性项目不会换行。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>wrap</td>
					<td style='text-align:left;'>规定弹性项目会在需要时换行。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>wrap-reverse</td>
					<td style='text-align:left;'>规定弹性项目会在需要时换行，以反方向。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>flex-flow</h2>
	<p><code>flex-flow</code> 属性是用于同时设置 flex-direction 和 flex-wrap 属性的简写属性。</p>
	<pre v-code:css>flex-flow: flex-direction flex-wrap;</pre>
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
					<td style='text-align:left;'>flex-direction</td>
					<td style='text-align:left;'>规定弹性项目的方向。可能的值：<br /> ☞ row(默认值)<br /> ☞ row-reverse<br /> ☞ column<br /> ☞
						column-reverse</td>
				</tr>
				<tr>
					<td style='text-align:left;'>flex-wrap</td>
					<td style='text-align:left;'>规定弹性项目是否应换行。可能的值：<br /> ☞ nowrap(默认值)<br /> ☞ wrap<br /> ☞ wrap-reverse</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>justify-content</h2>
	<p><code>justify-content</code> 属性用于对齐 flex 项目，即设置主轴上子元素的排列方式。</p>
	<pre v-code:css>justify-content: flex-start | flex-end | center | space-between | space-around;</pre>
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
					<td style='text-align:left;'>flex-start</td>
					<td style='text-align:left;'>默认值。项目位于容器的开头。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>flex-end</td>
					<td style='text-align:left;'>项目位于容器的结尾。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>center</td>
					<td style='text-align:left;'>项目位于容器中央。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>space-between</td>
					<td style='text-align:left;'>项目在行与行之间留有间隔。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>space-around</td>
					<td style='text-align:left;'>项目在行之前、行之间和行之后留有空间。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>align-items</h2>
	<p><code>align-items</code> 属性用于垂直对齐 flex 项目。即设置侧轴上子元素的排列方式(单行)。</p>
	<pre v-code:css>align-items: stretch | center | flex-start | flex-end | baseline;</pre>
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
					<td style='text-align:left;'>stretch</td>
					<td style='text-align:left;'>默认。项目被拉伸以适合容器。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>center</td>
					<td style='text-align:left;'>项目位于容器的中央。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>flex-start</td>
					<td style='text-align:left;'>项目位于容器的开头。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>flex-end</td>
					<td style='text-align:left;'>项目位于容器的末端。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>baseline</td>
					<td style='text-align:left;'>项目被定位到容器的基线。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p>完美的居中：将 <code>justify-content</code> 和 <code>align-items</code> 属性设置为居中，然后 flex 项目将完美居中。</p>
	<h2>align-content</h2>
	<p><code>align-content</code> 属性用于对齐弹性线。设置侧轴上子元素的排列方式(多行)。</p>
	<p>注意：必须有多行项目，此属性才能生效！</p>
	<pre v-code:css>align-content: stretch | center | flex-start | flex-end | space-between | space-around;</pre>
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
					<td style='text-align:left;'>stretch</td>
					<td style='text-align:left;'>默认值。行拉伸以占据剩余空间。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>center</td>
					<td style='text-align:left;'>朝着弹性容器的中央对行打包。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>flex-start</td>
					<td style='text-align:left;'>朝着弹性容器的开头对行打包。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>flex-end</td>
					<td style='text-align:left;'>朝着弹性容器的结尾对行打包。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>space-between</td>
					<td style='text-align:left;'>行均匀分布在弹性容器中。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>space-around</td>
					<td style='text-align:left;'>行均匀分布在弹性容器中，两端各占一半。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<br><br><br>
	<p>以下是子元素(项目)的属性</p>
	<hr />
	<h2>order</h2>
	<p><code>order</code> 属性规定 flex 项目的顺序。首个 flex 项目不必在布局中显示为第一项。</p>
	<pre v-code:css>order: number;</pre>
	<ul>
		<li><mark>number</mark> 默认值为 0。规定弹性项目的顺序。</li>

	</ul>
	<p><code>order</code> 值必须是数字，数值越小，排列越靠前，默认值是 0。</p>
	<h2>flex</h2>
	<p><code>flex</code> 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性。</p>
	<p>flex 设置的是弹性项目的弹性长度。</p>
	<pre v-code:css>flex: flex-grow flex-shrink flex-basis|auto;</pre>
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
					<td style='text-align:left;'>flex-grow</td>
					<td style='text-align:left;'>该值必须是数字，默认值是 0。规定项目相对于其余弹性项目的增长量。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>flex-shrink</td>
					<td style='text-align:left;'>该值必须是数字，默认值是 0。规定项目相对于其余弹性项目的收缩量。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>flex-basis</td>
					<td style='text-align:left;'>项目的长度。<br />合法值：&quot;auto&quot;、&quot;inherit&quot;，或单位为 &quot;%&quot;,
						&quot;px&quot;, &quot;em&quot; 的值，或任何其他长度单位。<br />(百分比相对于父元素的宽度计算)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>auto</td>
					<td style='text-align:left;'>等同于 1 1 auto。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>none</td>
					<td style='text-align:left;'>等同于 0 0 auto。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p>flex:1; flex:20%; 这两种都是针对宽度，高度不能自适应</p>
	<h2>align-self</h2>
	<p><code>align-self</code> 属性规定弹性容器内所选项目的对齐方式。即，控制子项自己在侧轴上的排列方式。</p>
	<p><code>align-self</code> 属性将覆盖容器的 align-items 属性所设置的默认对齐方式。默认为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。</p>
	<pre v-code:css>align-self: auto | stretch | center | flex-start | flex-end | baseline;</pre>
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
					<td style='text-align:left;'>默认。元素继承其父容器的 align-items 属性，如果没有父容器，则为 &quot;stretch&quot;。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>stretch</td>
					<td style='text-align:left;'>定位元素以适合容器。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>center</td>
					<td style='text-align:left;'>元素位于容器的中央。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>flex-start</td>
					<td style='text-align:left;'>元素位于容器的开头。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>flex-end</td>
					<td style='text-align:left;'>元素位于容器的末端。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>baseline</td>
					<td style='text-align:left;'>元素被定位到容器的基线。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h1></h1>
</template>
	
<script setup lang='ts'>

</script>
	
<style></style>