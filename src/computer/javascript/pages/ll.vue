<template>
	<h1>array.push()</h1>
	<p>【push()】方法《向数组的末尾添加一个或多个元素》，并返回《新的长度》。此方法《改变::是否改变？》数组的长度。</p>

	<pre v-code:js class="nocopy">array.push()
array.push(element0)
array.push(element0, element1)
array.push(element0, element1, /* … ,*/ elementN)</pre>
	<dl>
		<dt>【elementN】</dt>
		<dd>添加到数组末尾的元素。</dd>
	</dl>

	<br>

	<p>【push()】 方法是一个修改方法。它改变了 【this】 的内容和长度。如果希望 【this】 的值保持不变，但返回一个末尾追加了元素的新数组，可以使用 【《arr.concat([element0, element1, /*
		... ,*/ elementN])》】 来代替。请注意，这些元素需要被包装在一个额外的数组中——否则，如果元素本身是一个数组，由于 【concat()】 的行为，它将《被展开而不是作为单个元素添加到原数组的末尾》。</p>


	<p>【push()】 方法是通用的。它只期望 【this】 值具有 【length】 属性和整数键属性。虽然字符串也是类似数组的，但这个方法不适用于它，因为字符串是不可变的。</p>


	<h6>在数组中添加元素</h6>

	<pre v-code:js>const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total);  // 4</pre>


	<h6>合并两个数组</h6>

	<p>这个示例使用展开语法来将第二个数组的所有元素添加到第一个数组中。</p>

	<pre v-code:js>const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

// 合并第二个数组到第一个数组中
vegetables.push(《...moreVegs》);
console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']</pre>

	<hr>
	<h1>array.pop()</h1>

	<p>【pop()】方法用于《删除数组的最后一个元素》并返回《删除的元素》。此方法《改变::是否改变？》数组的长度！</p>

	<pre v-code:js class="nocopy">array.pop()</pre>

	<p>【pop()】 是修改方法。其改变了 【this】 的长度和内容。如果需要 【this】 不变，但是返回一个新的最后一个元素被移除的数组，可以使用 【《arr.slice(0, -1)》】 来代替。</p>

	<p>【pop()】 方法是通用的。它只期望 【this】 值具有 【length】 属性和整数键属性。虽然字符串也是类数组对象，但是由于其不能被修改，所以 【pop()】 方法并不能应用在字符串上。</p>


	<h6>删除掉数组的最后一个元素</h6>

	<pre v-code:js>const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]
console.log(popped); // 'sturgeon'</pre>


	<h6>在非数组对象上调用 pop()</h6>

	<p>【pop()】 方法会读取 【this】 上的 【length】 属性。如果规范化的 【length】 属性为 0，【length】 会被再次设置为 0（鉴于之前可能是负数或者 【undefined】）。否则，返回并删除位于
		【length - 1】 处的属性。</p>

	<pre v-code:js>const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};

console.log(Array.prototype.pop.call(arrayLike)); // 4
console.log(arrayLike); // { length: 2, unrelated: 'foo' }

const plainObj = {}; // 没有 length 属性，所以长度为 0
Array.prototype.pop.call(plainObj);

console.log(plainObj); // { length: 0 }</pre>
</template>