<template>
	<h1>array.forEach()</h1>
	<p>【forEach()】方法对数组的每个元素执行一次给定的函数。相当于《加强版的【for】循环》。【forEach】中的函数《不需要::是否需要？》【return】，常用作《遍历数组》。</p>
	<pre v-code:js class="nocopy">array.forEach(callbackFn)
array.forEach(callbackFn, thisArg)</pre>

	<dl>
		<dt>【callbackFn】</dt>
		<dd>
			为数组中每个元素执行的函数。并会《丢弃》它的返回值。仅对已赋值的数组索引调用。对于稀疏数组中的空槽，它《不会::会不会？》被调用。该函数被调用时将传入以下参数：
			<dl>
				<dt>【element】</dt>
				<dd>数组中正在处理的当前元素。</dd>
				<dt>【index】</dt>
				<dd>数组中正在处理的当前元素的索引。</dd>
				<dt>【array】</dt>
				<dd>调用了 【forEach()】 的数组本身。</dd>
			</dl>
		</dd>
		<dt>【thisArg】<span class="optional">可选</span></dt>
		<dd>执行【callbackFn】时用作【this】的值。</dd>
	</dl>

	<br>

	<p>【forEach()】 方法是一个迭代方法。它按索引升序地为数组中的每个元素调用一次提供的 【callbackFn】 函数。与 【map()】 不同，【forEach()】 总是返回
		【《undefined》】，而且不能继续链式调用。其典型的用法是在链式调用的《末尾》执行某些操作。</p>

	<h6>在稀疏数组上使用 forEach()</h6>

	<pre v-code:js>const arraySparse = [1, 3, /* empty */, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });

// { element: 1 }
// { element: 3 }
// { element: 7 }
// 《{ numCallbackRuns: 3 }》</pre>


	<h6>将 for 循环转换为 forEach</h6>

	<pre v-code:js>const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i &lt; items.length; i++) 
  copyItems.push(items[i]);


// after
items.forEach((item) => copyItems.push(item));</pre>


	<h6>打印出数组的内容</h6>

	<pre v-code:js>const logArrayElements = (element, index /*, array */) => {
  console.log(`a[${index}] = ${element}`);
};

// 注意，索引 2 被跳过，因为数组中这个位置没有内容
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9</pre>

	<h6>在非数组对象上调用 forEach()</h6>

	<p>【forEach()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引。</p>

	<pre v-code:js>const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
Array.prototype.forEach.call(arrayLike, (x) => console.log(x));
// 2
// 3
// 4</pre>





	<hr>



	<h1>array.map()</h1>

	<p>【map()】 方法创建一个新数组，这个新数组由《原数组中的每个元素都调用一次提供的函数后的返回值》组成。</p>



	<pre v-code:js class="nocopy">array.map(callbackFn)
array.map(callbackFn, thisArg)</pre>

	<dl>
		<dt>【callbackFn】</dt>
		<dd>
			<p>为数组中的每个元素执行的函数。它的返回值作为一个《元素》被添加为新数组中。该函数被调用时将传入以下参数：</p>
			<dl>
				<dt>【element】</dt>
				<dd>数组中正在处理的当前元素。</dd>
				<dt>【index】</dt>
				<dd>数组中正在处理的当前元素的索引。</dd>
				<dt>【array】</dt>
				<dd>调用了 【map()】 的数组本身。</dd>
			</dl>
		</dd>
		<dt>【thisArg】<span class="optional">可选</span></dt>
		<dd>执行 【callbackFn】 时用作 【this】 的值。</dd>
	</dl>

	<br>
	<p>【callbackFn】 仅在已分配值的数组索引处被调用。它《不会::会不会？》在稀疏数组中的空槽处被调用。</p>



	<p>由于 【map】 创建一个新数组，在没有使用返回的数组的情况下调用它是不恰当的；应该使用 【forEach】 或 【for...of】 作为代替。</p>


	<h6>求数组中每个元素的平方根</h6>
	<p>下面的代码创建了一个新数组，值为原数组中对应数字的平方根。</p>

	<pre v-code:js>const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots 现在是     [1, 2, 3]
// numbers 依旧是   [1, 4, 9]</pre>



	<h6>使用 map 重新格式化数组中的对象</h6>


	<p>以下代码使用一个包含对象的数组来重新创建一个格式化后的数组。</p>

	<pre v-code:js>const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => 《({ [key]: value })》);

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]</pre>


	<h6>在非数组对象上调用 map()</h6>

	<p>【map()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引。</p>

	<pre v-code:js>const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};

console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
// [ 4, 9, 16 ]</pre>


	<h6>在 NodeList 上通用地使用 map()</h6>

	<p>以下示例展示了如何去遍历通过 【querySelectorAll】 得到的对象集合。这是因为 【querySelectorAll】 返回的是一个对象集合 【NodeList】。</p>

	<p>在这种情况下，返回屏幕上所有选中 【option】 的值：</p>

	<pre v-code:js>const elems = document.querySelectorAll("select option:checked");
const values = Array.prototype.map.call(elems, ({ value }) => value);</pre>

	<p>一种更简单的方式是用 【Array.from()】 方法。</p>

	<h6>在稀疏数组上使用 map()</h6>

	<p>稀疏数组在使用 【map()】 方法后仍然是稀疏的。空槽的索引在返回的数组中仍然为空，并且回调函数不会对它们进行调用。</p>

	<pre v-code:js>console.log(
  [1, , 3].map((x, index) => {
    console.log(`Visit ${index}`);
    return x * 2;
  }),
);

// Visit 0
// Visit 2
// [2, empty, 6]</pre>



	<hr>

	<h1>array.filter()</h1>
	<p>【filter()】 方法创建《给定数组一部分的浅拷贝》，包含《通过测试》的所有元素。如果没有符合条件的元素则返回《空数组》。</p>

	<pre v-code:js class="nocopy">array.filter(callbackFn)
array.filter(callbackFn, thisArg)</pre>

	<dl>
		<dt>【callbackFn】</dt>
		<dd>
			<p>为数组中的每个元素执行的函数。它应该返回一个《a;;真值》以将元素保留在结果数组中，否则返回一个《a;;假值》。该函数被调用时将传入以下参数：</p>
			<dl>
				<dt>【element】</dt>
				<dd>数组中正在处理的当前元素。</dd>
				<dt>【index】</dt>
				<dd>数组中正在处理的当前元素的索引。</dd>
				<dt>【array】</dt>
				<dd>调用了 【filter()】 的数组本身。</dd>
			</dl>
		</dd>
		<dt>【thisArg】<span class="optional">可选</span></dt>
		<dd>执行 【callbackFn】 时用作 【this】 的值。</dd>
	</dl>

	<br>

	<p>【callbackFn】 仅对已分配值的数组索引调用。它不会对稀疏数组中的空槽调用。</p>




	<h6>筛选排除所有较小的值</h6>

	<p>以下示例使用 【filter()】 创建一个过滤数组，该数组删除了所有值小于 【10】 的元素。</p>


	<pre v-code:js>function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]</pre>


	<h6>找出数组中所有的素数</h6>
	<p>质数又称素数。一个大于1的自然数，除了1和它自身外，不能被其他自然数整除的数叫做质数；否则称为合数（规定1既不是质数也不是合数）。</p>
	<pre v-code:js>const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) 
    if (num % i === 0) return false;
  
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]</pre>


	<h6>在数组中搜索</h6>

	<p>下例使用 【filter()】 根据搜索条件来过滤数组内容。</p>

	<pre v-code:js>const fruits = ["apple", "banana", "grapes", "mango", "orange"];

function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']</pre>



	<h6>在稀疏数组上使用 filter()</h6>

	<p>【filter()】 将跳过空槽。</p>

	<pre v-code:js>console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]</pre>


	<h6>在非数组对象上调用 filter()</h6>

	<p>【filter()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引。</p>

	<pre v-code:js>const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};
console.log(Array.prototype.filter.call(arrayLike, (x) => x &lt;= "b"));
// [ 'a', 'b' ]</pre>

	<blockquote>filter()和map()不会改变原始数组。forEach()没有返回值。</blockquote>


	<br>
	<h3>案例：价格筛选</h3>

	<pre v-code:js>const goodsList = [
  {
    id: '4001172',
    name: '称心如意手摇咖啡磨豆机咖啡豆研磨机',
    price: '289.00',
    picture: 'xxx.jpg',
  },
  ...
]
      
function render(arr) {

  let str = ''
  arr.forEach(item => {
    const { name, picture, price } = item

    str += `
      &lt;div class="item"&gt;
        &lt;img src=${picture} alt=""&gt;
        &lt;p&gt; class="name"&gt;${name}&lt;/p&gt;
        &lt;p&gt; class="price"&gt;${price}&lt;/p&gt;
      &lt;/div&gt; `

  })

  document.querySelector('.list').innerHTML = [...]
}
​
render(goodsList)
​
​
document.querySelector('.filter').addEventListener('click', e => {
  const { tagName, dataset } = e.target

  if (tagName === 'A') {
    let arr = goodsList

    if (dataset.index === '1') {
      arr = goodsList.filter(item => item.price > 0 && item.price &lt;= 100)
    } else if (dataset.index === '2') {
      arr = goodsList.filter(item => item.price >= 100 && item.price &lt;= 300)
    } else if (dataset.index === '3') {
      arr = goodsList.filter(item => item.price >= 300)
    }
    
    render(arr)
  }
})</pre>
</template>