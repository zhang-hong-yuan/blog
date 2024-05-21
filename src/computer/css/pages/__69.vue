<template>
	<h1>:playing</h1>


	<p>‘:playing’ CSS 伪类选择器表示一个处于“播放”状态的可播放元素，例如 <code v-code:html>&lt;audio&gt;</code> 或 <code
			v-code:html>&lt;video&gt;</code>。</p>


	<pre>
				<code v-code:css>
:playing {
  /* ... */
}
				</code>
			</pre>

	<p>如果用户明确地启动了播放，那么资源就被认为是正在播放。如果元素的确处于播放状态，但由于与用户意图无关的原因而被暂停，也被认为是正在播放。在这种情况下，一旦底层原因（如“缓冲”或“停滞”状态）得到解决，播放将自动恢复。</p>
</template>