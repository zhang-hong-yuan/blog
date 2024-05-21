<template>
	<h2>尺寸、位置操作</h2>


	<p>&nbsp;</p>
	<h3>元素可视区 client 系列</h3>
	<p>client 系列的相关属性可以动态的得到该元素的边框大小、元素大小等。</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>client 系列属性</th>
					<th style='text-align:left;'>作用</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>element.clientTop 和 element.clientLeft</td>
					<td style='text-align:left;'>返回元素上/左边框的大小(只读属性)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>element.clientWidth 和 element.clientHeight</td>
					<td style='text-align:left;'>返回自身包括padding、内容区的宽/高度，不含边框(只读属性)</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p>&nbsp;</p>
	<h3>元素滚动 scroll 系列</h3>
	<p>scroll 系列的相关属性可以动态的得到该元素的大小、滚动距离等。</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>scroll系列属性</th>
					<th style='text-align:left;'>作用</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>element.scrollTop 和 element.scrollLeft</td>
					<td style='text-align:left;'>返回被卷去的上/左侧距离(可读写)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>element.scrollWidth 和 element.scrollHeight</td>
					<td style='text-align:left;'>返回自身实际的宽/高度，不含边框(只读属性)</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<blockquote>
		<p>注：页面滚动的距离通过 window.pageXOffset 获得。</p>
		<p>滚动窗口至文档中的特定位置：window.scroll(x, y); 注意，不跟单位，直接写数字。</p>
	</blockquote>
	<h3>三大系列总结</h3>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>三大系列大小对比</th>
					<th style='text-align:left;'>作用</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>element.offsetWidth</td>
					<td style='text-align:left;'>content + padding + border</td>
				</tr>
				<tr>
					<td style='text-align:left;'>element.clientWidth</td>
					<td style='text-align:left;'>content + padding</td>
				</tr>
				<tr>
					<td style='text-align:left;'>element.scrollWidth</td>
					<td style='text-align:left;'>实际的宽度，不含边框</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p>注：返回的数值都不带单位。</p>
	<picture>
		<img src="../assets/offset_client_scroll.png" alt="offset_client_scroll.png">
	</picture>

	<h3>animation</h3>
	<pre>

	<code v-code:js>function animate(obj, target, callback) {
    // console.log(callback);  callback = function() {}  调用的时候 callback()

    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 步长值写到定时器的里面
        // 把我们步长值改为整数 不要出现小数的问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step &gt; 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            // if (callback) {
            //     // 调用函数
            //     callback();
            // }
            callback &amp;&amp; callback();
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + 'px';

    }, 15);
}
</code>
</pre>
	<p>&nbsp;</p>
	<h3>案例：产品图放大效果</h3>

	<pre>
	<code v-code:html>&lt;div class=&quot;pictrue&quot;&gt;
    &lt;div class=&quot;middle&quot;&gt;
        &lt;img&gt;
        &lt;div class=&quot;layer&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;small&quot;&gt;
        &lt;ul&gt;
            &lt;li class=&quot;active&quot;&gt;&lt;img&gt;&lt;/li&gt;
            &lt;li&gt;&lt;img&gt;&lt;/li&gt;
            &lt;li&gt;&lt;img&gt;&lt;/li&gt;
            &lt;li&gt;&lt;img&gt;&lt;/li&gt;
            &lt;li&gt;&lt;img&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
    &lt;div class=&quot;large&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
    const small = document.querySelector('.small')
    const middle = document.querySelector('.middle')
    const large = document.querySelector('.large')

    small.addEventListener('mouseover', function (e) {
        if (e.target.tagName `= 'IMG') {
            this.querySelector('.active').classList.remove('active')
            e.target.parentNode.classList.add('active')

            middle.querySelector('img').src = e.target.src
            large.style.backgroundImage = `url(${e.target.src})`
        }
    })


    middle.addEventListener('mouseenter', show)
    middle.addEventListener('mouseleave', hide)

    let timeId = null

    function show() {
        clearTimeout(timeId)
        large.style.display = 'block'
    }

    function hide() {
       timeId = setTimeout(() =&gt; large.style.display = 'none', 200)
    }

    large.addEventListener('mouseenter', show)
    large.addEventListener('mouseleave', hide)


    const layer = document.querySelector('.layer')

    middle.addEventListener('mouseenter', () =&gt; layer.style.display = 'block')
    middle.addEventListener('mouseleave', () =&gt; layer.style.display = 'none')

    middle.addEventListener('mousemove', function (e) {
        let x = e.pageX - middle.getBoundingClientRect().left
        let y = e.pageY - middle.getBoundingClientRect().top - document.documentElement.scrollTop

        if (x &gt;= 0 &amp;&amp; x &lt;= 400 &amp;&amp; y &gt;= 0 &amp;&amp; y &lt;= 400) {

            let mx = 0, my = 0
            if (x &lt; 100) mx = 0
            if (x &gt;= 100 &amp;&amp; x &lt;= 300) mx = x - 100
            if (x &gt; 300) mx = 200

            if (y &lt; 100) my = 0
            if (y &gt;= 100 &amp;&amp; y &lt;= 300) my = y - 100
            if (y &gt; 300) my = 200

            layer.style.left = mx + 'px'
            layer.style.top = my + 'px'

            // 大盒子的背景图片要跟随 中等盒子移动  存在的关系是 2倍
            large.style.backgroundPositionX = -2 * mx + 'px'
            large.style.backgroundPositionY = -2 * my + 'px'
        }
    })
&lt;/script&gt;
</code>

</pre>
	<h3>案例：模态框拖拽</h3>
	<ol>
		<li>点击弹出层，会弹出模态框，并且显示灰色半透明的遮挡层。</li>
		<li>点击关闭按钮，可以关闭模态框，并且同时关闭灰色半透明遮挡层。</li>
		<li>鼠标放到模态框最上面一行，可以按住鼠标拖拽模态框在页面中移动。</li>
		<li>鼠标松开，可以停止拖动模态框移动。</li>

	</ol>
	<pre>
	<code v-code:html>&lt;div&gt;&lt;a id=&quot;link&quot;&gt;点击，弹出登录框&lt;/a&gt;&lt;/div&gt;
&lt;div class=&quot;login&quot;&gt;
    &lt;div id=&quot;title&quot;&gt;登录会员&lt;a id=&quot;closeBtn&quot;&gt;关闭&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;
        &lt;div&gt;
            &lt;label&gt;用户名：&lt;/label&gt;
            &lt;input type=&quot;text&quot; placeholder=&quot;请输入用户名&quot;&gt;
        &lt;/div&gt;
        &lt;div&gt;
            &lt;label&gt;登录密码：&lt;/label&gt;
            &lt;input type=&quot;password&quot; placeholder=&quot;请输入登录密码&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div&gt;&lt;a&gt;登录会员&lt;/a&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;!-- 遮盖层 --&gt;
&lt;div id=&quot;bg&quot; class=&quot;login-bg&quot;&gt;&lt;/div&gt;

&lt;script&gt;
  var login = document.querySelector('.login');
  var mask = document.querySelector('.login-bg');
  var link = document.querySelector('#link');
  var closeBtn = document.querySelector('#closeBtn');
  var title = document.querySelector('#title');

  link.addEventListener('click', function () {
      mask.style.display = 'block';
      login.style.display = 'block';
  })

  closeBtn.addEventListener('click', function () {
      mask.style.display = 'none';
      login.style.display = 'none';
  })

  title.addEventListener('mousedown', function (e) {
      var x = e.pageX - login.offsetLeft;
      var y = e.pageY - login.offsetTop;

      document.addEventListener('mousemove', move)

      function move(e) {
          login.style.left = e.pageX - x + 'px';
          login.style.top = e.pageY - y + 'px';
      }

      document.addEventListener('mouseup', function () {
          document.removeEventListener('mousemove', move);
       })
  })
&lt;/script&gt;
</code>
</pre>
</template>