<template>
	<h1>:out-of-range</h1>

	<p>‘:out-of-range’ CSS 伪类表示一个 <code v-code:html.escape><input></code> 元素，其当前值处于属性 ‘min’ 和 ‘max’ 限定的范围外。</p>

	<pre>
	<code v-code:css>
:out-of-range {
  /* ... */
}
	</code>
</pre>

	<p>这个伪类很有用，可以给用户提供一个视觉提示，让他们知道字段的当前值是否超出了允许的范围。</p>


	<section class="note">
		<strong>备注：</strong>该伪类仅适用于具有（并可以接受）范围限制的元素。如果没有这样的限制，元素值就无所谓 ‘in-range’ 和 ‘out-of-range’。
	</section>



	<range />

</template>

<script setup>
	import range from "../view/range";
</script>