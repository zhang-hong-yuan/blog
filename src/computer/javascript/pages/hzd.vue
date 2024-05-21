<template>
	<h1>Math.random()</h1>

	<p>【Math.random()】 静态方法返回一个大于等于 0 且小于 1（【[0, 1)】或 【0 &lt;= x &lt; 1】）的伪随机浮点数，并在该范围内近似均匀分布，可以缩放到所需的范围。它不能由用户选择或重置。</p>


	<pre v-code:js class="nocopy">
Math.random()
</pre>


	<h6>得到一个两数之间的随机数</h6>

	<p>该示例返回一个在指定值之间的<em>随机数【[min, max)】</em>。</p>

	<pre v-code:js>
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
</pre>


	<p>这个示例返回一个在指定值之间的<em>随机整数【[min, max)】</em>。</p>


	<pre v-code:js>
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 不包含最大值，包含最小值
}
</pre>

	<blockquote>也许很容易想到用 【Math.round()】 来实现，但这会导致随机数处于一个不均匀的分布，这可能不符合需求。</blockquote>


	<p>得到一个两数之间的<em>随机整数，包括《两个数在内【[min, max]】》</em></p>

	<pre v-code:js>
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 包含最小值和最大值
}
</pre>
</template>