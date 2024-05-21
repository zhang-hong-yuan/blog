<template>
	<h1>构造函数</h1>

	<p>所有其他对象，Function 对象可以用 【new】 操作符创建：</p>

	<pre v-code:js class="nocopy">
new Function (arg1, arg2, ... argN, functionBody)
</pre>

	<dl>
		<dt>【arg1, arg2, ... argN】</dt>
		<dd>函数使用零个或多个名称作为正式的参数名称。每一个必须是一个符合有效的 JavaScript 标识符规则的字符串或用逗号分隔的字符串列表，例如“x”,“theValue”或“a,b”。</dd>

		<dt>【functionBody】</dt>
		<dd>一个构成的函数定义的，包含 JavaScript 声明语句的字符串。</dd>
	</dl>

	<p>把 Function 的构造函数当作函数一样调用 (不使用 【new】 操作符) 的效果与作为 Function 的构造函数调用一样。</p>

	<p>不推荐使用 Function 构造函数创建函数，因为它需要的函数体作为字符串可能会阻止一些 JS 引擎优化，也会引起其他问题。</p>
</template>