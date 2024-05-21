<template>
	<h1>Object notation</h1>

	<p>Instead of using just plain regular expressions, Prism also supports an object notation for tokens. This notation
		enables the following options:</p>


	<h3>
		<code v-code:js>pattern: RegExp</code>
	</h3>
	<p>This is the only required option. It holds the regular expression of the token.</p>

	<h3>
		<code v-code:js>lookbehind: boolean</code>
	</h3>

	<p>This option mitigates JavaScript's poor browser support for lookbehinds. When set to <code v-code:js>true</code>,
		the first capturing group in the ‘pattern’ regex is discarded when matching this token, so it effectively functions
		as a lookbehind.</p>

	<p>For an example of this, check out how the C-like language definition finds ‘class-name’ tokens:</p>

	<pre>
	<code v-code:js>
		Prism.languages.clike = {
	// ...
	'class-name': {
		pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+)\w+/i,
		lookbehind: true
	}
}
	</code>
</pre>


	<h3>
		<code v-code:js>greedy: boolean</code>
	</h3>

	<p>This option enables greedy matching for the token. For more information, see the section about <ins>the matching
			algorithm</ins>.</p>

	<h3>
		<code v-code:ts>alias: string | string[]</code>
	</h3>

	<p>This option can be used to define one or more aliases for the token. The result will be that the styles of the
		token name and the alias(es) are combined. This can be useful to combine the styling of a standard token, which is
		already supported by most of the themes, with a more precise token name. For more information on this topic, see
		<ins>granular highlighting</ins>.
	</p>

	<p>E.g. the token name ‘latex-equation’ is not supported by most themes, but it will be highlighted the same as a
		string in the following example:</p>

	<h3>
		<code v-code:js>inside: Grammar</code>
	</h3>

	<p>This option accepts another object literal, with tokens that are allowed to be nested in this token. All tokens in
		the ‘inside’ grammar will be encapsulated by this token. This makes it easier to define certain languages.</p>

	<p>For an example of nested tokens, check out the ‘url’ token in the CSS language definition:</p>

	<pre>
		<code v-code:js>
			Prism.languages.css = {
	// ...
	'url': {
		// e.g. url(https://example.com)
		pattern: /\burl\(.*?\)/i,
		inside: {
			'function': /^url/i,
			'punctuation': /^\(|\)$/
		}
	}
}
		</code>
	</pre>

	<p>The ‘inside’ option can also be used to create recursive languages. This is useful for languages where one token
		can contain arbitrary expressions, e.g. languages with a string interpolation syntax.</p>

	<p>For example, here is how JavaScript implements template string interpolation:</p>


	<pre>
		<code v-code:js>
Prism.languages.javascript = {
	// ...
	'template-string': {
		pattern: /`(?:\\.|\$\{[^{}]*\}|(?!\$\{)[^\\`])*`/,
		inside: {
			'interpolation': {
				pattern: /\$\{[^{}]*\}/,
				inside: {
					'punctuation': /^\$\{|\}$/,
					'expression': {
						pattern: /[\s\S]+/,
						inside: null // see below
					}
				}
			}
		}
	}
}

Prism.languages.javascript['template-string']
	.inside['interpolation']
	.inside['expression']
	.inside
	= Prism.languages.javascript
		</code>
	</pre>

	<p>Be careful when creating recursive grammars as they might lead to infinite recursion which will cause a stack
		overflow.</p>




	<hr class="wordGap">


	<word word="plain---" />
	<word word="required---" />
	<word word="hold---" />
	<word word="mitigate---" />
	<word word="poor---" />
	<word word="capture---" />
	<word word="discard---" />
	<word word="enable---" />
	<word word="combine---" />
	<word word="---" />
	<word word="---" />
	<word word="---" />
	<word word="---" />
	<word word="---" />
	<word word="---" />
</template>