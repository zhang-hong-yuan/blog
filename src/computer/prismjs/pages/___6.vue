<template>
	<h1>File Highlight</h1>

	<p>Fetch external files and highlight them with Prism. Used on the Prism website itself.</p>

	<blockquote>
		官网：<a href="https://prismjs.com/plugins/file-highlight/">https://prismjs.com/plugins/file-highlight/</a>
	</blockquote>

	<h2>How to use</h2>

	<p>Use the data-src attribute on empty <code v-code.html>&lt;pre&gt;</code> elements, like so:</p>

	<pre v-code.html.escape>
		&lt;pre data-src="myfile.js"&gt;&lt;/pre&gt;
	</pre>


	<p>You don't need to specify the language, it's automatically determined by the file extension. If, however, the
		language cannot be determined from the file extension or the file extension is incorrect, you may specify a language
		as well (with the usual class name way).</p>

	<p>Use the <code>data-range</code> attribute to display only a selected range of lines from the file, like so:</p>


	<pre v-code.html.escape>

	&lt;pre data-src="myfile.js" data-range="1,5"&gt;&lt;/pre&gt;

	</pre>


	<p>Lines start at 1, so <code>"1,5"</code> will display line 1 up to and including line 5. It's also possible to
		specify just a
		single line (e.g. <code>"5"</code> for just line 5) and open ranges (e.g. <code>"3,"</code> for all lines starting
		at line 3). Negative
		integers can be used to specify the n-th last line, e.g. -2 for the second last line.</p>


	<p>When <code>data-range</code> is used in conjunction with the Line Numbers plugin, this plugin will add the proper
		<code>data-start</code> according to the specified range. This behavior can be overridden by setting the
		<code>data-start</code> attribute manually.
	</p>

	<p>Please note that the files are fetched with XMLHttpRequest. This means that if the file is on a different origin,
		fetching it will fail, unless CORS is enabled on that website.</p>
</template>


<script setup>
import { onMounted } from 'vue';
import Prism from 'prismjs'
onMounted(() => {
	Prism.highlightAll()
})
</script>