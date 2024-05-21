<template>
	<h1>事件</h1>
	<p>单个事件注册(其他事件和原生基本一致)</p>
	<ul>
		<li><code>element.事件(function(){})</code></li>
		<li><code>$(“div”).click(function(){ 事件处理程序 })</code></li>

	</ul>
	<br>
	<h3>on()</h3>
	<p><code>on()</code> 可以一次绑定多个事件，也可以多次为同一个事件添加多个逻辑。</p>
	<pre v-code:js>element.on(events,[selector],fn(event))</pre>
	<ul>
		<li><code>events</code> 一个或多个用空格分隔的事件类型，如&quot;click&quot;或&quot;keydown&quot;</li>
		<li><code>selector</code> 元素的子元素选择器</li>
		<li><code>fn</code> 回调函数，即绑定在元素身上的侦听函数</li>
		<li><code>event</code> 事件对象。阻止默认行为：<code>event.preventDefault()</code> 或者 <code>return false</code>；阻止冒泡：
			<code>event.stopPropagation()</code>
		</li>

	</ul>
	<pre v-code:js>$(&#39;div&#39;).on({
    mouseover () { },
    mouseout () { },
    click () { }
})</pre>
	<p>如果事件处理程序相同：</p>
	<pre v-code:js>$(&quot;div&quot;).on(&quot;mouseenter mouseleave&quot;, function () {
    $(this).toggleClass(&quot;current&quot;)
})</pre>
	<p>可以做事件委派；也可以给动态创建出来的子元素绑定事件。</p>
	<pre v-code:js>$(&quot;ol&quot;).on(&quot;click&quot;, &quot;li&quot;, function () {
    alert(11)
})</pre>
	<br>
	<p>在 jQuery 中，可以使用如下两种方式，监听表单的提交事件：</p>
	<ul>
		<li><code>$(&#39;#form1&#39;).submit(function(e) { e.preventDefault() })</code></li>
		<li><code>$(&#39;#form1&#39;).on(&#39;submit&#39;, function(e) { e.preventDefault() })</code></li>

	</ul>
	<p><code>serialize()</code> 函数，简化表单中数据的获取操作，语法：<code>$(selector).serialize()</code>
		结果是以<code>&amp;</code>连接键值对的字符串：<code>username=用户名的值&amp;password=密码的值</code>。</p>
	<blockquote>
		<p>注意：使用 <code>serialize()</code> 函数获取表单数据时，必须为每个表单元素添加 name 属性！</p>
	</blockquote>
	<br>
	<h3>one()</h3>
	<p>one() 可以绑定只触发一次的事件。</p>
	<pre v-code:js>$(&quot;ol&quot;).one(&quot;click&quot;, &quot;li&quot;, function () {
    alert(11)
})</pre>
	<br>
	<h3>off()</h3>
	<p>off() 方法可以移除通过 on() 方法添加的事件处理程序。</p>
	<ul>
		<li><code>$(&quot;p&quot;).off()</code> 解绑p元素所有事件处理程序</li>
		<li><code>$(&quot;p&quot;).off(&quot;click&quot;)</code> 解绑p元素上面的点击事件</li>
		<li><code>$(&quot;ul&quot;).off(&quot;click&quot;, &quot;li&quot;)</code> 解绑事件委托</li>

	</ul>
	<br>
	<h3>hover()</h3>
	<p>事件切换：<code>hover([over,]out)</code></p>
	<p><code>over</code> 鼠标移到元素上要触发的函数(相当于mouseenter)</p>
	<p><code>out</code> 鼠标移出元素要触发的函数(相当于mouseleave)</p>
	<p>如果只写一个函数，则鼠标经过和离开都会触发它。</p>
	<br>
	<h3>trigger()</h3>
	<p>trigger() 自动触发事件。有些事件希望自动触发，比如轮播图自动播放功能跟点击右侧按钮一致。可以利用定时器自动触发右侧按钮点击事件，不必鼠标点击触发。</p>
	<ul>
		<li><code>element.click()</code> 简写形式</li>
		<li><code>element.trigger(&quot;click&quot;)</code> 与上等价</li>
		<li><code>element.triggerHandler(&quot;clock&quot;)</code> 该模式不会触发元素的默认行为</li>

	</ul>
	<pre v-code:js>$(&quot;p&quot;).on(&quot;click&quot;, function () {
    alert(&quot;hi~&quot;)
})

$(&quot;p&quot;).trigger(&quot;click&quot;)</pre>
	<br>
	<h3>ready()</h3>
	<p>jQuery 的入口函数，相当于原生 js 中的 DOMContentLoaded。有如下两种写法：</p>
	<pre v-code:js>$(function(){ ... })
$(document).ready(function(){ ... })</pre>
	<blockquote>
		<p>注意：入口函数可以写多个。</p>
	</blockquote>
	<br>
</template>
	
<script setup lang='ts'>

</script>
	
<style></style>