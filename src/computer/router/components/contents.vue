<script setup>

	import index from '../Index';

	const contents = index.map(item => {
		const parts = item.info.split('---')
		return { title: parts[0], route: parts[1], class: parts[2] }
	})
	// console.log(contents);
</script>

<template>
	<transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInLeft"
		leave-active-class="animate__fadeOutLeft">
		<nav class="contents" v-show="navs.contents">
			<ul>
				<!-- 这里的 item 不能解构，因为 class 可能不存在 -->
				<li v-for="item in contents" :key="item.route" :class="item.class">
					<router-link :to="item.route">{{ item.title }}</router-link>
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
			padding: 5px 0 5px 36px;
			line-height: 24px;
			transition: all .2s;

			&.topSplit {
				margin-top: 20px;
				padding-top: 10px;
				border-top: 1px solid #e2e2e3;
			}

			&:hover {
				background-color: #ddd;
				border-radius: 5px;
			}

			a {
				display: inline-block;
				color: rgba(60, 60, 67, .78);
				font-weight: 500;
				text-decoration: none;
				transition: all .5s;
				transform-origin: left center;
				line-height: 24px;
				font-size: 14px;

				&:hover {
					display: inline-block;
					font-weight: 700;
					transform: scale(1.1);
				}

				&.routeActive {
					position: relative;
					color: #18794e;

					&::before {
						position: absolute;
						top: 1px;
						left: -28px;
						width: 25px;
						height: 20px;
						content: '';
						background-image: url(../assets/logo_vue_router.png);
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