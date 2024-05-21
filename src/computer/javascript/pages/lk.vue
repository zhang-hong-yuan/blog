<template>
	<h1>array.unshift()</h1>


	<p>【unshift()】方法可向数组的《开头》添加一个或更多元素，并返回《新的长度》。《改变::是否改变？》数组的长度。</p>

	<p>如果希望保持 【this】 的值不变，【unshift(v1, v2)】相应的非修改方法：【《toSpliced(0, 0, v1, v2)》】</p>
	<pre v-code:js class="nocopy">array.unshift()
array.unshift(element1)
array.unshift(element1, element2)
array.unshift(element1, element2, /* …, */ elementN)</pre>
	<dl>
		<dt>【element0, element1, /* … ,*/ elementN】</dt>
		<dd>添加到 array 开头的元素。</dd>
	</dl>

	<p>多个元素作为参数传递，它们将被插入到对象开头的块中，与它们作为参数传递的顺序完全相同。因此，调用一次 【unshift()】 方法并传递 【n】 个参数，与调用 【n】 次并传递 1
		个参数（例如使用循环），《不会::会不会？》产生相同的结果。
	</p>
	<pre v-code:js>let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr); // 《a;;[1, 2, 3, 4, 5, 6]》

arr = [4, 5, 6]; // 重置数组

arr.unshift(1);
arr.unshift(2);
arr.unshift(3);

console.log(arr); // 《a;;[3, 2, 1, 4, 5, 6]》
</pre>


	<h6>使用 unshift()</h6>

	<pre v-code:js>const arr = [1, 2];

arr.unshift(0); // 调用的结果是 3，这是新的数组长度。
// 数组是 [0, 1, 2]

arr.unshift(-2, -1); // 新的数组长度是 5
// 数组是 [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]); // 新的数组长度是 6
// 数组是 [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5]); // 新的数组长度是 8
// 数组是 [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]</pre>



	<h6>在非数组对象中使用 unshift()</h6>

	<p>【unshift】 方法会读取 【this】 的 【length】 属性。然后，它将 【0】 到 【length - 1】 范围内的所有属性按参数数量右移，并将每个索引从 【0】 开始，并将参数传递给
		【unshift()】。最后，它将 【length】 设置为之前的长度加上前置元素的数量。</p>

	<pre v-code:js>const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};

Array.prototype.unshift.call(arrayLike, 1, 2);
console.log(arrayLike);
// { '0': 1, '1': 2, '4': 4, length: 5, unrelated: 'foo' }

const plainObj = {};
// 这里没有长度属性，所以这里的长的为 0
Array.prototype.unshift.call(plainObj, 1, 2);
console.log(plainObj);
// { '0': 1, '1': 2, length: 2 }</pre>



	<hr>

	<h1>array.shift()</h1>

	<p>【shift()】方法用于《把数组的第一个元素从其中删除》，并返回《第一个元素的值》，如果数组为空则返回 【《undefined》】。<em>《改变::是否改变？》</em>数组的长度！没有参数。</p>

	<pre v-code:js class="nocopy">array.shift()</pre>

	<p>【shift】 方法移除索引为 0 的元素，并将后续元素的下标依次向前移动，然后返回被移除的元素。如果 【length】 属性的值为 0，则返回 【undefined】。</p>

	<p>【shift()】 方法是一个改变方法。它改变了 【this】 的内容和长度。如果希望保持 【this】 的值不变，但返回一个删除了第一个元素的新数组，可以使用 【《arr.slice(1)》】。</p>

	<p>【shift()】 方法是通用的。它只期望 【this】 值具有 【length】 属性和整数键属性。虽然字符串也是类似数组的，但这个方法不适合应用于它们，因为字符串是不可变的。</p>

	<h6>移除数组中的一个元素</h6>

	<p>以下代码显示了删除其第一个元素之前和之后的 【myFish】 数组。它还显示已删除的元素：</p>

	<pre v-code:js>const myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("调用 shift 之前：", myFish);
// 调用 shift 之前： ['angel', 'clown', 'mandarin', 'surgeon']

const shifted = myFish.shift();

console.log("调用 shift 之后：", myFish);
// 调用 shift 之后： ['clown', 'mandarin', 'surgeon']

console.log("被删除的元素：" + shifted);
// "被删除的元素：angel"</pre>


	<h6>在 while 循环中使用 shift()</h6>

	<p>【shift()】 方法经常用于 【while】 循环的条件中。下例中每次迭代都会从一个数组中移除下一项元素，直至它成为空数组。</p>

	<pre v-code:js>const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

while (typeof (i = names.shift()) !== 《"undefined"》) 
  console.log(i);

// Andrew, Tyrone, Paul, Maria, Gayatri</pre>


	<h6>在非数组对象上调用 shift()</h6>

	<p>【shift】 方法会读取 【this】 的 【length】 属性。如果规范化长度为 0，【length】 再次设置为 0（而之前可能为负值或 【undefined】）。否则，返回 0 处的属性，其余属性向左移动
		1。【length】 属性递减 1。</p>


	<pre v-code:js>const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.shift.call(arrayLike));
// undefined，因为它是一个空槽
console.log(arrayLike);
// { '1': 4, length: 2, unrelated: 'foo' }

const plainObj = {};
// 这里没有长度属性，所以长度为 0
Array.prototype.shift.call(plainObj);
console.log(plainObj);
// { length: 0 }</pre>
</template>