<template>
	<h1>【for...in】 遍历</h1>
	<p>【for...in】 语句循环一个指定的变量来循环一个对象所有可枚举的属性。JavaScript 会为每一个不同的属性执行指定的语句。【for(变量 in 对象名) { ... }】</p>
	<pre v-code:js>for(var variable in object) { // variable 在每次迭代时，都会被赋值为不同的属性名。
    console.log(variable);      // 这里得到的是属性名
    console.log(object[variable]); // 这里得到的是属性值
}</pre>

	<p>虽然使用 【for...in】 来迭代数组元素听起来很诱人，但是它返回的东西除了数字索引外，还有可能是自定义的属性名字。因此还是用带有数字索引的传统的 【for】
		循环来迭代一个数组比较好，因为，如果需要改变数组对象，比如添加属性或者方法，【for...in】 语句迭代的是自定义的属性，而不是数组的元素。（注：【for...of】 语句和【forEach()】也是理想的选择。）</p>

	<h3>示例：</h3>
	<p>下面的函数通过它的参数得到一个对象和这个对象的名字。然后循环这个对象的所有属性并且返回一个列出属性名和该属性值的字符串。</p>

	<pre v-code:js>function dump_props(obj, obj_name) {
	var result = "";
	for (var i in obj) {
		result += obj_name + "." + i + " = " + obj[i] + '\n';
	}
	result += "\n";
	return result;
}

const car = {
	make: "Ford",
	model: "Mustang"
}

console.log(dump_props(car, 'car'));
// car.make = Ford
// car.model = Mustang
// 
</pre>
</template>