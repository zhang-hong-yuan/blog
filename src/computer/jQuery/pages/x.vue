<template>
	<h1>jQuery</h1>
	<p>JavaScript 库，即 library，是一个封装好的特定的集合(方法和函数)。jQuery的两大特点：链式编程和隐式迭代。</p>
	<ul>
		<li><strong>链式编程</strong> 是为了节省代码量，看起来更优雅。语法为：<code>元素对象.方法().方法().方法()...;</code></li>
		<li><strong>隐式迭代</strong> 就是遍历内部 DOM 元素(伪数组形式存储)的过程。</li>

	</ul>
	<p><br>官网地址： <a href='https://jquery.com/' target='_blank' class='url'>https://jquery.com/</a></p>
	<p><br>jQuery 插件常用的网站：</p>
	<ul>
		<li>jQuery 插件库 <a href='http://www.jq22.com/' target='_blank' class='url'>http://www.jq22.com/</a></li>
		<li>jQuery 之家 <a href='http://www.htmleaf.com/' target='_blank' class='url'>http://www.htmleaf.com/</a></li>

	</ul>
	<br>
	<p>jQuery 插件使用步骤：</p>
	<ol>
		<li>引入相关文件。(jQuery 文件 和 插件文件)</li>
		<li>复制相关 html、css、js (调用插件)</li>

	</ol>
	<p>&nbsp;</p>
	<p>jQuery 使用 $ 作为标示符，jQuery 中 $ 和 jQuery 是一回事儿(可以用 <code>===</code> 判断)，是 jQuery 中的顶级对象(本质是一个方法)。随着jQuery的流行，其他 js 库也会用这
		$ 作为标识符，这样一起使用会引起冲突。为了让 jQuery 和其他的 js库 不存在冲突，可以同时存在，这就叫做多库共存。解决方案：</p>
	<ol>
		<li>把里面的 $ 符号 统一改为 jQuery。 比如<code>jQuery(&#39;div&#39;)</code></li>
		<li>jQuery 变量规定新的名称：<code>$.noConflict()</code>。比如<code>var xx = $.noConflict()</code></li>

	</ol>
	<p>&nbsp;</p>
	<p>用原生 JS 获取来的对象就是 DOM 对象；用jQuery 方法获取的元素就是 jQuery 对象。jQuery 对象本质是：利用 $ 对 DOM 对象包装后产生的对象(伪数组形式存储)。</p>
	<ul>
		<li>jQuery 对象转换成 DOM 对象：<code>jQuery对象[索引值]</code> 和 <code>jQuery对象.get(索引值)</code></li>
		<li>DOM 对象转换成jQuery 对象：<code>$(DOM对象)</code></li>

	</ul>
	<blockquote>
		<p>注意：只有 jQuery 对象才能使用 jQuery 方法，DOM 对象则使用原生的 JavaScirpt 方法。</p>
	</blockquote>
	<br>
</template>