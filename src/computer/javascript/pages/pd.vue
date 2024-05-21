<template>
	<h2>环境对象(this)</h2>
	<p>在函数执行时，【this】 关键字并不会指向正在运行的函数本身，而是指向调用该函数的对象。</p>
	<ul>
		<li><em>普通函数</em>的<u>调用方式</u>决定了 【this】 的值，即：谁调用函数 【this】 的指向谁。(严格模式下指向 【undefined】)</li>
		<li><em>箭头函数</em>中不存在 【this】。会默认绑定外层最近作用域 【this】 的值。注意：</li>

	</ul>
	<blockquote>
		<p>事件回调函数使用箭头函数时，【this】 为全局的 【window】；因此 【DOM】 事件回调函数如果需要 【this】，则需要用普通函数。</p>
		<p>基于原型的面向对象也不推荐采用箭头函数。</p>
	</blockquote>
	<p>js 中可以动态指定普通函数中 【this】 的指向：【call()】、【apply()】 和 【bind()】</p>
</template>