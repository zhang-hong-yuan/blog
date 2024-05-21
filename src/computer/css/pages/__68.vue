<template>

	<h1>资源状态伪类</h1>

	<p>这些伪类应用于能够处于被描述为“正在播放”状态的媒体，例如视频。</p>

	<dl>
		<dt>‘:paused’</dt>
		<dd>该伪类选择器表示一个处于“暂停”状态（即非“播放”状态）的可播放的元素，如 <code v-code:html>&lt;audio&gt;</code> 或 <code
				v-code:html>&lt;video&gt;</code>。</dd>


		<dt>‘:playing’</dt>
		<dd>该伪类选择器表示一个处于“播放”状态的可播放元素，例如 <code v-code:html>&lt;audio&gt;</code> 或 <code
				v-code:html>&lt;video&gt;</code>。</dd>
	</dl>
</template>