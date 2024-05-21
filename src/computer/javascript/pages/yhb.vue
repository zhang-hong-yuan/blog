<template>
	<h1>instanceof 操作符</h1>

	<p>如果所判别的对象确实是所指定的类型，则返回【true】。其语法如下：</p>

	<pre v-code:js>objectName instanceof objectType;</pre>

	<p>【objectName】 是需要做判别的对象的名称，而【objectType】是假定的对象的类型，例如【Date】或 【Array】。</p>

	<p>下面的代码使用 【instanceof】 去判断 【theDay】 是否是一个 【Date】 对象。因为 【theDay】 是一个 【Date】 对象，所以 【if】 中的代码会执行。</p>

	<pre v-code:js>var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}</pre>
</template>