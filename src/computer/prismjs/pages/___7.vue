<template>
	<h1>Highlight Keywords</h1>


	<p>Adds special CSS classes for each keyword for fine-grained highlighting.</p>


	<h2>How to use</h2>

	<p>This plugin adds a special class for every keyword, so keyword-specific styles can be applied. These special
		classes allow for fine-grained control over the appearance of keywords using your own CSS rules.</p>


	<p>For example, the keyword <code>if</code> will have the class <code>keyword-if</code> added. A CSS rule used to
		apply special highlighting could look like this:</p>

	<pre>
		<code v-code:css>
			.token.keyword.keyword-if { /* styles for 'if' */ }
		</code>
	</pre>


	<p>Note: This plugin does not come with CSS styles. You have to define the keyword-specific CSS rules yourself.</p>


	<h2>Examples</h2>

	<p>This example shows the plugin in action. The keywords <code>if</code> and <code>return</code> will be highlighted
		in red. The color of all other keywords will be determined by the current theme. The CSS rules used to implement
		the
		keyword-specific highlighting can be seen in the HTML file below.</p>


	<h4>CSS</h4>


	<pre>
<code v-code:css>
	.token.keyword.keyword-return,
.token.keyword.keyword-if {
	/* Set the color to a nice red. */
	color: green;
}
</code>
</pre>

	<h4>JavaScript</h4>

	<component :is="'style'">
		.token.keyword.keyword-return,
		.token.keyword.keyword-if {
		color: green!important;
		}
	</component>

	<pre>
<code v-code:js>
	(function () {

if (typeof Prism === 'undefined') {
	return;
}

Prism.hooks.add('wrap', function (env) {
	if (env.type !== 'keyword') {
		return;
	}
	env.classes.push('keyword-' + env.content);
});

}());
</code>
	</pre>


</template>