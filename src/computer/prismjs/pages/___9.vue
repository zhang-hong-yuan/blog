<template>

	<h1>Previewers</h1>


	<p>Previewers for angles, colors, gradients, easing and time.</p>

	<h2>How to use</h2>

	<p>You don't need to do anything. With this plugin loaded, a previewer will appear on hovering some values in code
		blocks. The following previewers are supported:</p>

	<ul>
		<li>‘angle’ for angles</li>
		<li>‘color’ for colors</li>
		<li>‘gradient’ for gradients</li>
		<li>‘easing’ for easing functions</li>
		<li>‘time’ for durations</li>
	</ul>

	<p>This plugin is compatible with CSS, Less, Markup attributes, Sass, Scss and Stylus.</p>

	<h4>CSS</h4>
	<pre>
<code v-code.css>
	.example-gradient {
	background: -webkit-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* Chrome10+, Safari5.1+ */
	background:    -moz-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* FF3.6+ */
	background:     -ms-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* IE10+ */
	background:      -o-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* Opera 11.10+ */
	background:         linear-gradient(to right, #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* W3C */
}
.example-angle {
	transform: rotate(10deg);
}
.example-color {
	color: rgba(255, 0, 0, 0.2);
	background: purple;
	border: 1px solid hsl(100, 70%, 40%);
}
.example-easing {
	transition-timing-function: linear;
}
.example-time {
	transition-duration: 3s;
}
</code>
	</pre>

	<h4>Less</h4>

	<pre>
<code v-code.css>
	@gradient: linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%);
.example-gradient {
	background: -webkit-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Chrome10+, Safari5.1+ */
	background:    -moz-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* FF3.6+ */
	background:     -ms-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* IE10+ */
	background:      -o-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Opera 11.10+ */
	background:         linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* W3C */
}
@angle: 3rad;
.example-angle {
	transform: rotate(.4turn)
}
@nice-blue: #5B83AD;
.example-color {
	color: hsla(102, 53%, 42%, 0.4);
}
@easing: cubic-bezier(0.1, 0.3, 1, .4);
.example-easing {
	transition-timing-function: ease;
}
@time: 1s;
.example-time {
	transition-duration: 2s;
}
</code>
	</pre>

	<h4>Markup attributes</h4>
	<pre>

<code v-code.html.escape>
	<div style="background: lightblue;">
		<span style="background-color: #6E5494;">test</span>
	</div>
</code>

	</pre>


	<h2>Disabling a previewer</h2>

	<p>All previewers are enabled by default. To enable only a subset of them, a data-previewers attribute can be added on
		a code block or any ancestor. Its value should be a space-separated list of previewers representing the subset.</p>


	<p>For example:</p>


	<pre>
<code v-code:1.html>
&lt;pre class="language-css" data-previewers="color time"&gt;
	&lt;code&gt;
		div {
			/* Only the previewer for color and time are enabled */
			color: red;
			transition-duration: 1s;
			/* The previewer for angles is not enabled. */
			transform: rotate(10deg);
		}
	&lt;/code&gt;
&lt;/pre&gt;

</code>
	</pre>


	<p>will give the following result:</p>


	<pre data-previewers="color time">
<code v-code:6.css>
	div {
	/* Only the previewers for color and time are enabled */
	color: red;
	transition-duration: 1s;
	/* The previewer for angles is not enabled. */
	transform: rotate(10deg);
}
</code>
	</pre>


</template>