<template>
	<h1>array.find()</h1>
	<p>【find()】方法返回《数组中满足测试函数的第一个元素的值》。</p>

	<ul>
		<li>当数组中的元素满足测试条件时, 【find()】 返回《符合条件的元素》，之后的值《不会::会不会？》再调用执行函数。</li>
		<li>如果没有符合条件的元素返回 【《undefined》】。</li>
	</ul>

	<pre v-code:js class="nocopy">array.find(callbackFn)
array.find(callbackFn, thisArg)</pre>

	<dl>
		<dt>【callbackFn】</dt>
		<dd>
			为数组中的每个元素执行的函数。它应该返回一个真值来表示已经找到了匹配的元素。该函数被调用时将传入以下参数：
			<dl>
				<dt>【element】</dt>
				<dd>数组中当前正在处理的元素。</dd>
				<dt>【index】</dt>
				<dd>正在处理的元素在数组中的索引。</dd>
				<dt>【array】</dt>
				<dd>调用了 【find()】 的数组本身。</dd>
			</dl>
		</dd>
		<dt>【thisArg】<span class="optional">可选</span></dt>
		<dd>执行 【callbackFn】 时用作 【this】 的值。</dd>
	</dl>
	<br>

	<p>【find()】 方法是一个迭代方法。它按索引升序顺序为数组中的每个元素调用提供的 【callbackFn】 函数。</p>

	<p>【callbackFn】 被调用来处理数组的每一个索引，而不仅仅是那些有值的索引。在稀疏数组中，空槽会被访问的，未赋值的空槽与 【《undefined》】 表现相同。</p>

	<h6>示例</h6>

	<p>在对象数组中通过对象属性进行查找</p>

	<pre v-code:js>const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }</pre>


	<p>使用箭头函数和解构赋值</p>

	<pre v-code:js>const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }</pre>


	<h6>寻找数组中的第一个素数</h6>
	<p>质数又称素数。一个大于1的自然数，除了1和它自身外，不能被其他自然数整除的数叫做质数；否则称为合数（规定1既不是质数也不是合数）。</p>

	<p>下面的例子展示了如何从数组中寻找素数（如果找不到素数则返回 【undefined】）：</p>

	<pre v-code:js>function isPrime(element, index, array) {
  let start = 2;
  while (start &lt;= Math.sqrt(element)) 
    if (element % start++ &lt; 1) return false;
  
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined，未找到
console.log([4, 5, 8, 12].find(isPrime)); // 5</pre>


	<h6>在非数组对象上调用 【find()】</h6>

	<p>【find()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引。</p>

	<pre v-code:js>const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
};

console.log(Array.prototype.find.call(arrayLike, (x) => !Number.isInteger(x)));
// 7.3</pre>



	<hr>
	<h1>array.findLast()</h1>
	<p>【findLast()】 方法反向迭代数组，并返回《满足提供的测试函数的第一个元素的值》。如果没有找到对应元素，则返回 【undefined】。</p>


	<pre v-code:js class="nocopy">array.findLast(callbackFn)
array.findLast(callbackFn, thisArg)</pre>

	<dl>
		<dt>【callbackFn】</dt>
		<dd>
			数组中测试元素的函数。回调应该返回一个真值，表示已找到匹配的元素，否则返回一个假值。函数在被调用时会传递以下参数：

			<dl>
				<dt>【element】</dt>
				<dd>当前遍历到的元素。</dd>
				<dt>【index】</dt>
				<dd>当前遍历到的元素的索引。</dd>
				<dt>【array】</dt>
				<dd>调用 【findLast()】 的数组本身。</dd>
			</dl>
		</dd>


		<dt>【thisArg】<span class="optional">可选</span></dt>
		<dd>执行 【callbackFn】 时，用作 【this】 的值。</dd>
	</dl>

	<br>

	<p>【findLast()】 是一个迭代方法。该方法对数组每一个元素按降序（索引从大到小）执行 【callbackFn】 函数，直到 【callbackFn】 返回一个真值。然后 【findLast()】
		返回该元素的值并停止遍历数组。如果 【callbackFn】 没有返回一个真值，则 【findLast()】 返回 【《undefined》】。</p>

	<p>【callbackFn】 会被数组中的每个元素调用，而不仅仅是那些被赋值的元素。对于稀疏数组来说，空槽行为和 【undefined】 相同。</p>
</template>