<template>
	<h1>Embedded languages</h1>

	<p>In addition to the standard tokens above, Prism also has a token for languages that are embedded in another
		language, such as CSS in HTML, JS in HTML, Bash in Shell-session, and CSS in JS, allowing Prism's themes to
		highlight the tokens in the embedded languages more accurately. All embedded languages are wrapped in their own
		special token, which includes a CSS class ‘language-xxxx’ corresponding to the embedded language.</p>


	<p>Open your browser's developer tools and check out the example below to see it in action!</p>



	<pre>
		<code v-code:html>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
	&lt;meta charset="utf-8" /&gt;
	&lt;title&gt;I can haz embedded CSS and JS&lt;/title&gt;

	&lt;style&gt;
		@media print {
			p { color: red !important; }
		}
	&lt;/style&gt;

&lt;/head&gt;
&lt;body&gt;
	&lt;h1&gt;I can haz embedded CSS and JS&lt;/h1&gt;

	&lt;script&gt;
	if (true) {
		console.log('foo');
	}
	&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
		</code>
	</pre>


	<hr class="wordGap">
</template>