<template>
	<h1>响应式：核心</h1>

	<p>为什么需要使用带有 【.value】 的 ref，而不是普通的变量？为了解释这一点，需要简单地讨论一下 Vue 的响应式系统是如何工作的。</p>

	<p>当在模板中使用了一个 ref，然后改变了这个 ref 的值时，Vue 会自动检测到这个变化，并且相应地更新 DOM。这是通过一个基于依赖追踪的响应式系统实现的。</p>

	<p>当一个组件首次渲染时，Vue 会<b>追踪</b>在渲染过程中使用的每一个 ref。然后，当一个 ref 被修改时，它会<b>触发</b>追踪它的组件的一次重新渲染。</p>

	<p>在标准的 JavaScript 中，检测普通变量的访问或修改是行不通的。然而，我们可以通过 getter 和 setter 方法来拦截对象属性的 get 和 set 操作。</p>

	<p>该 【.value】 属性给予了 Vue 一个机会来检测 ref 何时被访问或修改。在其内部，Vue 在它的 getter 中执行追踪，在它的 setter 中执行触发。从概念上讲，你可以将 ref 看作是一个像这样的对象：</p>

	<pre v-code:js>
// 伪代码，不是真正的实现
const myRef = {
	
  _value: 0,

  get value() {
    track()
    return this._value
  },

  set value(newValue) {
    this._value = newValue
    trigger()
  }

}
</pre>


	<h2>数组变化侦测</h2>
	<p>Vue 能够侦听响应式数组的变更方法，并在它们被调用时触发相关的更新。这些变更方法包括：</p>
	<ul class="mb0">
		<li>【push()】</li>
		<li>【pop()】</li>
		<li>【shift()】</li>
		<li>【unshift()】</li>
		<li>【splice()】</li>
		<li>【sort()】</li>
		<li>【reverse()】</li>
	</ul>

	<p>相对地，也有一些不可变 (immutable) 方法，例如 【filter()】，【concat()】 和 【slice()】，这些都不会更改原数组，而总是返回一个新数组。</p>
</template>