<template>
	<h1>&lt;Teleport&gt;</h1>
	<p>将其插槽内容渲染到 DOM 中的另一个位置。</p>

	<pre v-code:ts>
interface TeleportProps {
  // 必填项。指定目标容器。可以是选择器或实际元素。
  to: string | HTMLElement

  // 当值为 `true` 时，内容将保留在其原始位置，而不是移动到目标容器中。
  // 可以动态更改。
  disabled?: boolean
}
</pre>

	<br>
	<p>指定目标容器：</p>

	<pre v-code:html>
&lt;teleport to="#some-id" /&gt;
&lt;teleport to=".some-class" /&gt;
&lt;teleport to="[data-teleport]" /&gt;
</pre>

	<p>有条件地禁用：</p>

	<pre v-code:html>
&lt;teleport to="#popup" :disabled="displayVideoInline"&gt;
  &lt;video src="./my-movie.mp4"&gt;
&lt;/teleport&gt;
</pre>
</template>