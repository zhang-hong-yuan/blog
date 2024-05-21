<template>
	<h1>array.join()</h1>

	<p>【join()】 方法将一个数组（或一个类数组对象）的所有元素连接成一个《a;;字符串》并返回这个《a;;字符串》，用《b;;逗号》或《b;;指定的分隔符字符串》分隔。</p>
	<p>如果数组只有一个元素，那么将返回该元素而《不使用::是否使用？》分隔符。</p>

	<pre v-code:js class="nocopy">array.join()
array.join(separator)</pre>

	<dl>
		<dt>【separator】<span class="optional">可选</span></dt>
		<dd>
			<p>指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为《字符串》。</p>
			<ul>
				<li>如果省略该参数，则使用《逗号【,】》作为分隔符。</li>
				<li>如果 【separator】 是空字符串【""】，则所有元素之间都《没有任何字符》。</li>
			</ul>
		</dd>
	</dl>

	<br>

	<p>如果一个元素是 【undefined】 或 【null】，它将被转换为《空字符串》，而不是字符串 【"undefined"】 或 【"null"】。</p>

	<p>当在稀疏数组上使用时，【join()】 方法迭代空槽，就像它们的值为 【《undefined》】 一样。</p>



	<h6>使用不同的方式连接数组</h6>

	<pre v-code:js>const a = ["Wind", "Water", "Fire"];
a.join();      // 'Wind,Water,Fire'
a.join(", ");  // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
a.join("");    // 'WindWaterFire'</pre>


	<h6>在稀疏数组上使用 join()</h6>

	<pre v-code:js>console.log([1, , 3].join());          // 《c;;'1,,3'》
console.log([1, undefined, 3].join()); // 《c;;'1,,3'》</pre>


	<h6>在非数组对象上调用 join()</h6>

	<p>【join()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引。</p>

	<pre v-code:js>const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};

console.log(Array.prototype.join.call(arrayLike));      // 2,3,4
console.log(Array.prototype.join.call(arrayLike, ".")); // 2.3.4</pre>


	<hr>


	<h1>array.toString()</h1>

	<p>【toString()】 方法返回一个《字符串》，表示指定的数组及其元素。</p>

	<pre v-code:js class="nocopy">array.toString()</pre>

	<p>当数组需要被表示为《文本》值，或者当数组在字符串拼接中被引用时，JavaScript 会自动调用 【toString()】 方法。</p>

	<p>Array 对象覆盖了 Object 的 【toString()】 方法。数组的 【toString()】 方法实际上在内部调用了 【《join()》】 方法来拼接数组并返回一个包含所有数组元素的字符串，元素之间用《逗号》分隔。如果
		【join()】 方法不可用或者不是函数，则会使用 【Object.toString()】 来代替，并返回 【《[object Array]》】。</p>

	<pre v-code:js>const arr = [];
arr.join = 1; // 将 `join` 重新赋值为非函数的值
console.log(arr.toString()); // 《[object Array]》

console.log(Array.prototype.toString.call({ join: () => 1 })); // 《1》</pre>


	<h6>示例</h6>

	<pre v-code:js>const array = [1, 2, "a", "1a"];
console.log(array.toString()); // 《"1,2,a,1a"》</pre>



	<h6>在稀疏数组中使用 toString()</h6>

	<p>与 【join()】 的行为一致，【toString()】 将空槽视为 【undefined】 并生成一个额外的分隔符：</p>

	<pre v-code:js>console.log([1, , 3].toString()); // 《'1,,3'》</pre>


	<h6>在非数组对象中使用 toString()</h6>

	<p>【toString()】 是通用的。它期望 【this】 具有 【join()】 方法；如果不存在，则使用 【Object.toString()】。</p>

	<pre v-code:js>console.log(Array.prototype.toString.call({ join: () => 1 }));         // 1; 一个数字
console.log(Array.prototype.toString.call({ join: () => undefined })); // undefined
console.log(Array.prototype.toString.call({ join: "not function" }));  // "[object Object]"</pre>
</template>