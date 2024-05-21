<template>
	<h1>事件对象</h1>
	<p>event 对象代表事件的状态，比如键盘按键的状态、鼠标的位置、鼠标按钮的状态。</p>
	<pre v-code:js>eventTarget.onclick = function(event) {} 
eventTarget.addEventListener(&#39;click&#39;, function(event) {})
</pre>
	<p>这个 event 就是事件对象，习惯的写成 e 或者 evt。是个形参，当注册事件时，event 对象就被系统自动创建，不需要传递实参。</p>
	<p>在 IE6~8 中，事件对象本身的获取存在兼容问题。解决: e = e || window.event;</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>事件对象属性方法</th>
					<th style='text-align:left;'>说明</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>e.target</td>
					<td style='text-align:left;'>返回触发事件的对象(标准)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>e.type</td>
					<td style='text-align:left;'>返回事件的类型，比如 click mouseover 不带 on</td>
				</tr>
				<tr>
					<td style='text-align:left;'>e.preventDefault()</td>
					<td style='text-align:left;'>该方法阻止默认事件(默认行为)标准，比如不让链接跳转或者让提交按钮不提交</td>
				</tr>
				<tr>
					<td style='text-align:left;'>e.returnValue</td>
					<td style='text-align:left;'>该属性阻止默认事件(默认行为)非标准 ie6-8使用，比如不让链接跳转<code>return false</code>
						也能阻止默认行为，没有兼容性问题。只限于传统的注册方式</td>
				</tr>
				<tr>
					<td style='text-align:left;'>e.stopPropagation()</td>
					<td style='text-align:left;'>阻止冒泡，标准。(捕获阶段也有效)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>e.cancelBubble = true;</td>
					<td style='text-align:left;'>该属性阻止冒泡 非标准 ie6-8使用</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<blockquote>
		<p>e.target 和 this 的区别：</p>
		<ul>
			<li>this 是事件绑定的元素，这个函数的调用者。</li>
			<li>e.target 是事件触发的元素。</li>

		</ul>
	</blockquote>
	<p>阻止事件冒泡的兼容性解决方案</p>
	<pre v-code:js>if(e &amp;&amp; e.stopPropagation){
    e.stopPropagation();
} else {
    window.event.cancelBubble = true;
}
</pre>
	<br>
	<p>事件委托也称为事件代理， 在 jQuery 里面称为事件委派。原理：事件监听器设置在父节点上，然后利用冒泡原理影响每个子节点。</p>
	<p>案例：tab栏切换</p>
	<pre v-code:html>&lt;div class=&quot;tab&quot;&gt;
    &lt;div class=&quot;tab-nav&quot;&gt;
        &lt;h3&gt;每日特价&lt;/h3&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a data-id=&quot;0&quot; class=&quot;active&quot;&gt;精选&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a data-id=&quot;1&quot;&gt;美食&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a data-id=&quot;2&quot;&gt;百货&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a data-id=&quot;3&quot;&gt;个护&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a data-id=&quot;4&quot;&gt;预告&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
    &lt;div class=&quot;tab-content&quot;&gt;
        &lt;div class=&quot;item active&quot;&gt;精选部分&lt;/div&gt;
        &lt;div class=&quot;item&quot;&gt;美食部分&lt;/div&gt;
        &lt;div class=&quot;item&quot;&gt;百货部分&lt;/div&gt;
        &lt;div class=&quot;item&quot;&gt;个护部分&lt;/div&gt;
        &lt;div class=&quot;item&quot;&gt;预告部分&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
    const ul = document.querySelector(&#39;.tab-nav ul&#39;)
    const items = document.querySelectorAll(&#39;.tab-content .item&#39;)

    ul.addEventListener(&#39;click&#39;, function (e) {
        if (e.target.tagName `= &#39;A&#39;) {
            document.querySelector(&#39;.tab-nav .active&#39;).classList.remove(&#39;active&#39;)
            e.target.classList.add(&#39;active&#39;)

            const i = +e.target.dataset.id
            document.querySelector(&#39;.tab-content .active&#39;).classList.remove(&#39;active&#39;)
            items[i].classList.add(&#39;active&#39;)
        }
    })
&lt;/script&gt;
</pre>
	<h3>鼠标事件对象</h3>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>鼠标事件对象</th>
					<th style='text-align:left;'>说明</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>offsetX 和 offsetY</td>
					<td style='text-align:left;'>鼠标相对于当前DOM元素左上角的位置</td>
				</tr>
				<tr>
					<td style='text-align:left;'>e.clientX 和 e.clientY</td>
					<td style='text-align:left;'>鼠标相对于浏览器窗口可视区的坐标</td>
				</tr>
				<tr>
					<td style='text-align:left;'>e.pageX 和 e.pageY</td>
					<td style='text-align:left;'>鼠标相对于文档页面的坐标。IE9+支持</td>
				</tr>
				<tr>
					<td style='text-align:left;'>e.screenX 和 e.screenY</td>
					<td style='text-align:left;'>鼠标相对于电脑屏幕的坐标</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p>禁止鼠标右键菜单：<code>document.addEventListener(&#39;contextmenu&#39;, function(e){e.preventDefault();})</code></p>
	<p>禁止鼠标选中：<code>document.addEventListener(&#39;selectstart&#39;, function(e){e.preventDefault();})</code></p>
	<h3>键盘事件对象</h3>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>键盘事件对象属性</th>
					<th style='text-align:left;'>说明</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>key (只读属性)</td>
					<td style='text-align:left;'>返回该键的名称</td>
				</tr>
				<tr>
					<td style='text-align:left;'>keyCode (已弃用)</td>
					<td style='text-align:left;'>返回该键的ASCⅡ值</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h3>触摸事件对象</h3>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>触摸列表</th>
					<th style='text-align:left;'>说明</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>touches</td>
					<td style='text-align:left;'>正在触摸屏幕的所有手指的一个列表</td>
				</tr>
				<tr>
					<td style='text-align:left;'>targetTouches</td>
					<td style='text-align:left;'>正在触摸当前 DOM 元素上的手指的一个列表当前手指的坐标值：targetTouches[0] 的 pageX 和 pageY</td>
				</tr>
				<tr>
					<td style='text-align:left;'>changedTouches</td>
					<td style='text-align:left;'>手指状态发生了改变的列表，从无到有，从有到无变化</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p>移动端拖动元素：</p>
	<pre v-code:js>var div = document.querySelector(&#39;div&#39;)

var startX = startY = 0
var x = y = 0

div.addEventListener(&#39;touchstart&#39;, function (e) {
    startX = e.targetTouches[0].pageX
    startY = e.targetTouches[0].pageY

    x = this.offsetLeft
    y = this.offsetTop
})

div.addEventListener(&#39;touchmove&#39;, function (e) {
    var moveX = e.targetTouches[0].pageX - startX
    var moveY = e.targetTouches[0].pageY - startY

    this.style.left = x + moveX + &#39;px&#39;
    this.style.top = y + moveY + &#39;px&#39;

    e.preventDefault()
})
</pre>
</template>