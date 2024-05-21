<template>
	<h1>异常处理</h1>


	<p>异常处理是指预估代码执行过程中可能发生的错误，然后最大程度的避免错误的发生导致整个程序无法继续运行。</p>

	<p>通过【try/catch】捕获错误信息(浏览器提供的错误信息)。如果【try】代码段中出现错误后，会执行【catch】代码段，并截获到错误信息。【finally】不管是否有错误，都会执行。</p>

	<pre v-code:js>try {
	const p = document.querySelector('.p')
	p.style.color = 'red'
} catch (err) {
	console.log(err.message) // Cannot read properties of null (reading 'style')
	throw new Error('选择器错误') // Uncaught Error: 选择器错误
}

finally {
	alert('弹出对话框')
}

console.log(11) // 不执行</pre>

	<p>【throw】抛出异常信息，程序也会终止执行；【Error】对象配合【throw】使用，能够设置更详细的错误信息。</p>

	<p>【throw】可以抛出任意表达式而不是特定一种类型的表达式。下面的代码抛出了几个不同类型的表达式：</p>

	<pre v-code:js>throw "Error2"; // String type
throw 42; // Number type
throw true; // Boolean type
throw {
  toString: function () {
    return "I'm an object!";
  },
};</pre>


	<p>【debugger】相当于打断点。</p>
</template>