<template>
	<div>
		<h1>Normalize Whitespace</h1>
		<p>Supports multiple operations to normalize whitespace in code blocks.</p>
		<blockquote>
			<strong>official website：</strong>
			<a href="https://prismjs.com/plugins/normalize-whitespace/">https://prismjs.com/plugins/normalize-whitespace/</a>
		</blockquote>


		<h2>How to use</h2>
		<p>Obviously, this is supposed to work only for code blocks (<code v-code:html>&lt;pre&gt;&lt;code&gt;</code>)
			and
			not for inline code.</p>


		<p>By default the plugin trims all leading and trailing whitespace of every code block. It also removes extra
			indents
			and trailing whitespace on every line.</p>

		<p>The plugin can be disabled for a particular code block by adding the class
			<code>no-whitespace-normalization</code> to
			either
			the <code v-code:html>&lt;pre&gt;</code> or <code v-code:html>&lt;code&gt;</code> tag.
		</p>



		<p>The default settings can be overridden with the <code>setDefaults()</code> method like so:</p>


		<pre>


<code v-code:js>
	Prism.plugins.NormalizeWhitespace.setDefaults({
  'remove-trailing': true,
  'remove-indent': true,
  'left-trim': true,
  'right-trim': true,
  'break-lines': 80,
  'indent': 2,
  'remove-initial-line-feed': false,
  'tabs-to-spaces': 4,
  'spaces-to-tabs': 4
});
</code>

	</pre>

		<blockquote>
			<strong>注意：</strong>
			该配置要写在 ‘Prism.highlightAll()’ 调用之前。
		</blockquote>

		<p>The following settings are available and can be set via the <code>data-[setting]</code> attribute on the <code
				v-code:html>&lt;pre&gt;</code> element:</p>

		<dl>
			<dt>remove-trailing</dt>
			<dd>Removes trailing whitespace on all lines.</dd>


			<dt>remove-indent</dt>
			<dd>If the whole code block is indented too much it removes the extra indent.</dd>


			<dt>left-trim</dt>
			<dd>Removes all whitespace from the top of the code block.</dd>


			<dt>right-trim</dt>
			<dd>Removes all whitespace from the bottom of the code block.</dd>


			<dt>break-lines</dt>
			<dd>Simple way of breaking long lines at a certain length (default is 80 characters).</dd>


			<dt>indent</dt>
			<dd>Adds a certain number of tabs to every line.</dd>


			<dt>remove-initial-line-feed</dt>
			<dd>Less aggressive version of left-trim. It only removes a single line feed from the top of the code block.</dd>


			<dt>tabs-to-spaces</dt>
			<dd>Converts all tabs to a certain number of spaces (default is 4 spaces).</dd>


			<dt>spaces-to-tabs</dt>
			<dd>Converts a certain number of spaces to a tab (default is 4 spaces).</dd>

		</dl>
	</div>



	<h2>Examples</h2>


	<p>The following example demonstrates the use of this plugin:</p>


	<pre>
<code v-code:html>
&lt;body&gt;
&lt;section id="main" class="language-javascript"&gt;

&lt;pre&gt;

	&lt;code&gt;


		var example = {
			foo: true,

			bar: false
		};


	&lt;/code&gt;

&lt;/pre&gt;

&lt;pre data-break-lines="80"&gt;

	&lt;code&gt;


		var there_is_a_very_very_very_very_long_line_it_can_break_it_for_you = true;

		if (there_is_a_very_very_very_very_long_line_it_can_break_it_for_you === true) {
		};


	&lt;/code&gt;

&lt;/pre&gt;

&lt;/section&gt;

&lt;script src="prism.js"&gt;&lt;/script&gt;
&lt;script src="plugins/normalize-whitespace/prism-normalize-whitespace.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript"&gt;
// Optional
Prism.plugins.NormalizeWhitespace.setDefaults({
	'remove-trailing': true,
	'remove-indent': true,
	'left-trim': true,
	'right-trim': true,
});
&lt;/script&gt;
&lt;/body&gt;
</code>
</pre>


	<p>The result looks like this:</p>


	<pre>

<code v-code:js>

	var example = {
		foo: true,

		bar: false
	};
</code>


</pre>

	<pre data-break-lines="80">

		<code v-code:js>
			var there_is_a_very_very_very_very_long_line_it_can_break_it_for_you = true;

if (there_is_a_very_very_very_very_long_line_it_can_break_it_for_you === true) {
};
		</code>


</pre>

	<p>It is also compatible with the <ins>keep-markup</ins> plugin:</p>

	<pre>

<code v-code:css>
	@media <mark>screen</mark> {
	div {
		<mark>text</mark>-decoration:<mark><mark>under</mark>line</mark>;
		back<mark>ground: url</mark>('foo.png');
	}
}
</code>

</pre>
</template>