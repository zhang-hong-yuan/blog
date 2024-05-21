<template>
	<h1>switch 语句</h1>
	<p>【switch】 表达式的值会与 【case】 的值做比较。如果全等【===】，则与该 【case】 关联的代码块会被执行。【default】 可以省略 【break】。如果所有的 【case】 的值都和表达式的值不匹配，则执行
		【default】 里的代码。
	</p>
	<pre v-code:js>switch (表达式) {
    case value1:
		statements_1 // 表达式 等于 value1 时要执行的代码
		[break;]

    case value2:
		statements_2 // 表达式 等于 value2 时要执行的代码
		[break;]

	……

    default:
		statements_def // 表达式 不等于任何一个 value 时要执行的代码
		[break;]
}</pre>
	<p>如果当前的 case 里面没有 break 则不会退出 switch，是继续执行下一个 case。即发生穿透。</p>
	<blockquote>【switch】语句通常处理 case 为确定值的情况，而【if…else…】语句常用于范围判断。</blockquote>
</template>