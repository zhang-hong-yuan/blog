<template>
	<h1>Non-standard tokens</h1>


	<p>Sometimes, a language might use a particular name to refer to certain pieces of code, but which is not one of
		Prism's standard token names, such as ‘function-defintion’. Since ‘function-definition’ is not a standard token, you
		might want to alias it with a standard token such as ‘function’, which is semantically similar, and will ensure that
		Prism's themes will highlight it. Here's an example:</p>



	<pre>
			<code v-code:js>
fn main() {
	println!("Hello World");
	another_function();
}
			</code>
		</pre>
</template>