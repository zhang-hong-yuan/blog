<template>
	<h1>:paused</h1>

	<p>‘:paused’ CSS伪类选择器表示一个处于“暂停”状态（即非“播放”状态）的可播放的元素，如 <code v-code:html>&lt;audio&gt;</code> 或 <code
			v-code:html>&lt;video&gt;</code>。</p>


	<pre>
				<code v-code:css>
:paused {
  /* ... */
}
				</code>
			</pre>

	<p>如果用户明确将资源暂停，或者资源处于非激活状态或其他非播放状态，如“已加载但尚未激活”，则该资源将被视为已暂停。</p>

</template>