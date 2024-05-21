<template>
	<h1>map.forEach()</h1>

	<p>Map 实例的 【forEach()】 方法按《插入》顺序对该 map 中的每个《键/值对》执行一次提供的函数。无返回值(【undefined】)。</p>


	<pre v-code:js class="nocopy">map.forEach(callbackFn)
map.forEach(callbackFn, thisArg)</pre>


	<dl>
		<dt>【callbackFn】</dt>
		<dd>
			<p>为 map 中每个元素执行的函数。使用以下参数调用该函数：</p>

			<dl>
				<dt>【value】</dt>
				<dd>每个迭代的值。</dd>

				<dt>【key】</dt>
				<dd>每个迭代的键。</dd>

				<dt>【map】</dt>
				<dd>正在迭代的 map。</dd>
			</dl>
		</dd>

		<dt>【thisArg】<span class="optional">可选</span></dt>
		<dd>执行 【callbackFn】 时用作 【this】 的值。</dd>
	</dl>


	<h6>输出一个 Map 对象中的内容</h6>

	<p>以下的代码在每行中打印一个 Map 对象中的元素：</p>


	<pre v-code:js>function logMapElements(value, key, map) {
  console.log(`map.get('${key}') = ${value}`);
}

new Map([
  ["foo", 3],
  ["bar", {}],
  ["baz", undefined],
])《.forEach(logMapElements)》;

// 打印：
// "map.get('foo') = 3"
// "map.get('bar') = [object Object]"
// "map.get('baz') = undefined"
</pre>
</template>