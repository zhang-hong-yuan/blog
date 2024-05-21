<template>
	<h1>watch()</h1>

	<p>计算属性允许我们声明性地计算衍生值。然而在有些情况下，我们需要在状态变化时执行一些“副作用”：例如更改 DOM，或是根据异步操作的结果去修改另一处的状态。</p>

	<p>侦听一个或多个响应式数据源，并在数据源变化时调用所给的回调函数。</p>
	<p>【watch()】 默认是懒侦听的，即仅在侦听源发生变化时才执行回调函数。</p>
	<pre v-code:ts>// 侦听单个来源
function watch&lt;T&gt;(
  source: WatchSource&lt;T&gt;,
  callback: WatchCallback&lt;T&gt;,
  options?: WatchOptions
): StopHandle

// 侦听多个来源
function watch&lt;T&gt;(
  sources: WatchSource&lt;T&gt;[],
  callback: WatchCallback&lt;T[]&gt;,
  options?: WatchOptions
): StopHandle


type WatchCallback&lt;T&gt; = (
  value: T,
  oldValue: T,
  onCleanup: (cleanupFn: () =&gt; void) =&gt; void
) =&gt; void

type WatchSource&lt;T&gt; =
  | Ref&lt;T&gt; // ref
  | (() =&gt; T) // getter
  | T extends object
  ? T
  : never // 响应式对象

interface WatchOptions extends WatchEffectOptions {
  immediate?: boolean // 默认：false
  deep?: boolean // 默认：false
  flush?: 'pre' | 'post' | 'sync' // 默认：'pre'
  onTrack?: (event: DebuggerEvent) => void
  onTrigger?: (event: DebuggerEvent) => void
}</pre>

	<blockquote>
		<p>为了便于阅读，对类型进行了简化。</p>
	</blockquote>

	<p>第一个参数是侦听器的源。这个来源可以是以下几种：</p>
	<ul class="mb0">
		<li>一个函数，返回一个值</li>
		<li>一个 ref</li>
		<li>一个响应式对象</li>
		<li>...或是由以上类型的值组成的数组</li>
	</ul>


	<p>第二个参数是在发生变化时要调用的回调函数。这个回调函数接受三个参数：新值、旧值，以及一个用于注册副作用清理的回调函数。该回调函数会在副作用下一次重新执行前调用，可以用来清除无效的副作用，例如等待中的异步请求。</p>
	<p>当侦听多个来源时，回调函数接受两个数组，分别对应来源数组中的新值和旧值。</p>

	<p>第三个可选的参数是一个对象，支持以下这些选项：</p>
	<ul class="mb0">
		<li><b>【immediate】</b>：在侦听器创建时立即触发回调。第一次调用时旧值是 【undefined】。</li>
		<li><b>【deep】</b>：如果源是对象，强制深度遍历，以便在深层级变更时触发回调。</li>
		<li><b>【flush】</b>：调整回调函数的刷新时机。</li>
		<li><b>【onTrack / onTrigger】</b>：调试侦听器的依赖。</li>
	</ul>
	<br>
	<p><b>示例：</b>侦听一个 getter 函数</p>
	<pre v-code:js>const state = reactive({ count: 0 })
watch(
  () => state.count,
  (count, prevCount) => {
    /* ... */
  }
)</pre>
	<p>侦听一个 ref：</p>
	<pre v-code:js>const count = ref(0)
watch(count, (count, prevCount) => {
  /* ... */
})</pre>

	<p>当侦听多个来源时，回调函数接受两个数组，分别对应来源数组中的新值和旧值：</p>
	<pre v-code:js>watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
  /* ... */
})</pre>
	<p>当使用 getter 函数作为源时，回调只在此函数的返回值变化时才会触发。如果想让回调在深层级变更时也能触发，需要使用 【{ deep: true }】
		强制侦听器进入深层级模式。在深层级模式时，如果回调函数由于深层级的变更而被触发，那么新值和旧值将是同一个对象。</p>
	<pre v-code:js>const state = reactive({ count: 0 })
watch(
  () => state,
  (newValue, oldValue) => {
    // newValue === oldValue
  },
  { deep: true }
)</pre>
	<p>当直接侦听一个响应式对象时，侦听器会自动启用深层模式：</p>
	<pre v-code:js>const state = reactive({ count: 0 })
watch(state, () => {
  /* 深层级变更状态所触发的回调 */
})</pre>

	<p>注意，不能直接侦听响应式对象的属性值，例如:</p>
	<pre v-code:js>
const obj = reactive({ count: 0 })

// 错误，因为 watch() 得到的参数是一个 number
watch(obj.count, (count) => {
  console.log(`count is: ${count}`)
})
</pre>

	<p>改写为一个返回该属性的 getter 函数即可：</p>
	<pre v-code:js>
// 提供一个 getter 函数
watch(
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`)
  }
)
</pre>
	<br>
	<p>【watch()】 和 【watchEffect()】 享有相同的刷新时机和调试选项。与 【watchEffect()】 相比，【watch()】 可以：</p>
	<ul class="mb0">
		<li>懒执行副作用；</li>
		<li>更加明确是应该由哪个状态触发侦听器重新执行；</li>
		<li>可以访问所侦听状态的前一个值和当前值。</li>
	</ul>
	<pre v-code:js>watch(source, callback, {
  flush: 'post',
  onTrack(e) {
    debugger
  },
  onTrigger(e) {
    debugger
  }
})</pre>

	<p>停止侦听器：</p>
	<pre v-code:js>const stop = watch(source, callback)

// 当已不再需要该侦听器时：
stop()</pre>

	<p>副作用清理：</p>
	<pre v-code:js>watch(id, async (newId, oldId, onCleanup) => {
  const { response, cancel } = doAsyncWork(newId)
  // 当 `id` 变化时，`cancel` 将被调用，
  // 取消之前的未完成的请求
  onCleanup(cancel)
  data.value = await response
})</pre>
</template>