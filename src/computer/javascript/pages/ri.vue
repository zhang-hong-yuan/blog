<template>
	<h1>Navigator</h1>


	<p>window.navigator 对象包含有关访问者浏览器的信息。<strong>window.navigator</strong> 对象在编写时可不使用 window 这个前缀。</p>
	<pre v-code:js>&lt;script&gt;
    txt = &quot;&lt;p&gt;浏览器代号: &quot; + navigator.appCodeName + &quot;&lt;/p&gt;&quot;;
    txt+= &quot;&lt;p&gt;浏览器名称: &quot; + navigator.appName + &quot;&lt;/p&gt;&quot;;
    txt+= &quot;&lt;p&gt;浏览器版本: &quot; + navigator.appVersion + &quot;&lt;/p&gt;&quot;;
    txt+= &quot;&lt;p&gt;启用Cookies: &quot; + navigator.cookieEnabled + &quot;&lt;/p&gt;&quot;;
    txt+= &quot;&lt;p&gt;硬件平台: &quot; + navigator.platform + &quot;&lt;/p&gt;&quot;;
    txt+= &quot;&lt;p&gt;用户代理: &quot; + navigator.userAgent + &quot;&lt;/p&gt;&quot;;
    txt+= &quot;&lt;p&gt;用户代理语言: &quot; + navigator.language + &quot;&lt;/p&gt;&quot;;
    document.getElementById(&quot;example&quot;).innerHTML=txt;
&lt;/script&gt;
</pre>
	<p>下面前端代码可以判断用户在哪个终端打开页面，实现跳转。</p>
	<pre v-code:js>if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS Symbian|Windows Phone)/i))) {
    window.location.href = &quot;&quot;; //手机
} else {
    window.location.href = &quot;&quot;; //电脑
}
</pre>

	<section class="warning">
		<header><strong>警告!!!</strong> 来自 navigator 对象的信息具有误导性，不应该被用于检测浏览器版本，这是因为：</header>
		<ul>
			<li>navigator 数据可被浏览器使用者更改</li>
			<li>一些浏览器对测试站点会识别错误</li>
			<li>浏览器无法报告晚于浏览器发布的新操作系统</li>

		</ul>
	</section>
</template>