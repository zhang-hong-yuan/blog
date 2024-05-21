import{_ as t}from"./index-C58PDwY0.js";import{at as e}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const a="/blog/assets/url-D7oQBBA8.png",o={},n=e(`<h1>Ajax</h1><p>Ajax 的全称是 Asynchronous Javascript And XML（异步 JavaScript 和 XML）。通俗的理解：在网页中利用 XMLHttpRequest 对象和服务器进行数据交互的方式，就是Ajax。 </p><p>客户端与服务器之间的通信过程，分为 <strong><u>请求 – 处理 – 响应</u></strong> 三个步骤。网页中的每一个资源，都是通过 <strong><u>请求 – 处理 – 响应</u></strong> 的方式从服务器获取回来的。</p><p>要在网页中请求服务器上的数据资源，则需要用到 XMLHttpRequest 对象。XMLHttpRequest（简称 xhr）是浏览器提供的 js 成员，通过它，可以请求服务器上的数据资源。最简单的用法 <code>var xhrObj = new XMLHttpRequest()</code>。 </p><br><p>客户端请求服务器时，请求的方式有很多种，最常见的两种请求方式分别为 get 和 post 请求。</p><ul><li>get 请求通常用于获取服务端资源 (浏览器地址栏输入地址直接回车，默认是post请求)</li><li>post 请求通常用于向服务器提交数据</li></ul><br><p>使用 Ajax 请求数据时，被请求的 <strong>URL 地址</strong>，就叫做<strong style="color:tomato;">数据接口</strong>(简称接口)。同时，每个接口必须有请求方式(get、post)。</p><h2>URL</h2><p>URL(Uniform Resource Locators)统一资源定位器，是一个网页地址。URL可以由字母组成，如&quot;runoob.com&quot;，或互联网协议(IP)地址：192.68.20.50。大多数人进入网站使用网站域名来访问，因为名字比数字更容易记住。 </p><p>Web浏览器通过 URL 从 Web 服务器请求页面。当点击 HTML 页面中的某个链接时，对应的 <code>&lt;a&gt;</code> 标签指向万维网上的一个地址。一个统一资源定位器 (URL) 用于定位万维网上的文档。 </p><p>url 语法规则：</p><pre><code class="language-apl" lang="apl">scheme://host.domain:port/path/filename
</code></pre><ul><li><code>scheme</code> 客户端与服务器之间的通信协议。最常见的类型是 http</li><li><code>host</code> 定义域主机(http 的默认主机是 www)</li><li><code>domain</code> 定义因特网域名，即存有该资源的服务器名称。比如 runoob.com</li><li><code>:port</code> 定义主机上的端口号(http 的默认端口号是 80)</li><li><code>path</code> 定义服务器上的路径(如果省略，则文档必须位于网站的根目录中)。</li><li><code>filename</code> 定义文档/资源的名称</li></ul><figure><img src="`+a+`" alt="" style="width:70%;"></figure><p>常见的 URL Scheme：</p><figure><table><thead><tr><th style="text-align:left;">Scheme</th><th style="text-align:left;">访问</th><th style="text-align:left;">用于...</th></tr></thead><tbody><tr><td style="text-align:left;">http</td><td style="text-align:left;">超文本传输协议</td><td style="text-align:left;">以 http:// 开头的普通网页。不加密。</td></tr><tr><td style="text-align:left;">https</td><td style="text-align:left;">安全超文本传输协议</td><td style="text-align:left;">安全网页，加密所有信息交换。</td></tr><tr><td style="text-align:left;">ftp</td><td style="text-align:left;">文件传输协议</td><td style="text-align:left;">用于将文件下载或上传至网站。</td></tr><tr><td style="text-align:left;">file</td><td style="text-align:left;"> </td><td style="text-align:left;">您计算机上的文件。</td></tr></tbody></table></figure><blockquote><p>为了验证接口能否被正常被访问，常常需要使用接口测试工具，来对数据接口进行检测。接口测试工具能让我们在不写任何代码的情况下，对接口进行调用和测试。比如 PostMan：<a href="https://www.getpostman.com/downloads/" target="_blank" class="url">https://www.getpostman.com/downloads/</a></p></blockquote><p>接口文档，就是接口的说明文档，它是调用接口的依据。好的接口文档包含了接口URL，参数以及输出内容的说明。</p><br><p><strong>URL编码与解码</strong>：URL 地址中，只允许出现英文相关的字母、标点符号、数字，因此，在 URL 地址中不允许出现中文字符。如果 URL 中需要包含中文这样的字符，则必须对中文字符进行编码（转义）。 </p><p> URL编码的原则：使用安全的字符（没有特殊用途或者特殊意义的可打印字符）去表示那些不安全的字符。URL编码原则的通俗理解：使用英文字符去表示非英文字符。<code>http:...?id=1&amp;bookname=西游记</code> 经过 URL 编码之后，URL地址变成了如下格式：<code>http:...?id=1&amp;bookname=%E8%A5%BF%E6%B8%B8%E8%AE%B0</code></p><p>浏览器提供了 URL 编码与解码的 API，分别是：<code>encodeURI()</code> 编码的函数 <code>decodeURI()</code> 解码的函数。</p><pre><code class="language-javascript" lang="javascript">encodeURI(&#39;黑马程序员&#39;) // 输出字符串 %E9%BB%91%E9%A9%AC%E7%A8%8B%E5%BA%8F%E5%91%98
decodeURI(&#39;%E9%BB%91%E9%A9%AC&#39;) // 输出字符串  黑马
</code></pre><p>由于浏览器会自动对 URL 地址进行编码操作，因此，大多数情况下，程序员不需要关心 URL 地址的编码与解码操作。</p><br><p>同源策略（英文全称 Same origin policy）是浏览器提供的一个安全功能。同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。</p><p><strong>同源</strong>指的是两个页面的 URL 协议、域名、端口一致，反之，则是<strong>跨域</strong>。</p><blockquote><p>注意：浏览器允许发起跨域请求，但是，跨域请求回来的数据，会被浏览器拦截，无法被页面获取到！</p></blockquote><p>实现跨域数据请求，最主要的两种解决方案，分别是 JSONP 和 CORS：</p><ul><li>JSONP：出现的早，兼容性好（兼容低版本IE）。是前端程序员为了解决跨域问题，被迫想出来的一种临时解决方案。缺点是只支持 GET 请求，不支持 POST 请求。</li><li>CORS：出现的较晚，它是 W3C 标准，属于跨域 Ajax 请求的根本解决方案。支持 GET 和 POST 请求。缺点是不兼容某些低版本的浏览器。</li></ul><h2>JSONP</h2><p>JSONP (JSON with Padding) 是 JSON 的一种“使用模式”，可用于解决主流浏览器的跨域数据访问的问题。</p><p>由于浏览器同源策略的限制，网页中无法通过 Ajax 请求非同源的接口数据。但是 <code>&lt;script&gt;</code> 标签不受浏览器同源策略的影响，可以通过 src 属性，请求非同源的 js 脚本。</p><p>因此，JSONP 的实现原理，就是通过 <code>&lt;script&gt;</code> 标签的 src 属性，请求跨域的数据接口，并通过函数调用的形式，接收跨域接口响应回来的数据。</p><blockquote><p>注意：JSONP 和 Ajax 之间没有任何关系，不能把 JSONP 请求数据的方式叫做 Ajax，因为 JSONP 没有用到 XMLHttpRequest 这个对象。</p></blockquote><p>定义一个 success 回调函数：</p><pre><code class="language-html" lang="html">&lt;script&gt;
  function success(data) {
    console.log(&#39;获取到了data数据：&#39;)
    console.log(data)
  }
&lt;/script&gt;
</code></pre><p>通过 <code>&lt;script&gt;</code> 标签，请求接口数据：</p><pre><code class="language-html" lang="html">&lt;script src=&quot;http://ajax.frontend.itheima.net:3006/api/jsonp?callback=success&amp;name=zs&amp;age=20&quot;&gt;&lt;/script&gt;
</code></pre><br><p>jQuery 提供的 <code>$.ajax()</code> 函数，除了可以发起真正的 Ajax 数据请求之外，还能够发起 JSONP 数据请求，例如：</p><pre><code class="language-javascript" lang="javascript">$.ajax({
   url: &#39;http://ajax.frontend.itheima.net:3006/api/jsonp?name=zs&amp;age=20&#39;,
   // 如果要使用 $.ajax() 发起 JSONP 请求，必须指定 datatype 为 jsonp
   dataType: &#39;jsonp&#39;,
   jsonp: &#39;callback&#39;,    // 发送到服务端的参数名称，默认值为 callback
   jsonpCallback: &#39;abc&#39;, // 自定义的回调函数名称，默认值为 jQueryxxx 格式
   success: function(res) {
      console.log(res)
   }
})
</code></pre><p>默认情况下，使用 jQuery 发起 JSONP 请求，会自动携带一个 <code>callback=jQueryxxx</code> 的参数，<code>jQueryxxx</code> 是随机生成的一个回调函数名称。如果想要自定义 JSONP 的参数以及回调函数名称，可以通过 <code>jsonp</code> 和 <code>jsonpCallback</code> 两个参数来指定。</p><p>jQuery 中的 JSONP，也是通过 <code>&lt;script&gt;</code> 标签的 src 属性实现跨域数据访问的，只不过，jQuery 采用的是在 <code>&lt;head&gt;</code> 中动态创建和移除 <code>&lt;script&gt;</code> 标签的方式，来发起 JSONP 数据请求。</p><br><h2>JSON</h2><p>JSON是 <strong>J</strong>ava<strong>S</strong>cript <strong>O</strong>bject <strong>N</strong>otation 的缩写，是一种存储和传输数据的格式。经常在数据从服务器发送到网页时使用。</p><p>前端领域，经常提及的两种数据交换格式分别是 XML 和 JSON。其中 XML 用的非常少。</p><br><p>JSON 就是用字符串来表示 Javascript 的对象和数组。所以，JSON 中包含对象和数组两种结构，通过这两种结构的相互嵌套，可以表示各种复杂的数据结构。</p><p>JSON 格式在语法上与创建 JavaScript 对象的代码相同。语法规则：</p><ul><li>数据是名称/值对，由逗号分隔</li><li>JSON 中不能写注释</li><li>JSON 的最外层必须是对象或数组格式。花括号保存对象，方括号保存数组</li><li>JSON 名称需要双引号，JavaScript 名称不需要</li><li>数据类型只能是 number、string、boolean、null、array、object 6种类型 (不包括 undefined )</li></ul><br><p><code>JSON.parse()</code> 把 JSON 文本转换为 js 对象：<code>JSON.parse(&#39;{&quot;a&quot;: &quot;Hello&quot;, &quot;b&quot;: &quot;World&quot;}&#39;)</code></p><p><code>JSON.stringify()</code> 把 js 对象转换为 JSON 文本：<code>JSON.stringify({a: &#39;Hello&#39;, b: &#39;World&#39;})</code></p><blockquote><p>注意：<code>JSON.parse(null)</code> 的结果还是 <code>null</code>。</p></blockquote><br><h2>GET</h2><p>使用 xhr 发起 GET 请求步骤：</p><ol><li><p>创建 xhr 对象： <code>var xhr = new XMLHttpRequest()</code></p></li><li><p>调用 <code>xhr.open()</code> 函数，指定 <u>请求方式</u> 与 <u>URL地址</u>：<code>xhr.open(&#39;GET&#39;, &#39;URL&#39;)</code>。若要发起带参数的 GET 请求时，只需为 URL 地址指定参数即可。这种在 URL 地址后面拼接的参数，叫做查询字符串。 </p></li><li><p>调用 <code>xhr.send()</code> 函数，发起 Ajax 请求</p></li><li><p>监听 <code>xhr.onreadystatechange</code> 事件。监听 xhr 对象的请求状态 readyState ；与服务器响应的状态 status</p><pre><code class="language-javascript" lang="javascript">xhr.onreadystatechange = function () {
  
	// 注意：这个status和响应数据返回的status不是同一个。前者是判断条件的一部分；后者是返回数据的一部分
	if (xhr.readyState === 4 &amp;&amp; xhr.status === 200) {
		console.log(xhr.responseText) // 打印服务器响应回来的数据
	}
}
</code></pre></li></ol><br><p>查询字符串 (URL 参数) 是指在 URL 的末尾加上用于向服务器发送信息的字符串 (变量)。格式：将英文的 <strong style="color:brown;">?</strong> 放在URL 的末尾，然后再加上 <strong style="color:brown;">参数＝值</strong>，想加上多个参数的话，使用 <strong style="color:brown;">&amp;</strong> 符号进行分隔。以这个形式，可以将想要发送给服务器的数据添加到 URL 中。例如 <code>http://www.liulongbin.top:3006/api/getbooks?id=1&amp;bookname=西游记</code></p><p>无论使用 <code>$.ajax()</code>，还是使用 <code>$.get()</code>，又或者直接使用 xhr 对象发起 GET 请求，当需要携带参数的时候，本质上，都是直接将参数以查询字符串的形式，追加到 URL 地址的后面，发送到服务器的。</p><pre><code class="language-javascript" lang="javascript">$.get(&#39;url&#39;, {name: &#39;zs&#39;, age: 20}, function() {}) // 等价于
$.get(&#39;url?name=zs&amp;age=20&#39;, function() {})

$.ajax({ method: &#39;GET&#39;, url: &#39;url&#39;, data: {name: &#39;zs&#39;, age: 20}, success: function() {} }) // 等价于
$.ajax({ method: &#39;GET&#39;, url: &#39;url?name=zs&amp;age=20&#39;, success: function() {} })
</code></pre><br><p>XMLHttpRequest 对象的 readyState 属性，用来表示当前 Ajax 请求所处的状态。每个 Ajax 请求必然处于以下状态中的一个：</p><figure><table><thead><tr><th><strong>值</strong></th><th><strong>状态</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td>0</td><td>UNSENT</td><td>XMLHttpRequest 对象已被创建，但尚未调用 open方法。</td></tr><tr><td>1</td><td>OPENED</td><td>open() 方法已经被调用。</td></tr><tr><td>2</td><td>HEADERS_RECEIVED</td><td>send() 方法已经被调用，响应头也已经被接收。</td></tr><tr><td>3</td><td>LOADING</td><td>数据接收中，此时 response 属性中已经包含部分数据。</td></tr><tr><td>4</td><td>DONE</td><td>Ajax 请求完成，这意味着数据传输已经彻底完成或失败。</td></tr></tbody></table></figure><br><h2>POST</h2><p>使用 xhr 发起 POST 请求步骤：</p><ol><li><p>创建 xhr 对象：<code>var xhr = new XMLHttpRequest()</code></p></li><li><p>调用 <code>xhr.open()</code> 函数：<code>xhr.open(&#39;POST&#39;, &#39;url&#39;)</code></p></li><li><p>设置 <code>Content-Type</code> 属性 (固定写法)：<code>xhr.setRequestHeader(&#39;Content-Type&#39;, &#39;application/x-www-form-urlencoded&#39;)</code></p></li><li><p>调用 <code>xhr.send()</code> 函数，同时将数据以查询字符串的形式，提交给服务器：<code>xhr.send(&#39;bookname=水浒传&amp;author=施耐庵&amp;publisher=天津图书出版社&#39;)</code></p></li><li><p>监听 <code>xhr.onreadystatechange</code> 事件</p><pre><code class="language-javascript" lang="javascript">xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 &amp;&amp; xhr.status === 200) {
        console.log(xhr.responseText)
    }
}
</code></pre></li></ol><br><h2>XHR Level2</h2><p>旧版 XHR 的缺点：⓵只支持文本数据的传输，无法用来读取和上传文件；⓶传送和接收数据时，没有进度信息，只能提示有没有完成。</p><p>XHR Level2 的新功能：</p><ol><li>可以设置 HTTP 请求的时限</li><li>可以使用 FormData 对象管理表单数据</li><li>可以上传文件</li><li>可以获得数据传输的进度信息</li></ol><br><h3>timeout</h3><p>有时，Ajax 操作很耗时，而且无法预知要花多少时间。如果网速很慢，用户可能要等很久。新版本的 XMLHttpRequest 对象，增加了 timeout 属性，可以设置 HTTP 请求的时限。过了时限，就自动停止HTTP请求。与之配套的还有一个 timeout 事件，用来指定回调函数：</p><pre><code class="language-javascript" lang="javascript">xhr.timeout = 3000 // 将最长等待时间设为 3000 毫秒

xhr.ontimeout = function(event){
    alert(&#39;请求超时！&#39;)
}
</code></pre><br><h3>FormData</h3><p>Ajax 操作往往用来提交表单数据。为了方便表单处理，HTML5 新增了一个 FormData 对象，可以模拟表单操作：</p><pre><code class="language-javascript" lang="javascript">// 1. 新建 FormData 对象
var fd = new FormData()

// 2. 为 FormData 添加表单项
fd.append(&#39;uname&#39;, &#39;zs&#39;)
fd.append(&#39;upwd&#39;, &#39;123456&#39;)

// 3. 创建 XHR 对象
var xhr = new XMLHttpRequest()

// 4. 指定请求类型与URL地址
xhr.open(&#39;POST&#39;, &#39;http://www.liulongbin.top:3006/api/formdata&#39;)

// 5. 直接提交 FormData 对象，这与提交网页表单的效果，完全一样
xhr.send(fd)
</code></pre><p>FormData对象也可以用来获取网页表单的值：</p><pre><code class="language-javascript" lang="javascript">var form = document.querySelector(&#39;#form1&#39;)

form.addEventListener(&#39;submit&#39;, function(e) {
   e.preventDefault()
  
    // 根据 form 表单创建 FormData 对象，会自动将表单数据填充到 FormData 对象中
    var fd = new FormData(form)
    
    var xhr = new XMLHttpRequest()
    xhr.open(&#39;POST&#39;, &#39;http://www.liulongbin.top:3006/api/formdata&#39;)
    xhr.send(fd)
    xhr.onreadystatechange = function() {}
})
</code></pre><br><h3>上传文件</h3><p>新版 xhr 对象，不仅可以发送文本信息，还可以上传文件：</p><pre><code class="language-html" lang="html">&lt;input type=&quot;file&quot; id=&quot;file1&quot; /&gt;
&lt;button id=&quot;btnUpload&quot;&gt;上传文件&lt;/button&gt;
&lt;br /&gt;
&lt;!-- 显示上传成功的图片 --&gt;
&lt;img src=&quot;&quot; alt=&quot;&quot; id=&quot;img&quot; width=&quot;800&quot; /&gt;

&lt;script&gt;
	var btnUpload = document.querySelector(&#39;#btnUpload&#39;)

	btnUpload.addEventListener(&#39;click&#39;, function () {
		// 获取到用户选择的文件列表
		var files = document.querySelector(&#39;#file1&#39;).files
		if (files.length &lt;= 0) return alert(&#39;请选择要上传的文件！&#39;)

		var fd = new FormData()
		fd.append(&#39;avatar&#39;, files[0])
		var xhr = new XMLHttpRequest()

		// 请求类型必须为 POST
		xhr.open(&#39;POST&#39;, &#39;https://ajax-base-api-t.itheima.net/upload/avatar&#39;)
		xhr.send(fd)
		
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 &amp;&amp; xhr.status === 200) {
				var data = JSON.parse(xhr.responseText)
				if (data.status === 200) { // 上传成功
					document.querySelector(&#39;#img&#39;).src = &#39;https://ajax-base-api-t.itheima.net&#39; + data.url
				} else { // 上传失败
					console.log(&#39;图片上传失败！&#39; + data.message)
				}
			}
		}
	})
&lt;/script&gt;
</code></pre><br><h3>上传进度</h3><p>新版本的 XMLHttpRequest 对象中，可以通过监听 <code>xhr.upload.onprogress</code> 事件，来获取到文件的上传进度；通过监听 <code>xhr.upload.onload</code> 事件，来判断上传是否完成。语法格式如下：</p><pre><code class="language-javascript" lang="javascript">var xhr = new XMLHttpRequest()
// 监听 xhr.upload 的 onprogress 事件
xhr.upload.onprogress = function(e) {
  
   // e.lengthComputable 是一个布尔值，表示当前上传的资源是否具有可计算的长度
   if (e.lengthComputable) {
       // e.loaded 已传输的字节
       // e.total  需传输的总字节
       var percentComplete = Math.ceil((e.loaded / e.total) * 100)
   }
}

xhr.upload.onload = function() { ... }
</code></pre><br><h2>jQuery_Ajax</h2><p>浏览器中提供的 XMLHttpRequest 用法比较复杂，所以 jQuery 对 XMLHttpRequest 进行了封装，提供了一系列 Ajax 相关的函数，极大地降低了 Ajax 的使用难度。</p><p>jQuery 中发起 Ajax 请求最常用的方法有：$.get()、$.post() 和 $.ajax()</p><br><h3>$.get()</h3><p><code>$.get()</code> 函数的功能单一，专门用来发起 get 请求，从而将服务器上的资源请求到客户端来进行使用。语法如下：</p><pre><code class="language-javascript" lang="javascript">$.get(url, [data], [callback(res)])
</code></pre><ul><li><code>url</code> 必须。string类型，要请求的资源地址。</li><li><code>data</code> 可选。object类型，请求资源期间要携带的参数。</li><li><code>callback(res)</code> 可选。function类型，请求成功时的回调函数。回调函数的事件对象(res)就是服务器返回的数据。</li></ul><br><h3>$.post()</h3><p><code>$.post()</code> 函数的功能单一，专门用来发起 post 请求，从而向服务器提交数据。语法如下：</p><pre><code class="language-javascript" lang="javascript">$.post(url, [data], [callback(res)])
</code></pre><ul><li><code>url</code> 必须。string类型，提交数据的地址。</li><li><code>data</code> 可选。object类型，要提交的数据。</li><li><code>callback(res)</code> 可选。function类型，数据提交成功时的回调函数。回调函数的事件对象(res)就是服务器返回的数据。</li></ul><br><h3>$.ajax()</h3><p><code>$.ajax()</code> 函数，是一个功能比较综合的函数，允许对 Ajax 请求进行更详细的配置。语法如下：</p><pre><code class="language-javascript" lang="javascript">$.ajax({
    type: &#39;&#39;,        // 请求的方式，type 也可以写为 method。例如 GET 或 POST (不区分大小写)
    url: &#39;&#39;,         // 请求的 URL 地址
    async: true,     // 是否异步，默认是true表示异步
    dataType: json,  // 预期服务器返回的数据类型
    contentType: ,   // 设置请求头
    data: { },       // 可选。请求要携带的数据
    success(res){ }, // 请求成功之后的回调函数
    error(){ }.      // 请求失败时调用此函数
})
</code></pre><br><p>验证是否选择了文件</p><pre><code class="language-html" lang="html">&lt;script src=&quot;./jquery.js&quot;&gt;&lt;/script&gt;

&lt;input type=&quot;file&quot; id=&quot;file1&quot; /&gt;
&lt;button id=&quot;btnUpload&quot;&gt;上传&lt;/button&gt;


&lt;script&gt;
  $(&#39;#btnUpload&#39;).on(&#39;click&#39;, function() {
     // 将 jQuery 对象转化为 DOM 对象，并获取选中的文件列表
     var files = $(&#39;#file1&#39;)[0].files
     // 判断是否选择了文件
     if (files.length &lt;= 0)  return alert(&#39;请选择文件后再上传！‘)
     
     // 向 FormData 中追加文件
     var fd = new FormData()
     fd.append(&#39;avatar&#39;, files[0])
    
     $.ajax({
         method: &#39;POST&#39;,
         url: &#39;http://www.liulongbin.top:3006/api/upload/avatar&#39;,
         data: fd,
         // 不修改 Content-Type 属性，使用 FormData 默认的 Content-Type 值
         contentType: false,
         // 不对 FormData 中的数据进行 url 编码，而是将 FormData 数据原样发送到服务器
         processData: false,
         success: function(res) {
             console.log(res)
         }
     })
  })
&lt;/script&gt;
</code></pre><br><h3>loading</h3><p>Ajax 请求开始时，执行 <code>ajaxStart()</code>。可以在 ajaxStart 的 callback 中显示 loading 效果；</p><p>Ajax 请求结束时，执行 <code>ajaxStop()</code>。可以在 ajaxStop 的 callback 中隐藏 loading 效果：</p><pre><code class="language-javascript" lang="javascript">$(document).ajaxStart(function() {
    $(&#39;#loading&#39;).show()
})

$(document).ajaxStop(function() {
    $(&#39;#loading&#39;).hide()
})
</code></pre><blockquote><p>注意：自 jQuery 版本 1.8 起，该方法只能被附加到文档。 <code>$(document).ajaxStart()</code> 函数会监听当前文档内所有的 Ajax 请求。</p></blockquote><br><h2>Axios</h2><p>Axios 是专注于网络数据请求的库。相比于原生的 XMLHttpRequest 对象，axios 简单易用。相比于 jQuery，axios 更加轻量化，只专注于网络数据请求。</p><p>直接使用axios发起请求，axios 也提供了类似于 jQuery 中 $.ajax() 的函数，语法如下：</p><pre><code class="language-javascript" lang="javascript">axios({
    method: &#39;请求类型&#39;,
    url: &#39;请求的URL地址&#39;,
    params: { /* GET参数 */ },
    data: { /* POST数据 */ },
}).then(callback)
</code></pre><p> </p><h3>GET</h3><p>axios 发起 get 请求的语法 <code>axios.get(&#39;url&#39;, { params: { /*参数*/ } }).then(callback)</code></p><pre><code class="language-javascript" lang="javascript">var url = &#39;http://www.liulongbin.top:3006/api/get&#39;
var paramsObj = { name: &#39;zs&#39;, age: 20 }
axios.get(url, { params: paramsObj }).then(function(res) {
    var result = res.data // res.data 是服务器返回的数据
    console.log(res)
})
</code></pre><br><h3>POST</h3><p>axios 发起 post 请求的语法 <code>axios.post(&#39;url&#39;, { /*参数*/ }).then(callback)</code></p><pre><code class="language-javascript" lang="javascript">var url = &#39;http://www.liulongbin.top:3006/api/post&#39;
var dataObj = { location: &#39;北京&#39;, address: &#39;顺义&#39; }
axios.post(url, dataObj).then(function(res) {
    var result = res.data
    console.log(result)
})
</code></pre>`,136);function r(p,l){return n}const D=t(o,[["render",r]]);export{D as default};
