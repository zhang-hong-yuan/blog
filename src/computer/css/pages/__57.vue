<template>
	<h1>::before</h1>


	<p>CSS 中，‘::before’ 创建一个伪元素，其将成为匹配选中的元素的第一个子元素。常通过 ‘content’ 属性来为一个元素添加修饰性的内容。此元素默认为行内元素。</p>


	<pre>
		<code v-code:css>
::before {
  /* ... */
}
		</code>
	</pre>

	<section class="note">
		<strong>注意：</strong>
		由 ‘::before’ 和 ‘::after’ 生成的伪元素包含在元素格式框内，因此不能应用在替换元素上，比如 <code v-code:html.escape><img> 或 <br></code> 元素。
	</section>




	<h6>加入引用标记</h6>


	<p>使用 ‘::before’ 伪元素的一个简单示例就是用于加入引号。此处同时使用了 ‘::before’ 和 ‘::after’ 来插入引用性文本。</p>


	<pre>
		<code v-code:html.escape>
			<q>一些引用</q>, 他说，<q>比没有好。</q>.
		</code>
	</pre>

	<p>CSS</p>

	<pre>
	<code v-code:css>
		q::before {
  content: "«";
  color: blue;
}
q::after {
  content: "»";
  color: red;
}
	</code>
</pre>

	<figure id="demo-20240401-1950">
		<q>一些引用</q>, 他说，<q>比没有好。</q>.
	</figure>


	<h6>修饰实例</h6>

	<p>可以用几乎任何方法定义 ‘content’ 中的文字和图片样式。</p>


	<pre>
	<code v-code:html.escape>
		<span class="ribbon">Notice where the orange box is.</span>
	</code>
</pre>

	<p>CSS</p>
	<pre>
	<code v-code:css>
		.ribbon {
  background-color: #5bc8f7;
}

.ribbon::before {
  content: "Look at this orange box.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
	</code>
</pre>

	<p>结果：</p>

	<figure id="demo-20240404-0819">
		<span class="ribbon">Notice where the orange box is.</span>
	</figure>



	<h6>待办列表</h6>

	<p>在本例中将使用伪元素来创建一个简单的待办列表。这个方法也可用于 UI 的小幅度更改和用户体验的提升。</p>


	<pre>
		<code v-code:html.escape>
			<ul>
  <li>Buy milk</li>
  <li>Take the dog for a walk</li>
  <li>Exercise</li>
  <li>Write code</li>
  <li>Play music</li>
  <li>Relax</li>
</ul>
		</code>
	</pre>

	<p>CSS</p>

	<pre>
	<code v-code:css>
		li {
  list-style-type: none;
  position: relative;
  margin: 2px;
  padding: 0.5em 0.5em 0.5em 2em;
  background: lightgrey;
  font-family: sans-serif;
}

li.done {
  background: #ccff99;
}

li.done::before {
  content: "";
  position: absolute;
  border-color: #009933;
  border-style: solid;
  border-width: 0 0.3em 0.25em 0;
  height: 1em;
  top: 1.3em;
  left: 0.6em;
  margin-top: -1em;
  transform: rotate(45deg);
  width: 0.5em;
}
	</code>
</pre>

	<p>JavaScript</p>
	<pre>
	<code v-code:js>
		var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("done");
    }
  },
  false,
);
	</code>
</pre>

	<p>下面展示的是最终得到的结果。请注意没有使用任何图标，对勾标识实际上是使用 CSS 定义了样式的 ‘::before’ 伪元素。接下来建立几个待办事项来完成它们吧。</p>
	<figure id="demo-20240404-0823">
		<ul>
			<li>Buy milk</li>
			<li>Take the dog for a walk</li>
			<li>Exercise</li>
			<li>Write code</li>
			<li>Play music</li>
			<li>Relax</li>
		</ul>
	</figure>
</template>


<script setup>
	import { onMounted } from 'vue';

	onMounted(() => {
		var list = document.querySelector("ul");
		list.addEventListener(
			"click",
			function (ev) {
				if (ev.target.tagName === "LI") {
					ev.target.classList.toggle("done");
				}
			},
			false,
		);

	})
</script>