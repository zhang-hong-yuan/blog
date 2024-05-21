<template>
	<h1>展开运算符</h1>

	<p><strong>展开语法(Spread syntax)</strong>, 可以在《函数调用》/《数组构造》时，将数组表达式或者 【《string》】 在语法层面展开；还可以在构造字面量《对象》时，将对象表达式按
		【《key-value》】 的方式展开。
	</p>

	<pre v-code:js class="nocopy">// 函数调用：
myFunction(...iterableObj);

// 字面量数组构造或字符串：
[...iterableObj, '4', ...'hello', 6];

// 构造字面量对象时，进行克隆或者属性拷贝：
let objClone = { ...obj };</pre>

	<h6>在函数调用时使用展开语法</h6>

	<p>如果想将数组元素迭代为函数参数，一般使用【《Function.apply》】的方式进行调用。</p>

	<pre v-code:js>function myFunction(x, y, z) {}
var args = [0, 1, 2];
myFunction.apply(《null, args》);</pre>

	<p>使用展开语法，可以这样写：</p>

	<pre v-code:js>function myFunction(x, y, z) {}
var args = [0, 1, 2];
myFunction(《...args》);</pre>

	<p>所有参数都可以通过展开语法来传值：</p>

	<pre v-code:js>function myFunction(v, w, x, y, z) {}
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);</pre>


	<h6>构造字面量数组时使用展开语法</h6>

	<p>没有展开语法的时候，只能组合使用 【《push》】, 【《splice》】, 【《concat》】 等方法，来将已有数组元素变成新数组的一部分。有了展开语法，通过字面量方式，构造新数组会变得更简单、更优雅：</p>

	<pre v-code:js>var parts = ["shoulders", "knees"];
var lyrics = ["head", ...parts, "and", "toes"];
// ["head", "shoulders", "knees", "and", "toes"]</pre>


	<h6>数组拷贝 (copy)</h6>

	<pre v-code:js>var arr1 = [1, 2, 3];
var arr2 = 《[...arr1]》; // like 《arr1.slice()》
arr2.push(4);

// arr2 此时变成 [1, 2, 3, 4]
// arr1 不受影响</pre>

	<p><strong>提示：</strong>实际上，展开语法和 【《Object.assign()》】 行为一致，执行的都是《浅拷贝 (只遍历一层)》。如果想对多维数组进行深拷贝，下面的示例就有些问题了。</p>

	<pre v-code:js>var a = [[1], [2], [3]];
var b = [...a];
b.shift().shift(); // 1
// Now array a is affected as well: [[], [2], [3]]</pre>


	<h6>连接多个数组</h6>

	<p>【Array.concat】 函数常用于将一个数组连接到另一个数组的后面。如果不使用展开语法，代码可能是下面这样的：</p>

	<pre v-code:js>var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// 将 arr2 中所有元素附加到 arr1 后面并返回
var arr3 = 《arr1.concat(arr2)》;</pre>

	<p>使用展开语法：</p>

	<pre v-code:js>var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr3 = 《[...arr1, ...arr2]》;</pre>

	<p>【Array.unshift】 方法常用于《在数组的开头插入新元素/数组》。不使用展开语法，示例如下：</p>

	<pre v-code:js>var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// 将 arr2 中的元素插入到 arr1 的开头
Array.prototype.《unshift.apply(arr1, arr2)》;
// arr1 现在是 [3, 4, 5, 0, 1, 2]</pre>

	<p>如果使用展开语法，代码如下：</p>

	<pre v-code:js>var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
《arr1 = [...arr2, ...arr1]》;
// arr1 现在为 [3, 4, 5, 0, 1, 2]</pre>

	<blockquote><strong>注意：</strong>这里使用展开语法创建了一个新的 【arr1】 数组， 【Array.unshift】 方法则是《修改了原本存在的 【arr1】 数组》。</blockquote>


	<h6>构造字面量对象时使用展开语法</h6>

	<p>在对象上使用展开语法，其行为是《将已有对象的所有可枚举 (enumerable) 属性拷贝到新构造的对象中》。</p>

	<p>浅拷贝 (Shallow-cloning，不包含 prototype) 和对象合并，可以使用更简短的展开语法。而不必再使用 【Object.assign()】 方式。</p>

	<pre v-code:js>var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };

var clonedObj = 《{ ...obj1 }》;
// 克隆后的对象：{ foo: "bar", x: 42 }

var mergedObj = 《{ ...obj1, ...obj2 }》;
// 合并后的对象：{ foo: "baz", x: 42, y: 13 }</pre>

	<blockquote><strong>提示: </strong>【Object.assign()】 函数会触发 【setters】，而展开语法则不会。</blockquote>

	<p>展开运算符《不能::能不能》替换或者模拟 【Object.assign()】 函数：</p>

	<pre v-code:js>var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };
const merge = (...objects) => ( { ...objects } );

var mergedObj = merge(obj1, obj2);
// 《Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }》

var mergedObj = merge({}, obj1, obj2);
// 《Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }》</pre>

	<p>在这段代码中，展开操作符 (spread operator) 并没有按预期的方式执行：而是先将多个解构变为剩余参数 (rest parameter), 然后再将剩余参数展开为字面量对象。</p>

	<h2>剩余语法（剩余参数）</h2>

	<p>剩余语法 (Rest syntax)
		看起来和展开语法完全相同，不同点在于，剩余参数用于《将一个不定数量的参数表示为一个数组》。从某种意义上说，剩余语法与展开语法是《相反》的：展开语法将《数组展开为其中的各个元素》，而剩余语法则是将《多个元素收集起来并“凝聚”为单个元素》。
	</p>
</template>