<template>
	<h1>break</h1>
	<p>使用 【break】 语句来终止循环，【switch】，或者是链接到 【label】 语句。</p>
	<pre v-code:js>break [label];</pre>
	<ul>
		<li>当使用不带 【label】 的 【break】 时，它会立即终止当前所在的 【while】，【do-while】，【for】，或者 【switch】 并把控制权交回这些结构后面的语句。</li>
		<li>当使用带 【label】 的 【break】 时，它会终止指定的带标记(label)的语句。</li>
	</ul>

	<br>
	<p><strong>案例1</strong>：下面的例子循环数组里的元素，直到找到一个等于 【theValue】 的值：</p>
	<pre v-code:js>for (i = 0; i &lt; a.length; i++) {
  if (a[i] == theValue) {
    break;
  }
}</pre>

	<br>
	<p><strong>案例2</strong>：终止一个 【label】</p>
	<pre v-code:js>var x = 0;
var z = 0;
labelCancelLoops: while (true) {
  console.log("外部循环：" + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("内部循环：" + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}</pre>
</template>