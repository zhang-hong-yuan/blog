<template>
	<h1>事件类型</h1>
	<h3>鼠标事件</h3>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>鼠标事件</th>
					<th style='text-align:left;'>触发条件</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>click</td>
					<td style='text-align:left;'>鼠标点击左键触发</td>
				</tr>
				<tr>
					<td style='text-align:left;'>contextmenu</td>
					<td style='text-align:left;'>右键点击(在右键菜单显示前触发)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>dblclick</td>
					<td style='text-align:left;'>鼠标双击触发</td>
				</tr>
				<tr>
					<td style='text-align:left;'>focus</td>
					<td style='text-align:left;'>获得鼠标焦点触发</td>
				</tr>
				<tr>
					<td style='text-align:left;'>blur</td>
					<td style='text-align:left;'>失去鼠标焦点触发</td>
				</tr>
				<tr>
					<td style='text-align:left;'>mouseenter</td>
					<td style='text-align:left;'>鼠标移动到元素上时触发(不会冒泡)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>mouseleave</td>
					<td style='text-align:left;'>鼠标离开元素时触发(不会冒泡)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>mouseover</td>
					<td style='text-align:left;'>鼠标经过触发注：mouseover 鼠标经过自身盒子会触发，经过子盒子还会触发。mouseenter 只会经过自身盒子触发。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>mouseout</td>
					<td style='text-align:left;'>鼠标离开触发</td>
				</tr>
				<tr>
					<td style='text-align:left;'>mousemove</td>
					<td style='text-align:left;'>鼠标移动触发</td>
				</tr>
				<tr>
					<td style='text-align:left;'>mouseup</td>
					<td style='text-align:left;'>鼠标弹起触发</td>
				</tr>
				<tr>
					<td style='text-align:left;'>mousedown</td>
					<td style='text-align:left;'>鼠标按下触发</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p>移动端 click 事件会有 300ms 的延时，原因是移动端屏幕双击会缩放页面。解决方案：</p>
	<p>⑴.使用fastclick插件。<a href='https://github.com/ftlabs/fastclick' target='_blank'
			class='url'>https://github.com/ftlabs/fastclick</a></p>
	<p>⑵.禁用缩放。 浏览器禁用默认的双击缩放行为并且去掉 300ms 的点击延迟。</p>
	<pre v-code:js>&lt;meta name=&quot;viewport&quot; content=&quot;user-scalable=no&quot;&gt;
</pre>
	<p>⑶.用touch事件封装这个事件解决。</p>
	<ol>
		<li>当手指触摸屏幕，记录当前触摸时间。</li>
		<li>当手指离开屏幕，用离开的时间减去触摸的时间。</li>
		<li>如果时间小于150ms，并且没有滑动过屏幕，那么就定义为点击。</li>

	</ol>
	<pre v-code:js>//封装tap，解决click 300ms 延时
function tap(obj, callback) {
    var isMove = false;
    var startTime = 0; // 记录触摸时候的时间变量

    obj.addEventListener(&#39;touchstart&#39;, function(e) {
        startTime = Date.now(); // 记录触摸时间
    });

    obj.addEventListener(&#39;touchmove&#39;, function(e) {
       isMove = true; // 看看是否有滑动，有滑动算拖拽，不算点击
    });

    obj.addEventListener(&#39;touchend&#39;, function(e) {
        if (!isMove &amp;&amp; (Date.now() - startTime) &lt; 150) { // 如果手指触摸和离开时间小于150ms 算点击
           callback &amp;&amp; callback(); // 执行回调函数
        }

        isMove = false; // 取反 重置
        startTime = 0;
    });
}

tap(div, function() { //调用
    // 执行代码 
});
</pre>
	<h3>键盘事件</h3>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>键盘事件</th>
					<th style='text-align:left;'>触发条件</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>keydown</td>
					<td style='text-align:left;'>某个键盘按键被按下时触发(不区分字母大小写，全部会按照大写来识别)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>keypress</td>
					<td style='text-align:left;'>某个键盘按键被按下时触发(区分字母大小写)。但是它不识别功能键(ctrl、shift、箭头等)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>keyup</td>
					<td style='text-align:left;'>某个键盘按键被松开时触发(不区分字母大小写，全部会按照大写来识别)</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<blockquote>
		<p>三个事件的执行顺序是：keydown ➥ keypress ➥ keyup</p>
	</blockquote>
	<h3>窗口事件</h3>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>窗口事件</th>
					<th style='text-align:left;'>说明</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>pageshow</td>
					<td style='text-align:left;'>该事件在用户访问页面时触发</td>
				</tr>
				<tr>
					<td style='text-align:left;'>load</td>
					<td style='text-align:left;'>外部资源(如图片、外联CSS和JavaScript等)加载完毕时触发</td>
				</tr>
				<tr>
					<td style='text-align:left;'>DOMContentLoaded</td>
					<td style='text-align:left;'>HTML 文档加载和解析之后触发，无需等待样式表、图像等</td>
				</tr>
				<tr>
					<td style='text-align:left;'>resize</td>
					<td style='text-align:left;'>窗口尺寸改变时触发</td>
				</tr>
				<tr>
					<td style='text-align:left;'>scroll</td>
					<td style='text-align:left;'>滚动条滚动时触发(触发频率比<code>wheel</code>高)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>wheel</td>
					<td style='text-align:left;'>滚动鼠标滚轮时触发的事件(<code>wheel</code> 事件不一定会触发 <code>scroll</code> 事件)</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h3>表单事件</h3>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>表单事件</th>
					<th style='text-align:left;'>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>focus</td>
					<td style='text-align:left;'>当元素获得焦点时运行脚本</td>
				</tr>
				<tr>
					<td style='text-align:left;'>blur</td>
					<td style='text-align:left;'>当元素失去焦点时运行脚本</td>
				</tr>
				<tr>
					<td style='text-align:left;'>change</td>
					<td style='text-align:left;'>当元素改变时运行脚本</td>
				</tr>
				<tr>
					<td style='text-align:left;'>formchange</td>
					<td style='text-align:left;'>当表单改变时运行脚本</td>
				</tr>
				<tr>
					<td style='text-align:left;'>input</td>
					<td style='text-align:left;'>当元素获得用户输入时运行脚本</td>
				</tr>
				<tr>
					<td style='text-align:left;'>forminput</td>
					<td style='text-align:left;'>当表单获得用户输入时运行脚本</td>
				</tr>
				<tr>
					<td style='text-align:left;'>contextmenu</td>
					<td style='text-align:left;'>当触发上下文菜单时运行脚本</td>
				</tr>
				<tr>
					<td style='text-align:left;'>invalid</td>
					<td style='text-align:left;'>当元素无效时运行脚本</td>
				</tr>
				<tr>
					<td style='text-align:left;'>select</td>
					<td style='text-align:left;'>当选取元素时运行脚本</td>
				</tr>
				<tr>
					<td style='text-align:left;'>reset</td>
					<td style='text-align:left;'>当表单重置时运行脚本。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>submit</td>
					<td style='text-align:left;'>当提交表单时运行脚本</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h3>多媒体事件</h3>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>事件</th>
					<th style='text-align:left;'>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>loadeddata</td>
					<td style='text-align:left;'>加载视频/音频(audio/video)当前帧时触发。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>timeupdate</td>
					<td style='text-align:left;'>(audio/video)播放位置发生改变时触发。(每秒触发 4-66 次)</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h3>触屏事件</h3>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>触屏 touch 事件</th>
					<th style='text-align:left;'>说明</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>touchstart</td>
					<td style='text-align:left;'>手指触摸到一个 DOM 元素时触发</td>
				</tr>
				<tr>
					<td style='text-align:left;'>touchmove</td>
					<td style='text-align:left;'>手指在一个 DOM 元素上滑动时触发注意：手指移动会触发滚动屏幕，阻止默认的屏幕滚动 e.preventDefault();</td>
				</tr>
				<tr>
					<td style='text-align:left;'>touchend</td>
					<td style='text-align:left;'>手指从一个 DOM 元素上移开时触发</td>
				</tr>
			</tbody>
		</table>
	</figure>
</template>