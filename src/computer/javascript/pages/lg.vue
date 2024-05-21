<template>
	<h1>array.at()</h1>

	<p>【at()】 方法接收一个《整数》值并返回《该索引对应的元素》，允许正数和负数。负整数从数组中的最后一个元素开始倒数。</p>

	<pre v-code:js class="nocopy">【array.at(index)</pre>

	<dl>
		<dt>【index】</dt>
		<dd>要返回的数组元素的《索引》，会被转换为《整数》。负数索引从数组末尾开始计数。
			<ul>
				<li>如果 【index &lt; 0】，则会访问 【《index + array.length》】 位置的元素。</li>
				<li>如果 【index &lt; -array.length】 或 【index >= array.length】，则总是返回 【《undefined》】，而不会尝试访问相应的属性。</li>
			</ul>
		</dd>
	</dl>
	<br>


	<p>在传递非负数时，【at()】 方法等价于括号表示法。例如，【array[0]】 和 【array.at(0)】
		均返回第一个元素。但是，当需要从数组的末端开始倒数时，则不能使用【array[-1]】，因为方括号内的所有值都会被视为《字符串属性》，因此最终读取的是 【array["-1"]】，这只是一个普通的字符串属性而不是数组索引。</p>


	<p>通常的做法是访问 【length】 并将其减去从末端开始的相对索引。例如，【array[array.length - 1]】。【at()】 方法允许使用相对索引，因此可以简化为 【《array.at(-1)》】。</p>

	<p>【at()】 方法是通用的。其仅期望 【this】 具有 【length】 属性和以整数为键的属性。</p>

	<h6>比较不同的数组方法</h6>

	<p>这个示例比较了选择 【Array】 中倒数第二个元素的不同方法。虽然下面显示的所有方法都是可行的，但这个示例凸显了 【at()】 方法的简洁性和可读性。</p>

	<pre v-code:js>// 数组及数组元素
const colors = ["red", "green", "blue"];

// 使用长度属性
const lengthWay = 《colors[colors.length - 2]》;
console.log(lengthWay); // 输出：'green'

// 使用 slice() 方法。注意会返回一个数组
const sliceWay = 《colors.slice(-2, -1)》;
console.log(sliceWay[0]); // 输出：'green'

// 使用 at() 方法
const atWay = 《colors.at(-2)》;
console.log(atWay); // 输出：'green'</pre>


	<h6>在非数组对象上调用 at()</h6>

	<p>【at()】 方法读取 【this】 的 【length】 属性并计算需要访问的索引。</p>

	<pre v-code:js>const arrayLike = {
  length: 2,
  0: "a",
  1: "b",
};
console.log(Array.prototype.at.call(arrayLike, -1)); // 《"b"》</pre>


	<hr>


	<h1>array.with()</h1>

	<p>Array 实例的 【with()】 方法是使用方括号表示法修改指定索引值的复制方法版本。它会返回一个《新数组》，其指定索引处的值会被新值替换。</p>

	<pre v-code:js class="nocopy">array.with(《index, value》)</pre>

	<dl>
		<dt>【index】</dt>
		<dd>
			要修改的数组索引，将会转换为《整数》。
			<ul>
				<li>负数索引会从数组末尾开始计数——即当 【index &lt; 0】 时，会使用 【index + array.length】。</li>
				<li>如果规范化后的索引超出数组边界，会《抛出 RangeError》。</li>
			</ul>
		</dd>

		<dt>【value】</dt>
		<dd>要分配给指定索引的《任何值》。</dd>
	</dl>

	<br>
	<p>【with()】 方法永远不会产生稀疏数组。如果原数组是稀疏的，新数组对应的空白索引位置会替换为 【《undefined》】。</p>


	<h6>创建一个新的数组，改变其中一个元素</h6>

	<pre v-code:js>const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // 《a;;[1, 2, 6, 4, 5]》
console.log(arr);            // 《a;;[1, 2, 3, 4, 5]》</pre>

	<h6>数组方法的链式调用</h6>

	<p>使用 【with()】 方法，可以在更新一个数组元素后继续调用其他的数组方法。</p>

	<pre v-code:js>const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6).map((x) => x ** 2)); // 《[1, 4, 36, 16, 25]》</pre>


	<h6>在稀疏数组上使用 with()</h6>

	<p>【with()】 方法总会创建一个密集数组。</p>

	<pre v-code:js>const arr = [1, , 3, 4, , 6];
console.log(arr.with(0, 2)); // 《[2, undefined, 3, 4, undefined, 6]》</pre>


	<h6>在非数组对象上调用 with()</h6>

	<p>with() 方法会读取 this 上的 length 属性，之后读取 this 上的每个整数键并写入到新数组中，同时 value 会被写入指定的 index。</p>


	<pre v-code:js>const arrayLike = {
length: 3,
unrelated: "foo",
0: 5,
2: 4,
};
console.log(Array.prototype.with.call(arrayLike, 0, 1));
// [ 1, undefined, 4 ]</pre>
</template>