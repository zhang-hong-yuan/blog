<template>
	<h1>省略包围属性值的引号</h1>


	<p>没有引号的属性值。在某些情况下它是被允许的，但是其他情况下会破坏你的标记。</p>

	<p>例如，针对链接，可以像这样写一个只拥有一个 href 属性的版本：</p>


	<pre>
	<code v-code:html>
		&lt;a href=https://www.mozilla.org/&gt;
			favorite website
		&lt;/a&gt;
	</code>
</pre>


	<p>然而，当再添加一个 title 属性时，就会出现问题：</p>


	<pre>
	<code v-code:html.error>
		&lt;a href=https://www.mozilla.org/ title=The Mozilla homepage&gt;
			favorite website
		&lt;/a&gt;
	</code>
</pre>



	<p>此时浏览器会误解这种标记，它会把 title 属性理解为三个属性——title 的属性值为 The，另外还有两个布尔属性 Mozilla 和 homepage，很明显不是所期望的！并且在这个编码里面它会报错或者出现异常行为。
	</p>


	<p class="b">建议始终添加引号——这样可以避免很多问题，并且使代码更易读。</p>




	<h1>单引号还是双引号？</h1>

	<p>使用单引号还是双引号？这只是风格的问题，以下两种情况都可以：</p>


	<pre>
		<code v-code:html>
&lt;a href='https://www.example.com'&gt;示例站点链接&lt;/a&gt;
&lt;a href="https://www.example.com"&gt;示例站点链接&lt;/a&gt;
		</code>
	</pre>


	<p>但应该注意单引号和双引号不能在一个属性值里面混用。下面的语法是错误的：</p>


	<pre>
		<code v-code:html.error>
			&lt;a href="https://www.example.com'&gt;示例站点链接&lt;/a&gt;
		</code>
	</pre>


	<p>在一个 HTML 中已使用一种引号，你可以在此引号中嵌套另外一种引号：</p>


	<pre>
		<code v-code:html.escape>
			<a href="https://www.example.com" title="你觉得'好玩吗'？">
				示例站点链接
			</a>
		</code>
	</pre>

</template>