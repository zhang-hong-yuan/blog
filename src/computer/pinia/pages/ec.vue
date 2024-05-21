<template>
	<h1>订阅 action</h1>


	<p>可以通过 ‘【store.$onAction()】’ 来监听 action 和它们的结果。传递给它的【回调函数】会在 action 本身之【前::前/后】执行。 回调接收一个【对象】， 其包含被调用 action 的所有相关信息：
	</p>

	<ul>
		<li>‘【store】’: 【被调用的 store】</li>
		<li>‘【name】’: 【action 的名称】</li>
		<li>‘【args】’: 【传递给 action 的参数】</li>
	</ul>

	<pre v-code:js class="nocopy">someStore.$onAction(callback, [detached])</pre>

	<p>除此之外，它会接收两个函数， 允许在 action 【完成】或【失败】时执行的回调。这些函数对于追踪运行时错误非常有用，类似于Vue docs 中的这个提示。</p>

	<ul>
		<li>‘【after()】’ 表示在 promise 解决之后，允许在 action 解决后执行一个回调函数。</li>
		<li>‘【onError()】’ 允许在 action 抛出错误或 reject 时执行一个回调函数。</li>
	</ul>

	<pre v-code:js>
store.$onAction(({ after, onError }) => {
 // 你可以在这里创建所有钩子之间的共享变量，
 // 同时设置侦听器并清理它们。
 after((resolvedValue) => {
   // 可以用来清理副作用 
   // `resolvedValue` 是 action 返回的值，
   // 如果是一个 Promise，它将是已经 resolved 的值
 })
 onError((error) => {
   // 可以用于向上传递错误
 })
})
</pre>

	<p>它会返回一个用来【删除】回调的函数。</p>


	<p>这里有一个例子，在运行 action 之前以及 action resolve/reject 之后打印日志记录。</p>


	<pre v-code:js>
const unsubscribe = someStore.$onAction(
  ({
    【store】,   // store 实例，类似 `someStore`
    【name】,    // action 名称
    【args】,    // 传递给 action 的参数数组
    【after】,   // 在 action 返回或解决后的钩子
    【onError】, // action 抛出或拒绝的钩子
  }) => {
    // 为这个特定的 action 调用提供一个共享变量
    const startTime = Date.now()
    // 这将在执行 "store "的 action 之前触发。
    console.log(`Start "${name}" with params [${args.join(', ')}].`)

    // 这将在 action 成功并完全运行后触发。
    // 它等待着任何返回的 promise
    after((result) => {
      console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}.`
      )
    })

    // 如果 action 抛出或返回一个拒绝的 promise，这将触发
    onError((error) => {
      console.warn(
        `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
      )
    })
  }
)

// 手动删除监听器
unsubscribe()
</pre>

	<p>默认情况下，action 订阅器会被绑定到添加它们的组件上(如果 store 在组件的 ‘setup()’ 内)。这意味着，当该组件被卸载时，它们将被自动删除。如果想在组件卸载后依旧保留它们，请将 ‘true’
		作为第二个参数传递给 action 订阅器，以便将其从当前组件中分离：</p>


	<pre v-code:js>
&lt;script setup&gt;
const someStore = useSomeStore()
// 此订阅器即便在组件卸载之后仍会被保留
someStore.$onAction(callback, 【true】)
&lt;/script&gt;
</pre>
</template>