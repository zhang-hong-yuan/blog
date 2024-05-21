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
	left: 0;
	top: 0;
	z-index: var(--nav-contents);
	min-width: 300px;
	height: 100vh;
	overflow-y: auto;
	background-color: #f6f6f7;
	font-size: 14px;
	font-family: "Chinese Quotes", "Inter var", "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
	box-shadow: 15px 3px 10px 3000px rgba(0, 0, 0, 0.5), 15px 2px 35px rgba(0, 0, 0, 0.14), 25px 1px 23px rgba(0, 0, 0, 0.12);

	ul {
		list-style: none;
		min-height: 100vh;
		margin: 2em 1em 3em 1em;
		padding: 0;

		li {
			margin-left: 16px;
			padding: 5px 0 5px 10px;
			line-height: 24px;
			transition: all .2s;
			border-left: 1px solid hsl(207, 10%, 86%);

			&.title {
				margin-left: 0;
				padding-left: 12px;
				border: none;

				 a {
					font-size: 16px;
					font-weight: 700;
				 }

				 &:hover {
					border-radius: 5px;
				 }
			}

			&.topSplit {
				margin-top: 26px;
			}

			&:hover {
				background-color: hsl(207, 10%, 86%);
				border-radius: 0 5px 5px 0;

				a {
					color: #606;
				}
			}

			a {
				display: inline-block;
				color: rgba(60, 60, 67, .78);
				font-weight: 400;
				text-decoration: none;
				transition: all .5s;
				transform-origin: left center;
				line-height: 24px;
				font-size: 14px;

				&:hover {
					display: inline-block;
					transform: scale(1.1);
				}

				&.routeActive {
					position: relative;
					color: #606;

					&::before {
						position: absolute;
						top: 1px;
						left: -28px;
						width: 25px;
						height: 20px;
						content: '';
						transform: rotate(-90deg);
						background-size: 22px;
						background-repeat: no-repeat;
					}
				}
			}
		}
	}
}
</style>..