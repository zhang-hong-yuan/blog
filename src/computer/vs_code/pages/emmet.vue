<template>
	<h1>Emmet</h1>
	<p>Emmet语法的前身是Zen coding，它使用缩写，来提高 【html/css】 的编写速度，Vscode内部已经集成该语法。</p>
	<p>Vscode 快速格式化代码：【shift+alt+f】</p>
	<p>也可以设置当保存页面的时候自动格式化代码：</p>
	<ol>
		<li>文件 ⇒【首选项】⇒【设置】；</li>
		<li>搜索 emmet.include;</li>
		<li>在settings.json下的【工作区设置】中添加以下语句：</li>
	</ol>
	<pre v-code:json>&quot;editor.formatOnType&quot;: true,
&quot;editor.formatOnSave&quot;: true
</pre>
	<h2>快速生成HTML</h2>
	<p>生成标签，直接输入标签名，按tab键即可。比如 div 然后 tab 键，就可以生成 【&lt;div&gt; &lt;/div&gt;】。</p>
	<p>如果想要生成多个相同标签加上 【*】 就可以了 比如 div*3 就可以快速生成3个 div。</p>
	<p>如果有父子级关系的标签，可以用 【&gt;】，比如 【ul &gt; li】 就可以了。</p>
	<p>如果有兄弟关系的标签，用 【+】 就可以了，比如 【div+p】。</p>
	<p>如果生成带有类名【.】或者 id【#】属性的，直接写 .【demo】 或者 【#two】，tab 键就可以了。</p>
	<p>如果生成的 div 类名是有顺序的，可以用自增符号 【$】。【$】可以连续使用用零填充数字。</p>
	<pre v-code:html---1>ul&gt;li.list$$$*5 ⇒ tab
&lt;ul&gt;
  &lt;li class=&quot;list001&quot;&gt;&lt;/li&gt;
  &lt;li class=&quot;list002&quot;&gt;&lt;/li&gt;
  &lt;li class=&quot;list003&quot;&gt;&lt;/li&gt;
  &lt;li class=&quot;list004&quot;&gt;&lt;/li&gt;
  &lt;li class=&quot;list005&quot;&gt;&lt;/li&gt;
&lt;/ul&gt;
</pre>
	<p>使用操作符 【( )】 即可将部分节点分组形成一个整体，将 【( )】 内的节点与外面节点隔离，避免产生嵌套关系。</p>
	<p>使用操作符 【[ ]】 即可生成一个带有属性的标签，如输入 【div[name=syz age=18]】
		可生成如下代码片段：【&lt;div name=&quot;syz&quot; age=&quot;18&quot;&gt; &lt;/div&gt;】</p>
	<p>如果想要在生成的标签内部写内容可以用 【{ }】 表示。</p>
	<p>使用操作符 【^】
		即可生成一个父级兄弟节点，父级兄弟节点生成通常与子节点生成同时使用，如输入 【div&gt;span^p】 可生成如下代码片段：【&lt;div&gt;&lt;span&gt;&lt;/span&gt;&lt;/div&gt;
		&lt;p&gt;&lt;/p&gt;】
	</p>
	<h2>快速生成CSS</h2>
	<p>CSS 基本采取简写形式即可。</p>
	<p>比如 【w200】 按 【tab】 可以 生成 【width: 200px;】</p>
	<p>比如 【lh26px】 按 【tab】 可以生成 【line-height: 26px;】</p>
	<br>
</template>