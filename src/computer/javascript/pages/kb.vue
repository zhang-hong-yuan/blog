<template>
	<h1>map.get()</h1>

	<p>Map 实例的 【get()】 方法返回《与指定的键 key 关联的值》，若不存在关联的值，则返回 【《undefined》】。</p>

	<pre v-code:js class="nocopy">map.get(key)</pre>

	<dl>
		<dt>【key】</dt>
		<dd>从 Map 对象返回的元素的键。</dd>
	</dl>

	<h6>使用 get()</h6>

	<pre v-code:js>const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.get("bar")); // 《"foo"》
console.log(myMap.get("baz")); // 《undefined》
</pre>


	<h6>使用 get() 获取对对象的引用</h6>

	<pre v-code:js>const arr = [];
const myMap = new Map();
myMap.set("bar", arr);

myMap.get("bar").push("foo");

console.log(arr)              // 《a;;["foo"]》
console.log(myMap.get("bar")) // 《a;;["foo"]》
</pre>

	<h6>对同一对象的引用</h6>

	<pre v-code:js>const myMap = new Map();

const keyStr = "a string";
const keyObj = {};
const keyFun = function () {};

// 添加键
myMap.set(keyStr, "和键'string'关联的值");
myMap.set(keyObj, "和键 keyObj 关联的值");
myMap.set(keyFun, "和键 keyFun 关联的值");

console.log(myMap.size); // 3

// 读取值
console.log(myMap.get(keyStr)); // "和键'string'关联的值"
console.log(myMap.get(keyObj)); // "和键 keyObj 关联的值"
console.log(myMap.get(keyFun)); // "和键 keyFun 关联的值"

console.log(myMap.get("a string"));     // 《"和键'string'关联的值"，因为 keyStr === 'a string'》
console.log(myMap.get({}));             // 《undefined，因为 keyObj !== {}》
console.log(myMap.get(function () {})); // 《undefined，因为 keyFun !== function () {}》
</pre>
	<hr>


	<h1>map.set()</h1>

	<p>Map 实例的 【set()】 方法会向 Map 对象《b;;添加》或《b;;更新》一个指定的键值对，并返回 《Map 对象》。</p>

	<pre v-code:js class="nocopy">map.set(key, value)</pre>

	<dl>
		<dt>【key】</dt>
		<dd>要添加到 Map 对象的元素的<em>《c;;键》</em>。该值可以是任何 JavaScript 类型（任何原始值或任何类型的 JavaScript 对象）。</dd>

		<dt>【value】</dt>
		<dd>要添加到 Map 对象的元素的<em>《c;;值》</em>。该值可以是任何 JavaScript 类型（任何原始值或任何类型的 JavaScript 对象）。</dd>
	</dl>



	<h3>设置对象属性</h3>



	<p>设置对象属性同样适用于 Map 对象，但容易造成困扰。即，以下的代码能够正常运行（但不推荐）：</p>


	<pre v-code:js class="error">const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // 《Map { bla: 'blaa', bla2: 'blaaa2' }》</pre>


	<p>但这种设置属性的方式不会改变 Map 的数据结构。它使用的是通用对象的特性。【'bla'】 的值未被存储在 Map 中，无法被查询到。其他的对这一数据的操作也会失败：</p>


	<pre v-code:js class="error">wrongMap.has("bla");    // 《d;;false》
wrongMap.delete("bla"); // 《d;;false》

console.log(wrongMap);  // Map { bla: 'blaa', bla2: 'blaaa2' }</pre>


	<p>正确的存储数据到 Map 中的方式是使用 【set(key, value)】 方法。</p>

	<pre v-code:js class="right">const contacts = new Map();

contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true

contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });

contacts.get("Jessie");     // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie");  // true

console.log(contacts.size); // 《1》
</pre>



	<h6>使用 set()</h6>

	<pre v-code:js>const myMap = new Map();

// 将新元素添加到 Map 对象
myMap.set("bar", "foo");
myMap.set(1, "foobar");

// 在 Map 对象中更新某个元素的值
myMap.set("bar", "baz");
</pre>

	<h6>链式使用 set()</h6>
	<p>因为 【set()】 方法返回 《Map 对象本身》，所以可以像下面这样链式调用它：</p>

	<pre v-code:js>// 链式添加元素
myMap.set("bar", "foo").set(1, "foobar").set(2, "baz");
</pre>


	<h6>将 NaN 作为 Map 的键</h6>

	<p>【NaN】 也可以作为键。虽然 【NaN】 与任何值甚至与自己都不相等（【NaN !== NaN】 返回 【true】），但是因为所有的 【NaN】 的值都是无法区分的，所以下面的例子成立：</p>

	<pre v-code:js>const myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN); // "not a number"

const otherNaN = Number("foo");
myMap.get(otherNaN); // 《"not a number"》
</pre>




	<hr>

	<h1>map.has()</h1>

	<p>Map 实例的 【has()】 方法返回一个《布尔值》，指示具有指定键的元素是否《存在》。</p>

	<pre v-code:js class="nocopy">map.has(key)</pre>

	<dl>
		<dt>【key】</dt>
		<dd>用于测试 Map 对象中是否存在的元素的键。</dd>
	</dl>


	<h6>使用 has()</h6>

	<pre v-code:js>const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.has("bar")); // 《e;;true》
console.log(myMap.has("baz")); // 《e;;false》
</pre>
</template>