<template>
	<h1>Inline color</h1>


	<p>Adds a small inline preview for colors in style sheets.</p>


	<pre>
<code v-code.less>
	main#___prismjs___ {
	
	code.blockCode,
	code.inlineCode {
		
		span.color {
			
			span.inline-color-wrapper {
				display: inline-block;
				height: 1.333ch;
				width: 1.333ch;
				box-sizing: border-box;
				margin: 0 0.333ch;
				background: url(../assets/inline_color_block.svg);
				background-position: center;
				background-size: 110%;
				border: 1px solid white;
				outline: 1px solid rgba(0, 0, 0, .5);
				overflow: hidden;
	
	
				span.inline-color {
					display: block;
					height: 120%;
					width: 120%;
				}
			}
		}
	}
}
</code>
	</pre>


	<h2>Examples</h2>

	<h4>CSS</h4>
	<pre>
	<code v-code.css>
span.foo {
	background-color: navy;
	color: #BFD;
}

span.bar {
	background: rgba(105, 0, 12, .38);
	color: hsl(30, 100%, 50%);
	border-color: transparent;
}

	</code>
</pre>


	<h4>HTML (Markup)</h4>


	<pre>
<code v-code.html>
	&lt;style&gt;
	a.not-a-class {
		color: red;
	}
&lt;/style&gt;

&lt;body style="color: black"&gt;

&lt;/body&gt;
</code>
	</pre>
</template>