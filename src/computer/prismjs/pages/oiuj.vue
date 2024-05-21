<template>
	<h1>Dependencies</h1>

	<p>Languages and plugins can depend on each other, so Prism has its own dependency system to declare and resolve
		dependencies.</p>

	<h2>Declaring dependencies</h2>

	<p>You declare a dependency by adding a property to the entry of your language or plugin in the ‘components.json’
		file. The name of the property will be dependency kind and its value will be the component id of the dependee. If
		multiple languages or plugins are depended upon then you can also declare an array of component ids.</p>

	<p>In the following example, we will use the ‘require’ dependency kind to declare that a fictional language Foo
		depends on the JavaScript language and that another fictional language Bar depends on both JavaScript and CSS.</p>

	<pre>
			<code v-code:json---8,12>
				{
	"languages": {
		"javascript": { "title": "JavaScript" },
		"css": { "title": "CSS" },
		...,
		"foo": {
			"title": "Foo",
			"require": "javascript"
		},
		"bar": {
			"title": "Bar",
			"require": ["css", "javascript"]
		}
	}
}
			</code>
		</pre>

	<h4>Dependency kinds</h4>

	<p>There are 3 kinds of dependencies:</p>

	<h4>‘require’:</h4>

	<p>Prism will ensure that all dependees are loaded before the depender.</p>

	<p>You are not allowed to modify the dependees unless they are also declared as ‘modify’.</p>

	<p>This kind of dependency is most useful if you e.g. extend another language or dependee as an embedded language
		(e.g. like PHP is embedded in HTML).</p>

	<h4>‘optional’:</h4>

	<p>Prism will ensure that an optional dependee is loaded before the depender if the dependee is loaded. Unlike
		‘require’
		dependencies which also guarantee that the dependees are loaded, ‘optional’ dependencies only guarantee the order of
		loaded components.</p>

	<p>You are not allowed to modify the dependees. If you need to modify the optional dependee, declare it as ‘modify’
		instead.</p>

	<p>This kind of dependency is useful if you have embedded languages but you want to give the users a choice as to
		whether they want to include the embedded language. By using ‘optional’ dependencies, users can better control the
		bundle size of Prism by only including the languages they need.</p>

	<p>E.g. HTTP can highlight JSON and XML payloads but it doesn't force the user to include these languages.</p>

	<h4>‘modify’:</h4>

	<p>This is an ‘optional’ dependency which also declares that the depender might modify the dependees.</p>

	<p>This kind of dependency is useful if your language modifies another language (e.g. by adding tokens).</p>

	<p>E.g. CSS Extras adds new tokens to the CSS language.</p>
	<br>
	<p>To summarize the properties of the different dependency kinds:</p>

	<table>
		<tbody>
			<tr>
				<th></th>
				<th>Non-optional</th>
				<th>Optional</th>
			</tr>
			<tr>
				<th>Read only</th>
				<td>‘require’</td>
				<td>‘optional’</td>
			</tr>
			<tr>
				<th>Modifiable</th>
				<td></td>
				<td>‘modify’</td>
			</tr>
		</tbody>
	</table>

	<blockquote>Note: You can declare a component as both require and modify</blockquote>
</template>