<template>
	<h1>ref()</h1>
	<p>接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 【.value】。</p>

	<pre v-code:ts>function ref&lt;T&gt;(value: T): Ref&lt;UnwrapRef&lt;T&gt;&gt;

interface Ref&lt;T&gt; {
  value: T
}</pre>

	<p>ref 对象是可更改的，也就是说你可以为 【.value】 赋予新的值。它也是响应式的，即所有对 【.value】 的操作都将被追踪，并且写操作会触发与之相关的副作用。</p>
	<p>和响应式对象的属性类似，ref 的 .value 属性也是响应式的。同时，当值为对象类型时，会用 reactive() 自动转换它的 .value。</p>

	<pre v-code:js>const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1</pre>

	<p>注意，在模板中使用 ref 时，不需要附加 【.value】。为了方便起见，当在模板中使用时，ref 会自动解包。也可以直接在事件监听器中改变一个 ref：</p>

	<pre v-code:html><div v-pre>&lt;button @click="count++"&gt;
  {{ count }}
&lt;/button&gt;
</div></pre>

	<p>对于更复杂的逻辑，我们可以在同一作用域内声明更改 ref 的函数，并将它们作为方法与状态一起公开：</p>

	<pre v-code:html><div v-pre>&lt;script setup&gt;
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="increment"&gt;
    {{ count }}
  &lt;/button&gt;
&lt;/template&gt;
</div></pre>


	<p>如果将一个对象赋值给 ref，那么这个对象将通过 【reactive()】 转为具有深层次响应式的对象。这也意味着如果对象中包含了嵌套的 ref，它们将被深层地解包。</p>

	<p>Ref 会使它的值具有深层响应性。这意味着即使改变嵌套对象或数组时，变化也会被检测到：</p>


	<pre v-code:js>
import { ref } from 'vue'

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function mutateDeeply() {
  // 以下都会按照期望工作
  obj.value.nested.count++
  obj.value.arr.push('baz')
}
</pre>
	<p>ref 被传递给函数或是从一般对象上被解构时，不会丢失响应性：</p>

	<pre v-code:js>
const obj = {
  foo: ref(1),
  bar: ref(2)
}

// 该函数接收一个 ref
// 需要通过 .value 取值
// 但它会保持响应性
callSomeFunction(obj.foo)

// 仍然是响应式的
const { foo, bar } = obj
</pre>
	<br>
	<h2>ref 解包细节</h2>

	<h6>⑴作为 reactive 对象的属性</h6>
	<p>一个 ref 会在作为响应式对象的属性被访问或修改时自动解包。换句话说，它的行为就像一个普通的属性：</p>

	<pre v-code:js>
const count = ref(0)
const state = reactive({
  count
})

console.log(state.count) // 0

state.count = 1
console.log(count.value) // 1


// 如果将一个新的 ref 赋值给一个关联了已有 ref 的属性，那么它会替换掉旧的 ref：
const otherCount = ref(2)

state.count = otherCount
console.log(state.count) // 2
// 原始 ref 现在已经和 state.count 失去联系
console.log(count.value) // 1
</pre>



	<h6>⑵数组和集合的注意事项</h6>
	<p>与 reactive 对象不同的是，当 ref 作为响应式数组或原生集合类型(如 【Map】) 中的元素被访问时，它<b>不会</b>被解包：</p>
	<pre v-code:js>
const books = reactive([ref('Vue 3 Guide')])
// 这里需要 .value
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// 这里需要 .value
console.log(map.get('count').value)
</pre>

	<h6>⑶在模板中解包的注意事项</h6>

	<p>在模板渲染上下文中，只有顶级的 ref 属性才会被解包。</p>
	<p>在下面的例子中【count】 和 【object】 是顶级属性，但 【object.id】 不是：</p>

	<pre v-code:html><div v-pre>&lt;script setup&gt;
const count = ref(0)
const object = { id: ref(1) }
&lt;/script&gt;

&lt;template&gt;
{{ count + 1 }}     // 因此，这个表达式按预期工作
{{ object.id + 1 }} // 但这个不会
&lt;/template&gt;
</div></pre>

	<p>渲染的结果将是 【[object Object]1】，因为在计算表达式时 【object.id】 没有被解包，仍然是一个 ref 对象。为了解决这个问题，我们可以将 【id】 解构为一个顶级属性：【const { id } =
		object】</p>

	<pre v-code:html><div v-pre>{{ id + 1 }} // 现在渲染的结果将是 2</div></pre>

	<p v-pre>另一个需要注意的点是，如果 ref 是文本插值的最终计算值 (即 【{{ }}】 标签)，那么它将被解包，因此以下内容将渲染为 【1】：</p>

	<pre v-code:html><div v-pre>{{ object.id }}</div></pre>

	<p v-pre>该特性仅仅是文本插值的一个便利特性，等价于 【{{ object.id.value }}】。</p>
</template>