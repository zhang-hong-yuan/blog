<template>
	<div>
		<h1>Line Highlight</h1>
		<p>Obviously, this only works on code blocks (<code class="lang-html">&lt;pre&gt;&lt;code&gt;</code>) and not
			for inline code.</p>


		<p>You specify the lines to be highlighted through the <code>v-code:arg</code> attribute on the <code v-code.html
				class="lang-html">&lt;pre&gt;</code>
			element, in the
			following simple format:</p>


		<ul>
			<li>A single number refers to the line with that number. eg: ‘5’ The 5th line</li>
			<li>Ranges are denoted by two numbers, separated with a hyphen (-). eg: ‘1-5’ Lines 1 through 5</li>
			<li>Multiple line numbers or ranges are separated by commas. eg: ‘1,4’ Line 1 and line 4</li>
			<li>Whitespace is allowed anywhere and will be stripped off. eg: ‘1-2,5,9-20’ Lines 1 through 2, line 5, lines 9
				through 20</li>
		</ul>



	</div>
</template>