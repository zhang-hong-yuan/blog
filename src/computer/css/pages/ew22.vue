<template>
	<h1>flex-wrap</h1>


	<p>虽然 flexbox 是一维模型，但可以使 flex 项目应用到多行中。在这样做的时候，应该把每一行看作一个新的 flex 容器。任何空间分布都将在该行上发生，而不影响该空间分布的其他行。</p>

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
					<td>nowrap</td>
					<td>默认值。规定弹性项目不会换行。它们将会缩小以适应容器；如果项目的子元素无法缩小，使用nowrap会导致溢出，或者缩小程度还不够小。</td>
				</tr>
				<tr>
					<td>wrap</td>
					<td>如果项目太大而无法全部显示在一行中，弹性项目会在需要时换行。</td>
				</tr>
				<tr>
					<td class="nowrap">wrap-reverse</td>
					<td>规定弹性项目会在需要时换行，以反方向。</td>
				</tr>
			</tbody>
		</table>
	</figure>

</template>