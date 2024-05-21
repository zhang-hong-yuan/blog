<script setup>
	import { onMounted } from 'vue';
	import Prism from 'prismjs'
	onMounted(() => Prism.highlightAll())
</script>

<template>
	<h1>Basic Use</h1>

	<p>The examples in this page serve a dual purpose: They act as unit tests, making it easy to spot bugs, and at the
		same time demonstrate what Prism can do, on simple and on edge cases.</p>

	<h3>Different markup:</h3>

	<p>code.language-css</p>
	<code class="language-css code-inline">p { color: red; }</code>


	<p>pre.language-css > code</p>

	<pre class="language-css"><code>p { color: red; }</code></pre>

	<p>pre > code.language-css</p>

	<pre><code class="language-css">p { color: red; }</code></pre>

	<p>pre.language-css > code.language-*</p>

	<pre class="language-css"><code class="language-">p { color: red; }</code></pre>

	<br>

	<p>code.lang-css</p>
	<code class="lang-css code-inline">p { color: red; }</code>

	<p>pre.lang-css > code</p>

	<pre class="lang-css"><code>p { color: red; }</code></pre>

	<p>pre > code</p>
	<p>No language, should inherit .language-markup</p>

	<pre class="language-html"><code>
		&lt;p&gt;hi!&lt;/p&gt;
	</code></pre>


	<p>code.language-*</p>
	<p>No language, should inherit .language-markup</p>
	<code class="language-html code-inline">
		&lt;p&gt;hi!&lt;/p&gt;
	</code>


	<p>code.language-none</p>

	<p>Should not be highlighted.</p>

	<code class="language-none code-inline">
		&lt;p&gt;hi!&lt;/p&gt;
	</code>




	<hr class="wordGap">

	<word word="basic---------adj. 最简单的；初级的；初步的" />
	<word word="use-----------n. 用途；功能；用法" />
	<word word="example-------n. 实例；例证；例子" />
	<word word="page----------n. （计算机的）页面，版面" />
	<word word="serve---------v. 对…有用；能满足…的需要" />
	<word word="dual----------adj. 两部分的；双重的；双的" />
	<word word="purpose-------n. 意图；目的；用途；目标" />
	<word word="spot----------v. 看见；看出；注意到；发现" />
	<word word="demonstrate---v. 示范；演示" />
	<word word="edge----------n. 边；边缘；边线；边沿" />
	<word word="case----------n. 特殊情况" />
	<word word="markup--------n. 标记，标记符号（标示计算机文档结构和显示、打印形式）" />
	<word word="language------n. 计算机语言" />
	<word word="code----------n. 编码" />
	<word word="inherit-------v. 经遗传获得（品质、身体特征等）" />
	<word word="highlight-----v. 将（文本的某部分）用彩笔做标记；将（计算机屏幕的某区域）增强亮度；使醒目" />
	<!-- <word word="----"/> -->
</template>