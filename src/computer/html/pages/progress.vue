<script setup>
const demo = `<progress id='progress' value="0" max="100"></progress>
<button>下载</button>`
</script>
<template>
	<h1>&lt;progress&gt;</h1>

	<p>【&lt;progress&gt;】标签与 JavaScript 一起使用来显示任务的进度。</p>

	<pre v-text="demo" v-code:html></pre>
	<section v-html="demo"></section>

	<p>下载代码：</p>
	<pre v-code:html>&lt;progress id=&#39;progress&#39; value=&quot;0&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;
&lt;button onclick=&quot;start_run(100)&quot;&gt;下载&lt;/button&gt;

&lt;script&gt;
  function start_run(n) {
    if (n `= 0) alert(&quot;下载完成&quot;)
    
    var progress = document.getElementById(&quot;progress&quot;)

    progress.value = 100 - --n
    setTimeout(&quot;start_run(&quot; + n + &quot;)&quot;, 100)
  }
&lt;/script&gt;</pre>


	<p>【&lt;progress&gt;】标签不适合用来表示度量衡(例如，磁盘空间使用情况或相关的查询结果)。表示度量衡，使用 【&lt;meter&gt;】 标签代替。</p>

	<table>
		<tr>
			<th>属性</th>
			<th>值</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>max</td>
			<td><em>number</em></td>
			<td>规定需要完成的值。</td>
		</tr>
		<tr>
			<td>value</td>
			<td><em>number</em></td>
			<td>规定进程的当前值。</td>
		</tr>
	</table>
</template>