<template>
	<h1>Toolbar</h1>


	<p>Attach a toolbar for plugins to easily register buttons on the top of a code block.</p>


	<h2>How to use</h2>

	<p>The Toolbar plugin allows for several methods to register your button, using the <code
			v-code:js>Prism.plugins.toolbar.registerButton</code> function.</p>


	<p>The simplest method is through the HTML API. Add a <code>data-label</code> attribute to the <code>pre</code>
		element, and the Toolbar plugin will read the value of that attribute and append a label to the code snippet.</p>

	<pre data-label="Hello World!">
<code v-code:html>
	&lt;pre
	data-src="plugins/toolbar/prism-toolbar.js"
	data-label="Hello World!"
&gt;
&lt;/pre&gt;
</code>
	</pre>


	<p>If you want to provide arbitrary HTML to the label, create a <code>template</code> element with the HTML you want
		in the label, and provide the <code>template</code> element's <code>id</code> to <code>data-label</code>. The
		Toolbar plugin will use the template's content for the button. You can also use to declare your event handlers
		inline:</p>


	<pre data-label="my-label-button">
<code  v-code:html>
&lt;pre
	data-src="plugins/toolbar/prism-toolbar.js"
	data-label="my-label-button"
&gt;
&lt;/pre&gt;
</code>
	</pre>




	<pre>
		<code v-code:html>
&lt;template id="my-label-button"&gt;
	&lt;button onclick="console.log('This is an inline-handler');"&gt;
	  My button
	&lt;/button&gt;
&lt;/template&gt;
	</code>
</pre>
	<blockquote>
		vue 中最好不要使用该方式。
	</blockquote>


	<h2>Registering buttons</h2>

	<p>For more flexibility, the Toolbar exposes a JavaScript function that can be used to register new buttons or labels
		to the Toolbar, <code>Prism.plugins.toolbar.registerButton</code>.</p>

	<p>The function accepts a key for the button and an object with a <code>text</code> property string and an optional
		<code>onClick</code> function or a <code>url</code> string. The <code>onClick</code> function will be called when
		the button is clicked, while the <code>url</code> property will be set to the anchor tag's <code>href</code>.
	</p>


	<pre>
	<code v-code:js>
		Prism.plugins.toolbar.registerButton('hello-world', {
	text: 'Hello World!', // required
	onClick: function (env) { // optional
		alert('This code snippet is written in ' + env.language + '.');
	}
})
	</code>
</pre>

	<blockquote>
		不要重复创建！否则会 warning！(也就是不要写在指令函数内部)
	</blockquote>

	<p>See how the above code registers the <code>Hello World!</code> button? You can use this in your plugins to register
		your own buttons with the toolbar.</p>

	<p>If you need more control, you can provide a function to <code>registerButton</code> that returns either a
		<code>span</code>, <code>a</code>, or <code>button</code> element.
	</p>


	<pre>
	<code v-code:js>
		Prism.plugins.toolbar.registerButton('select-code', function(env) {
	var button = document.createElement('button');
	button.innerHTML = 'Select Code';

	button.addEventListener('click', function () {
		// Source: http://stackoverflow.com/a/11128179/2757940
		if (document.body.createTextRange) { // ms
			var range = document.body.createTextRange();
			range.moveToElementText(env.element);
			range.select();
		} else if (window.getSelection) { // moz, opera, webkit
			var selection = window.getSelection();
			var range = document.createRange();
			range.selectNodeContents(env.element);
			selection.removeAllRanges();
			selection.addRange(range);
		}
	});

	return button;
});
	</code>
</pre>


	<p>The above function creates the Select Code button you see, and when you click it, the code gets highlighted.</p>


	<h2>Ordering buttons</h2>

	<p>By default, the buttons will be added to the code snippet in the order they were registered. If more control over
		the order is needed, the <code>data-toolbar-order</code> attribute can be used. Given a comma-separated list of
		button names, it will ensure that these buttons will be displayed in the given order.</p>


	<p>Buttons not listed will not be displayed. This means that buttons can be disabled using this technique.</p>

	<p>Example: The "Hello World!" button will appear before the "Select Code" button and the custom label button will not
		be displayed.</p>

	<pre>
	<code v-code:html>
		&lt;pre
			data-toolbar-order="hello-world,select-code"
			data-label="Hello World!"
		&gt;
			&lt;code&gt;&lt;/code&gt;
		&lt;/pre&gt;
	</code>
</pre>


	<p>The <code>data-toolbar-order</code> attribute is inherited, so you can define the button order for the whole
		document by adding the attribute to the <code>body</code> of the page.</p>

	<pre>
	<code v-code:html>
		&lt;body data-toolbar-order="select-code,hello-world,label"&gt;&lt;/body&gt;
	</code>
</pre>




</template>