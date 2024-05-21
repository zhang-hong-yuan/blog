<script setup>
// import { contents } from './contents';

// const contentsStr = []
// function getContentsStr(arg) {
// 	arg.forEach(({ name, children }) => {
// 		const [headline, route] = name.split('---')
// 		contentsStr.push(`<a href="#/Computer/Vue/${route}" role="link" draggable="false">${headline}</a>`)
// 		if (children) getContentsStr(children)
// 	})
// }
// getContentsStr(contents)
// console.log(contentsStr);


</script>

<template>
	<li>
		<routerLink to="/vue">

			<header>
				<h1>Vue.js</h1>
			</header>

			<section>
				<p>Vue 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript
					构建，并提供了一套声明式的、组件化的编程模型，有助于高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。</p>
			</section>


		</routerLink>
	</li>
</template>


<style lang="less" scoped>
header {
	background-size: cover;
	background-color: #edf0f1;

	h1 {
		margin: 0;
		height: 100%;
		background-image: url(../assets/vue.svg);
		background-size: auto 50%;
		background-position: 20px 33px;
		background-repeat: no-repeat;

		padding-left: 90px;
		padding-top: 44px;
		color: #344151;
		font-size: 30px;
	}
}

section {
	p {

	}
}
</style>