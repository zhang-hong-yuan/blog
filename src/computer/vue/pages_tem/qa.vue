<template>
	<h1>reactive()</h1>


	<p>返回一个对象的响应式代理。响应式转换是“深层”的：它会影响到所有嵌套的属性。一个响应式对象也将深层地解包任何 ref 属性，同时保持响应性。</p>

	<p>响应式对象是 JavaScript 代理，其行为就和普通对象一样。不同的是，Vue 能够拦截对响应式对象所有属性的访问和修改，以便进行依赖追踪和触发更新。</p>
	<pre v-code:ts>function reactive&lt;T extends object&gt;(target: T): UnwrapNestedRefs&lt;T&gt;</pre>



	<p>若要避免深层响应式转换，只想保留对这个对象顶层次访问的响应性，请使用 【shallowReactive()】 作替代。</p>
	<p>返回的对象以及其中嵌套的对象都会通过 【ES Proxy】 包裹，因此不等于源对象，建议只使用响应式代理，避免使用原始对象。</p>

	<br>
	<p><b>示例：</b>创建一个响应式对象</p>
	<pre v-code:js>const obj = reactive({ count: 0 })
obj.count++</pre>

	<p>ref 的解包：</p>
	<pre v-code:js>const count = ref(1)
const obj = reactive({ count })

// ref 会被解包
console.log(obj.count === count.value) // true

// 会更新 `obj.count`
count.value++
console.log(count.value) // 2
console.log(obj.count) // 2

// 也会更新 `count` ref
obj.count++
console.log(obj.count) // 3
console.log(count.value) // 3</pre>

	<p>注意！当访问到某个响应式数组或 Map 这样的原生集合类型中的 ref 元素时，不会执行 ref 的解包：</p>
	<pre v-code:js>const books = reactive([ref('Vue 3 Guide')])
// 这里需要 .value
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// 这里需要 .value
console.log(map.get('count').value)</pre>

	<p>将一个 ref 赋值给一个 reactive 属性时，该 ref 会被自动解包：</p>
	<pre v-code:js>const count = ref(1)
const obj = reactive({})

obj.count = count

console.log(obj.count) // 1
console.log(obj.count === count.value) // true</pre>


	<br>
	<h2>Reactive Proxy vs. Original</h2>
	<p>值得注意的是，【reactive()】 返回的是一个原始对象的 Proxy，它和原始对象是不相等的：</p>

	<pre v-code:js>
const raw = {}
const proxy = reactive(raw)

// 代理对象和原始对象不是全等的
console.log(proxy === raw) // false
</pre>

	<p>只有代理对象是响应式的，更改原始对象不会触发更新。因此，使用 Vue 的响应式系统的最佳实践是 <b>仅使用声明对象的代理版本</b>。</p>

	<p>这个规则对嵌套对象也适用。依靠深层响应性，响应式对象内的嵌套对象依然是代理：</p>

	<pre v-code:js>
const proxy = reactive({})

const raw = {}
proxy.nested = raw

console.log(proxy.nested === raw) // false
</pre>
	<p>为保证访问代理的一致性，对同一个原始对象调用 【reactive()】 会总是返回同样的代理对象，而对一个已存在的代理对象调用 【reactive()】 会返回其本身：</p>

	<pre v-code:js>
// 在同一个对象上调用 reactive() 会返回相同的代理
console.log(reactive(raw) === proxy) // true

// 在一个代理上调用 reactive() 会返回它自己
console.log(reactive(proxy) === proxy) // true
</pre>

	<br>
	<h2>reactive() 的局限性</h2>

	<h6>⑴有限的值类型：</h6>
	<p>它只能用于对象类型 (对象、数组和如 【Map】、【Set】 这样的集合类型)。它不能持有如 【string】、【number】 或 【boolean】 这样的原始类型。</p>

	<h6>⑵不能替换整个对象：</h6>
	<p>由于 Vue 的响应式跟踪是通过属性访问实现的，因此我们必须始终保持对响应式对象的相同引用。这意味着我们不能轻易地“替换”响应式对象，因为这样的话与第一个引用的响应性连接将丢失：</p>

	<pre v-code:js>
let state = reactive({ count: 0 })

// 上面的 ({ count: 0 }) 引用将不再被追踪
// (响应性连接已丢失！)
state = reactive({ count: 1 })
</pre>


	<h6>⑶对解构操作不友好：</h6>
	<p>当我们将响应式对象的原始类型属性解构为本地变量时，或者将该属性传递给函数时，我们将丢失响应性连接：</p>

	<pre v-code:js>
const state = reactive({ count: 0 })

// 当解构时，count 已经与 state.count 断开连接
let { count } = state
// 不会影响原始的 state
count++

// 该函数接收到的是一个普通的数字
// 并且无法追踪 state.count 的变化
// 我们必须传入整个对象以保持响应性
callSomeFunction(state.count)
</pre>

	<p>由于这些限制，我们建议使用 【ref()】 作为声明响应式状态的主要 API。</p>
</template>