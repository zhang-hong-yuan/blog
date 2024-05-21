<script setup>
</script>

<template>
	<transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInLeft"
		leave-active-class="animate__fadeOutLeft">
		<nav class="related" v-if="navs.related">
			<ul>
				<li>
					<router-link to="/vue_pinia">
						<!-- <img src="@logo/pinia.svg" alt=""> -->
						<span>Vue Pinia</span>
					</router-link>
				</li>
			</ul>
		</nav>
	</transition>
</template>


<style scoped lang="less">
nav.related {
	position: fixed;
	top: 33px;
	left: 10%;
	z-index: var(--nav-related);
	min-width: 300px;
	border-radius: 6px;
	background-color: #f6f6f6;
	box-shadow: 15px 3px 10px 3000px rgba(0, 0, 0, 0.5);

	ul {
		list-style: none;
		margin: 0;
		padding: 20px 0;

		li {
			margin: 0 30px;
			padding: 10px 16px;
			border-bottom: 1px solid transparent;
			transition: all .5s;

			&:hover {
				border-color: #ccc;
			}

			a {
				display: inline-block;
				color: #666;
				font-size: 18px;
				font-weight: normal;
				text-decoration: none;
				transition: all .3s;

				&:hover {
					color: #000;
					font-weight: 700;
					transform: scale(1.1);
				}

				img {
					margin-right: 12px;
					width: 1.2em;
					vertical-align: -6px;
				}
			}
		}
	}
}
</style>