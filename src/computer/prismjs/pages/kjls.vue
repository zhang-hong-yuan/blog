<template>
	<h1>Helper functions</h1>

	<p>Prism also provides some useful function for creating and modifying language definitions.</p>

	<h2>extend</h2>
	<p><code v-code:js>Prism.languages.extend</code> is useful for when your language is very similar to another existing
		language.</p>

	<p>Creates a deep copy of the language with the given id and appends the given tokens. <strong>Return</strong> The new
		language created.</p>
	<pre>
			<code v-code:ts>
				(static) extend(id, redef) → {Grammar}
			</code>
		</pre>

	<h4>Parameters:</h4>

	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Type</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>‘id’</td>
				<td>‘string’</td>
				<td>
					<p>The id of the language to extend. This has to be a key in ‘Prism.languages’.</p>
				</td>
			</tr>
			<tr>
				<td>‘redef’</td>
				<td>‘Grammar’</td>
				<td>
					<p>The new tokens to append.</p>
				</td>
			</tr>
		</tbody>
	</table>

	<p>If a token in ‘redef’ also appears in the copied language, then the existing token in the copied language will be
		overwritten at its original position.</p>

	<h4>Best practices</h4>

	<p>Since the position of overwriting tokens (token in ‘redef’ that overwrite tokens in the copied language) doesn't
		matter, they can technically be in any order. However, this can be confusing to others that trying to understand the
		language definition because, normally, the order of tokens matters in Prism grammars.</p>

	<p>Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
		Furthermore, all non-overwriting tokens should be placed after the overwriting ones.</p>

	<h4>Example</h4>

	<pre>
			<code v-code:js>
				Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
    // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
    // at its original position
    'comment': { ... },
    // CSS doesn't have a 'color' token, so this token will be appended
    'color': /\b(?:red|green|blue)\b/
})
			</code>
		</pre>


	<h2>insertBefore</h2>

	<p><code v-code:js>Prism.languages.insertBefore</code> can be used to modify existing languages definitions.</p>

	<p>Inserts tokens before another token in a language definition or any other grammar. <strong>Return</strong>:
		The new grammar object.</p>

	<pre>
		<code v-code:ts>
			(static) insertBefore(inside, before, insert, rootopt) → {Grammar}
		</code>
	</pre>

	<h4>Parameters:</h4>

	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Type</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>‘inside’</td>
				<td>
					<code>string</code>
				</td>
				<td>
					<p>The property of <code>root</code> (e.g. a language id in <code v-code:js>Prism.languages</code>) that
						contains the
						object to be modified.</p>
				</td>
			</tr>
			<tr>
				<td>‘before’</td>
				<td>
					<code>string</code>
				</td>
				<td>
					<p>The key to insert before.</p>
				</td>
			</tr>
			<tr>
				<td>‘insert’</td>
				<td>
					<code>Grammar</code>
				</td>
				<td>
					<p>An object containing the key-value pairs to be inserted.</p>
				</td>
			</tr>
			<tr>
				<td>‘root’</td>
				<td>
					<code>Object.&lt;string, any&gt;</code>
				</td>
				<td>
					<p>The object containing <code>inside</code>, i.e. the object that contains the
						object to be modified.</p>
					<p>Defaults to <code v-code:js>Prism.languages</code>.</p>
				</td>
			</tr>
		</tbody>
	</table>

	<h4>Usage</h4>

	<p>This helper method makes it easy to modify existing languages. For example, the CSS language definition not only
		defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded in HTML through
		<code v-code:html>&lt;style&gt;</code> elements. To do this, it needs to modify <code
			v-code:js>Prism.languages.markup</code> and add the appropriate tokens. However, <code
			v-code:js>Prism.languages.markup</code> is a regular JavaScript object literal, so if you do this:
	</p>


	<pre>
				<code v-code:js>
					Prism.languages.markup.style = {
    // token
}
				</code>
			</pre>


	<p>then the ‘style’ token will be added (and processed) at the end. ‘insertBefore’ allows you to insert tokens before
		existing tokens. For the CSS example above, you would use it like this:</p>

	<pre>
			<code v-code:js>
				Prism.languages.insertBefore('markup', 'cdata', {
    'style': {
        // token
    }
})
			</code>
		</pre>

	<h4>Special cases</h4>

	<p>If the grammars of ‘inside’ and ‘insert’ have tokens with the same name, the tokens in ‘inside’'s grammar will be
		ignored.</p>

	<p>This behavior can be used to insert tokens after ‘before’:</p>

	<pre>
			<code v-code:js>
				Prism.languages.insertBefore('markup', 'comment', {
    'comment': Prism.languages.markup.comment,
    // tokens after 'comment'
})
			</code>
		</pre>


	<h4>Limitations</h4>

	<p>The main problem ‘insertBefore’ has to solve is iteration order. Since ES2015, the iteration order for object
		properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave differently
		when keys are deleted and re-inserted. So ‘insertBefore’ can't be implemented by temporarily deleting properties
		which is necessary to insert at arbitrary positions.</p>

	<p>To solve this problem, ‘insertBefore’ doesn't actually insert the given tokens into the target object. Instead, it
		will create a new object and replace all references to the target object with the new one. This can be done without
		temporarily deleting properties, so the iteration order is well-defined.</p>

	<p>However, only references that can be reached from ‘Prism.languages’ or ‘insert’ will be replaced. I.e. if you hold
		the target object in a variable, then the value of the variable will not change.</p>

	<pre>
			 <code v-code:js>
				var oldMarkup = Prism.languages.markup
var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... })

assert(oldMarkup !== Prism.languages.markup)
assert(newMarkup === Prism.languages.markup)
			 </code>
		</pre>
</template>