<template>
	<h1>单文件组件 SFC</h1>

	<p>一个 Vue 单文件组件 (<strong>SFC</strong>: Single-File Components)，通常使用 ‘*.vue’ 作为文件扩展名，它是一种使用了类似 HTML 语法的自定义文件格式，用于定义 Vue
		组件。一个 Vue
		单文件组件在语法上是兼容 HTML 的。</p>

	<p>每一个 ‘*.vue’ 文件都由三种顶层语言块构成：‘&lt;template&gt;’、‘&lt;script&gt;’ 和 ‘&lt;style&gt;’。Vue 的单文件组件会将一个组件的逻辑 (JavaScript)，模板
		(HTML) 和样式 (CSS) 封装在同一个文件里。下面是用单文件组件的格式写的计数器示例：</p>

	<pre v-code:html>
<div v-pre>&lt;script setup&gt;
import { ref } from 'vue'
const count = ref(0)
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="count++"&gt;Count is: {{ count }}&lt;/button&gt;
&lt;/template&gt;

&lt;style scoped&gt;
button {
  font-weight: bold;
}
&lt;/style&gt;</div>
</pre>


	<h2>src 导入</h2>
	<p>‘*.vue’ 组件也可以分散到多个文件中，可以为一个语块使用 ‘src’ 这个 attribute 来导入一个外部文件：</p>

	<pre v-code:html>
&lt;template src="./template.html"&gt;&lt;/template&gt;
&lt;style src="./style.css"&gt;&lt;/style&gt;
&lt;script src="./script.js"&gt;&lt;/script&gt;
</pre>

	<p>请注意 ‘src’ 导入和 JS 模块导入遵循相同的路径解析规则，这意味着：</p>

	<ul>
		<li>相对路径需要以 ‘./’ 开头</li>
		<li>也可以从 npm 依赖中导入资源</li>
	</ul>
	<pre v-code:html>
&lt;!-- 从所安装的 "todomvc-app-css" npm 包中导入一个文件 --&gt;
&lt;style src="todomvc-app-css/index.css" /&gt;
</pre>
	<br>
	<h2>自动名称推导</h2>
	<p>SFC 在以下场景中会根据文件名自动推导其组件名：</p>
	<ul>
		<li>开发警告信息中需要格式化组件名时；</li>
		<li>DevTools 中观察组件时；</li>
		<li>递归组件自引用时。例如一个名为 FooBar.vue 的组件可以在模板中通过 &lt;FooBar/&gt; 引用自己。(同名情况下) 这比明确注册/导入的组件优先级低。</li>
	</ul>

	<br>
	<h2>预处理器</h2>
	<p>代码块可以使用 ‘lang’ 这个 attribute 来声明预处理器语言，最常见的用例就是在 ‘&lt;script&gt;’ 中使用 TypeScript：</p>
	<pre v-code:html>&lt;script lang="ts"&gt;
  // use TypeScript
&lt;/script&gt;</pre>

	<p>‘lang’ 在任意块上都能使用，比如我们可以在 ‘&lt;style&gt;’ 标签中使用 Sass 或是 ‘&lt;template&gt;’ 中使用 Pug：</p>
	<pre v-code:html><div v-pre>&lt;template lang="pug"&gt;
p {{ msg }}
&lt;/template&gt;

&lt;style lang="scss"&gt;
  $primary-color: #333;
  body {
    color: $primary-color;
  }
&lt;/style&gt;</div></pre>
</template>