<script setup>

	import user from '../users/Index'

	import help from '../help/Index'
</script>

<template>
	<header>
		<nav>

			<button id="bookshelf" @click="navs.bookshelf = !navs.bookshelf"></button>

			<!-- <input
			v-model="searchValue"
			type="search"
			placeholder="书名/作者/简介/标题"> -->

			<user />

		</nav>

		<help />

	</header>
</template>


<style lang="less" scoped>
header {
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 66;
	width: 100vw;

	height: 48px;
	box-shadow: 0 3px 20px rgba(0, 0, 0, .07);
	transition: all .8s;
	opacity: .08;

	&:hover {
		opacity: 1;
		background-color: #f6f6f6;
	}


	nav {
		display: flex;
		justify-content: space-between;

		max-width: var(--main-width);
		margin: 0 auto;
		padding: 6px 30px;
		border-radius: 0 0 8px 8px;

		button#bookshelf {
			border: none;
			outline: none;
			width: 36px;
			height: 36px;
			padding: 0;
			background-color: transparent;
			background-image: url(./favicon.svg);
			background-size: contain;
			transition: all .2s;
			transform-origin: center top;

			&:hover {
				// width: 66px;
				// height: 66px;
				transform: scale(1.2);
			}
		}
	}

	h1 {
		margin-top: 30px;
		font-size: 66px;
		font-family: droplet;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	p {
		font-size: 22px;
		font-family: font_3;
		font-weight: 300;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	input {
		position: relative;
		top: 0;
		height: 66px;
		width: 100%;
		max-width: 666px;
		margin: 0 auto;
		padding: 10px 20px;
		background-color: #fff;
		border-radius: 66px;
		border: 1px solid #ccc;
		font-size: 18px;
		font-weight: 300;
		box-shadow: none;
		transition: all .3s;

		&::placeholder {
			color: #aaa;
			margin: 0;
			vertical-align: middle;
		}

		&::after {
			position: absolute;
			right: 0px;
			top: 10px;
			z-index: 9999;
			width: 15px;
			height: 15px;
			content: '🔍';
		}

		&:focus {
			border: 2px solid #888;
			background-color: #fff;
			box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.25), 0 0 20px 4px rgba(0, 0, 0, 0.1) inset;
		}
	}
}
</style>