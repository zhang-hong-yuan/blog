<template>
	<h1>&lt;meter&gt;</h1>
	<p>【&lt;meter&gt;】标签定义度量衡。仅用于已知最大和最小值的度量。比如：磁盘使用情况，查询结果的相关性等。</p>
	<p><strong>注意：</strong>【&lt;meter&gt;】不能作为一个进度条来使用， 进度条 【&lt;progress&gt;】 标签。</p>


	<table>
		<tr>
			<th>属性</th>
			<th>值</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>form</td>
			<td><em>form_id</em></td>
			<td>规定【&lt;meter&gt;】元素所属的一个或多个表单。</td>
		</tr>
		<tr>
			<td>high</td>
			<td><em>number</em></td>
			<td>规定被界定为高的值的范围。</td>
		</tr>
		<tr>
			<td>low</td>
			<td><em>number</em></td>
			<td>规定被界定为低的值的范围。</td>
		</tr>
		<tr>
			<td>max</td>
			<td><em>number</em></td>
			<td>规定范围的最大值。</td>
		</tr>
		<tr>
			<td>min</td>
			<td><em>number</em></td>
			<td>规定范围的最小值。</td>
		</tr>
		<tr>
			<td>optimum</td>
			<td><em>number</em></td>
			<td>规定度量的最优值。</td>
		</tr>
		<tr>
			<td>value</td>
			<td><em>number</em></td>
			<td>必需。规定度量的当前值。</td>
		</tr>
	</table>
</template>