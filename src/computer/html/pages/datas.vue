<template>

	<h1>data-*</h1>


	<p>‘data-*’ 全局属性 是一类被称为自定义数据属性的属性，它赋予我们在所有 HTML 元素上嵌入自定义数据属性的能力，并可以通过脚本在 HTML 与 DOM 表现之间进行专有数据的交换。</p>

	<p>‘data-*’ 属性用于存储私有页面的自定义数据。可以在所有的 HTML 元素中嵌入数据。自定义的数据可以让页面拥有更好的交互体验(不需要使用 Ajax 或去服务端查询数据)。注意：</p>
	<ul>
		<li>属性名不要包含大写字母，在 ‘*’ 必须至少有一个字符。</li>
		<li>属性值可以是任何字符串</li>
	</ul>


	<pre>
		<code v-code:html>
			&lt;element data-*=&quot;somevalue&quot;&gt;
		</code>
	</pre>


	<p>所有这些自定义数据属性都可以通过所属元素的 ‘HTMLElement’ 接口来访问。 ‘HTMLElement.dataset’ 属性可以访问它们。</p>


	<p>注意，‘HTMLElement.dataset’ 属性是一个 ‘DOMStringMap’，并且自定义数据属性 ‘data-test-value’ 可以通过 ‘HTMLElement.dataset.testValue’ (
		或者是 ‘HTMLElement.dataset["testValue"]’) 来访问，任何破折号都会被下个字母的大写替代 (驼峰拼写)。</p>




	<figure>
		<figcaption>用法</figcaption>

		<p>通过添加 ‘data-*’ 属性，即使是普通的 HTML 元素也能变成相当复杂且强大的编程对象。例如，在游戏里的太空船 ‘"sprite"’ 可以是一个带有一个 ‘class’ 属性和几个 ‘data-*’ 属性的简单
			‘&lt;img&gt;’ 元素：</p>


		<pre>
			<code v-code:html>
&lt;img
	class="spaceship cruiserX3"
	src="shipX3.png"
  onclick="spaceships[this.dataset.shipId].blasted()"

  data-ship-id="324"
	data-weapons="laserI laserII"
	data-shields="72%"
  data-x="414354"
	data-y="85160"
	data-z="31940"
/&gt;
			</code>
		</pre>
	</figure>
</template>