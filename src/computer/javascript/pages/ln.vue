<template>
	<h1>array.slice()</h1>
	<p>【slice()】 方法返回一个《新的数组对象》，这一对象是一个由 【start】 和 【end】 决定的原数组的浅拷贝（包括 【start】，不包括 【end】），其中 【start】 和 【end】
		代表了数组元素的索引。原始数组《不会::会不会？》被改变。</p>

	<pre v-code:js class="nocopy">array.slice()
array.slice(start)
array.slice(start, end)
</pre>


	<dl>
		<dt>【start】<span class="optional">可选</span></dt>
		<dd>
			<p>提取起始处的索引，会转换为整数。</p>
			<ul>
				<li>如果索引是负数，则从数组末尾开始计算——如果 【start &lt; 0】，则使用 【start + array.length】。</li>
				<li>如果 【start &lt; -array.length】 或者省略了 【start】，则使用 【《0》】。</li>
				<li>如果 【start >= array.length】，则《不提取任何元素》。</li>
			</ul>
		</dd>


		<dt>【end】<span class="optional">可选</span></dt>
		<dd>
			<p>提取终止处的索引，会转换为整数。【slice()】 会提取到但不包括 【end】 的位置。</p>
			<ul>
				<li>如果索引是负数，则从数组末尾开始计算——如果 【end &lt; 0】，则使用 【end + array.length】。</li>
				<li>如果 【end &lt; -array.length】，则使用 0。</li>
				<li>如果 【end >= array.length】 或者省略了 【end】，则使用 【《array.length》】，提取所有元素直到末尾。</li>
				<li>如果 【end】 在规范化后小于或等于 【start】，则《不提取任何元素》。</li>
			</ul>
		</dd>
	</dl>

	<br>

	<p>【slice()】 方法会保留空槽。如果被切片的部分是稀疏的，则返回的数组也是稀疏的。</p>


	<h6>使用 slice</h6>

	<p>在下例中，【slice】 从 【myCar】 创建了一个新数组 【newCar】。两个数组都包含了一个 【myHonda】 对象的引用。当 【myHonda】 的 【color】 属性改变为
		【purple】，则两个数组中的对应元素都会随之改变。</p>

	<pre v-code:js>// 使用 slice 方法从 myCar 创建一个 newCar。
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
const newCar = myCar.slice(0, 2);

console.log("myCar =", myCar);
console.log("newCar =", newCar);
console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);

// 改变 myHonda 对象的 color。
myHonda.color = "purple";
console.log("The new color of my Honda is", myHonda.color);

console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);</pre>

	<p>上述代码输出：</p>

	<pre v-code:js>myCar = [
  { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } },
  2,
  'cherry condition',
  'purchased 1997'
]
newCar = [ 
  { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } },
  2
]

myCar[0].color = red
newCar[0].color = red

The new color of my Honda is purple
myCar[0].color = purple
newCar[0].color = purple
</pre>

	<h6>在类数组对象上调用 slice()</h6>

	<p>【slice()】 方法会读取 【this】 对象的 【length】 属性，然后从 【start】 到 【end】 读取整数键属性，并将它们定义在一个新创建的数组中。</p>


	<pre v-code:js>const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.slice.call(arrayLike, 1, 3));
// [ 3, 4 ]</pre>

	<h6>在稀疏数组上使用 slice()</h6>

	<p>如果源数组是稀疏数组，【slice()】 方法返回的数组也会是稀疏数组。</p>

	<pre v-code:js>console.log([1, 2, , 4, 5].slice(1, 4)); // [2, empty, 4]</pre>



	<hr>
	<h1>array.splice()</h1>

	<p>【splice()】方法用于《a;;添加》或《a;;删除》数组中的元素。《会改变::是否改变？》原数组。返回一个《包含了删除的元素的数组》。</p>

	<ul>
		<li>如果只移除一个元素，则返回《一个元素的数组》。</li>
		<li>如果没有删除任何元素，则返回《一个空数组》。</li>
	</ul>

	<pre v-code:js class="nocopy">array.splice(start)
array.splice(start, deleteCount)
array.splice(start, deleteCount, item1)
array.splice(start, deleteCount, item1, item2, itemN)
</pre>
	<dl>
		<dt>【start】</dt>
		<dd>
			<p>从 0 开始计算的索引，表示《要开始改变数组》的位置，它会被转换成整数。</p>
			<ul>
				<li>负索引从数组末尾开始计算——如果 【start &lt; 0】，使用 【start + array.length】。</li>
				<li>如果 【start &lt; -array.length】，使用 0。</li>
				<li>如果 【start >= array.length】，则不会删除任何元素，但是该方法会表现为添加元素的函数，添加所提供的那些元素。</li>
				<li>如果 【start】 被省略了（即调用 【splice()】 时不传递参数），则不会删除任何元素。这与传递 【undefined】 不同，后者会被转换为 0。</li>
			</ul>
		</dd>
		<dt>【deleteCount】<span class="optional">可选</span></dt>
		<dd>
			<p>一个整数，表示《数组中要从 【start】 开始删除的元素数量》。</p>
			<ul>
				<li>如果省略了 【deleteCount】，或者大于或等于由 【start】 指定的位置到数组末尾的元素数量，那么《从 【start】 到数组末尾的所有元素将被删除》。但是，如果要传递任何 【itemN】 参数，则应向
					【deleteCount】
					传递 【《Infinity》】 值，以删除 【start】 之后的所有元素，因为显式的 【undefined】 会转换为 【《0》】。</li>
				<li>如果 【deleteCount】 是 【0】 或者负数，则《不会移除任何元素》。在这种情况下，应该至少指定一个新元素。</li>
			</ul>
		</dd>
		<dt>【item1, item2, itemN】<span class="optional">可选</span></dt>
		<dd>从 【start】 开始要加入到数组中的元素。如果不指定任何元素，【splice()】 将只从数组中删除元素。</dd>
	</dl>

	<br>

	<p>【splice()】 方法是一个修改方法。它可能会更改 【this】 的内容。如果指定的要插入的元素数量与要删除的元素数量不同，数组的 【length】 也将会更改。</p>

	<p>如果删除的部分是稀疏的，则 【splice()】 返回的数组也是稀疏的，对应的索引为空槽。</p>

	<p>要创建一个删除和/或替换部分内容而不改变原数组的新数组，请使用 【《toSpliced()》】。要访问数组的一部分而不修改它，参见 【《slice()》】。</p>

	<h6>示例</h6>

	<p>移除索引 2 之前的 0（零）个元素，并插入“drum”</p>

	<pre v-code:js>const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

// 运算后的 myFish 是 ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed 是 []，没有元素被删除</pre>

	<p>移除索引 2 之前的 0（零）个元素，并插入“drum”和“guitar”</p>

	<pre v-code:js>const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum", "guitar");

// 运算后的 myFish 是 ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed 是 []，没有元素被删除</pre>


	<p>在索引 3 处移除 1 个元素</p>

	<pre v-code:js>const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed = myFish.splice(3, 1);

// 运算后的 myFish 是 ["angel", "clown", "drum", "sturgeon"]
// removed 是 ["mandarin"]</pre>


	<p>在索引 2 处移除 1 个元素，并插入“trumpet”</p>


	<pre v-code:js>const myFish = ["angel", "clown", "drum", "sturgeon"];
const removed = myFish.splice(2, 1, "trumpet");

// 运算后的 myFish 是 ["angel", "clown", "trumpet", "sturgeon"]
// removed 是 ["drum"]</pre>


	<p>从索引 0 处移除 2 个元素，并插入“parrot”、“anemone”和“blue”</p>

	<pre v-code:js>const myFish = ["angel", "clown", "trumpet", "sturgeon"];
const removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// 运算后的 myFish 是 ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed 是 ["angel", "clown"]</pre>


	<p>从索引 2 处开始移除 2 个元素</p>

	<pre v-code:js>const myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
const removed = myFish.splice(2, 2);

// 运算后的 myFish 是 ["parrot", "anemone", "sturgeon"]
// removed 是 ["blue", "trumpet"]</pre>

	<p>从索引 -2 处移除 1 个元素</p>

	<pre v-code:js>const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(-2, 1);

// 运算后的 myFish 是 ["angel", "clown", "sturgeon"]
// removed 是 ["mandarin"]</pre>

	<p>从索引 2 开始删除所有元素</p>


	<pre v-code:js>const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2);

// 运算后的 myFish 是 ["angel", "clown"]
// removed 是 ["mandarin", "sturgeon"]</pre>



	<h6>在稀疏数组中使用 splice()</h6>

	<p>【splice()】 方法保留了数组的稀疏性。</p>

	<pre v-code:js>const arr = [1, , 3, 4, , 6];
console.log(arr.splice(1, 2)); // [empty, 3]
console.log(arr); // [1, 4, empty, 6]</pre>


	<h6>在非数组对象中使用 splice()</h6>

	<p>【splice()】 方法读取 【this】 的 【length】 属性。然后，它根据需要更新整数键属性和 【length】 属性。</p>

	<pre v-code:js>const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.splice.call(arrayLike, 0, 1, 2, 3));
// [ 5 ]
console.log(arrayLike);
// { '0': 2, '1': 3, '3': 4, length: 4, unrelated: 'foo' }</pre>


	<hr>


	<h1>array.toSpliced()</h1>

	<p>Array 实例的 【toSpliced()】 方法是 【splice()】 方法的复制版本。它返回《一个新数组》，由 【start】 之前的所有元素、【item1】、【item2】、...、【itemN】，以及 【start +
		deleteCount】
		之后的所有元素组成。</p>
	<pre v-code:js class="nocopy">array.toSpliced(start)
array.toSpliced(start, deleteCount)
array.toSpliced(start, deleteCount, item1)
array.toSpliced(start, deleteCount, item1, item2, itemN)
</pre>

	<blockquote>有关 【toSpliced()】 参数的更多信息，请参阅 【splice()】。</blockquote>

	<p>它返回一个新数组，而不是修改原始数组。因此，此方法不会返回已删除的元素。</p>

	<p>【toSpliced()】 方法与 【splice()】
		类似，可以同时完成多个操作：在数组中给定的索引开始移除指定数量的元素，然后在相同的索引处插入给定的元素。但是，它返回一个新数组，而不是修改原始数组。因此，此方法不会返回已删除的元素。</p>

	<p>【toSpliced()】 方法不会产生稀疏数组。如果原始数组是稀疏的，在新数组中空槽将会被替换成 【undefined】。</p>


	<h6>删除、添加和替换元素</h6>

	<p>你可以通过使用 【toSpliced()】 来删除、添加和替换数组中的元素，并生成一个新的数组，这比使用 【slice()】 和 【concat()】 更高效。</p>


	<pre v-code:js>const months = ["Jan", "Mar", "Apr", "May"];

// 在索引 1 处添加一个元素
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// 从第 2 个索引开始删除两个元素
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// 在索引 1 处用两个新元素替换一个元素
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// 原数组不会被修改
console.log(months); // ["Jan", "Mar", "Apr", "May"]</pre>

	<h6>在稀疏数组上使用 toSpliced()</h6>

	<p>【toSpliced()】 方法总是会生成一个密集的数组。</p>

	<pre v-code:js>const arr = [1, , 3, 4, , 6];
console.log(arr.toSpliced(1, 2)); // [1, 4, undefined, 6]</pre>

	<h6>对非数组对象调用 toSpliced()</h6>

	<p>【toSpliced()】 方法将会读取 【this】 的 【length】 属性。然后，它读取所需的整数键属性并将其写入新数组。</p>

	<pre v-code:js>const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};

console.log(Array.prototype.toSpliced.call(arrayLike, 0, 1, 2, 3));
// [2, 3, undefined, 4]</pre>
</template>