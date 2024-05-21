<template>
	<h1>依赖注入</h1>

	<p>与注册生命周期钩子的 API 类似，【provide()】 和 【inject()】 必须在组件的 【setup()】 阶段同步调用。</p>
	<p>当使用 TypeScript 时，key 可以是一个被类型断言为 InjectionKey 的 symbol。InjectionKey 是一个 Vue 提供的工具类型，继承自
		Symbol，可以用来同步【provide()】和【inject()】之间值的类型。</p>
</template>