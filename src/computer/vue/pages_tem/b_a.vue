<template>
	<h1>指令 directives</h1>

	<blockquote>初次刷新是先执行内层指令，切换路由是先执行外层指令</blockquote>
	<blockquote>同一元素上的多个指令，总是从左到右执行</blockquote>
	<p><strong>指令</strong>由 ‘v-’ 作为前缀，表明它们是一些由 Vue 提供的特殊 attribute。一个指令的任务是在其表达式的<strong>值</strong>变化时响应式地更新 DOM。</p>


	<img src="../assets/directive.png" alt="">



	<h2>参数 Arguments</h2>
	<p>某些指令会需要一个“参数”，在指令名后通过一个冒号隔开做标识。例如用 v-bind 指令来响应式地更新一个 HTML attribute：</p>

	<pre v-code:html>
&lt;a v-bind:href="url"&gt; ... &lt;/a&gt;
</pre>

	<p>这里 href 就是一个参数，它告诉 v-bind 指令将表达式 url 的值绑定到元素的 href attribute 上。</p>
	<br>
	<p><cite class="b">动态参数</cite>：同样在指令参数上也可以使用一个 JavaScript 表达式，需要包含在一对方括号内：</p>

	<pre v-code:html>
&lt;a v-bind:[attributeName]="url"&gt; ... &lt;/a&gt;
&lt;a v-on:[eventName]="doSomething"&gt; ... &lt;/a&gt;
</pre>

	<p>这里的 attributeName 会作为一个 JavaScript 表达式被动态执行，计算得到的值会被用作最终的参数。举例来说，如果你的组件实例有一个数据属性 attributeName，其值为
		"href"，那么这个绑定就等价于
		v-bind:href。</p>

	<p>在此示例中，当 eventName 的值是 "focus" 时，v-on:[eventName] 就等价于 v-on:focus。</p>

	<br>

	<p><b>动态参数值的限制：</b>动态参数中表达式的值应当是一个字符串，或者是 null。特殊值 null 意为显式移除该绑定。其他非字符串的值会触发警告。</p>
	<p><b>动态参数语法的限制 ：</b>动态参数表达式因为某些字符的缘故有一些语法限制，比如空格和引号，在 HTML attribute 名称中都是不合法的(可以使用计算属性替换)。例如下面的示例：</p>

	<pre v-code:html>
&lt;!-- 这会触发一个编译器警告 --&gt;
&lt;a :['foo' + bar]="value"&gt; ... &lt;/a&gt;
</pre>

	<p>当使用 DOM 内嵌模板 (直接写在 HTML 文件里的模板) 时，我们需要避免在名称中使用大写字母，因为浏览器会强制将其转换为小写：</p>

	<pre v-code:html>
&lt;a :[someAttr]="value"&gt; ... &lt;/a&gt;
</pre>
	<p>上面的例子将会在 DOM 内嵌模板中被转换为 :[someattr]。如果你的组件拥有 “someAttr” 属性而非 “someattr”，这段代码将不会工作。单文件组件内的模板不受此限制。</p>

	<h2>修饰符</h2>
	<p>修饰符是以点开头的特殊后缀，表明指令需要以一些特殊的方式被绑定。例如 .prevent 修饰符会告知 v-on 指令对触发的事件调用 event.preventDefault()。</p>

	<pre v-code:html>
&lt;form @submit.prevent="onSubmit"&gt;...&lt;/form&gt;
</pre>
</template>