<template>
	<h2>修改样式</h2>
	<p>可以使用 <code>css()</code> 方法来修改简单元素行内样式；也可以修改多个行内样式。</p>
	<ul>
		<li>获取值：<code>var strColor = $(this).css(&#39;color&#39;)</code></li>
		<li>修改单一样式：<code>$(this).css(&quot;color&quot;, &quot;red&quot;)</code> 属性必须加引号，值如果是数字可以不用跟单位和引号</li>
		<li>修改多组样式：<code>$(this).css({&quot;color&quot;:&quot;white&quot;,&quot;font-size&quot;:&quot;20px&quot;})</code>
			参数可以是对象形式。属性名和属性值用冒号隔开，属性可以不用加引号</li>

	</ul>
	<p>jQuery 里面的排他思想：</p>
	<pre v-code:js>$(this).css(&#39;color&#39;,&#39;red&#39;)
$(this).siblings().css(&#39;color&#39;,&#39;&#39;)

$(this).css(&#39;color&#39;, &#39;red&#39;).sibling().css(&#39;color&#39;, &#39;&#39;) // 链式编程</pre>

	<p>jQuery类作用等同于 classList，可以操作类样式。注意操作类里面的参数不要加点。</p>
	<ul>
		<li>添加类：<code>$(&quot;div&quot;).addClass(&quot;current&quot;)</code></li>
		<li>删除类：<code>$(&quot;div&quot;).removeClass(&quot;current&quot;)</code> (移除全部类可以省略参数)</li>
		<li>切换类：<code>$(&quot;div&quot;).toggleClass(&quot;current&quot;)</code></li>

	</ul>

	<br>
	<h3>案例：tab栏切换</h3>

	<pre v-code:html>&lt;div class="tab"&gt;
    &lt;div class="tab_list"&gt;
        &lt;ul&gt;
            &lt;li class="current"&gt;商品介绍&lt;/li&gt;
            &lt;li&gt;规格与包装&lt;/li&gt;
            &lt;li&gt;售后保障&lt;/li&gt;
            &lt;li&gt;商品评价（50000）&lt;/li&gt;
            &lt;li&gt;手机社区&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
    &lt;div class="tab_con"&gt;
        &lt;div class="item" style="display: block;"&gt;商品介绍模块内容&lt;/div&gt;
        &lt;div class="item"&gt;规格与包装模块内容&lt;/div&gt;
        &lt;div class="item"&gt;售后保障模块内容&lt;/div&gt;
        &lt;div class="item"&gt;商品评价（50000）模块内容&lt;/div&gt;
        &lt;div class="item"&gt;手机社区模块内容&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
​
&lt;script&gt;
    $(function() {
        $(".tab_list li").click(function() {
            $(this).addClass("current").siblings().removeClass("current")
            var index = $(this).[...]
            $(".tab_con .item").eq(index).show().siblings().hide()
        });
    })
&lt;/script&gt;</pre>
</template>