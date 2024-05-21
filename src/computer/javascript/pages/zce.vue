<template>
	<h1>【continue】 语句</h1>
	<p>【continue】 语句可以用来继续执行(跳过代码块的剩余部分并进入下一循环)一个 【while】、【do-while】、【for】，或者 【label】 语句。</p>

	<pre v-code:js>continue [label];</pre>

	<ul>
		<li>当使用不带 label 的 【continue】 时，它终止当前 【while】，【do-while】，或者 for 语句到结尾的这次的循环并且继续执行下一次循环。</li>
		<li>当使用带 label 的 【continue】 时，它会应用被 label 标识的循环语句。</li>
	</ul>

	<br>
	<p>示例 1</p>
	<pre v-code:js>var i = 0;
var n = 0;
while (i &lt; 5) {
  i++;
  if (i == 3) continue;
  n += i;
  console.log(n);
}
// 1,3,7,12
// 若注释掉 continue 则输出：1,3,6,10,15</pre>


	<p>示例 2</p>
	<pre v-code:js>var i = 0;
var j = 10;
checkiandj: while (i &lt; 4) {
  console.log(i);
  i += 1;
  checkj: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 == 0) continue checkj;
    console.log(j + " 是奇数。");
  }
  console.log("i = " + i);
  console.log("j = " + j);
}</pre>
</template>