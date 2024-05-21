<template>
	<h1>string.trim()</h1>

	<p>该方法用于【删除字符串的头尾空白符】，并返回【<ins>字符串</ins>】，空白符包括：空格、制表符 tab、换行符等其他空白符等。【trim()】方法【不会改变::会不会改变】原始字符串。没有参数。</p>

	<p>【trim()】方法不适用于【null】, 【undefined】, 【Number】类型。</p>

	<pre v-code:js>string.trim()</pre>
	<p>如果 【string】 的开头和结尾都没有空白字符，仍然会返回一个新字符串(本质上是 《【string】 的副本》)，而不会抛出异常。</p>

	<hr>
	<h1>string.trimStart()</h1>
	<p>该方法会《删除字符串开头的空白字符》。【《trimLeft()》】 是此方法的别名。</p>
	<pre v-code:js>string.trimStart()
string.trimLeft()</pre>

	<p>返回《一个新的字符串》，表示从 【string】 的开头（左侧）去除空白字符后的结果。空白字符定义为空白符加上行终止符。如果 【string】 的开头没有空白字符，仍然会返回一个新的字符串（实际上是 【string】 的副本）。
	</p>

	<hr>


	<h1>string.trimEnd()</h1>
	<p>该方法会《删除字符串末尾的空白字符》。【《trimRight()》】 是这个方法的别名。</p>
	<pre v-code:js>string.trimEnd()
string.trimRight()</pre>

	<p>返回《一个新的字符串》，表示从 【string】 的末尾（右侧）去除空白字符后的结果。空白字符定义为空白符加上行终止符。如果 【string】 的末尾没有空白字符，仍然会返回一个新的字符串（实际上是 【string】 的副本）。
	</p>
</template>