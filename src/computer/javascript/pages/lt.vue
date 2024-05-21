<template>
	<h1>array.reduce()</h1>

	<p>【reduce()】 方法对数组中的每个元素按序执行一个提供的 【reducer】 函数，每一次运行 【reducer】 会将《先前元素的计算结果》作为参数传入，最后将其结果汇总为《单个返回值》。</p>

	<p>第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递《初始值》。否则，数组索引为 0 的元素将被用作初始值，迭代器将从第《二》个元素开始执行。
	</p>



	<pre v-code:js class="nocopy">array.reduce(callbackFn)
array.reduce(callbackFn, initialValue)</pre>

	<dl>
		<dt>【callbackFn】</dt>
		<dd>
			<p>为数组中每个元素执行的函数。其返回值将作为下一次调用 【callbackFn】 时的 【《accumulator》】 参数。对于最后一次调用，返回值将作为 【《reduce()》】 的返回值。该函数被调用时将传入以下参数：
			</p>
			<dl>
				<dt>【accumulator】</dt>
				<dd>上一次调用 【callbackFn】 的结果。在第一次调用时，如果指定了 【initialValue】 则为指定的值，否则为 【《array[0]》】 的值。</dd>

				<dt>【currentValue】</dt>
				<dd>当前元素的值。在第一次调用时，如果指定了 【initialValue】，则为 【《a;;array[0]》】 的值，否则为 【《a;;array[1]》】。</dd>

				<dt>【currentIndex】</dt>
				<dd>【currentValue】 在数组中的索引位置。在第一次调用时，如果指定了 【initialValue】 则为 【《b;;0》】，否则为 【《b;;1》】。</dd>

				<dt>【array】</dt>
				<dd>调用了 【reduce()】 的数组本身。</dd>
			</dl>
		</dd>
		<dt>【initialValue】<span class="optional">可选</span></dt>
		<dd>
			<p>第一次调用回调时初始化 【《accumulator》】 的值。</p>
			<ul>
				<li>如果指定了 【initialValue】，则 【callbackFn】 从数组中的第一个值作为 【《currentValue》】 开始执行。</li>
				<li>如果没有指定 【initialValue】，则 【accumulator】 初始化为数组中的第一个值，并且 【callbackFn】 从数组中的第二个值作为 【currentValue】
					开始执行。在这种情况下，如果数组为空（没有第一个值可以作为 【accumulator】 返回），则会抛出错误。</li>
			</ul>
		</dd>
	</dl>
	<br>

	<p>【reduce()】 方法是一个迭代方法。它按升序对数组中的所有元素运行一个【“reducer”】回调函数，并将它们累积到一个单一的值中。每次调用时，【callbackFn】 的返回值都作为 【《accumulator》】
		参数传递到下一次调用中。【accumulator】 的最终值（也就是在数组的最后一次迭代中从 【callbackFn】 返回的值）将作为 【reduce()】 的返回值。</p>


	<p>【callbackFn】 仅对已分配值的数组索引进行调用。不会对稀疏数组中的空槽进行调用。</p>

	<p>与其他迭代方法不同，【reduce()】 不接受 【thisArg】 参数。【callbackFn】 调用时始终以 【undefined】 作为 【this】 的值，如果 【callbackFn】 未处于严格模式，则该值将被替换为
		【globalThis】。</p>


	<p>如果数组只有一个元素（无论位置如何）且未提供 【initialValue】，或者提供了 【initialValue】 但数组为空，则将返回《该单个值》，而不调用 【callbackFn】。</p>

	<p>如果提供了 【initialValue】 且数组不为空，则 【reduce】 方法将始终从索引 0 开始调用回调函数。</p>


	<p>如果未提供 【initialValue】，则对于长度大于 1、等于 1 和 0 的数组，【reduce】 方法将有不同的表现，如以下示例所示：</p>

	<pre v-code:js>const getMax = (a, b) => Math.max(a, b);

// 从索引 0 开始为数组中的每个元素调用回调函数
[1, 100].reduce(getMax, 50); // 《100》
[50].reduce(getMax, 10);     // 《50》

// 仅为索引 1 处的元素调用回调函数
[1, 100].reduce(getMax); // 《100》

// 不调用回调函数
[50].reduce(getMax);  // 《50》
[].reduce(getMax, 1); // 《1》

[].reduce(getMax); // TypeError</pre>


	<h6>无初始值时 reduce() 如何运行</h6>

	<pre v-code:js>const array = [1, 2, 3, 4, 5];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);</pre>

	<p>回调函数会被调用四次，每次调用的参数和返回值如下表：</p>

	<figure>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>【accumulator】</th>
					<th>【currentValue】</th>
					<th>【index】</th>
					<th>返回值</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>第一次调用</td>
					<td>【1】</td>
					<td>【2】</td>
					<td>【1】</td>
					<td>【3】</td>
				</tr>
				<tr>
					<td>第二次调用</td>
					<td>【3】</td>
					<td>【3】</td>
					<td>【2】</td>
					<td>【6】</td>
				</tr>
				<tr>
					<td>第三次调用</td>
					<td>【6】</td>
					<td>【4】</td>
					<td>【3】</td>
					<td>【10】</td>
				</tr>
				<tr>
					<td>第四次调用</td>
					<td>【10】</td>
					<td>【5】</td>
					<td>【4】</td>
					<td>【15】</td>
				</tr>
			</tbody>
		</table>
	</figure>

	<p>【array】 参数在整个过程中始终不会改变——它始终是 【[1, 2, 3, 4, 5]】。【reduce()】 返回的值将是最后一次回调返回值（【《15》】）。</p>


	<h6>有初始值时 reduce() 如何运行</h6>

	<p>以相同的算法 【reduce】 同一个数组，但提供 10 作为 【initialValue】：</p>

	<pre v-code:js>[1, 2, 3, 4, 5].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10,
)</pre>

	<p>回调函数会被调用五次，每次调用的参数和返回值如下表：</p>


	<figure>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>【accumulator】</th>
					<th>【currentValue】</th>
					<th>【index】</th>
					<th>返回值</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>第一次调用</td>
					<td>【10】</td>
					<td>【1】</td>
					<td>【0】</td>
					<td>【11】</td>
				</tr>
				<tr>
					<td>第二次调用</td>
					<td>【11】</td>
					<td>【2】</td>
					<td>【1】</td>
					<td>【13】</td>
				</tr>
				<tr>
					<td>第三次调用</td>
					<td>【13】</td>
					<td>【3】</td>
					<td>【2】</td>
					<td>【16】</td>
				</tr>
				<tr>
					<td>第四次调用</td>
					<td>【16】</td>
					<td>【4】</td>
					<td>【3】</td>
					<td>【20】</td>
				</tr>
				<tr>
					<td>第五次调用</td>
					<td>【20】</td>
					<td>【5】</td>
					<td>【4】</td>
					<td>【25】</td>
				</tr>
			</tbody>
		</table>
	</figure>

	<p>这种情况下 【reduce()】 返回的值是 【《25》】。</p>


	<h6>案例：数组求和</h6>
	<pre v-code:js>Array.prototype.sum = function () {
  return this.reduce((total, item) => 《total + item》, 0)
}
​
console.log([1, 2, 3].sum())</pre>



	<h6>求对象数组中值的总和</h6>

	<p>为了对包含在对象数组中的值进行求和，必须提供一个 【initialValue】，以便每个项都通过回调函数处理。</p>

	<pre v-code:js>const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => 《accumulator + currentValue.x》,
  0,
);

console.log(sum); // 6</pre>



	<h6>展平嵌套数组</h6>

	<pre v-code:js>const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accumulator, currentValue) => 《accumulator.concat(currentValue)》, []);

console.log(flattened)
// ➤(6) [0, 1, 2, 3, 4, 5]</pre>


	<h6>统计对象中值的出现次数</h6>

	<pre v-code:js>const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"]

const countedNames = names.reduce((allNames, name) => {
  const currCount = 《allNames[name] ?? 0》
  return {
    《...allNames,》
    《[name]: currCount + 1,》
  }
}, {})

console.log(countedNames)
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }</pre>


	<h6>按属性对对象进行分组</h6>
	<p>使用【Map.groupBy()】可以达到相同的效果。</p>

	<pre v-code:js>const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    const curGroup = acc[key] ?? [];

    return { 《...acc》, 《[key]》: 《[...curGroup, obj]》 };
  }, {});
}

const groupedPeople = groupBy(people, "age");
console.log(groupedPeople);
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [
//     { name: 'Alice', age: 21 }
//   ]
// }</pre>

	<h6>使用展开语法和 initialValue 连接包含在对象数组中的数组</h6>

	<pre v-code:js>// friends——一个对象数组，其中对象字段“books”是最喜欢的书的列表
const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  }, {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  }, {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];

// allbooks——列表，其中包含所有朋友的书籍和 initialValue 中包含的附加列表
const allbooks = friends.reduce(
  (accumulator, currentValue) => [《...accumulator》, 《...currentValue.books》],
  ["Alphabet"],
);
console.log(allbooks);
// [
//   'Alphabet', 
//   'Bible', 'Harry Potter', 
//   'War and peace', 'Romeo and Juliet', 
//   'The Lord of the Rings', 'The Shining'
// ]
</pre>


	<h6>数组去重</h6>

	<p>可以使用 【Set】 和 【Array.from()】 来实现相同的效果，如 【const arrayWithNoDuplicates = 《Array.from(new Set(myArray))》】，并且性能更好。</p>


	<pre v-code:js>const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"]
	
const myArrayWithNoDuplicates = myArray.reduce((accumulator, currentValue) => {

  if (accumulator.includes(currentValue)) return accumulator
  return 《[...accumulator, currentValue]》

}, []);

console.log(myArrayWithNoDuplicates)</pre>


	<h6>使用 reduce() 来替代 .filter().map()</h6>

	<p>使用 【filter()】 和 【map()】 会遍历数组两次，但是可以使用 【reduce()】 只遍历一次并实现相同的效果，从而更高效。</p>


	<pre v-code:js>const numbers = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    return 《[...accumulator, doubled]》;
  }
  return 《accumulator》;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]</pre>


	<h6>在稀疏数组中使用 reduce()</h6>

	<p>【reduce()】 会《跳过》稀疏数组中缺失的元素，但不会跳过 【《undefined》】 值。</p>

	<pre v-code:js>console.log([1, 2, , 4].reduce((a, b) => a + b));          // 《c;;7》
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // 《c;;NaN》</pre>



	<h6>在非数组对象上调用 reduce()</h6>

	<p>【reduce()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引。</p>
	<pre v-code:js>const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};

console.log(Array.prototype.reduce.call(arrayLike, (x, y) => x + y)); // 9</pre>


	<hr>
	<h1>array.reduceRight()</h1>
	<p>【reduceRight()】 方法对累加器（【accumulator】）和数组的每个值（按从右到左的顺序）应用一个函数，并使其成为单个值。</p>

	<pre v-code:js class="nocopy">array.reduceRight(callbackFn)
array.reduceRight(callbackFn, initialValue)</pre>

	<dl>
		<dt>【callbackFn】</dt>
		<dd>
			为数组中的每个元素执行的函数。其返回值将作为下一次调用 【callbackFn】 时的 【accumulator】 参数。对于最后一次调用，返回值将成为 【reduceRight()】 的返回值。该函数被调用时将传入以下参数：

			<dl>
				<dt>【accumulator】</dt>
				<dd>上一次调用 【callbackFn】 的结果。在第一次调用时，如果指定了 【initialValue】 则为指定的值，否则为数组最后一个元素的值。</dd>

				<dt>【currentValue】</dt>
				<dd>数组中当前正在处理的元素。</dd>

				<dt>【index】</dt>
				<dd>正在处理的元素在数组中的索引。</dd>

				<dt>【array】</dt>
				<dd>调用了 【reduceRight()】 的数组本身。</dd>
			</dl>
		</dd>

		<dt>【initialValue】<span class="optional">可选</span></dt>
		<dd>首次调用 【callbackFn】 时累加器的值。如果不提供初始值，则将使用数组中的最后一个元素，并在迭代时跳过它。没有初始值的情况下，在空数组上调用 【reduceRight()】 会产生 【TypeError】。</dd>
	</dl>


	<h6>reduce 与 reduceRight 之间的区别</h6>

	<pre v-code:js>const a = ["1", "2", "3", "4", "5"];
const left = a.reduce((prev, cur) => prev + cur);
const right = a.reduceRight((prev, cur) => prev + cur);

console.log(left);  // 《d;;"12345"》
console.log(right); // 《d;;"54321"》</pre>




	<h6>案例：购物车</h6>
	<pre v-code:html>&lt;div class="list"&gt;
​
&lt;/div&gt;

&lt;div class="total"&gt;
  &lt;div&gt;合计：&lt;span class="amount"&gt;1000.00&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;
​
&lt;script&gt;
  const goodsList = [
    {
      id: '4001649',
      name: '大师监制龙泉青瓷茶叶罐',
      price: 139,
      picture: 'https://yanxuan-item.nosdn.127.net/4356c9fc150753775fe56b465314f1eb.png',
      count: 1,
      spec: { size: '小号', color: '紫色' },
      gift: '50g茶叶,清洗球,宝马, 奔驰'
    },
    ...
  ]

  document.querySelector('.list').innerHTML = goodsList.map(item =&gt; {
    const { picture, name, count, price, spec, gift } = item

    const text = Object.values(spec).join('/')
    const subTotal = ((price * 100 * count) / 100).toFixed(2)
    const str = gift ? gift.split(',').map(item =&gt; `&lt;span class="tag"&gt;【赠品】${item}&lt;/span&gt; `).join('') : ''
		
    return `&lt;div class="item"&gt;
                &lt;img src=${picture} alt=""&gt;
                &lt;p class="name"&gt;${name} ${str} &lt;/p&gt;
                &lt;p class="spec"&gt;${text} &lt;/p&gt;
                &lt;p class="price"&gt;${price.toFixed(2)}&lt;/p&gt;
                &lt;p class="count"&gt;x${count}&lt;/p&gt;
                &lt;p class="sub-total"&gt;${subTotal}&lt;/p&gt;
            &lt;/div&gt;`
  }).join('')

  // 合计为：
  const total = goodsList.reduce((prev, item) =&gt; prev + (item.price * 100 * item.count) / 100, 0)
  document.querySelector('.amount').innerHTML = total.toFixed(2)
&lt;/script&gt;</pre>
</template>