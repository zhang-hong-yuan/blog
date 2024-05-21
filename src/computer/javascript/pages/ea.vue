<template>
	<h1>string.length</h1>
	<p>【String】 类型的 【length】 数据属性表示字符串的 UTF-16 码元长度，大多数情况下也即《字符串的长度(字符数)》。值为《一个非负的整数》。</p>
	<pre v-code:js>string.length</pre>

	<p>因为字符串是一个基本类型，所以尝试为字符串的 【length】 属性赋值没有可观察到的效果，并且在严格模式下会抛出错误。</p>

	<pre v-code:js>const myString = "bluebells";

myString.length = 4;
console.log(myString); // 《"bluebells"》
console.log(myString.length); // 《9》</pre>

	<p>由于 【length】 统计的是码元而不是字符，如果想得到字符的数量，可以首先用它的《迭代器》分割字符串，它按字符进行迭代：</p>

	<pre v-code:js>function getCharacterLength(str) {
  // 这里使用的字符串迭代器遍历的是字符，而不仅仅是码元
  return 《[...str].length》;
}

console.log(getCharacterLength("A\uD87E\uDC04Z")); // 3</pre>
</template>