<template>
	<h1>浏览器私有前缀</h1>
	<p>浏览器的组成</p>
	<ul>
		<li><strong>渲染引擎</strong>：用来解析HTML与CSS，俗称内核，比如chrome浏览器的blink，老版本的webkit</li>
		<li><strong>JS引擎</strong>：也称为JS解释器。用来读取网页中的JavaScript代码，对其处理后运行，比如chrome浏览器的V8</li>

	</ul>
	<p>浏览器私有前缀是为了兼容老版本的写法，比较新版本的浏览器无须添加。</p>
	<ul>
		<li>-ms-：代表 ie 浏览器私有属性</li>
		<li>-moz-：代表 firefox 浏览器私有属性</li>
		<li>-o-：代表 Opera 私有属性</li>
		<li>-webkit-：代表 safari、chrome 私有属性</li>

	</ul>
	<pre v-code:css>/* 先写私有前缀的，然后再写没有前缀的 */
-moz-border-radius: 10px; 
-o-border-radius: 10px; 
-webkit-border-radius: 10px; 

border-radius: 10px;</pre>
	<p>去除点击高亮：</p>
	<pre v-code:css>-webkit-tap-highlight-color: rgba(0, 0, 0, 0);</pre>
	<p>去除滚动条：</p>
	<pre v-code:css>nav::-webkit-scrollbar {
  display: none;
}</pre>
	<h1>其他</h1>
	<h2>对话</h2>
	<p>即人名右对齐，内容左对齐。类名为：dialogue</p>
	<pre v-code:css>ul.dialogue {
    display: table;
    padding: 0;
}

ul.dialogue li {
    display: table-row;
    margin-bottom: 12px;
    line-height: 1.4;
}

ul.dialogue li mark {
    display: table-cell;
    background-color: transparent;
    padding: 0 0 12px;
    font-size: 16px;
}

ul.dialogue li mark:first-child {
    padding: 0 10px 12px 0;
    text-align: right;
}

ul.dialogue li:last-child mark {
    padding-bottom: 0;
}</pre>
	<h2>junior</h2>
	<pre v-code:css>main {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    overflow: hidden;
}

main&gt;article,
main&gt;aside {
    width: 55vw;
    height: 100%;
    overflow: hidden auto;
}

main&gt;aside {
    width: 45vw;
}

article header {
    display: none;
}

article&gt;div {
    margin: 10px;
    padding: 16px;
    border-radius: 12px;
    border: 2px solid transparent;
    background-color: #f7f6f3;
}

article h1 {
    font-weight: normal;
    font-size: 30px;
    text-align: center;
}

article p {

    line-height: 2;
    text-indent: 2em;
}

.left {
    text-align: left;
}

article p.left {
    text-indent: 0;
}

.right {
    text-align: right;
}


article p.right {
    text-align: right;
}

article dfn {
    padding: 0px;
    border-radius: 3px;
    font-style: normal;
    color: #c54282;
}

@keyframes bgcolor {

    0%,
    50% {
        background-color: #bbb;
    }

    100% {}
}

aside section {
    padding: 12px;
    padding-top: 0;
    margin: 10px;
    margin-left: 0;
    overflow: hidden;
    border-radius: 10px;
    border: 2px solid transparent;
    background-color: #f7f6f3;
}

@keyframes border {

    0%,
    50% {
        border: 2px solid #888;
    }

    100% {}
}

aside section h4 {
    width: 120%;
    margin: 0 0 10px -20px;
    padding: 20px 0 10px;
    background-color: #ddd;
    font-size: 22px;
    text-indent: 20px;
}

aside section p {
    line-height: 1.8;
}

aside section p+table {
    margin-top: -14px;
}

aside section p.a {
    margin-left: 20px;
    margin-bottom: 1.5em;
    padding-left: 10px;
    border-left: 5px solid #b84d4e;
    line-height: 1.2;
}

aside section p.a a {
    padding-right: 16px;
}

aside section .left_brace+dl,
aside section dl+p {
    margin-top: 1.8em;
}

aside section dt {
    margin-bottom: 16px;
}

aside section dd {
    margin-left: 26px;
    margin-bottom: 16px;
    color: #666;
}

aside section dd+dt {
    margin-top: 30px;
}

aside section code {
    padding: 1px 5px;
    border-radius: 5px;
    background-color: #b84d4e;
    color: ivory;
}

aside section table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 30px;
}

aside section table th,
aside section table td {
    padding: 3px 6px;
    border: 1px solid #888;
}

aside section table th {
    background-color: #ccc;
}</pre>
	<h1></h1>
</template>
	
<script setup lang='ts'>

</script>
	
<style></style>