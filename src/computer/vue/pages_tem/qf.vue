<template>
	<h1>watchEffect()</h1>

	<p>侦听器的回调使用与源完全相同的响应式状态是很常见的，【watchEffect()】 可以自动跟踪回调的响应式依赖。</p>
	<p>立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。回调会立即执行，不需要指定 【immediate: true】。</p>
	<p>如果你需要侦听一个嵌套数据结构中的几个属性，【watchEffect()】 可能会比深度侦听器更有效，因为它将只跟踪回调中被使用到的属性，而不是递归地跟踪所有的属性。</p>
	<pre v-code:ts>function watchEffect(
  effect: (onCleanup: OnCleanup) => void,
  options?: WatchEffectOptions
): StopHandle

type OnCleanup = (cleanupFn: () => void) => void

interface WatchEffectOptions {
  flush?: 'pre' | 'post' | 'sync' // 默认：'pre'
  onTrack?: (event: DebuggerEvent) => void
  onTrigger?: (event: DebuggerEvent) => void
}

type StopHandle = () => void</pre>

	<p>第一个参数就是要运行的副作用函数。这个副作用函数的参数也是一个函数，用来注册清理回调。清理回调会在该副作用下一次执行前被调用，可以用来清理无效的副作用，例如等待中的异步请求 (参见下面的示例)。</p>
	<p>第二个参数是一个可选的选项，可以用来调整副作用的刷新时机或调试副作用的依赖。</p>

	<p>默认情况下，侦听器将在组件渲染之前执行。设置 【flush: 'post'】 将会使侦听器延迟到组件渲染之后再执行。详见回调的触发时机。在某些特殊情况下
		(例如要使缓存失效)，可能有必要在响应式依赖发生改变时立即触发侦听器。这可以通过设置 【flush: 'sync'】 来实现。然而，该设置应谨慎使用，因为如果有多个属性同时更新，这将导致一些性能和数据一致性的问题。</p>
	<ul class="mb0">
		<li>【watchEffect()】 使用 【flush: 'post'】 选项时的别名。</li>
		<li>【watchEffect()】 使用 【flush: 'sync'】 选项时的别名。</li>
	</ul>
	<p>返回值是一个用来停止该副作用的函数。</p>
	<br>
	<p><b>示例：</b></p>
	<pre v-code:js>const count = ref(0)

watchEffect(() => console.log(count.value))
// -> 输出 0

count.value++
// -> 输出 1</pre>

	<p>副作用清除：</p>
	<pre v-code:js>watchEffect(async (onCleanup) => {
  const { response, cancel } = doAsyncWork(id.value)
  // `cancel` 会在 `id` 更改时调用
  // 以便取消之前
  // 未完成的请求
  onCleanup(cancel)
  data.value = await response
})</pre>

	<p>停止侦听器：</p>
	<pre v-code:js>const stop = watchEffect(() => {})

// 当不再需要此侦听器时:
stop()</pre>

	<p>选项：</p>
	<pre v-code:js>watchEffect(() => {}, {
  flush: 'post',
  onTrack(e) {
    debugger
  },
  onTrigger(e) {
    debugger
  }
})</pre>
</template>