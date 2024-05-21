<template>
	<h6>示例</h6>

	<p>HTML</p>

	<pre>
	<code v-code:html>
&lt;form action="" id="form1"&gt;
&lt;ul&gt;
	Values between 1 and 10 are valid.
	&lt;li&gt;
		&lt;input
			id="value1"
			name="value1"
			type="number"
			placeholder="1 to 10"
			min="1"
			max="10"
			value="12" /&gt;
		&lt;label for="value1"&gt;Your value is &lt;/label&gt;
	&lt;/li&gt;
&lt;/ul&gt;
&lt;/form&gt;
	</code>
</pre>



	<p>CSS</p>

	<pre>
	<code v-code:css>
li {
list-style: none;
margin-bottom: 1em;
}

input {
border: 1px solid black;
}

input:in-range {
background-color: rgba(0, 255, 0, 0.25);
}

input:out-of-range {
background-color: rgba(255, 0, 0, 0.25);
border: 2px solid red;
}

input:in-range + label::after {
	color: green;
	content: "okay.";
}

input:out-of-range + label::after {
	color: red;
	content: "out of range!";
}
	</code>
</pre>

	<p>渲染结果：</p>


	<figure id="demo-20240330-1516">
		<form action="" id="form1">
			<ul>
				Values between 1 and 10 are valid.
				<li>
					<input id="value1" name="value1" type="number" placeholder="1 to 10" min="1" max="10" value="12" />
					<label for="value1">Your value is </label>
				</li>
			</ul>
		</form>
	</figure>
</template>