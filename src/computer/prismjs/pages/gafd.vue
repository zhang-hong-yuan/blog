<template>
	<h1>Creating a new language definition</h1>

	<p>This section will explain the usual workflow of creating a new language definition.</p>

	<p>As an example, we will create the language definition of the fictional Foo's Binary, Artistic Robots™ language or
		just Foo Bar for short.</p>

	<br>

	<p>1.Create a new file ‘components/prism-foo-bar.js’.</p>

	<p>In this example, we choose ‘foo-bar’ as the id of the new language. The language id has to be unique and should
		work well with the ‘language-xxxx’ CSS class name Prism uses to refer to language definitions. Your language id
		should ideally match the regular expression ‘/^[a-z][a-z\d]*(?:-[a-z][a-z\d]*)*$/’.</p>

	<br>

	<p>2.Edit ‘components.json’ to register the new ‘language’ by adding it to the languages object. (Please note that all
		language entries are sorted alphabetically by title.)
		Our new entry for this example will look like this:</p>

	<pre>
			<code v-code:json>
				"foo-bar": {
	"title": "Foo Bar",
	"owner": "Your GitHub name"
}
			</code>
		</pre>





	<p>If your language definition depends any other languages, you have to specify this here as well by adding a <code
			v-code:js>"require"</code> property. E.g. <code v-code:js>"require": "clike"</code>, or <code
			v-code:js>"require": ["markup", "css"]</code>. For more information on dependencies read the declaring
		dependencies section.</p>

	<blockquote>
		Note: Any changes made to ‘components.json’ require a rebuild (see step 3).
	</blockquote>


	<br>


	<p>3.Rebuild Prism by running ‘npm run build’.</p>


	<p>You have to reload the test page to apply changes made to ‘prism-foo-bar.js’ but you don't have to rebuild Prism
		itself. However, if you change ‘components.json’ (e.g. because you added a dependency) then these changes will not
		show up on the test page until you rebuild Prism.</p>


	<br>

	<p>4.Write the language definition.</p>

	<p>The above section already explains the makeup of language definitions.</p>

	<br>


	<p>5.Adding aliases.</p>

	<p>Aliases for are useful if your language is known under more than just one name or there are very common
		abbreviations for your language (e.g. JS for JavaScript). Keep in mind that aliases are very similar to language ids
		in that they also have to be unique (i.e. there cannot be an alias which is the same as another alias of language
		id) and work as CSS class names.</p>

	<p>In this example, we will register the alias ‘foo’ for ‘foo-bar’ because Foo Bar code is stored in ‘.foo’ files.</p>



	<p>To add the alias, we add this line at the end of ‘prism-foo-bar.js’:</p>

	<pre>
		<code v-code:js>
			Prism.languages.foo = Prism.languages['foo-bar']
		</code>
	</pre>

	<p>Aliases also have to be registered in ‘components.json’ by adding the ‘alias’ property to the language entry. In
		this example, the updated entry will look like this:</p>

	<pre>
			<code v-code:json>
				"foo-bar": {
	"title": "Foo Bar",
	"alias": "foo",
	"owner": "Your GitHub name"
}
			</code>
		</pre>

	<blockquote>
		Note: ‘alias’ can also be a string array if you need to register multiple aliases.
	</blockquote>

	<p>Using ‘aliasTitles’, it's also possible to give aliases specific titles. In this example, this won't be necessary
		but a good example as to where this is useful is the markup language:</p>


	<pre>
			<code v-code:json>
				"markup": {
	"title": "Markup",
	"alias": ["html", "xml", "svg", "mathml"],
	"aliasTitles": {
		"html": "HTML",
		"xml": "XML",
		"svg": "SVG",
		"mathml": "MathML"
	},
	"option": "default"
}
			</code>
		</pre>

	<br>

	<p>6.Adding tests.</p>

	<p>Create a folder ‘tests/languages/foo-bar/’. This is where your test files will live. The test format and how to run
		tests is described here.</p>

	<p>You should add a test for every major feature of your language. Test files should test the common case and certain
		edge cases (if any). Good examples are the tests of the JavaScript language.</p>

	<p>You can use this template for new .test files:</p>

	<pre>
			<code v-code:json>
				The code to test.

----------------------------------------------------

----------------------------------------------------

Brief description.
			</code>
		</pre>

	<p>For every test file:</p>

	<ol>
		<li>Add the code to test and a brief description.</li>
		<li>Verify that your language definition correctly highlights the test code. This can be done using your local
			version of the test page.
			<blockquote>Note: Using the Show tokens options, you see the token stream your language definition created.
			</blockquote>
		</li>
		<li>Once you carefully checked that the test case is handled correctly (i.e. by using the test page), run the
			following command:

			<p><code v-code:bash>npm run test:languages -- --language=foo-bar --accept</code></p>

			<p>This command will take the token stream your language definition currently produces and inserted into the test
				file. The empty space between the two lines separating the code and the description of test case will be
				replaced with a simplified version of the token stream.</p>
		</li>
		<li>Carefully check that the inserted token stream JSON is what you expect.</li>
		<li>Re-run <code v-code:bash>npm run test:languages -- --language=foo-bar</code> to verify that the test passes.
		</li>
	</ol>

	<br>

	<p>7.Add an example page.</p>

	<p>Create a new file ‘examples/prism-foo-bar.html’. This will be the template containing the example markup. Just look
		at other examples to see how these files are structured.</p>

	<p>We don't have any rules as to what counts as an example, so a single Full example section where you present the
		highlighting of the major features of the language is enough.</p>


	<br>

	<p>8.Run <code v-code:bash>npm test</code> to check that all tests pass, not just your language tests.
		This will usually pass without problems. If you can't get all the tests to pass, skip this step.</p>

	<br>
	<p>9.Run <code v-code:bash>npm run build</code> again.</p>

	<p>Your language definition is now ready!</p>
</template>