<template>

	<h1>Keep Markup</h1>
	<p>Prevents custom markup from being dropped out during highlighting.</p>


	<h2>How to use</h2>


	<p>You have nothing to do. The plugin is active by default. With this plugin loaded, all markup inside code will be
		kept.</p>


	<p>However, you can deactivate the plugin for certain code element by adding the <code>no-keep-markup</code> class to
		it. You can also deactivate the plugin for the whole page by adding the <code>no-keep-markup</code> class to the
		body of the page and then selectively activate it again by adding the <code>keep-markup</code> class to code
		elements.</p>

	<p>Some plugins (e.g. Autoloader) need to re-highlight code blocks. This is a problem for Keep Markup because it will
		keep the markup of the first highlighting pass resulting in a lot of unnecessary DOM nodes and causing problems for
		themes and other plugins.</p>

	<p>This problem can be fixed by adding a <code>drop-tokens</code> class to a code block or any of its ancestors. If
		<code>drop-tokens</code> is present, Keep Markup will ignore all <code>span.token</code> elements created by Prism.
	</p>


	<h2>Examples</h2>

	<p>The following source code</p>
	<pre>

<code v-code.html>
	&lt;pre&gt;
	&lt;code class="language-css"&gt;
		@media &lt;mark&gt;screen&lt;/mark&gt; {
			div {
				&lt;mark&gt;text&lt;/mark&gt;-decoration: &lt;mark&gt;&lt;mark&gt;under&lt;/mark&gt;line&lt;/mark&gt;;
				back&lt;mark&gt;ground: url&lt;/mark&gt;('foo.png');
			}
		}
	&lt;/code&gt;
&lt;/pre&gt;
</code>

		</pre>

	<p>would render like this:</p>


	<pre>
<code v-code.css>
	@media <mark>screen</mark> {
			div {
				<mark>text</mark>-decoration: <mark><mark>under</mark>line</mark>;
				back<mark>ground: url</mark>('foo.png');
			}
		}
</code>
		</pre>


	<p>It also works for inline code: <code
			v-code.css>v<mark>ar b</mark>ar = <mark>func</mark>tion () { <mark>/*</mark> foo <mark>*</mark>/ };</code>
	</p>
</template>