<template>
	<h1>运算符优先级</h1>
	<p>正则表达式从左到右进行计算，并遵循优先级顺序，这与算术表达式非常类似。</p>
	<p>相同优先级的从左到右进行运算，不同优先级的运算先《a;;高》后《a;;低》。下表从《b;;最高》到《b;;最低》说明了各种正则表达式运算符的优先级顺序：</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th>运算符</th>
					<th>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><span class="emphasize">《c;;\ 》</span></td>
					<td>《c;;转义符》</td>
				</tr>
				<tr>
					<td>《d;;【()】【(?:)】【(?=)】【[]】》</td>
					<td>《d;;圆括号和方括号》</td>
				</tr>
				<tr>
					<td class="nowrap">《e;;【*】【+】【?】【{n}】【{n,}】【{n,m}】》</td>
					<td>《e;;限定符》</td>
				</tr>
				<tr>
					<td>《f;;【^】【$】》</td>
					<td>《f;;定位点和序列(即：位置和顺序)》</td>
				</tr>
				<tr>
					<td>【《g;;|》】</td>
					<td>
						《g;;&quot;或&quot;》操作字符具有最低的优先级，使得【/m|food/】匹配&quot;m&quot;或&quot;food&quot;。若要匹配&quot;mood&quot;或&quot;food&quot;，请使用括号创建子表达式，从而产生【/(m|f)ood/】。
					</td>
				</tr>
			</tbody>
		</table>
	</figure>


	<p>常用模式：</p>
	<ul>
		<li>匹配汉字 【/[\u4e00-\u9fa5]+/g】</li>
		<li>匹配 iframe 标签：【/&lt;iframe(([\s\S])*?)&lt;\/iframe&gt;/】</li>
		<li>匹配 id=&quot;mydiv&quot; 的 div 标签：【/&lt;div id=&quot;mydiv&quot;(([\s\S])*?)&lt;\/div&gt;/】</li>
		<li>匹配所有 img 标签：【/&lt;img.*?src=&quot;(.*?)&quot;.*?\/?&gt;/gi】</li>
		<li>anki 挖空模板符号：【\{\{c[1-9][0-9]*::】</li>
	</ul>
</template>