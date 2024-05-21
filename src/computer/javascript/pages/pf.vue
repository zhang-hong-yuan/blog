<template>
	<h1>递归函数</h1>

	<p>一个函数可以指向并调用自身，调用自身的函数称之为<strong>递归函数</strong>。有三种方法可以达到这个目的：</p>

	<ol>
		<li>函数名</li>
		<li>【arguments.callee】</li>
		<li>作用域内一个指向该函数的变量名</li>
	</ol>


	<pre v-code:js>const foo = function bar() {
	// 在这个函数体内，以下的语句是等价的：
	bar()
	arguments.callee()
	foo()
};</pre>

	<p>在某种意义上说，递归近似于循环。两者都重复执行相同的代码，并且两者都需要一个终止条件(避免无限循环，或者在这种情况下更确切地说是无限递归)。</p>

	<p>例如：</p>
	<pre v-code:js>let x = 0;
// “x &lt; 10”是循环条件
while (x &lt; 10) {
  // 做些什么
  x++;
}</pre>

	<p>递归函数的写法：</p>
	<pre v-code:js>function loop(x) {
  // “x >= 10”是退出条件（等同于“!(x &lt; 10)”）
  if (x >= 10) return;

  // 做些什么
  loop(x + 1); // 递归调用
}

loop(0);</pre>

	<p>不过，有些算法并不能简单的用迭代来实现。例如，获取树结构(【DOM】)中所有的节点时，使用递归实现要容易得多：</p>

	<pre v-code:js>function walkTree(node) {
  if (node === null) return;
  // 对节点做些什么
  for (let i = 0; i &lt; node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}</pre>

	<p>跟 【loop】 函数相比，这里每个递归调用都产生了更多的递归调用。将递归算法转换为非递归算法是可能的，不过逻辑上通常会更加复杂，而且需要使用栈。</p>
	<p>事实上，递归本身就使用了栈：<u>函数栈</u>。类似栈的行为可以在以下示例中看到：</p>

	<pre v-code:js>function foo(i) {
  if (i &lt; 0) return;
	
  console.log(`开始：${i}`);
  foo(i - 1);
  console.log(`结束：${i}`);
}
foo(3);

// 打印：
// 开始：3
// 开始：2
// 开始：1
// 开始：0
// 结束：0
// 结束：1
// 结束：2
// 结束：3</pre>
</template>