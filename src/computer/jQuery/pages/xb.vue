<template>
	<h2>元素操作</h2>
	<h3>遍历元素</h3>
	<p>jQuery 隐式迭代是对同一类元素做了同样的操作。 如果想要给同一类元素做不同操作，就需要用到遍历。</p>
	<p><code>each()</code> 方法遍历匹配的每一个元素。主要用于DOM处理。</p>
	<pre v-code:js>$(&quot;div&quot;).each(function(index, domEle) { ... })</pre>
	<ul>
		<li><code>index</code> 是每个元素的索引号</li>
		<li><code>demEle</code> 是每个DOM元素对象，不是jquery对象(要使用jquery方法，需要转换为jquery对象)</li>

	</ul>
	<blockquote>
		<p>函数体中的this指代每一个dom元素，与domEle等价</p>
	</blockquote>
	<p><code>$.each()</code> 方法可用于遍历任何对象。主要用于数据处理，比如数组，对象。</p>
	<pre v-code:js>$.each(object，function(index, domEle) { ... })</pre>
	<ul>
		<li>注：参数同上</li>

	</ul>
	<br>
	<h3>创建元素</h3>
	<p>动态的创建了一个 li</p>
	<pre v-code:js>$(&quot;&lt;li&gt;123&lt;/li&gt;&quot;);</pre>
	<p><strong>jQuery 对象拷贝：</strong>如果要把某个对象拷贝(合并)给另外一个对象使用，可以使用 <code>$.extend()</code> 方法</p>
	<pre v-code:js>$.extend([deep], target, object1, [object2, object3, ... ])</pre>
	<ul>
		<li><code>deep</code> 如果设为true 为深拷贝， 默认为false 浅拷贝</li>
		<li><code>target</code> 要拷贝的目标对象</li>
		<li><code>object1</code> 待拷贝到第一个对象的对象</li>

	</ul>
	<blockquote>
		<p>objectN 里面的属性会覆盖 target 里面的属性。</p>
	</blockquote>

	<h3>添加元素</h3>
	<p>内部(append、prepend)添加元素，生成之后，它们是父子关系。外部(after、before)添加元素，生成之后，他们是兄弟关系。</p>
	<ul>
		<li><code>element.append(&quot;内容&quot;)</code> 把内容放入匹配元素内部最后面，类似原生 appendChild</li>
		<li><code>element.prepend(&quot;内容&quot;)</code> 把内容放入匹配元素内部最前面</li>
		<li><code>element.after(&quot;内容&quot;)</code> 把内容放入目标元素后面</li>
		<li><code>element.before(&quot;内容&quot;)</code> 把内容放入目标元素前面</li>

	</ul>


	<h3>删除元素</h3>
	<p><code>empty()</code> 和 <code>html(&#39;&#39;)</code> 作用等价，都可以删除元素里面的内容，不过 html 还可以设置内容。</p>
	<ul>
		<li><code>element.remove()</code> 删除匹配的元素及其子元素(标签和内容一起删除)</li>
		<li><code>element.empty()</code> 清空匹配的元素(保留标签)</li>
		<li><code>element.html(&#39;&#39;)</code> 清空匹配的元素内容(保留标签)</li>

	</ul>
</template>