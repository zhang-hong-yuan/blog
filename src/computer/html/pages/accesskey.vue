<template>
	<h1>accesskey</h1>


	<p>accesskey 全局属性 提供了为当前元素生成快捷键的方式。属性值必须包含一个可打印字符。</p>

	<figure>
		<table>
			<tbody>
				<tr>
					<th>Browser</th>
					<th>Windows</th>
					<th>Mac</th>
				</tr>
				<tr>
					<td>Chrome</td>
					<td><kbd>Alt</kbd> + <kbd>key</kbd></td>
					<td><kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd>key</kbd></td>
				</tr>
				<tr>
					<td>Safari</td>
					<td><kbd>Alt</kbd> + <kbd>key</kbd></td>
					<td><kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd>key</kbd></td>
				</tr>
			</tbody>
		</table>
	</figure>

	<p>除了糟糕的浏览器支持之外， ‘accesskey’ 属性还有很多问题：</p>

	<ul>
		<li>‘accesskey’ 值可能与系统或浏览器键盘快捷键或辅助技术功能相冲突。对于一个操作系统来说，辅助技术和浏览器组合可能无法与其他操作系统协同工作。</li>

		<li>某些 ‘accesskey’ 值可能不会出现在某些键盘上，特别是在国际化是一个问题的时候。</li>

		<li>依赖于数字的 ‘accesskey’ 值可能会让那些经历认知问题的人感到困惑，因为他们的数字与它触发的功能没有逻辑关联。</li>

		<li>通知用户 ‘accesskeys’ 存在，这样他们就能意识到该功能。如果没有公开这些信息的方法，‘accesskeys’ 可能会被意外激活。</li>
	</ul>

	<p>由于这些问题，一般建议不要在大多数通用的网站和 web 应用程序中使用 ‘accesskey’ 属性。</p>

	<figure>
		<figcaption>示例</figcaption>

		<pre>
		<code v-code:html.escape>
<p>
  If you need to relax, press the
	<strong><u>S</u></strong>
	tress reliever!
</p>

<button accesskey="s">
	Stress reliever
</button>
		</code>
	</pre>

		<p>渲染结果：</p>

		<blockquote>
			<p>
				If you need to relax, press the <strong><u>S</u></strong>tress reliever!
			</p>

			<button accesskey="s">Stress reliever</button>
		</blockquote>
	</figure>

</template>