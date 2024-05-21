<template>
	<h1>regexp.test()</h1>
	<p>【test()】方法用于测试给定的字符串是否符合条件，返回 【《a;;true》】 或 【《a;;false》】。</p>
	<pre v-code:js class="nocopy">RegExp.test(str)</pre>

	<dl>
		<dt>【str】</dt>
		<dd>用来与正则表达式匹配的《字符串》。</dd>
	</dl>
	<br>

	<p>当需要知道一个正则表达式是否与指定的字符串《匹配》时，就可以使用 【test()】（类似于 【string.search()】 方法），差别在于 【test()】 返回一个《布尔值》，而 【search()】
		返回《b;;索引（如果找到）》或者《b;; -1（如果没找到）》。</p>

	<p>若想知道更多信息（然而执行比较慢），可使用【exec()】 方法（类似于 【string.《match()》】 方法）。和 【exec()】
		(或者组合使用)一样，在相同的全局正则表达式实例上多次调用【test】将会《越过》之前的匹配。</p>



	<h6>当设置全局标志的正则使用【test()】</h6>

	<p>如果正则表达式设置了《全局》标志，【test()】 的执行会改变正则表达式 【《lastIndex》】属性。连续的执行【test()】方法，后续的执行将会从 【《lastIndex》】 处开始匹配字符串，(【《exec()》】
		同样改变正则本身的 【lastIndex】 属性值)。</p>

	<pre v-code:js>var regex = /foo/g;

// regex.lastIndex is at 《d;;0》
regex.test("foo"); // 《c;;true》

// regex.lastIndex is now at 《d;;3》
regex.test("foo"); // 《c;;false》</pre>
</template>