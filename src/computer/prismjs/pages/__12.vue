<template>


	<h1>Copy to Clipboard Button</h1>


	<p>Add a button that copies the code block to the clipboard when clicked.</p>


	<h2>How to use</h2>

	<p>The plugin depends on the Prism <ins>Toolbar</ins> plugin. In addition to including the plugin file with your
		PrismJS build, ensure it is loaded before the plugin.</p>



	<h2>Settings</h2>

	<p>By default, the plugin shows messages in English and sets a 5-second timeout after a click. You can use the
		following HTML5 data attributes to override the default settings:</p>


	<ul>
		<li>‘data-prismjs-copy’——default message displayed by Copy to Clipboard;</li>
		<li>‘data-prismjs-copy-error’——a message displayed after failing copying, prompting the user to press Ctrl+C;</li>
		<li>‘data-prismjs-copy-success’——a message displayed after a successful copying;</li>
		<li>‘data-prismjs-copy-timeout’——a timeout (in milliseconds) after copying. Once the timeout passed, the success or
			error message will revert back to the default message. The value should be a non-negative integer.</li>
	</ul>


	<p>The plugin traverses up the DOM tree to find each of these attributes. The search starts at every ‘pre code’
		element and stops at the closest ancestor element that has a desired attribute or at the worst case, at the ‘html’
		element.</p>

	<p>Warning! Although possible, you definitely shouldn't add these attributes to the ‘html’ element, because a
		human-readable text should be placed after the character encoding declaration (‘&lt;meta charset="..."&gt;’), and
		the latter must be serialized completely within the first 512 (in older browsers) or 1024 bytes of the document.
		Consider using the ‘body’ element or one of its descendants.</p>


	<h2>Styling</h2>

	<p>This plugin supports customizing the style of the copy button. To understand how this is done, let's look at the
		HTML structure of the copy button:</p>

	<pre>
		<code v-code.html.escape>
&lt;button
	class="copy-to-clipboard-button"
	type="button"
	data-copy-state="copy"
>
	<span>Copy</span>
&lt;/button>
		</code>
	</pre>

	<p>The ‘copy-to-clipboard-button’ class can be used to select the button. The ‘data-copy-state’ attribute indicates
		the current state of the plugin with the 3 possible states being:</p>

	<ul>
		<li>‘data-copy-state="copy"’——default state;</li>
		<li>‘data-copy-state="copy-error"’——the state after failing copying;</li>
		<li>‘data-copy-state="copy-success"’——the state after successful copying;</li>
	</ul>

	<p>These 3 states should be conveyed to the user either by different styling or displaying the button text.</p>


	<br>
	<h2>Examples</h2>

	<h4>Sharing</h4>

	<p>The following code blocks show modified messages and both use a half-second timeout. The other settings are set to
		default.</p>

	<p>Source code:</p>


	<pre>
		<code v-code.html>

&lt;body data-prismjs-copy-timeout="500"&gt;
	&lt;pre&gt;
		&lt;code class="language-js" data-prismjs-copy="Copy the JavaScript snippet!"&gt;
			console.log('Hello, world!');
		&lt;/code&gt;
	&lt;/pre&gt;

	&lt;pre&gt;
		&lt;code class="language-c" data-prismjs-copy="Copy the C snippet!"&gt;
			int main() {
				return 0;
			}
		&lt;/code&gt;
	&lt;/pre&gt;
&lt;/body&gt;

		</code>
	</pre>


	<p>Output:</p>

	<div data-prismjs-copy-timeout="500">
		<pre>
		<code v-code.js data-prismjs-copy="Copy the JavaScript snippet!">
			console.log('Hello, world!');
		</code>
	</pre>

		<pre>
		<code class="language-c" data-prismjs-copy="Copy the C snippet!">
int main() {
	return 0;
}
		</code>
	</pre>

	</div>



	<h3>Inheritance</h3>

	<p>The plugin always use the closest ancestor element that has a desired attribute, so it's possible to override any
		setting on any descendant. In the following example, the ‘baz’ message is used. The other settings are set to
		default.</p>

	<p>Source code:</p>


	<pre>
	<code v-code.html>

&lt;body data-prismjs-copy="foo"&gt;
	&lt;main data-prismjs-copy="bar"&gt;
		&lt;pre&gt;
			&lt;code class="language-js" data-prismjs-copy="baz"&gt;
				const arraySparse = [1, 3, /* empty */, 7];
				let numCallbackRuns = 0;

				arraySparse.forEach((element) =&gt; {
					console.log({ element });
					numCallbackRuns++;
				});
			&lt;/code&gt;
		&lt;/pre&gt;
	&lt;/main&gt;
&lt;/body&gt;

	</code>
</pre>


	<p>Output:</p>

	<pre>
	<code v-code.js data-prismjs-copy="baz">

const arraySparse = [1, 3, /* empty */, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

	</code>
</pre>
</template>