<template>
	<h1>弹窗</h1>

	<p>可以在 JavaScript 中创建三种消息框：警告框、确认框、提示框。</p>
	<h3>警告框</h3>
	<p>警告框经常用于确保用户可以得到某些信息。</p>
	<p>当警告框出现后，用户需要点击确定按钮才能继续进行操作。</p>
	<pre v-code:js>window.alert(&quot;sometext&quot;);
</pre>
	<h3>确认框</h3>
	<p>确认框通常用于验证是否接受用户操作。</p>
	<p>当确认卡弹出时，用户可以点击 &quot;确认&quot; 或者 &quot;取消&quot; 来确定用户操作。当点击 &quot;确认&quot;, 确认框返回 true， 如果点击 &quot;取消&quot;, 确认框返回
		false。</p>
	<pre v-code:js>window.confirm(&quot;sometext&quot;);
</pre>
	<h3>提示框</h3>
	<p>提示框经常用于提示用户在进入页面前输入某个值。</p>
	<p>当提示框出现后，用户需要输入某个值，然后点击确认或取消按钮才能继续操纵。如果用户点击确认，那么返回值为输入的值。如果用户点击取消，那么返回值为 null。</p>
	<pre v-code:js>window.prompt(&quot;sometext&quot;,&quot;defaultvalue&quot;);
</pre>
	<blockquote>
		<p>注：alert() 和 prompt() 会跳过页面渲染先被执行。</p>
		<p>注：表单、prompt 获取的数据默认是字符串类型。</p>
	</blockquote>
</template>