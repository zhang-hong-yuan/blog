<template>
	<h1>Number.NaN</h1>

	<p>【Number.NaN】也是 《Number》 类型的静态数据，表示《非数字》值，等同于【NaN】。</p>

	<p>【NaN】代表一个计算错误。它是一个不正确的或者一个未定义的数学操作所得到的结果。NaN 是粘性的。任何对 NaN 的操作都会返回
		《NaN》。</p>

	<p>【NaN】是全局对象的一个属性。换句话说，它是全局作用域中的一个《变量》。</p>


	<br>

	<p>要判断一个值是否为 【NaN】，可以使用 【《a;;Number.isNaN()》】 或 【《a;;isNaN()》】 来最清楚地确定一个值是否为 【NaN】——或者，因为 【NaN】
		是唯一与自身不相等的值(涉及到【NaN】的比较都是【false】)，所以可以执行类似 【《x !== x》】
		这样的自我比较。</p>

	<pre v-code:js class="nocopy">NaN === NaN;        // 《false》
Number.NaN === NaN; // 《false》
isNaN(NaN);         // 《true》
isNaN(Number.NaN);  // 《true》
Number.isNaN(NaN);  // 《true》


function valueIsNaN(v) { return v !== v; }

valueIsNaN(1);          // 《false》
valueIsNaN(NaN);        // 《true》
valueIsNaN(Number.NaN); // 《true》
</pre>


	<h6>检查值是否为数字</h6>

	<pre v-code:js>function sanitize(x) {
  if (isNaN(x)) {
    return Number.NaN;
  }
  return x;
}
</pre>


	<h6>一些数组方法不能找到 NaN</h6>

	<p>查找《b;;索引》的（【indexOf()】、【lastIndexOf()】）不能找到【NaN】，而查找《b;;值》的（【includes()】）可以：</p>

	<pre v-code:js>const arr = [2, 4, NaN, 12];
arr.indexOf(NaN); // 《-1》
arr.includes(NaN); // 《true》

// Methods accepting a properly defined predicate can always find NaN
arr.findIndex((n) => Number.isNaN(n)); // 《2》
</pre>

	<hr>



	<h1>Number.isNaN()</h1>

	<p>【Number.isNaN()】 静态方法判断传入的值是否为 【NaN】，如果输入不是数字类型，则返回 【false】。它是全局 【isNaN()】 函数更健壮的版本。</p>


	<pre v-code:js class="nocopy">Number.isNaN(value)</pre>

	<dl>
		<dt>【value】</dt>
		<dd>要测试是否为 【NaN】 的值。</dd>
	</dl>


	<p>注意，不能使用 【==】 或 【===】 运算符来测试值与 【NaN】 的相等性，因为与 JavaScript 中的其他值的比较不同，这些运算符在一个操作数为 【NaN】 时始终返回 【《false》】，即使另一个操作数也是
		【NaN】。
	</p>


	<h6>示例：</h6>

	<pre v-code:js>Number.isNaN(NaN);        // 《true》
Number.isNaN(Number.NaN); // 《true》
Number.isNaN(0 / 0);      // 《true》
Number.isNaN(37);         // 《false》
</pre>

	<h6>isNaN() 和 Number.isNaN() 的区别</h6>

	<p>如果当前值是 【NaN】，或者将其强制转换为数字后将是 【NaN】，则【isNaN()】将返回 【true】。而【Number.isNaN()】仅当值当前为 【NaN】 时才为 【true】：</p>

	<pre v-code:js>
isNaN("hello world");        // 《c;;true》
Number.isNaN("hello world"); // 《c;;false》
</pre>

	<p>【Number.isNaN()】 《不会::会不会？》尝试将参数转换为数字，因此非数字总是返回 【false】。以下都返回 【false】：</p>

	<pre v-code:js>Number.isNaN("NaN");
Number.isNaN(undefined);
Number.isNaN({});
Number.isNaN("blabla");
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
</pre>


	<p>全局 【isNaN()】 函数会将参数强制转换为数字：</p>


	<pre v-code:js>isNaN("NaN");     // true
isNaN(undefined); // true
isNaN({});        // true
isNaN("blabla");  // true
isNaN(true);      // false，强制转换为 1
isNaN(null);      // false，强制转换为 0
isNaN("37");      // false，强制转换为 37
isNaN("37.37");   // false，强制转换为 37.37
isNaN("");        // false，强制转换为 0
isNaN(" ");       // false，强制转换为 0
</pre>
</template>