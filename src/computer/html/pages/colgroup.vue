<script setup>
const demo = `<table border="1">
  <colgroup>
    <col span="2" style="background-color:pink">
    <col style="background-color:skyblue">
  </colgroup>
  <tr>
    <th>ISBN</th>
    <th>Title</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>3476896</td>
    <td>My first HTML</td>
    <td>$53</td>
  </tr>
  <tr>
    <td>5869207</td>
    <td>My first CSS</td>
    <td>$49</td>
  </tr>
</table>`
</script>

<template>
	<h1>&lt;colgroup&gt;</h1>
	<p>【&lt;colgroup&gt;】 标签用于对表格中的列进行组合，以便对其进行格式化。通过使用 【&lt;colgroup&gt;】 标签，可以向整个列应用样式，而不需要重复为每个单元格或每一行设置样式。</p>
	<p>【&lt;col&gt;】 标签规定了 【&lt;colgroup&gt;】 元素内部的每一列的列属性。</p>

	<pre v-text="demo" v-code:html></pre>
	<section v-html="demo"></section>


	<p>只能在 【&lt;table&gt;】 元素之内，在任何一个 【&lt;caption&gt;】 元素之后，在任何一个
		【&lt;thead&gt;】、【&lt;tbody&gt;】、【&lt;tfoot&gt;】、【&lt;tr&gt;】 元素之前使用
		【&lt;colgroup&gt;】 标签。如果想对 【&lt;colgroup&gt;】 中的某列定义不同的属性，请在 【&lt;colgroup&gt;】 标签内使用 【&lt;col&gt;】 标签。</p>
</template>