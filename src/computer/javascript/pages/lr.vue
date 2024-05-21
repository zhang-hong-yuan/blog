<template>
	<h1>array.findIndex()</h1>

	<p>【findIndex()】 方法返回《数组中满足测试函数的第一个元素的索引》。若没有找到对应元素则返回【《-1》】。</p>

	<pre v-code:js class="nocopy">findIndex(callbackFn)
findIndex(callbackFn, thisArg)</pre>

	<dl>
		<dt>【callbackFn】</dt>
		<dd>
			为数组中的每个元素执行的函数。它应该返回一个真值以指示已找到匹配元素，否则返回一个假值。该函数被调用时将传入以下参数：
			<dl>
				<dt>【element】</dt>
				<dd>数组中当前正在处理的元素。</dd>
				<dt>【index】</dt>
				<dd>正在处理的元素在数组中的索引。</dd>
				<dt>【array】</dt>
				<dd>调用了 【findIndex()】 的数组本身。</dd>
			</dl>
		</dd>


		<dt>【thisArg】<span class="optional">可选</span></dt>
		<dd>执行 【callbackFn】 时用作 【this】 的值。</dd>
	</dl>

	<br>

	<p>【findIndex()】 是一种迭代方法。它按照索引升序依次遍历数组中的每个元素，并调用提供的 【callbackFn】 函数，直到 【callbackFn】 返回一个真值。然后 【findIndex()】
		返回该元素的索引并停止遍历数组。如果 【callbackFn】 从未返回一个真值，则 【findIndex()】 返回 【-1】。</p>


	<p>【callbackFn】 被调用来处理数组的每一个索引，而不仅仅是那些有值的索引。在稀疏数组中，未赋值的空槽与 【undefined】 表现相同。</p>


	<h6>寻找数组中的首个素数的索引</h6>

	<p>质数又称素数。一个大于1的自然数，除了1和它自身外，不能被其他自然数整除的数叫做质数；否则称为合数（规定1既不是质数也不是合数）。</p>

	<p>以下示例返回数组中第一个素数的索引，如果没有素数则返回 【-1】。</p>

	<pre v-code:js>function isPrime(element) {
  if (element % 2 === 0 || element &lt; 2) return false;

  for (let factor = 3; factor &lt;= Math.sqrt(element); factor += 2) 
    if (element % factor === 0) return false;
  
  return true;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1，没有找到
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2（array[2] 是 7）</pre>

	<h6>在非数组对象上调用 findIndex()</h6>

	<p>【findIndex()】 方法读取 【this】 的 【length】 属性，并访问每个整数索引。</p>


	<pre v-code:js>const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
};

console.log(
  Array.prototype.findIndex.call(arrayLike, (x) => !Number.isInteger(x)),
); // 1</pre>



	<hr>


	<h1>array.findLastIndex()</h1>

	<p>【findLastIndex()】 方法反向迭代数组，并返回《满足测试函数的第一个元素的索引》。若没有找到对应元素，则返回 【《-1》】。</p>

	<pre v-code:js class="nocopy">array.findLastIndex(callbackFn)
array.findLastIndex(callbackFn, thisArg)</pre>

	<dl>
		<dt>【callbackFn】</dt>
		<dd>
			对数组中的每个元素执行的函数。回调必须返回一个真值，表示已找到匹配的元素，否则返回一个假值。函数在被调用时会传递以下参数：

			<dl>
				<dt>【element】</dt>
				<dd>当前遍历到的元素。</dd>
				<dt>【index】</dt>
				<dd>当前正在处理的元素的索引。</dd>
				<dt>【array】</dt>
				<dd>调用 findLastIndex() 的数组本身。</dd>
			</dl>
		</dd>

		<dt>【thisArg】<span class="optional">可选</span></dt>
		<dd>执行 【callbackFn】 时，用作 【this】 的值。</dd>
	</dl>

	<br>

	<p>【findLastIndex()】 方法是一个迭代方法。它为数组中的每个元素按索引降序调用一次提供的 【callbackFn】 函数，直到 【callbackFn】 返回一个真值。然后 【findLastIndex()】
		返回元素的索引并且停止遍历数组。如果 【callbackFn】 没有返回一个真值，则 【findLastIndex()】 返回 【-1】。</p>

	<p>【callbackFn】 会为数组中的每个元素调用，而不仅仅是那些被赋值的元素，这意味着对于稀疏数组来说，空槽的行为和 【undefined】 相同。</p>




	<h6>在稀疏数组上使用 findLastIndex()</h6>

	<p>可以在稀疏数组中搜索 【undefined】 并获得空槽的索引。</p>

	<pre v-code:js>console.log([1, , 3].findLastIndex((x) => x === undefined)); // 《1》</pre>
</template>