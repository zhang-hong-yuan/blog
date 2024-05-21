<template>
	<h1>【label】 语句</h1>

	<p>一个 【label】 提供了一个在程序中其他位置引用它的标识符。例如，可以用 label 标识一个循环，然后使用 【break】 或者 【continue】 来指出程序是否该停止循环还是继续循环。</p>

	<p>【label】 的值可以是任何的非保留字的 JavaScript 标识符， 【statement】 可以是任意你想要标识的语句(块)。</p>
	<pre v-code:js>label :
	statement</pre>

	<p><strong>示例：</strong>在这个例子里，标记 【markLoop】 标识了一个 【while】 循环。</p>
	<pre v-code:js>markLoop: while (theMark == true) {
	doSomething();
}</pre>

	<p>举一个比较典型的例子，看完即明白 Label 的应用：</p>

	<p>未添加 Label：</p>
	<pre v-code:js>var num = 0;
for (var i = 0; i &lt; 10; i++) { // i 循环
	for (var j = 0; j &lt; 10; j++) { // j 循环
		if (i == 5 && j == 5) {
			break; // i = 5，j = 5 时，会跳出 j 循环
		} // 但 i 循环会继续执行，等于跳出之后又继续执行更多次 j 循环
		num++;
	}
}

alert(num); // 输出 95</pre>

	<p>添加 Label 后：</p>
	<pre v-code:js>var num = 0;
outPoint: for (var i = 0; i &lt; 10; i++) {
	for (var j = 0; j &lt; 10; j++) {
		if (i == 5 && j == 5) {
			break outPoint; // 在 i = 5，j = 5 时，跳出所有循环，
			// 返回到整个 outPoint 下方，继续执行
		}
		num++;
	}
}

alert(num); // 输出 55</pre>

	<p>使用 continue 语句，则可达到与未添加 label 相同的效果，但在这种有多层循环的情况下，循环的跳出进入流程更为明晰一些：</p>

	<pre v-code:js>var num = 0;
outPoint: for (var i = 0; i &lt; 10; i++) {
for (var j = 0; j &lt; 10; j++) {
	if (i == 5 && j == 5) {
		continue outPoint;
	}
	num++;
}
}
alert(num); // 95</pre>

	<p>从 【alert(num)】 的值可以看出，【continue outPoint;】 语句的作用是跳出当前循环，并跳转到 【outPoint】(标签)下的 【for】 循环继续执行。</p>
</template>