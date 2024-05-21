<template>
	<h1>Token names</h1>


	<p>The name of a token determines the semantic meaning of matched text of the token. Tokens can capture anything from
		simple language constructs, like comments, to more complex ones, like template string interpolation expressions.
		Token names differentiate these language constructs.</p>

	<p>A token name can theoretically be any string that is a valid CSS class name. However, in practice, it makes sense
		for token names to follow some rules. In Prism's code, we enforce that all token names use kebab case (‘foo-bar’)
		and contain only lower-case ASCII letters, digits, and hyphen characters. E.g. ‘class-name’ is allowed but
		‘Class_name’ is not.</p>

	<p>Prism also defines some standard tokens names that should be used for most tokens.</p>

	<h2>Themes</h2>

	<p>Prism's themes assign color (and other styles) to tokens based on their name (and aliases). This means that the
		language definition does not control the color of tokens, themes do.</p>

	<p>However, themes only support a limited number of known token names. If a theme does not know a particular token
		name, no styles will be applied. While different themes may support different token names, all themes are guaranteed
		to support Prism's standard tokens. Standard tokens as special token names with specific semantic meanings. They are
		the common ground all language definitions and themes agree on and must follow. Standard tokens should be preferred
		when choosing token names.</p>


	<h2>Granular highlighting</h2>

	<p>While standard tokens should be the preferred choice, they are also quite general. This is by design as they have
		to apply to a large number and variety of different languages, but sometimes more fine-grained tokenization (and
		subsequent highlighting) is desirable.</p>

	<p>Granular highlighting is a method of choosing token names to enable fine control for themes, while also ensuring
		compatibility with all themes.</p>

	<p>Let's look at an example. Say we had a language that supported both decimal and binary literals for numbers, and we
		wanted to give binary number special highlighting. We might implement it like this:</p>

	<pre>
			<code v-code:js>
				Prism.languages['my-language'] = {
	// ...
	'number': /\b\d+(?:\.\d+)?\b/,
	'binary-number': /\b0b[01]+\b/,
}
			</code>
		</pre>

	<p>But this has a problem. ‘binary-number’ is not a standard token, so almost no theme is going to given binary
		numbers any color.</p>

	<p>The solution to this problem is to use an <strong>alias</strong>:</p>

	<pre>
			<code v-code:js---6>
				Prism.languages['my-language'] = {
	// ...
	'number': /\b\d+(?:\.\d+)?\b/,
	'binary-number': {
		pattern: /\b0b[01]+\b/,
		alias: 'number'
	},
}
			</code>
		</pre>

	<p>Aliases allow themes to apply the styles of multiple names to one token. This means that themes that do support the
		‘binary-number’ token name can assign a special color, and themes don't support it will fallback to their usual
		color for numbers.</p>

	<p>This is granular highlighting: using a non-standard token name and a standard token as an alias.</p>
</template>