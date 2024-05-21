<template>
	<h1>computed()</h1>

	<p>模板中的表达式虽然方便，但也只能用来做简单的操作。如果在模板中写太多逻辑，会让模板变得臃肿，难以维护。</p>
	<p>Vue 的计算属性会自动追踪响应式依赖。接受一个 getter 函数，返回一个只读的响应式 ref 对象。该 ref 通过 【.value】 暴露 getter 函数的返回值。</p>
	<p>它也可以接受一个带有 【get】 和 【set】 函数的对象来创建一个可写的 ref 对象。</p>


	<pre v-code:ts>// 只读
function computed&lt;T&gt;(
  getter: () =&gt; T,
  // 查看下方的 "计算属性调试" 链接
  debuggerOptions?: DebuggerOptions
): Readonly&lt;Ref&lt;Readonly&lt;T&gt;&gt;&gt;

// 可写的
function computed&lt;T&gt;(
  options: {
    get: () =&gt; T
    set: (value: T) =&gt; void
  },
  debuggerOptions?: DebuggerOptions
): Ref&lt;T&gt;</pre>
	<br>
	<p>创建一个只读的计算属性 ref</p>
	<pre v-code:js>const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // 错误</pre>
	<h6>Getter 不应有副作用</h6>
	<p>计算属性的 getter 应只做计算而没有任何其他的副作用，这一点非常重要，请务必牢记。举例来说，<b>不要在 getter 中做异步请求或者更改 DOM！</b>一个计算属性的声明中描述的是如何根据其他值派生一个值。因此
		getter 的职责应该仅为计算和返回该值。在之后的指引中我们会讨论如何使用侦听器根据其他响应式状态的变更来创建副作用。</p>
	<br>
	<p>创建一个可写的计算属性 ref：</p>
	<pre v-code:js>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
</pre>
	<p>现在再运行 【fullName.value = 'John Doe'】 时，setter 会被调用而 【firstName】 和 【lastName】 会随之更新。</p>

	<h6>避免直接修改计算属性值</h6>
	<p>从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。
	</p>


	<br>
	<p>调试：</p>
	<pre v-code:js>
const plusOne = computed(() => count.value + 1, {
  onTrack(e) {
    debugger
  },
  onTrigger(e) {
    debugger
  }
})
</pre>

	<br>
	<section class="note">
		<header>【computed】 和 【method】</header>

		<p>在表达式中像这样调用一个函数也会获得和计算属性相同的结果：</p>

		<pre v-code:html><div v-pre>&lt;script&gt;
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

function calculateBooksMessage() {
  return author.books.length &gt; 0 ? 'Yes' : 'No'
}

const publishedBooksMessage = computed(() =&gt; {
  return author.books.length &gt; 0 ? 'Yes' : 'No'
})
&lt;/script&gt;
			
&lt;p&gt;{{ calculateBooksMessage() }}&lt;/p&gt;
&lt;span&gt;{{ publishedBooksMessage }}&lt;/span&gt;
</div></pre>
		<p>然而，不同之处在于计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算。相比之下，方法调用总是会在重渲染发生时再次执行函数。</p>

		<p>这也解释了为什么下面的计算属性永远不会更新，因为 【Date.now()】 并不是一个响应式依赖：</p>
		<pre v-code:js>const now = computed(() => Date.now())</pre>
	</section>

	<br>
	<p>在计算属性中使用 【reverse()】 和 【sort()】 的时候务必小心！这两个方法将变更原始数组，计算函数中不应该这么做。请在调用这些方法之前创建一个原数组的副本：</p>

	<pre v-code:js>
- return numbers.reverse()
+ return [...numbers].reverse()
</pre>
</template>