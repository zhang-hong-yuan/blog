<template>
	<h1>ID 选择器 ‘#idname’</h1>

	<p>CSS <strong>ID 选择器</strong>会根据该元素的 ‘id’ 属性中的内容匹配元素。为了使该元素被选中，它的 ‘id’ 属性必须与选择器中给出的值完全匹配。</p>

	<pre>
		<code v-code:css>
			#id 属性值 { 样式声明 }
		</code>
	</pre>
	<p>它与下面的‘属性选择器’语句语法上等价（但优先级并不等价）：</p>
	<pre>
		<code v-code:css>
			[id=id 属性值] { 样式声明 }
		</code>
	</pre>


	<h6>示例</h6>

	<p>样式：</p>
	<pre>
		<code v-code:css>
			#identified {
  background-color: skyblue;
}
		</code>
	</pre>

	<p>结构：</p>

	<pre>
		<code v-code:html.escape>
<div id="identified">这个 div 有一个特别的 ID 属性！</div>
<div>这只是一个普通的 div。</div>
		</code>
	</pre>
	<p>结果：</p>

	<figure id="demo-20240329-1452">

		<div id="identified">这个 div 有一个特别的 ID 属性！</div>
		<div>这只是一个普通的 div。</div>

	</figure>
</template>