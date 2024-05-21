<template>
	<h1>set.forEach()</h1>

	<p>Set 实例的 【forEach()】 方法按《插入》顺序为该集合中的每个值执行一次《提供的函数》。没有返回值(【undefined】)。</p>

	<pre v-code:js class="nocopy">set.forEach(callbackFn)
set.forEach(callbackFn, thisArg)</pre>

	<dl>
		<dt>【callback】</dt>
		<dd>
			<p>为集合中每个元素执行的函数，使用以下参数调用该函数：</p>

			<dl>
				<dt>【value】</dt>
				<dd>《每次迭代的值》。</dd>

				<dt>【key】</dt>
				<dd>每次迭代的键。始终与 【《value》】 相同。Set 对象中没有键，所以前两个参数都是 Set 中包含的值。这是为了与 Map 和 Array 的 【forEach()】 方法保持一致。</dd>

				<dt>【set】</dt>
				<dd>正在迭代的集合。</dd>
			</dl>
		</dd>

		<dt>【thisArg】<span class="optional">可选</span></dt>
		<dd>执行 【callbackFn】 时用作 【this】 的值。</dd>
	</dl>


	<h6>输出集合对象的内容</h6>

	<p>以下代码依次打印 Set 对象的元素：</p>

	<pre v-code:js>function logSetElements(value1, value2, set) {
  console.log(`s[${value}] = ${value2}`);
}

new Set(["foo", "bar", undefined])《.forEach(logSetElements)》;

// logs:
// "s[foo] = foo"
// "s[bar] = bar"
// "s[undefined] = undefined"
</pre>
</template>