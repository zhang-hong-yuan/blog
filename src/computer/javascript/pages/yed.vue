<template>
	<h1>基本类型解构</h1>

	<p>对象解构几乎等同于属性访问。这意味着，如果尝试解构基本类型的值，该值将被包装到相应的包装器对象中，并且在包装器对象上访问该属性。</p>

	<pre v-code:js>const { a, toFixed } = 1;
console.log(a, toFixed); // undefined ƒ toFixed() { [native code] }</pre>

	<p>与访问属性相同，解构 【null】 或 【undefined】 会抛出 【TypeError】。</p>

	<pre v-code:js class="error">const { a } = undefined; // TypeError: Cannot destructure property 'a' of 'undefined' as it is undefined.

const { a } = null; // TypeError: Cannot destructure property 'b' of 'null' as it is null.
const {} = null;    // TypeError: Cannot destructure 'null' as it is null.</pre>
</template>