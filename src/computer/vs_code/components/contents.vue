<script setup>
	import index from '../Index';
</script>


<template>
	<transition
		name="animate__animated animate__bounce"
		enter-active-class="animate__fadeInLeft"
		leave-active-class="animate__fadeOutLeft">

		<nav
			class="contents"
			v-if="navs.contents">

			<ul>

				<li
					v-for="{ title, path } in catalogConvert.list(index)"
					:key="path">

					<router-link
						:to="path">
						{{ title }}
					</router-link>

				</li>

			</ul>

		</nav>

	</transition>
</template>

<style scoped lang="less">
nav.contents {
	position: fixed;
	left: 0;
	top: 0;
	z-index: var(--nav-contents);

	box-sizing: border-box;
	height: 100vh;
	min-width: 220px;
	overflow-y: auto;
	padding: 10px;
	background-color: #fff;
	box-shadow: 0 0 30px 2000px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 5px rgba(0, 0, 0, 0.12);

	ul {
		li {
			list-style: none;
		}
	}
}
</style>