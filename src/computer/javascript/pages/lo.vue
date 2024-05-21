<template>
	<h1>array.includes()</h1>

	<p>【includes()】方法用来《判断一个数组是否包含一个指定的值》，如果是返回【《a;;true》】，否则【《a;;false》】。</p>

	<pre v-code:js class="nocopy">array.includes(searchElement)
array.includes(searchElement, fromIndex)</pre>

	<dl>
		<dt>【searchElement】</dt>
		<dd>需要查找的元素值。</dd>
		<dt>【fromIndex】<span class="optional">可选</span></dt>
		<dd>
			<p>开始搜索的索引，会转换为整数。</p>
			<ul>
				<li>负索引从数组末尾开始计数——如果 【fromIndex &lt; 0】，那么实际使用的是 【fromIndex + array.length】。然而在这种情况下，数组《仍然从前往后::以什么顺序？》进行搜索。</li>
				<li>如果 【fromIndex &lt; -array.length】 或者省略 【fromIndex】，则使用 【《0》】，这将导致整个数组被搜索。</li>
				<li>如果 【fromIndex >= array.length】，则《不会搜索数组并返回 【false】》。</li>
			</ul>
		</dd>
	</dl>

	<br>

	<p>当在稀疏数组上使用时，【includes()】 方法迭代空槽，就像它们的值是 【undefined】 一样。</p>


	<h6>使用 includes() 方法</h6>

	<pre v-code:js>[1, 2, 3].includes(2);       // true
[1, 2, 3].includes(4);       // false
[1, 2, 3].includes(3, 3);    // false
[1, 2, 3].includes(3, -1);   // true
[1, 2, NaN].includes(NaN);   // 《true》
["1", "2", "3"].includes(3); // false</pre>


	<h6>在非数组对象上调用 includes() 方法</h6>

	<p>【includes()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引。</p>

	<pre v-code:js>const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.includes.call(arrayLike, 2));
// true
console.log(Array.prototype.includes.call(arrayLike, 1));
// false</pre>




	<hr>



	<h1>array.some()</h1>
	<p>【some()】方法用于《检测数组中的元素是否满足指定条件》。《不修改::是否修改？》数组。</p>
	<ul>
		<li>如果有一个元素满足条件，则表达式返回【《b;;true》】, 剩余的元素《不会再执行检测::是否继续检测？》。</li>
		<li>如果没有满足条件的元素，则返回【《b;;false》】。</li>
	</ul>

	<pre v-code:js class="nocopy">array.some(callbackFn)
array.some(callbackFn, thisArg)
</pre>

	<dl>
		<dt>【callbackFn】</dt>
		<dd>
			<p>为数组中的每个元素执行的函数。它应该返回一个真值以指示元素通过测试，否则返回一个假值。该函数被调用时将传入以下参数：</p>
			<dl>
				<dt>【element】</dt>
				<dd>数组中当前正在处理的元素。</dd>
				<dt>【index】</dt>
				<dd>正在处理的元素在数组中的索引。</dd>
				<dt>【arr】</dt>
				<dd>调用了 【some()】 的数组本身。</dd>
			</dl>
		</dd>
		<dt>【thisArg】<span class="optional">可选</span></dt>
		<dd>
			<p>执行 【callbackFn】 时用作 【this】 的值。</p>
			<ul>
				<li>如果省略了 【thisArg】，【this】 的值为 【undefined】。</li>
				<li>如果传入 【null】、【undefined】，那么回调函数的 【this】为全局对象。</li>
			</ul>
		</dd>
	</dl>


	<br>

	<p>【callbackFn】 仅针对已分配值的数组索引调用。它《不会::会不会？》为稀疏数组中的空槽调用。</p>


	<h6>将任意值转换为布尔类型</h6>

	<pre v-code:js>const TRUTHY_VALUES = [true, "true", 1];

function getBoolean(value) {
  if (typeof value === "string") 
    value = value.toLowerCase().trim();

  return TRUTHY_VALUES.some((t) => 《t === value》);
}

getBoolean(false);   // false
getBoolean("false"); // false
getBoolean(1);       // true
getBoolean("true");  // true
</pre>


	<h6>在稀疏数组上使用 some()</h6>

	<p>【some()】 不会在空槽上运行它的断言函数。</p>

	<pre v-code:js>console.log([1, , 3].some((x) => x === undefined));  // 《false》
console.log([1, , 1].some((x) => x !== 1));          // 《false》
console.log([1, undefined, 1].some((x) => x !== 1)); // 《true》
</pre>


	<h6>在非数组对象上调用 some()</h6>

	<p>【some()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引，直到到达末尾或 【callbackFn】 返回 【true】。</p>


	<pre v-code:js>const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};

console.log(Array.prototype.some.call(arrayLike, (x) => typeof x === "number"));
// false
</pre>
	<hr>


	<h1>array.every()</h1>

	<p>【every()】方法用于《检测数组所有元素是否都符合指定条件》。</p>

	<ul>
		<li>如果数组中检测到有一个元素不满足，则整个表达式返回 【《c;;false》】，且剩余的元素《不会::会不会？》再进行检测。</li>
		<li>如果所有元素都满足条件，则返回 【《c;;true》】。</li>
	</ul>


	<pre v-code:js class="nocopy">array.every(callbackFn)
array.every(callbackFn, thisArg)</pre>

	<dl>
		<dt>【callbackFn】</dt>
		<dd>
			<p>为数组中的每个元素执行的函数。它应该返回一个真值以指示元素通过测试，否则返回一个假值。该函数被调用时将传入以下参数：</p>
			<dl>
				<dt>【element】</dt>
				<dd>数组中当前正在处理的元素。</dd>
				<dt>【index】</dt>
				<dd>正在处理的元素在数组中的索引。</dd>
				<dt>【array】</dt>
				<dd>调用了 【every()】 的数组本身。</dd>
			</dl>
		</dd>


		<dt>【thisArg】<span class="optinal">可选</span></dt>
		<dd>
			<p>执行 【callbackFn】 时用作 【this】 的值。</p>
			<ul>
				<li>如果省略了 【thisArg】，【this】 的值为 【undefined】。</li>
				<li>如果传入 【null】、【undefined】，那么回调函数的 【this】 为全局对象。</li>
			</ul>
		</dd>
	</dl>
	<br>

	<p>【every()】 对于空数组，它只返回 【《true》】。这种情况属于无条件正确，因为空集的所有元素都符合给定的条件。</p>

	<p>【callbackFn】 仅针对已分配值的数组索引调用。它《不会::会不会？》为稀疏数组中的空槽调用。</p>

	<p>【every()】 不会改变调用它的数组，但指定的 【callbackFn】 函数可以。</p>

	<h6>检查所有数组元素的大小</h6>

	<p>下例测试数组中的所有元素是否都大于 10。</p>

	<pre v-code:js>function isBigEnough(element, index, array) {
  return element >= 10;
}

[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true</pre>


	<h6>检查一个数组是否是另一个数组的子集</h6>

	<p>下面的示例测试一个数组的所有元素是否都存在于另一个数组中。</p>

	<pre v-code:js>const isSubset = (array1, array2) =>
  array2.every((element) => array1.《includes》(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false</pre>

	<h6>在稀疏数组上使用 every()</h6>

	<p>【every()】 不会在空槽上运行它的断言函数。</p>

	<pre v-code:js>console.log([1, , 3].every((x) => x !== undefined)); // 《true》
console.log([2, , 2].every((x) => x === 2));         // 《true》</pre>


	<h6>在非数组对象上调用 every()</h6>

	<p>【every()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引，直到到达末尾或 【callbackFn】 返回 【false】。</p>

	<pre v-code:js>const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};

console.log(
  Array.prototype.every.call(arrayLike, (x) => typeof x === "string"),
); // true</pre>
</template>