<template>
	<h1>The matching algorithm</h1>


	<p>The job of Prism's matching algorithm is to produce a token stream given a language definition and some text. A
		token stream is Prism's representation of (partially or fully) tokenized text and is implemented as a list of
		strings (representing literal text) and tokens (representing tokenized text).</p>

	<blockquote>Note: The word "token" is ambiguous here. We use "token" to refer to both the entry of a language
		definition (as described in above sections) and a Token object inside a token stream. Which type of "token" is meant
		can be inferred from context.</blockquote>

	<p>The simplified token stream notation will be used in this section. Briefly, the notation uses JSON to represent a
		token stream. E.g. <code v-code:json>["foo ", ["keyword", "bar"], " baz"]</code> is the simplified token stream
		notation for the token stream that starts with the string ‘foo’, is followed by a token of type ‘keyword’ and text
		‘bar’, and ends with the string ‘baz’.</p>


	<p>Back to the matching algorithm: Prism's matching algorithm is a hybrid with two modes: first-come, first-served
		(FCFS) matching and greedy matching.</p>

	<h2>FCFS matching</h2>

	<p>This is Prism default matching mode. All tokens are matched one after the other, in order, tokens cannot overlap,
		and tokens cannot match text that is already matched by previous tokens.</p>

	<p>The algorithm itself is quite simple. Let's say we wanted to tokenize the JS code <code
			v-code:js>max(3, 5, exp2(7));</code> and that function tokens had already been processed. The current token stream
		would be:</p>

	<pre>
			<code v-code:js>
				[
	["function", "max"],
	"(3, 5, ",
	["function", "exp2"],
	"(7));"
]
			</code>
		</pre>

	<p>Next, we would tokenize numbers with the token <code v-code:js>'number': /[0-9]+/</code>.</p>


	<p>FCFS matching will go through all strings in the current token stream to find matches for the number regex. The
		first string is <code v-code:js>"(3, 5, "</code>, so the match <code v-code:js>3</code> is found. A new token is
		created for <code v-code:js>3</code> and inserted into the token stream to replace the matching text. The token
		stream is now:</p>


	<pre>
			<code v-code:js>
				[
	["function", "max"],
	"(",
	["number", "3"],
	", 5, ",
	["function", "exp2"],
	"(7));"
]
			</code>
		</pre>

	<p>Now, the algorithm goes to the next string <code v-code:js>", 5, "</code> and finds another match. A new token is
		created for <code v-code:js>5</code> and the token stream is now:</p>

	<pre>
			<code v-code:js>
				[
	["function", "max"],
	"(",
	["number", "3"],
	", ",
	["number", "5"],
	", ",
	["function", "exp2"],
	"(7));"
]
			</code>
		</pre>

	<p>The next string is <code v-code:js>", "</code> and no matches are found. The string after that is <code
			v-code:js>"(7));"</code> and a new token is create for <code v-code:js>7</code>:</p>


	<pre>
				<code v-code:js>
					[
	["function", "max"],
	"(",
	["number", "3"],
	", ",
	["number", "5"],
	", ",
	["function", "exp2"],
	"(",
	["number", "7"],
	"));"
]
				</code>
			</pre>

	<p>The last string to check is <code v-code:js>"));"</code> and no matches are found. The number token has now been
		processed and the algorithm will go process the next token in the language definition.</p>


	<p>Notice how FCFS matching did not find the <code v-code:js>2</code> in <code v-code:js>exp2</code>. Since FCFS
		matching completely ignores existing tokens in the token stream, the number regex cannot see already-tokenized text.
		This is a very useful property. In the above example, <code v-code:js>2</code> is a part of the function name <code
			v-code:js>exp2</code>, so highlighting it as a number would be incorrect.</p>



	<h2>Greedy matching</h2>


	<p>Greedy matching is very similar to FCFS matching. All tokens are matched in order and tokens cannot overlap. The
		defining difference is that greedy tokens can match the text of previous tokens.</p>

	<p>Let's look at an example to see why greedy matching is useful and how it works <i>conceptually</i>. A very
		simplified version of JavaScript's comment and string syntax might be implemented like this:</p>


	<pre>
			<code v-code:js>
				Prism.languages.javascript = {
	'comment': /\/\/.*/,
	'string': /'(?:\\.|[^\\\r\n])*'/
}
			</code>
		</pre>

	<p>To understand why greedy matching is useful, let's look at how FCFS matching would tokenize the text <code
			v-code:js>'http://example.com'</code>:</p>

	<p>FCFS matching starts with the token stream <code v-code:js>["'http://example.com'"]</code> and tries to find
		matches for 'comment': <code v-code:js>/\/\/.*/</code>. The match <code v-code:js>//example.com'</code> is found and
		inserted into the token stream:</p>




	<pre>
			<code v-code:js>
				[
	"'http:",
	["comment", "//example.com'"]
]
			</code>
		</pre>


	<p>Then FCFS matching will search for matches for <code v-code:js>'string': /'(?:\\.|[^'\\\r\n])*'/</code>. The first
		string of the token stream, <code v-code:js>"'http:"</code>, does not match the string regex, so the token stream
		remains unchanged. The string token has now been processed and the above token stream is the final result.</p>

	<p>Obviously, this is bad. The code <code v-code:js>'http://example.com'</code> is clearly just a string containing a
		URL, but FCFS matching doesn't understand this.</p>


	<p>An obvious, but incorrect, fix might be to swap the order of ‘comment’ and ‘string’. This would fix <code
			v-code:js>'http://example.com'</code>. However, the problem was merely moved. Comments like ‘// it's my
		co-worker's code’ (note the two single quotes) will now be tokenized incorrectly.</p>

	<p>This is the problem greedy matching solves. Let's make the tokens greedy and then see how this affects the result:
	</p>

	<pre>
			<code v-code:js>
				Prism.languages.javascript = {
	'comment': {
		pattern: /\/\/.*/,
		greedy: true
	},
	'string': {
		pattern: /'(?:\\.|[^'\\\r\n])*'/,
		greedy: true
	}
}
			</code>
		</pre>

	<p>While the actual greedy matching algorithm is quite complex and littered with subtle edge cases, its effect quite
		simple: a list of greedy tokens will behave as if they were matched by a single regex. This is how greedy matching
		works <i>conceptually</i> and how you should think about greedy tokens.</p>

	<p>This means that the greedy comment and string tokens will behave like the following language definition, but the
		combined token will result in the correct token names of the original greedy tokens:</p>

	<pre>
			<code v-code:js>
				Prism.languages.javascript = {
	'comment-or-string': /\/\/.*|'(?:\\.|[^'\\\r\n])*'/
}
			</code>
		</pre>

	<p>In the above example, <code v-code:js>'http://example.com'</code> will be matched by <code
			v-code:js>/\/\/.*|'(?:\\.|[^'\\\r\n])*'/</code> completely. Since the <code v-code:js>'(?:\\.|[^'\\\r\n])*'</code>
		part of the regex
		caused the match, a token of type ‘string’ will be created and the following token stream will be produced:</p>


	<pre>
			<code v-code:js>
				[
	["string", "'http://example.com'"]
]
			</code>
		</pre>


	<p>Similarly, the tokenization will also be correct for the ‘// it's my co-worker's code’ example.</p>

	<p>When deciding whether a token should be greedy, use the following guide lines:</p>

	<ol>
		<li>
			<p>Most tokens are not greedy.</p>
			<p>Most tokens in most languages are not greedy, because they don't need to be. Typically only the comment,
				string, and regex literal tokens need to be greedy. All other tokens can use FCFS matching.</p>
			<p>Generally, a token should only be greedy if it can contain the start of another token.</p>
		</li>
		<li>
			<p>All tokens before a greedy token should also be greedy.</p>
			<p>Greedy matching works subtly differently if there are non-greedy tokens before a greedy token. This typically
				leads to subtle and hard-to-catch bugs that sometimes take years to uncover.</p>
			<p>To make sure that greedy matching works as expected, the greedy tokens should be the first tokens of a
				language.</p>
		</li>
		<li>
			<p>Greedy tokens come in groups.</p>
			<p>If a language definition contains only a single greedy token, then the greedy token shouldn't be greedy. As
				explained above, greedy matching conceptually combines the regexes of all greedy tokens into one. If there is
				only one greedy token, greedy matching will behave like FCFS matching.</p>
		</li>
	</ol>
</template>