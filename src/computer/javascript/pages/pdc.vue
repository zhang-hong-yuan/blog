<template>
	<h1>function.bind()</h1>


	<p>【Function】 实例的 【bind()】 方法《创建一个新函数》，当调用该新函数时，它会调用原始函数并将其 【《this》】
		关键字设置为给定的值，同时，还可以传入一系列指定的参数，这些参数会插入到调用新函数时传入的参数的《前面::前面还是后面》。</p>

	<p>【bind()】 方法《不会::会不会》调用函数。但是能改变函数内部 【《this》】 指向。</p>
	<p>返回由指定的 【this】 值和初始化参数改造的原函数拷贝(新函数)。</p>
	<pre v-code:js class="nocopy">func.bind(thisArg)
func.bind(thisArg, arg1)
func.bind(thisArg, arg1, arg2)
func.bind(thisArg, arg1, arg2, /* …, */ argN)</pre>


	<dl>
		<dt>【thisArg】</dt>
		<dd>在调用绑定函数时，作为 【《this》】 参数传入目标函数 【func】 的值。如果函数不在严格模式下，【null】 和 【undefined】 会被替换为全局对象，并且原始值会被转换为对象。如果使用 【new】
			运算符构造绑定函数，则忽略该值。</dd>
		<dt>【arg1, …, argN】<span class="optional">可选</span></dt>
		<dd>在调用 【func】 时，插入到传入绑定函数的参数前的参数。</dd>
	</dl>
	<br>

	<p>【bind()】 函数创建一个新的<strong>《绑定函数(bound function)》</strong>。调用绑定函数通常会执行其所包装的函数，也称为<strong>《目标函数(target
			function)》</strong>。绑定函数将绑定时传入的参数（包括 【this】 的值和前几个参数）提前存储为其内部状态。而不是在实际调用时传入。通常情况下，可以将 【const boundFn =
		fn.《a;;bind》(thisArg, arg1, arg2)】 和 【const boundFn = (...restArgs) => fn.《a;;call》(thisArg, arg1, arg2, ...restArgs)】
		构建的绑定函数的调用效果视为等效（但就构建 【boundFn】 的过程而言，不是二者等效的）。</p>


	<p>绑定函数可以通过调用 【boundFn.bind(thisArg, /* more args */)】 进一步进行绑定，从而创建另一个绑定函数 【boundFn2】。新绑定的 【《thisArg》】 值会被忽略，因为
		【boundFn2】
		的目标函数是 【boundFn】，而 【boundFn】 已经有一个绑定的 【this】 值了。当调用 【boundFn2】 时，它会调用 【boundFn】，而 【boundFn】 又会调用 【fn】。【fn】
		最终接收到的参数按顺序为：《b;;【boundFn】 绑定的参数》、《b;;【boundFn2】 绑定的参数》，以及 《b;;【boundFn2】 接收到的参数》。</p>


	<pre v-code:js>"use strict"; // 防止 `this` 被封装到到包装对象中

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // 《"this value", 1, 2, 3, 4, 5, 6》</pre>


	<h6>创建绑定函数</h6>

	<p>【bind()】 最简单的用法是创建一个函数，无论如何调用，它都会使用特定的 【《this》】 值进行调用。</p>

	<p>JavaScript 新手经常犯的一个错误是将一个方法从对象中提取出来，然后再调用，并期望方法中的 【this】 是原来的对象（比如在回调中传入这个方法）。</p>


	<p>然而，如果不做特殊处理的话，通常会丢失原始对象。使用这个函数加上原始的对象来创建一个绑定函数，巧妙地解决了这个问题：</p>

	<pre v-code:js>// 顶级的“this”绑定到“globalThis”。
this.x = 9;
const module = {
  x: 81,
  getX() { return this.x; },
};

// “getX”的“this”参数绑定到“module”。
console.log(module.getX()); // 《81》

const retrieveX = module.getX;
// “retrieveX”的“this”参数在非严格模式下绑定到“globalThis”。
console.log(retrieveX()); // 《9》

// 创建一个新函数“boundGetX”，并将“this”参数绑定到“module”。
const boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 《81》</pre>



	<h6>偏函数</h6>

	<p>【bind()】 的另一个简单用法是创建一个具有《预设初始参数》的函数。</p>

	<p>这些参数（如果有的话）会跟随提供的 【this】 值，并在传递给目标函数的参数列表的《开头::开头/结尾》插入，其后是在调用绑定函数时传递的参数。</p>


	<pre v-code:js>function list(...args) { return args; }
function addArguments(arg1, arg2) { return arg1 + arg2; }

console.log(list(1, 2, 3));      // 《[1, 2, 3]》
console.log(addArguments(1, 2)); // 《3》

// 创建一个带有预设前导参数的函数
const leadingThirtySevenList = list.bind(null, 37);
// 创建一个带有预设第一个参数的函数。
const addThirtySeven = addArguments.bind(null, 37);

console.log(leadingThirtySevenList());        // 《[37]》
console.log(leadingThirtySevenList(1, 2, 3)); // 《[37, 1, 2, 3]》

console.log(addThirtySeven(5));     // 《42》
console.log(addThirtySeven(5, 10)); // 《42》
//（最后一个参数 10 被忽略）</pre>



	<h6>配合 setTimeout()</h6>

	<p>在默认情况下，在 【setTimeout()】 内部，【this】 关键字将被设置为 【《globalThis》】，在浏览器中它是 【window】 对象。当处理需要将 【this】 引用类实例的类方法时，可以显式地将 【this】
		绑定到回调函数，以便保持实例的引用。</p>
	<p>案例：点击禁用，2秒后开启按钮</p>
	<pre v-code:js>document.querySelector(&#39;button&#39;).addEventListener(&#39;click&#39;, function () {
  this.disabled = true
  setTimeout(function () {
      this.disabled = false
  }.《bind(this)》, 2000)
})</pre>
</template>