<template>
	<h1>Math.round()</h1>

	<p>【Math.round()】 函数返回《四舍五入后的整数》。</p>


	<ul>
		<li>如果参数的小数部分大于 0.5，则舍入到相邻的绝对值更大的整数。</li>
		<li>如果参数的小数部分小于 0.5，则舍入到相邻的绝对值更小的整数。</li>
		<li>如果参数的小数部分恰好等于 0.5，则舍入到《相邻的在正无穷（【+∞】）方向上的整数》。</li>
	</ul>

	<pre v-code:js class="nocopy">Math.round(x)</pre>

	<dl>
		<dt>【x】</dt>
		<dd>一个数值。</dd>
	</dl>

	<p>注意，【Math.round()】 并不总是舍入到远离 0 的方向，尤其是在《负数》的小数部分恰好等于 0.5 的情况下。</p>


	<h6>示例：</h6>

	<pre v-code:js>
x = Math.round(20.49);  // 《20》
x = Math.round(20.5);   // 《21》
x = Math.round(-20.5);  // 《-20》
x = Math.round(-20.51); // 《-21》
</pre>


	<hr>


	<h1>Math.trunc()</h1>

	<p>【Math.trunc()】 方法《会将数字的小数部分去掉，返回给定数字的整数部分》。</p>

	<p>不像 Math 的其他三个方法： 【Math.floor()】、【Math.ceil()】、【Math.round()】 ，【Math.trunc()】 的执行逻辑很简单，仅仅是删除掉数字的小数部分和小数点，不管参数是正数还是负数。
	</p>


	<pre v-code:js class="nocopy">Math.trunc(value)</pre>


	<dl>
		<dt>【value】</dt>
		<dd>任意数字，会被隐式转换成《数字类型》。</dd>
	</dl>

	<h6>示例：</h6>


	<pre v-code:js>
Math.trunc(13.37); // 《a;;13》
Math.trunc(42.84); // 《a;;42》

Math.trunc(0.123);  //  《b;;0》
Math.trunc(-0.123); // 《b;;-0》

Math.trunc("-1.123"); // 《c;;-1》
Math.trunc("foo");    // 《c;;NaN》

Math.trunc(NaN); // 《d;;NaN》
Math.trunc();    // 《d;;NaN》
</pre>



	<hr>

	<h1>Math.floor()</h1>

	<p>【Math.floor()】 函数总是返回《小于等于给定数字的最大整数》，即《一个数向下取整后》的值。</p>

	<pre v-code:js class="nocopy">Math.floor(x)</pre>

	<dl>
		<dt>【x】</dt>
		<dd>一个数字。</dd>
	</dl>

	<p>返回小于等于 x 的最大整数。它的值与 【-Math.ceil(-x)】 相同。</p>

	<h6>示例：</h6>

	<pre v-code:js>
Math.floor(45.05); // 《45》
Math.floor(45.95); // 《45》
Math.floor(4);     // 《4》
Math.floor(0);     // 《0》

Math.floor(-0);     // 《-0》
Math.floor(-45.95); // 《-46》
Math.floor(-45.05); // 《-46》

Math.floor(Infinity);  // 《Infinity》
Math.floor(-Infinity); // 《-Infinity》
</pre>
	<hr>


	<h1>Math.ceil()</h1>

	<p>【Math.ceil()】 静态方法返回《大于一个数的最小整数》，即《一个数向上取整后》的值。</p>

	<pre v-code:js class="nocopy">Math.ceil(x)</pre>

	<dl>
		<dt>【x】</dt>
		<dd>一个数值。</dd>
	</dl>

	<p>返回大于等于 x 的最小整数。它的值与 【-Math.floor(-x)】 相同。</p>

	<h6>示例：</h6>

	<pre v-code:js>
Math.ceil(4);     // 《4》
Math.ceil(7.004); // 《8》
Math.ceil(0.95);  // 《1》
Math.ceil(0);     // 《0》

Math.ceil(-0);     // 《-0》
Math.ceil(-0.95);  // 《-0》
Math.ceil(-4);     // 《-4》
Math.ceil(-7.004); // 《-7》

Math.ceil(Infinity);  // 《Infinity》
Math.ceil(-Infinity); // 《-Infinity》
</pre>


	<h6>缓动动画</h6>
	<pre v-code:js>
function animate(obj, target, callback) {
  clearInterval(obj.timer)
  obj.timer = setInterval(function () {

    var step = (target - obj.offsetLeft) / 10
    step = step &gt; 0 ? Math.ceil(step) : Math.floor(step)

    if (obj.offsetLeft === target) {
      clearInterval(obj.timer)
      callback &amp;&amp; callback()
    }

    obj.style.left = obj.offsetLeft + step + &#39;px&#39;

  }, 15)
}
</pre>
</template>