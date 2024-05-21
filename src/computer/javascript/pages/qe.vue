<template>
	<h2>创建元素</h2>
	<p>三种动态创建元素区别：<code>document.write()</code>、<code>element.innerHTML</code>、<code>document.createElement()</code></p>
	<ul>
		<li><code>document.write</code> 直接将内容写入页面，但在文档完全加载后使用，将删除所有已有的 HTML。该方法仅用于测试。</li>
		<li><code>innerHTML</code> 将内容写入某个 DOM 节点，不会导致页面全部重绘。innerHTML 创建多个元素效率更高(不要拼接字符串，采取数组形式拼接)，结构稍微复杂。</li>
		<li><code>createElement()</code> 创建多个元素效率稍低一点点，但是结构更清晰。</li>

	</ul>
	<h3>innerHTML拼接字符串创建</h3>
	<pre v-code:js>function fn() {
    var d1 = +new Date()

    var str = ''
    for (var i = 0; i &lt; 1000; i++) {
        document.body.innerHTML += '&lt;div style=&quot;width:100px; height:2px; border:1px solid blue;&quot;&gt;&lt;/div&gt;'
    }

    var d2 = +new Date()

    console.log(d2 - d1)
}

fn()
</pre>
	<h3>innerHTML数组创建</h3>
	<pre v-code:js>function fn() {
    var d1 = +new Date()

    var array = []
    for (var i = 0; i &lt; 1000; i++) {
        array.push('&lt;div style=&quot;width:100px; height:2px; border:1px solid blue;&quot;&gt;&lt;/div&gt;')
    }
    document.body.innerHTML = array.join('')

    var d2 = +new Date()
    
    console.log(d2 - d1)
}

fn()
</pre>
	<h3>creatElement创建</h3>
	<pre v-code:js>function fn() {
    var d1 = +new Date()

    for (var i = 0; i &lt; 1000; i++) {
        var div = document.createElement('div')
        div.style.width = '100px'
        div.style.height = '2px'
        div.style.border = '1px solid red'
        document.body.appendChild(div)
    }

    var d2 = +new Date()

    console.log(d2 - d1)
}

fn()
</pre>
	<p>&nbsp;</p>
	<p>不同浏览器下，innerHTML 效率要比 creatElement 高。(<strong>innerHTML数组创建 &gt; creatElement &gt; innerHTML拼接字符串创建</strong>)</p>
</template>