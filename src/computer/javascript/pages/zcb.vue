<template>
	<h1>【while】 循环</h1>
	<p>【while】 语句可以在条件表达式为真的前提下，循环执行指定的一段代码，直到表达式不为真时结束循环。要执行多条语句(语句块)，要使用块语句(【{ ... }】)包括起来。</p>
	<pre v-code:js>while (condition)
  statement</pre>
	<p>使用 while 循环一定要有退出条件，否则会成为死循环。</p>
	<blockquote>while 循环相较于 for 循环可以做较为复杂的条件判断，比如判断用户名和密码。</blockquote>

	<h1>【do while】 循环</h1>
	<p>【do...while】语句其实是【while】语句的一个变体。该循环会先执行一次代码块，然后对条件表达式进行判断，如果条件为真，就会重复执行循环体，否则退出循环。</p>
	<pre v-code:js>do
  statement
while (condition);</pre>

	<p>要执行多条语句(语句块)，要使用块语句(【{ ... }】)包括起来。</p>
</template>