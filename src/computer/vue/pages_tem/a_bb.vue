<template>
	<h1>app.mount()</h1>
	<p>将应用实例挂载在一个容器元素中。应用实例必须在调用了 ‘.mount()’ 方法后才会渲染出来。</p>
	<pre v-code:ts>interface App {
  mount(rootContainer: Element | string): ComponentPublicInstance
}</pre>
	<p>参数可以是一个实际的 DOM 元素或一个 CSS 选择器 (使用第一个匹配到的元素)。返回根组件的实例。</p>

	<p>对于每个应用实例，‘mount()’ 仅能调用一次。</p>
	<pre v-code:js>import { createApp } from 'vue'
const app = createApp(/* ... */)

app.mount('#app')</pre>

	<p>也可以挂载到一个实际的 DOM 元素。</p>

	<pre v-code:js>app.mount(document.body.firstChild)</pre>

	<p>‘.mount()’ 方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册方法，它的返回值是<strong>根组件实例</strong>而非应用实例。</p>


	<br>
	<h4>DOM 中的根组件模板</h4>

	<p>根组件的模板通常是组件本身的一部分，但也可以直接通过在挂载容器内编写模板来单独提供：</p>

	<pre v-code:html><div v-pre>&lt;div id="app"&gt;
  &lt;button @click="count++"&gt;{{ count }}&lt;/button&gt;
&lt;/div&gt;
</div></pre>

	<pre v-code:js>
import { createApp } from 'vue'

const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})

app.mount('#app')
</pre>

	<p>当根组件没有设置 ‘template’ 选项时，Vue 将自动使用容器的 ‘innerHTML’ 作为模板。</p>

	<p>如果该组件有模板或定义了渲染函数，它将替换容器内所有现存的 DOM 节点。否则在运行时编译器可用的情况下，容器元素的 ‘innerHTML’ 将被用作模板。</p>

	<h2>多个应用实例</h2>

	<p>应用实例并不只限于一个。‘createApp’ API 允许在同一个页面中创建多个共存的 Vue 应用，而且每个应用都拥有自己的用于配置和全局资源的作用域。</p>

	<pre v-code:js>
const app1 = createApp({
  /* ... */
})
app1.mount('#container-1')

const app2 = createApp({
  /* ... */
})
app2.mount('#container-2')
</pre>


	<h1>app.unmount()</h1>
	<p>卸载一个已挂载的应用实例。卸载一个应用会触发该应用组件树内所有组件的卸载生命周期钩子。</p>
	<pre v-code:ts>interface App {
  unmount(): void
}</pre>
</template>