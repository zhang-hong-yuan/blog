<template>
	<h1>flexbox 的两根轴线</h1>

	<p>当使用 flex 布局时，首先想到的是两根轴线——<strong>主轴</strong>和<strong>交叉轴</strong>。主轴由 ‘flex-direction’ 定义，另一根轴垂直于它。使用 flexbox
		的所有属性都跟这两根轴线有关，所以有必要在一开始首先理解它。</p>

	<p>主轴由 ‘flex-direction’ 定义，可以取 4 个值：</p>

	<figure>
		<table>
			<thead>
				<tr>
					<th>属性值</th>
					<th>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>row</td>
					<td>默认值。作为一行，水平地显示弹性项目。</td>
				</tr>
				<tr>
					<td>row-reverse</td>
					<td>等同行，但方向相反。</td>
				</tr>
				<tr>
					<td>column</td>
					<td>作为列，垂直地显示弹性项目。</td>
				</tr>
				<tr>
					<td>column-reverse</td>
					<td>等同列，但方向相反。</td>
				</tr>
			</tbody>
		</table>
	</figure>


	<p>如果选择了 ‘row’ 或者 ‘row-reverse’，主轴将沿着<strong>行向</strong>延伸。</p>

	<figure>
		<img src="../assets/flex-direction-row.svg" alt="">
	</figure>

	<p>选择 ‘column’ 或者 ‘column-reverse’ 时，主轴会沿着页面的上下方向延伸——也就是<strong>块向</strong>。</p>


	<figure>
		<img src="../assets/flex-direction-col.svg" alt="">
	</figure>
	<br>
	<hr>
	<br>
	<p>交叉轴垂直于主轴，所以如果 ‘flex-direction’（主轴）设成了 ‘row’ 或者 ‘row-reverse’ 的话，交叉轴的方向就是沿着上下方向延伸的。</p>


	<figure>
		<img src="../assets/flex-direction-row2.svg" alt="">
	</figure>


	<p>如果主轴方向设成了 ‘column’ 或者 ‘column-reverse’，交叉轴就是水平方向。</p>


	<figure>
		<img src="../assets/flex-direction-col2.svg" alt="">
	</figure>

	<p>理解主轴和交叉轴的概念对于对齐 flexbox 里面的元素是很重要的；flexbox 的特性是沿着主轴或者交叉轴对齐之中的元素。</p>
</template>