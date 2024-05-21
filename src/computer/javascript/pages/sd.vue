<template>
	<h1>防抖/节流</h1>
	<p><strong>防抖(debounce)</strong>就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。</p>
	<p>使用场景：搜索框防抖。假设输入就发送请求，但不能每次输入都发送请求，输入比较快发送请求会比较多。可以设定一个时间，比如300ms。</p>
	<pre v-code:js>var timer = null

function debounceSearch(keywords) {
   timer = setTimeout(function() {
    	getSuggestList(keywords)
   }, 500)
}

$(&#39;#ipt&#39;).on(&#39;keyup&#39;, function() {
   clearTimeout(timer)
   // ...省略其他代码
   debounceSearch(keywords)
})
</pre>
	<br>
	<p><strong>节流(throttle)</strong>就是指连续触发事件但是在 n 秒中只执行一次函数。思路：刚触发的时间 - 开始触发的时间 &gt;= n 才去执行回调函数。</p>
	<pre v-code:js>const box = document.querySelector(&#39;.box&#39;)

let i = 1
function mouseMove() {
    box.innerHTML = i++
}

function throttle(fn, t = 500) {
    let startTime = 0
    return function () {
        let now = Date.now()
        if (now - startTime &gt;= t) {
            fn()
            startTime = now
        }
    }
}

box.addEventListener(&#39;mousemove&#39;, throttle(mouseMove, 500))
</pre>
	<p>使用定时器：</p>
	<pre v-code:js>var timer = null
$(document).on(&#39;mousemove&#39;, function (e) {
	if (timer) return  // 如果不为空，则证明距离上次执行间隔不足16毫秒
  
	timer = setTimeout(function () {
		$(angel).css(&#39;left&#39;, e.pageX + &#39;px&#39;).css(&#39;top&#39;, e.pageY + &#39;px&#39;)
		timer = null
	}, 16)
})
</pre>
	<p>&nbsp;</p>
	<p><strong>节流阀</strong>防止轮播图按钮连续点击造成播放过快。当上一个函数动画执行完毕，再去执行下一个函数动画，让事件无法连续触发。思路：添加一个变量来控制，锁住函数和解锁函数。</p>
	<ul>
		<li>开始在回调函数外面设置一个变量 <code>var flag = true</code></li>
		<li>在回调函数里面判断<code>if (flag) {flag = false; do something}</code> 关闭水龙头</li>
		<li>动画函数执行完毕，<code>flag = true</code> 打开水龙头</li>

	</ul>
	<p>&nbsp;</p>
	<p>Lodash 库实现节流和防抖：</p>
	<pre v-code:js>box.addEventListener(&#39;mousemov&#39;, _.debounce(mouseMove, 500))
box.addEventListener(&#39;mousemove&#39;, _.throttle(mouseMove, 500))
</pre>
	<p>案例：自动定位到上次播放位置</p>
	<pre v-code:js>const video = document.querySelector(&#39;video&#39;)

video.ontimeupdate = _.throttle(() =&gt; {
    localStorage.setItem(&#39;currentTime&#39;, video.currentTime)
}, 1000)

video.onloadeddata = () =&gt; {
    video.currentTime = localStorage.getItem(&#39;currentTime&#39;) || 0
}
</pre>
</template>