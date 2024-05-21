<template>
	<h1>array.sort()</h1>

	<p>【sort()】方法用于对数组的元素进行《排序》。该方法<em>《会改变::是否改变？》原始数组</em>！</p>

	<p>排序顺序可以是字母或数字，默认排序顺序为《按字母升序》。当数字是按字母顺序排列时"40"将排在"5"前面。使用数字排序，必须通过一个《函数》作为参数来调用。</p>

	<p>由于它取决于具体实现，因此无法保证排序的时间和空间复杂度。</p>


	<pre v-code:js class="nocopy">array.sort()
array.sort(compareFn)
</pre>

	<dl>
		<dt>【compareFn】<span class="optional">可选</span></dt>
		<dd>
			<p>定义排序顺序的函数。返回值应该是《一个数字》，其正负性表示两个元素的相对顺序。该函数使用以下参数调用：</p>

			<ul>
				<li>【a】第一个用于比较的元素。不会是【undefined】。</li>
				<li>【b】第二个用于比较的元素。不会是【undefined】。</li>
			</ul>

			<p>如果提供了 【compareFn】，所有非 【undefined】 的数组元素都会按照比较函数的返回值进行排序（所有的 【undefined】 元素都会《被排序到数组的末尾》，并且《不调用::是否调用？》
				【compareFn】）。</p>

			<dl>
				<dt>【(a,b) => 《a;;a-b》】《b;;数字升序》</dt>
				<dt>【(a,b) => 《a;;b-a》】《b;;数字降序》</dt>
			</dl>

			<p>如果省略该函数，数组元素会被转换为《字符串》，然后按照它们的 UTF-16 码元值升序排序。</p>
		</dd>
	</dl>

	<br>

	<p>【sort()】 方法保留空槽。如果源数组是稀疏的，则空槽会被移动到数组的《末尾》，并始终排在所有 【《undefined》】 元素的后面。</p>

	<h6>对象数组的排序</h6>

	<p>对象数组可以通过比较它们的某个属性的值来排序。</p>

	<pre v-code:js>const items = [
  { name: "Edward",   value: 21  },
  { name: "Sharpe",   value: 37  },
  { name: "And",      value: 45  },
  { name: "The",      value: -12 },
  { name: "Magnetic", value: 13  },
  { name: "Zeros",    value: 37  },
];

// 根据 value 排序
items.sort((《a, b》) => 《a.value - b.value》);</pre>



	<h6>sort() 方法返回对同一数组的引用</h6>

	<p>【sort()】 方法返回《对原始数组的引用》，因此更改返回的数组将同时更改原始数组。</p>

	<pre v-code:js>const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 《10》</pre>

	<p>如果希望 【sort()】 方法不改变原始数组，而是返回一个类似于其他数组方法返回的浅拷贝数组，可以使用 【《toSorted()》】 方法。或者，可以在调用 【sort()】 之前使用展开语法或 【Array.from()】
		进行浅拷贝。</p>

	<pre v-code:js>const numbers = [3, 1, 4, 1, 5];
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 《3》</pre>


	<h6>在稀疏数组上使用 sort()</h6>

	<p>空槽会被移动到数组的末尾。</p>

	<pre v-code:js>console.log(["a", "c", , "b"].sort());       // 《['a', 'b', 'c', empty]》
console.log([, undefined, "a", "b"].sort()); // 《["a", "b", undefined, empty]》</pre>

	<h6>在类数组对象上调用 sort()</h6>

	<p>【sort()】 方法会读取 【this】 的 【length】 属性。然后它会收集在 【0】 到 【length - 1】
		范围内所有已存在的整数键属性，对它们进行排序，然后写回。如果范围内存在缺失的属性，则相应的尾随属性将被删除，好像不存在的属性被排序到末尾一样。</p>

	<pre v-code:js>const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};

console.log(Array.prototype.sort.call(arrayLike));
// { '0': 4, '1': 5, length: 3, unrelated: 'foo' }</pre>


	<hr>

	<h1>array.toSorted()</h1>

	<p>Array 实例的 【toSorted()】 方法是 【sort()】 方法的复制方法版本。它返回一个《新数组》，其元素按升序排列。</p>

	<pre v-code:js class="nocopy">// 不传入函数
array.toSorted()

// 传入箭头函数
array.toSorted((a, b) => { /* … */ })

// 传入比较函数
array.toSorted(compareFn)

// 內联比较函数
array.toSorted(function compareFn(a, b) { /* … */ })</pre>

	<blockquote>有关 【compareFn】 参数的更多信息，请参阅 【sort()】。</blockquote>

	<p>当在稀疏数组上使用 【toSorted()】 方法时，它迭代时会将空槽视为具有 【undefined】 值的元素。</p>

	<h6>对数组进行排序</h6>

	<pre v-code:js>const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months);       // ['Mar', 'Jan', 'Feb', 'Dec']

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values);       // [1, 10, 21, 2]</pre>


	<h6>在稀疏数组上使用 toSorted()</h6>

	<p>空槽被视为具有 【undefined】 值而被排序。它们总是排序到数组的末尾，并且 【compareFn】 不会对它们进行调用。</p>

	<pre v-code:js>console.log(["a", "c", , "b"].toSorted());       // ['a', 'b', 'c', undefined]
console.log([, undefined, "a", "b"].toSorted()); // ["a", "b", undefined, undefined]</pre>


	<h6>在非数组对象上调用 toSorted()</h6>

	<p>【toSorted()】 方法会读取 【this】 的 【length】 属性。然后它会收集所有在 【0】 到 【length - 1】 范围内的整数键属性，对它们进行排序并将它们写入一个新的数组中。</p>

	<pre v-code:js>const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};

console.log(Array.prototype.toSorted.call(arrayLike));
// [4, 5, undefined]</pre>

	<hr>
	<h6>冒泡排序</h6>
	<p>外层循环管趟数 5个数就是走4趟；里面的循环管每一趟的交换次数，依次就是：4、3、2、1</p>
	<pre v-code:js>var arr = [4, 1, 2, 3, 5];
for (var i = 0; i &lt; arr.length - 1; i++) {
  for (var j = 0; j &lt; arr.length - i - 1; j++) {
    if (arr[j] &lt; arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
  }
}
console.log(arr); // ➤ (5) [5, 4, 3, 2, 1]</pre>
</template>