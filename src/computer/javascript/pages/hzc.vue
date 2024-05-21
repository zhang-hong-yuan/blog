<template>
	<h1>Math.max()</h1>

	<p>【Math.max()】 函数返回《零到多个数值中最大值》。</p>

	<pre v-code:js class="nocopy">
Math.max()
Math.max(value0)
Math.max(value0, value1)
Math.max(value0, value1, /* … ,*/ valueN)
</pre>

	<dl>
		<dt>【value1】, 【value2】, … , 【valueN】</dt>
		<dd>0 个或多个数字，将在其中选择，并返回最大的值。

			<ul>
				<li>如果任一参数不能转换为数值，则返回 【NaN】。</li>
				<li>如果没有参数，则返回 【-Infinity】。</li>
			</ul>
		</dd>
	</dl>


	<h6>示例：</h6>

	<pre v-code:js>
Math.max(10, 20);   //  《20》
Math.max(-10, -20); // 《-10》
Math.max(-10, 20);  //  《20》
</pre>


	<h6>获取数组的最大元素</h6>

	<p>【Array.reduce()】 可以用来查找最大值元素，通过比较每个值：</p>

	<pre v-code:js>
const arr = [1, 2, 3];
const max = arr.reduce((a, b) => 《Math.max(a, b)》, 《-Infinity》);
</pre>


	<p>也可以使用 【Function.apply()】 来获取数组的最大值。</p>

	<pre v-code:js>
function getMaxOfArray(numArray) {
  return 《Math.max.apply》(《null, numArray》);
}

getMaxOfArray([1, 2, 3]) // 相当于 Math.max(1, 2, 3)
</pre>

	<p>展开语法是编写 【apply】 解决方案的一种更简短的方法，可以最大限度地利用数组：</p>

	<pre v-code:js>
const arr = [1, 2, 3];
const max = 《Math.max(...arr)》;
</pre>

	<p>但是，如果数组有太多的元素，展开语法（【...】）和 【apply()】 都将失败或返回错误的结果，因为它们试图将数组元素作为函数形参传递。【《reduce()》】 解决方案不存在这个问题。</p>



	<hr>



	<h1>Math.min()</h1>

	<p>【Math.min()】 函数返回《零到多个数值中最小值》。</p>


	<pre v-code:js class="nocopy">
Math.min()
Math.min(value0)
Math.min(value0, value1)
Math.min(value0, value1, /* … ,*/ valueN)
</pre>

	<dl>
		<dt>【value1】, 【value2】, … , 【valueN】</dt>


		<dd>
			0 个或多个数字，将在其中选择，并返回最小值。

			<ul>
				<li>如果任一参数不能转换为数值，则返回 【NaN】。</li>
				<li>果没有参数，则返回 【Infinity】。</li>
			</ul>
		</dd>
	</dl>


	<H6>示例：</H6>

	<p>下例找出 x 和 y 的最小值，并把它赋值给 z：</p>

	<pre v-code:js>
const x = 10;
const y = -20;
const z = 《Math.min(x, y)》; // -20
</pre>


	<h6>使用 Math.min() 裁剪值</h6>

	<p>【Math.min()】 经常用于裁剪一个值，以便使其总是小于或等于某个边界值。例如：</p>

	<pre v-code:js>
let x = f(foo);
if (x > boundary) x = boundary;
</pre>


	<p>可以写成：</p>
	<pre v-code:js>
const x = Math.min(f(foo), boundary);
</pre>

	<p>【Math.max()】 可以以类似的方式用于在另一端裁剪一个值。</p>
</template>