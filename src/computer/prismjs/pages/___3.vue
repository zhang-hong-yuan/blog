<template>
	<h1>Line Numbers</h1>


	<p>Obviously, this is supposed to work only for code blocks (<code v-code.html>&lt;pre&gt;&lt;code&gt;</code>)
		and
		not
		for inline code.</p>

	<p>Add the ‘line-numbers’ class to your desired <code v-code.html>&lt;pre&gt;</code> or any of
		its
		ancestors,
		and the Line Numbers plugin will
		take care of the rest. To give all code blocks line numbers, add the ‘line-numbers’ class to the <code
			v-code.html>&lt;body&gt;</code> of the
		page. </p>

	<p>This is part of a general activation mechanism where adding the ‘line-numbers’ (or
		‘no-line-numbers’) class to any
		element will enable (or disable) the Line Numbers plugin for all code blocks in that element.
	</p>



	<pre>
<code v-code.html>
	&lt;!-- enabled for the whole page --&gt;
&lt;body class="line-numbers"&gt;

  &lt;!-- with line numbers --&gt;
  &lt;pre&gt;&lt;code&gt;...&lt;/code&gt;&lt;/pre&gt;

  &lt;!-- disabled for a specific element - without line numbers --&gt;
  &lt;pre class="no-line-numbers"&gt;&lt;code&gt;...&lt;/code&gt;&lt;/pre&gt;

  &lt;!-- disabled for this subtree --&gt;
  &lt;div class="no-line-numbers"&gt; 

    &lt;!-- without line numbers --&gt;
    &lt;pre&gt;&lt;code&gt;...&lt;/code&gt;&lt;/pre&gt;

    &lt;!-- enabled for a specific element - with line numbers --&gt;
    &lt;pre class="line-numbers"&gt;&lt;code&gt;...&lt;/code&gt;&lt;/pre&gt;

  &lt;/div&gt;
&lt;/body&gt;
</code>

	</pre>

	<p>Optional: You can specify the ‘data-start’(Number) attribute on the <code v-code.html>&lt;pre&gt;</code>
		element. eg: <code v-code.html>&lt;pre data-start="-5"&gt;</code>. It will shift the line
		counter.</p>

	<p>Optional: To support multiline line numbers using soft wrap, apply the CSS <code
			v-code.css>white-space: pre-line;</code> or <code v-code.css>white-space: pre-wrap;</code> to your
		desired <code v-code.html>&lt;pre&gt;</code>.</p>


	<h2>Examples</h2>
	<p>Please note that this <code v-code.html>&lt;pre&gt;</code> does not have the ‘line-numbers’ class
		but
		its parent does.</p>

	<pre>
		<code  v-code.less>
pre.line-numbers {
	counter-reset: linenumber;

	& > code {
		position: relative;
		z-index: 1;
		padding: 0 30px;
	
		& > span.line-numbers-rows {
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0px;
			width: 100%;  
			letter-spacing: -1px;
			font-size: 1em;

			& > span {
				position: relative;
				display: block;
				counter-increment: linenumber;
				transition: all 1s;

				&.___mask___ {
					background-color: rgba(0, 0, 0, 0.1);
				}

				&:hover {
					&::before { color: #999; }
					&::after { 
						opacity: 1; 
						box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.3);
					}
				}

				&:before {
					display: block;
					float: left;
					width: 20px;
					content: counter(linenumber);
					text-align: right;
					color: transparent;
					transition: all .4s;
				}

				&:after {
					// 注意，这个盒子不能加边框，会改变盒子大小，从而错位 （box-sizing: border-box; 没有效果）
					display: block;
					opacity: 0;
					content: '-';
					color: transparent;
				}
			}
		}
	}
}
</code>
		</pre>
</template>