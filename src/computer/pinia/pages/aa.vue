<template>
	<figure class="logo">
		<img src="../assets/logo.svg" alt="Pinia">
		<h1>Pinia</h1>
	</figure>

	<p>Pinia (发音为 ‘/piːnjʌ/’，类似英文中的 “peenya”) 是最接近有效包名 piña (西班牙语中的 pineapple，即“菠萝”) 的词。
		菠萝花实际上是一组各自独立的花朵，它们结合在一起，由此形成一个多重的水果。 与 Store 类似，每一个都是独立诞生的，但最终它们都是相互联系的。 它(菠萝)也是一种原产于南美洲的美味热带水果。</p>

	<h2>Store 是什么？</h2>

	<p>Store (如 Pinia)
		是一个保存【a;;状态】和【a;;业务逻辑】的实体，它并不与组件树绑定。换句话说，<strong>它承载着全局状态</strong>。它有点像一个永远存在的组件，每个组件都可以【b;;读取】和【b;;写入】它。它有三个概念，‘state’、‘getter’
		和
		‘action’，这些概念相当于组件中的 ‘【c;;data】’、 ‘【c;;computed】’ 和 ‘【c;;methods】’。</p>

	<p>Pinia 是 Vue 的专属状态管理库，它允许跨组件或页面共享状态。使用 Pinia，可以获得如下功能：</p>


	<ul>
		<li><strong>Devtools 支持：</strong>追踪 actions、mutations 的时间线、在组件中展示它们所用到的 Store、让调试更容易的 Time travel。</li>

		<li><strong>热更新：</strong>不必重载页面即可修改 Store、开发时可保持当前的 State。</li>

		<li><strong>插件：</strong>可通过插件扩展 Pinia 功能。</li>

		<li>为 JS 开发者提供适当的 TypeScript 支持以及自动补全功能。</li>
	</ul>

	<br>
	<h4>应该在什么时候使用 Store?</h4>

	<p>一个 Store 应该包含可以在【整个应用】中访问的数据。这包括在许多地方使用的数据，例如显示在导航栏中的用户信息，以及需要通过页面保存的数据，例如一个非常复杂的多步骤表单。</p>

	<p>另一方面，应该避免在 Store 中引入那些原本可以在组件中保存的本地数据，例如，一个元素在页面中的可见性。</p>



</template>