<template>
	<h1>array.reverse()</h1>

	<p>【reverse()】 方法《就地反转数组中的元素》，并返回《同一数组的引用》。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。换句话说，数组中的元素顺序将被翻转，变为与之前相反的方向。</p>

	<p>该方法用于颠倒数组中元素的顺序。<em>《改变::是否改变》原数组</em>，没有参数。要在不改变原始数组的情况下反转数组中的元素，可以使用 【toReversed()】。</p>

	<pre v-code:js class="nocopy">array.reverse()</pre>

	<p>【reverse()】 方法会保留空槽。如果源数组是稀疏的，则空槽对应的新索引将被删除，并且也成为空槽。</p>

	<p>【reverse()】 方法是通用的。它只期望 【this】 值具有 【length】 属性和整数键属性。虽然字符串也是类似于数组的，但这个方法不适用于它们，因为字符串是不可变的。</p>


	<h6>reverse() 方法返回对同一数组的引用</h6>

	<p>【reverse()】 方法返回对原始数组的引用，因此改变返回的数组也会改变原始数组。</p>

	<pre v-code:js>const numbers = [3, 2, 4, 1, 5];
const reversed = numbers.reverse();
// numbers 和 reversed 的顺序都是颠倒的 [5, 1, 4, 2, 3]
reversed[0] = 5;
console.log(numbers[0]); // 《5》</pre>


	<p>如果希望 【reverse()】 不改变原始数组，但返回一个浅拷贝数组，就像其他数组方法（例如 【map()】）一样，使用 【toReversed()】 方法。或者，可以在调用 【reverse()】
		之前做一个浅拷贝，使用《展开语法》或
		【《Array.from()》】。</p>

	<pre v-code:js>const numbers = [3, 2, 4, 1, 5];
// [...numbers] 创建一个浅拷贝，因此 reverse() 不会改变原始数据
const reverted = [...numbers].reverse();
reverted[0] = 5;
console.log(numbers[0]); // 《3》</pre>


	<h6>对稀疏数组使用 reverse()</h6>

	<p>调用 【reverse()】 后，稀疏数组保持稀疏状态。空槽将以空槽的形式被复制到它们各自的新索引中。</p>


	<pre v-code:js>console.log([1, , 3].reverse());    // 《a;;[3, empty, 1]》
console.log([1, , 3, 4].reverse()); // 《a;;[4, 3, empty, 1]》</pre>



	<h6>对非数组对象调用 reverse()</h6>

	<p>【reverse()】 方法读取 【this】 的 【length】 属性。然后，它访问 【0】 和 【length / 2】 之间的每个索引，并交换两端对应的两个索引，并在必要时，删除某些属性。</p>


	<pre v-code:js>const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};

console.log(Array.prototype.reverse.call(arrayLike));
// { '0': 4, length: 3, unrelated: 'foo' }
// 索引“2”被删除了，因为原本的数据中索引“0”不存在了</pre>

	<hr>

	<h1>array.toReversed()</h1>

	<p>【toReversed()】 方法将调用该方法的数组对象的元素以相反的顺序调换，并返回《一个新数组》。</p>

	<pre v-code:js class="nocopy">array.toReversed()</pre>

	<p>Array 实例的 【toReversed()】 方法是 【reverse()】 方法对应的复制版本。它返回《一个元素顺序相反的新数组》。</p>

	<h6>反转数组中的元素</h6>

	<p>下面的示例创建了一个包含三个元素的数组 【items】，然后创建了一个新的数组，该数组是 【items】 的反转。【items】 数组保持不变。</p>

	<pre v-code:js>const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // 《b;;[3, 2, 1]》
console.log(items);         // 《b;;[1, 2, 3]》</pre>


	<h6>在稀疏数组上使用 toReversed()</h6>

	<p>【toReversed()】 的返回值永远不是稀疏的。空槽在返回的数组中变为 undefined。</p>

	<pre v-code:js>console.log([1, , 3].toReversed());    // [3, undefined, 1]
console.log([1, , 3, 4].toReversed()); // [4, 3, undefined, 1]</pre>

	<h6>在非数组对象上调用 toReversed()</h6>

	<p>【toReversed()】 方法读取 【this】 的 【length】 属性。然后按降序访问 【length - 1】 和 【0】 之间的每个索引，并将原始数组中该索引的值添加到新数组相应的索引中。</p>

	<pre v-code:js>const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};

console.log(Array.prototype.toReversed.call(arrayLike));
// [4, undefined, undefined]
// '0' 和 '1' 两个索引不存在，所以它们会变成 undefined</pre>
</template>