<template>
	<h1>Number</h1>

	<p>Number 值表示像 【37】 或 【-9.25】 这样的浮点数。</p>

	<p>【Number()】构造函数包含常量和处理数值的方法。数值通常以字面量形式表示。</p>

	<pre v-code:js class="nocopy">new Number(value)
Number(value)</pre>

	<p>当【Number()】作为一个函数使用时，【Number(value)】 将字符串或者其他值转换到 《Number》 类型。如果该值不能被转换，它会返回 【《NaN》】。</p>

	<pre v-code:js>Number("123");         // 《返回数字 123》
Number("123") === 123; // 《true》
Number("unicorn");     // 《NaN》

Number(undefined); // 《NaN》
Number(null);      // 《0》

Number(true);  // 《a;;1》
Number(false); // 《a;;0》
</pre>

	<p>有两种方法可以在 JavaScript 中实现几乎相同的效果。</p>

	<ul>
		<li>一元加：【《+x》】 完全按照上面的数值强制转换步骤来转换 x。</li>
		<li>【《b;;Number.parseFloat()》】 和 【《b;;Number.parseInt()》】 与 【Number()】 相似，但只能转换《字符串》，并且解析规则略有不同。例如，【parseInt()】
			无法识别小数点，【parseFloat()】 无法识别 0x 前缀。</li>
	</ul>

	<blockquote>【number】对象调用【toString()】要特殊处理一下：【《(123).》toString()】或【《123..》toString()】注意是两个点！</blockquote>
</template>