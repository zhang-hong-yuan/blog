<script setup>
	import books from './books'

</script>

<template>
	<transition
		name="animate__animated animate__bounce"
		enter-active-class="animate__fadeInDown"
		leave-active-class="animate__fadeOutUp">

		<nav
			id="index"
			title="此导航窗口快捷键为‘Esc’"
			v-show="navs.bookshelf && $route.fullPath !== '/entry'">

			<books />
		</nav>
	</transition>
</template>


<style lang="less" scoped>
nav#index {
	position: fixed;
	top: 0;
	left: 0;
	z-index: var(--nav-indexPage);
	height: 100vh;
	width: 100%;
	overflow: auto;
	// overscroll-behavior: contain;
	background-color: #fff;
}
</style>