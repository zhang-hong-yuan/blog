<template>
	<h1>Match braces</h1>

	<p>Highlights matching braces.</p>


	<h2>How to use</h2>

	<p>To enable this plugin add the ‘match-braces’ class to a code block:</p>


	<pre>
	<code v-code.html>
		&lt;pre&gt;&lt;code class="language-xxxx match-braces"&gt;...&lt;/pre&gt;&lt;/code&gt;
	</code>
</pre>

	<p>Just like ‘language-xxxx’, the ‘match-braces’ class is inherited, so you can add the class to the <code
			v-code.html>&lt;body&gt;</code> to enable the plugin for the whole page.</p>

	<p>The plugin will highlight brace pairs when the cursor hovers over one of the braces. The highlighting effect will
		disappear as soon as the cursor leaves the brace pair.</p>

	<p>The hover effect can be disabled by adding the ‘no-brace-hover’ to the code block. This class can also be
		inherited.</p>


	<p>You can also click on a brace to select the brace pair. To deselect the pair, click anywhere within the code block
		or select another pair.</p>


	<p>The selection effect can be disabled by adding the ‘no-brace-select’ to the code block. This class can also be
		inherited.</p>


	<h2>Rainbow braces 🌈</h2>

	<p>To enable rainbow braces, simply add the ‘rainbow-braces’ class to a code block. This class can also get inherited.
	</p>
	<br><br>
	<h4>Examples</h4>

	<pre>
	<code v-code.js>
const func = (a, b) => {
	return `${a}:${b}`;
}
	</code>
</pre>
</template>