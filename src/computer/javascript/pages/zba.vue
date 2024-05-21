<template>
	<h1>if 语句</h1>
	<p><b>➀单分支</b>：条件成立执行代码，否则什么也不做</p>
	<pre v-code:js>if (条件表达式) {
    // 条件成立执行的代码语句
}
</pre>
	<p><b>➁双分支</b>：条件成立执行 if 里面代码，否则执行 else 里面的代码</p>
	<pre v-code:js>if (条件表达式) {
    // [如果] 条件成立执行的代码
} else {
    // [否则] 执行的代码
}</pre>
	<p><b>➂多分支</b>：适合于检查多重条件</p>
	<pre v-code:js>if (条件表达式1) {
    语句1；
} else if (条件表达式2) {
    语句2；
} else if (条件表达式3) {
    语句3；
    ....
} else {
    // 上述条件都不成立执行此处代码
}</pre>

	<blockquote>【switch】语句通常处理 case 为确定值的情况，而【if…else…】语句常用于范围判断。</blockquote>

	<section class="warning">
		<header>警告！</header>

		<p>不建议在条件表达式中使用赋值语句，因为在快速查阅代码时容易把它看成等值比较。例如，不要使用下面的代码：</p>
		<pre v-code:js>if (x = y) {
  /*  语句  */
}</pre>

		<p>如果需要在条件表达式中使用赋值，通常在赋值语句前后额外添加一对括号。例如：</p>

		<pre v-code:js>if ((x = y)) {
  /* statements here */
}</pre>
	</section>
</template>