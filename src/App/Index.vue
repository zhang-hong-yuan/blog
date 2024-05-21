<script setup>
	import { shortcut } from './hooks/shortcut/Index'
	import { swipe } from './hooks/swipe'
	shortcut()
	swipe()


	import NavBar from './components/NavBar/Index';

	import bookshelf from './components/bookshelf/shelf'
	import bookmark from './components/bookmark/Index'
	import panel from './components/panel/Index'
	import spelling from './components/spelling/Index'
</script>

<template>

	<NavBar />
	<RouterView />




	<Teleport to="body">
		<bookshelf />
		<bookmark />
		<panel />


		<transition
			name="animate__animated animate__bounce"
			enter-active-class="animate__bounceIn"
			leave-active-class="animate__bounceOutDown">

			<spelling v-if="navs.spelling" />

		</transition>


	</Teleport>

</template>


<style lang="less">
@import './less/Index';
</style>