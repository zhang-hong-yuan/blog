<template>
	<h1>&lt;noscript&gt;</h1>
	<p>&lt;noscript&gt; 元素用来定义在脚本未被执行时的替代内容(文本)。可被用于可识别 【&lt;noscript&gt;】 标签但无法支持其中的脚本的浏览器。即：如果浏览器支持脚本，那么它不会显示出
		&lt;noscript&gt; 元素中的文本。
	</p>
	<p><strong>注释</strong>无法识别 【&lt;script&gt;】 标签的浏览器会把标签的内容显示到页面上。为了避免浏览器这样做，您应当在注释标签中隐藏脚本。老式的(无法识别 【&lt;script&gt;】
		标签的)浏览器会忽略注释，这样就不会把标签的内容写到页面上，而新式的浏览器则懂得执行这些脚本，即使它们被包围在注释标签中！</p>
	<pre v-code:html>&lt;script&gt;
    &lt;!--
    function displayMsg() {
        alert(&quot;Hello World!&quot;)
    }
    //--&gt;
&lt;/script&gt;</pre>
</template>