<template>
	<h1>align-items</h1>


	<p>‘align-items’ 属性可以使元素在交叉轴方向对齐。</p>


	<p>CSS ‘align-items’ 属性设置了所有直接子元素的 ‘align-self’ 值作为一个组。在 Flexbox 中，它控制子元素在交叉轴上的对齐。在 Grid 布局中，它控制了子元素在其网格区域内的块向轴上的对齐。</p>


	<pre>
		<code v-code:css>
/* 基本关键字 */
align-items: normal;
align-items: stretch;

/* 定位对齐 */
/* align-items 不能设置为 left 和 right */
align-items: center;
align-items: start;
align-items: end;
align-items: flex-start;
align-items: flex-end;
align-items: self-start;
align-items: self-end;

/* 基线对齐 */
align-items: baseline;
align-items: first baseline;
align-items: last baseline; /* 溢出对齐（仅用于位置对齐） */
align-items: safe center;
align-items: unsafe center;

/* 全局值 */
align-items: inherit;
align-items: initial;
align-items: revert;
align-items: revert-layer;
align-items: unset;
		</code>
	</pre>


	<figure>
		<table>
			<tr>
				<th>属性值</th>
				<th>描述</th>
			</tr>

			<tr>
				<td>‘normal’</td>
				<td>
					<p>这个关键字的效果取决于我们处在什么布局模式中：</p>
					<ul>
						<li>在绝对定位的布局中，对于被替代的绝对定位盒子，行为与 ‘start’ 类似；对于其他所有绝对定位的盒子，行为与 ‘stretch’ 类似。</li>
						<li>在绝对定位布局的静态位置上，行为与 ‘stretch’ 类似。</li>
						<li>对于那些 flex 元素而言，行为与 ‘stretch’ 类似。</li>
						<li>对于那些 grid 元素而言，行为与 ‘stretch’ 类似，但对于具有长宽比或固有尺寸的盒子，其行为与 ‘start’ 类似。</li>
						<li>这个属性不适用于块级盒子和表格。</li>
					</ul>
				</td>
			</tr>
			<tr>
				<td>‘flex-start’</td>
				<td>只在 flex 布局中使用，将元素与 flex 容器的主轴起点或交叉轴起点对齐。</td>
			</tr>
			<tr>
				<td>‘flex-end’</td>
				<td>只在 flex 布局中使用，将元素与 flex 容器的主轴末端或交叉轴末端对齐。</td>
			</tr>
			<tr>
				<td>‘center’</td>
				<td>flex 元素的外边距框在交叉轴上居中对齐。如果元素的交叉轴尺寸大于 flex 容器，它将在两个方向上等距溢出。</td>
			</tr>
			<tr>
				<td>‘start’</td>
				<td>将元素与容器的主轴起点或交叉轴起点对齐。</td>
			</tr>
			<tr>
				<td>‘end’</td>
				<td>将元素与容器的主轴末端或交叉轴末端对齐。</td>
			</tr>
			<tr>
				<td>‘self-start’</td>
				<td>将元素与容器的主轴起点或交叉轴起点对齐，轴起点的方向对应于元素的起始方向。</td>
			</tr>
			<tr>
				<td>‘self-end’</td>
				<td>将元素与容器的主轴末端或交叉轴末端对齐，轴末端的方向对应于元素的结尾方向。</td>
			</tr>
			<tr>
				<td class="nowrap">‘baseline’<br>‘first baseline’<br>‘last baseline’</td>
				<td>所有 flex 元素都对齐，以使它们的 flex 容器基线 对齐。距离其交叉轴起点和基线之间最远的元素与行的交叉轴起点对齐。</td>
			</tr>
			<tr>
				<td>‘stretch’</td>
				<td>如果（多个）元素的组合大小小于容器的大小，其中自动调整大小的元素将等量增大，以填满容器，同时这些元素仍然保持其宽高比例的约束。</td>
			</tr>
			<tr>
				<td>‘safe’</td>
				<td>与其它对齐值一起使用。如果所选对齐值导致元素溢出容器，则将元素按 ‘start’ 方式对齐。</td>
			</tr>
			<tr>
				<td>‘unsafe’</td>
				<td>与其它对齐值一起使用。不管元素和容器的相对尺寸以及是否会发生溢出，都会采用给定的对齐值。</td>
			</tr>
		</table>
	</figure>


	<figure>
		<figcaption>示例</figcaption>

		<p>CSS</p>
		<pre>
	<code v-code:less>
		#container {
		height: 200px;
		width: 240px;
		align-items: center; /* 可以在运行实例中更改 */
		background-color: #8c8c8c;
	}

	.flex {
		display: flex;
		flex-wrap: wrap;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, 50px);
	}

	div > div {
		box-sizing: border-box;
		border: 2px solid #8c8c8c;
		width: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#item1 {
		background-color: #8cffa0;
		min-height: 30px;
	}

	#item2 {
		background-color: #a0c8ff;
		min-height: 50px;
	}

	#item3 {
		background-color: #ffa08c;
		min-height: 40px;
	}

	#item4 {
		background-color: #ffff8c;
		min-height: 60px;
	}

	#item5 {
		background-color: #ff8cff;
		min-height: 70px;
	}

	#item6 {
		background-color: #8cffff;
		min-height: 50px;
		font-size: 30px;
	}

	.row {
		margin-top: 10px;

		label { width: auto; }

		select {
			width: auto;
			padding: 0;
			font-size: 16px;
		}
	}
	</code>
</pre>

		<p>HTML</p>
		<pre>
	<code v-code:html>
&lt;div id="container" class="flex"&gt;
  &lt;div id="item1"&gt;1&lt;/div&gt;
  &lt;div id="item2"&gt;2&lt;/div&gt;
  &lt;div id="item3"&gt;3&lt;/div&gt;
  &lt;div id="item4"&gt;4&lt;/div&gt;
  &lt;div id="item5"&gt;5&lt;/div&gt;
  &lt;div id="item6"&gt;6&lt;/div&gt;
&lt;/div&gt;

&lt;div class="row"&gt;
  &lt;label for="display"&gt;display: &lt;/label&gt;
  &lt;select id="display"&gt;
    &lt;option value="flex"&gt;flex&lt;/option&gt;
    &lt;option value="grid"&gt;grid&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;

&lt;div class="row"&gt;
  &lt;label for="values"&gt;align-items: &lt;/label&gt;
  &lt;select id="values"&gt;
    &lt;option value="normal"&gt;normal&lt;/option&gt;
    &lt;option value="flex-start"&gt;flex-start&lt;/option&gt;
    &lt;option value="flex-end"&gt;flex-end&lt;/option&gt;
    &lt;option value="center" selected&gt;center&lt;/option&gt;
    &lt;option value="baseline"&gt;baseline&lt;/option&gt;
    &lt;option value="stretch"&gt;stretch&lt;/option&gt;

    &lt;option value="start"&gt;start&lt;/option&gt;
    &lt;option value="end"&gt;end&lt;/option&gt;
    &lt;option value="self-start"&gt;self-start&lt;/option&gt;
    &lt;option value="self-end"&gt;self-end&lt;/option&gt;

    &lt;option value="first baseline"&gt;first baseline&lt;/option&gt;
    &lt;option value="last baseline"&gt;last baseline&lt;/option&gt;

    &lt;option value="safe center"&gt;safe center&lt;/option&gt;
    &lt;option value="unsafe center"&gt;unsafe center&lt;/option&gt;
    &lt;option value="safe right"&gt;safe right&lt;/option&gt;
    &lt;option value="unsafe right"&gt;unsafe right&lt;/option&gt;
    &lt;option value="safe end"&gt;safe end&lt;/option&gt;
    &lt;option value="unsafe end"&gt;unsafe end&lt;/option&gt;
    &lt;option value="safe self-end"&gt;safe self-end&lt;/option&gt;
    &lt;option value="unsafe self-end"&gt;unsafe self-end&lt;/option&gt;
    &lt;option value="safe flex-end"&gt;safe flex-end&lt;/option&gt;
    &lt;option value="unsafe flex-end"&gt;unsafe flex-end&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;
	</code>
</pre>

		<p>结果</p>
		<figure id="demo-20240409-1750">
			<div id="container" class="flex">
				<div id="item1">1</div>
				<div id="item2">2</div>
				<div id="item3">3</div>
				<div id="item4">4</div>
				<div id="item5">5</div>
				<div id="item6">6</div>
			</div>

			<div class="row">
				<label for="display">display: </label>
				<select id="display">
					<option value="flex">flex</option>
					<option value="grid">grid</option>
				</select>
			</div>

			<div class="row">
				<label for="values">align-items: </label>
				<select id="values">
					<option value="normal">normal</option>
					<option value="flex-start">flex-start</option>
					<option value="flex-end">flex-end</option>
					<option value="center" selected>center</option>
					<option value="baseline">baseline</option>
					<option value="stretch">stretch</option>

					<option value="start">start</option>
					<option value="end">end</option>
					<option value="self-start">self-start</option>
					<option value="self-end">self-end</option>

					<option value="first baseline">first baseline</option>
					<option value="last baseline">last baseline</option>

					<option value="safe center">safe center</option>
					<option value="unsafe center">unsafe center</option>
					<option value="safe right">safe right</option>
					<option value="unsafe right">unsafe right</option>
					<option value="safe end">safe end</option>
					<option value="unsafe end">unsafe end</option>
					<option value="safe self-end">safe self-end</option>
					<option value="unsafe self-end">unsafe self-end</option>
					<option value="safe flex-end">safe flex-end</option>
					<option value="unsafe flex-end">unsafe flex-end</option>
				</select>
			</div>
		</figure>
	</figure>
</template>



<script setup>
import { onMounted } from 'vue';


onMounted(() => {
	const values = document.getElementById("values")
	const display = document.getElementById("display")
	const container = document.getElementById("container")

	values.addEventListener("change", (evt) => {
		container.style.alignItems = evt.target.value
	})

	display.addEventListener("change", (evt) => {
		container.className = evt.target.value
	})

})
</script>