<template>
	<h1>Array()</h1>

	<p>【Array()】 构造函数用于《创建 【Array】 对象》。调用 【Array()】 时可以使用也可以不使用 【《new》】。两者都会创建一个新的 【Array】 实例。</p>

	<pre v-code:js class="nocopy">new Array()
new Array(element0)
new Array(element0, element1)
new Array(element0, element1, /* … ,*/ elementN)
new Array(arrayLength)

Array()
Array(element0)
Array(element0, element1)
Array(element0, element1, /* … ,*/ elementN)
Array(arrayLength)</pre>

	<dl>
		<dt>【elementN】</dt>
		<dd>【Array】 构造函数会根据给定的元素创建一个 【JavaScript】 数组，但是当<ins>《a;;仅有一个参数》</ins>且<ins>《a;;为数字》</ins>时除外。</dd>
		<dt>【arrayLength】</dt>
		<dd>如果传递给 【Array】 构造函数的唯一参数是介于 【0】 到 【2<sup>32</sup> - 1】(含)之间的《整数》，这将返回一个新的 JavaScript 数组，其 【《length》】 属性设置为该数字。</dd>
	</dl>

	<p>如果只有一个参数(【arrayLength】)且其值不在 【0】 到 【232 - 1】之间，则会触发异常。</p>

	<pre v-code:js>const arrayOfOne = new Array("2"); // 这里是字符串 "2" 而不是数字 2

console.log(arrayOfOne.length); // 《b;;1》
console.log(arrayOfOne[0]);     // 《b;;"2"》

// -----------------------------------------------------

const arrayEmpty = new Array(2);

console.log(arrayEmpty.length); // 《2》
console.log(arrayEmpty[0]);     // 《undefined；实际上是一个空槽》
console.log(0 in arrayEmpty);   // 《c;;false》
console.log(1 in arrayEmpty);   // 《c;;false》</pre>

	<hr>

	<h1>Array.of()</h1>

	<p>【Array.of()】 静态方法通过可变数量的参数创建一个新的 【Array】 实例，而不考虑参数的《d;;数量》或《d;;类型》。</p>
	<pre v-code:js class="nocopy">Array.of()
Array.of(element0)
Array.of(element0, element1)
Array.of(element0, element1, /* … ,*/ elementN)</pre>

	<dl>
		<dt>【elementN】</dt>
		<dd>用于创建数组的元素。</dd>
	</dl>

	<br>

	<p>【Array.of()】 和 【Array()】 构造函数之间的区别在于对《单个参数》的处理：【Array.of(7)】 创建一个具有单个元素 7 的数组，而 【Array(7)】 创建一个 length 为 7 的空数组。</p>


	<pre v-code:js>Array.of(7); // 《e;;[7]》
Array(7);    // 《e;;由 7 个空槽组成的数组》

Array.of(1, 2, 3); // 《f;;[1, 2, 3]》
Array(1, 2, 3);    // 《f;;[1, 2, 3]》</pre>

	<hr>

	<h1>Array.from()</h1>

	<p>【Array.from()】 静态方法从<ins>《可迭代》</ins>或<ins>《类数组》</ins>对象创建一个《新的浅拷贝的数组实例》。</p>

	<p>返回《一个新的数组实例》。可以通过以下方式来创建数组对象：</p>

	<ul>
		<li>《可迭代对象》，例如 【Map】 和 【Set】 对象</li>
		<li>《类数组对象》，带有 【length】 属性和索引元素的对象</li>
	</ul>

	<pre v-code:js class="nocopy">Array.from(arrayLike)
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)</pre>

	<dl>
		<dt>【arrayLike】</dt>
		<dd>想要转换成数组的类数组或可迭代对象。</dd>

		<dt>【mapFn】<span class="optional">可选</span></dt>
		<dd>
			调用数组每个元素的函数。如果提供，每个《将要添加到数组中》的值首先会传递给该函数，然后将 《【mapFn】 的返回值》增加到数组中。使用以下参数调用该函数：

			<dl>
				<dt>【《h;;element》】</dt>
				<dd>数组当前正在处理的《g;;元素》。</dd>

				<dt>【《h;;index》】</dt>
				<dd>数组当前正在处理的《g;;元素的索引》。</dd>
			</dl>


		</dd>

		<dt>【thisArg】<span class="optional">可选</span></dt>
		<dd>执行 【mapFn】 时用作 【《this》】 的值。</dd>
	</dl>
	<br>
	<p>【Array.from()】 绝不会创建《稀疏数组》。如果 【arrayLike】 对象缺少一些索引属性，那么这些属性在新数组中将是 【undefined】。</p>

	<p>【Array.from()】 有一个可选的参数 【mapFn】，该参数允许在创建数组时为每个元素执行一个函数，类似于 【《map()》】。更明确地说，【Array.《from(obj, mapFn, thisArg)》】 和
		【Array.《from(obj).map(mapFn, thisArg)》】 具有相同的结果，只是它不会创建中间数组，并且 【mapFn】 仅接受两个参数【(element、index)】，不接受数组，因为《数组仍然在构建中》。
	</p>

	<h6>示例</h6>

	<p>从字符串构建数组</p>

	<pre v-code:js>Array.from("foo");
// 《[ "f", "o", "o" ]》</pre>

	<p>从 Set 构建数组</p>

	<pre v-code:js>const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// 《[ "foo", "bar", "baz" ]》</pre>

	<p>从 Map 构建数组</p>

	<pre v-code:js>const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map); // 《[[1, 2], [2, 4], [4, 8]]》

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values()); // 《i;;['a', 'b']》;
Array.from(mapper.keys());   // 《i;;['1', '2']》;</pre>

	<p>从 NodeList 构建数组</p>

	<pre v-code:js>// 根据 DOM 元素的属性创建一个数组
const images = document.querySelectorAll("img");
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith("http://"));</pre>

	<p>从类数组对象构建数组(arguments)</p>

	<pre v-code:js>function f() {
  return Array.from(arguments);
}
f(1, 2, 3); // 《[ 1, 2, 3 ]》</pre>

	<p>使用箭头函数和 【Array.from()】</p>

	<pre v-code:js>// 使用箭头函数作为映射函数去操作多个元素
Array.from([1, 2, 3], (x) => x + x);
// 《[2, 4, 6]》

// 生成一个数字序列。因为数组在每个位置都使用 `undefined` 初始化，下面的 `v` 值将是 《`undefined`》
Array.from({ length: 5 }, (v, i) => 《i》);
// 《[0, 1, 2, 3, 4]》</pre>
</template>