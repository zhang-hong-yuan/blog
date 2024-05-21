<script setup>
	import index from '../Index';
</script>

<template>
	<transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInLeft"
		leave-active-class="animate__fadeOutLeft">

		<nav class="contents" v-show="navs.contents">
			<ul>
				<li v-for="{ path, title, classes } in catalogConvert.list(index)" :key="path" :class="classes">
					<router-link :to="path">{{ title }}</router-link>
				</li>
			</ul>
		</nav>
	</transition>
</template>


<style scoped lang="less">
nav.contents {
	position: fixed;
	top: 0;
	left: 0;
	padding: 30px 20px;
	background-color: #fff;
	box-shadow: 15px 3px 10px 3000px rgba(0, 0, 0, 0.5), 15px 2px 35px rgba(0, 0, 0, 0.14), 25px 1px 23px rgba(0, 0, 0, 0.12);

	ul {
		list-style: none;
		min-height: 100vh;
		min-width: 300px;

		li {

			a {
				color: #666;
				text-decoration: none;
			}
		}
	}
}
</style>