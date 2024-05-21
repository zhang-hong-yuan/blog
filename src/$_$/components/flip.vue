<script setup>

	import { useRoute, useRouter } from 'vue-router';
	import { ref, watch } from 'vue';

	const route = useRoute()
	const router = useRouter()
	const routes = router.getRoutes()


	let currentBook = ''
	let currentBookRoutes = null

	watch(
		() => route.fullPath.split('/')[1],
		val => {
			currentBook = val
			currentBookRoutes = routes.filter(rou => rou.path.split('/').length > 2 && rou.path.split('/')[1] === currentBook)
		},
		{ immediate: true }
	)


	let currentPage = ''
	let currentIndex = null

	let prevShow = ref(true)
	let nextShow = ref(true)

	let prevTitle = ref('')
	let nextTitle = ref('')

	watch(
		() => route.fullPath.split('/')[2],
		val => {
			currentPage = val
			currentIndex = currentBookRoutes.findIndex(item => item.path.split('/')[2] === currentPage)

			prevShow.value = currentIndex === 0 ? false : true
			nextShow.value = currentIndex === currentBookRoutes.length - 1 ? false : true



			const prev = currentBookRoutes[currentIndex - 1]
			const next = currentBookRoutes[currentIndex + 1]

			prevTitle.value = prev && prev.meta.title ? prev.meta.title : ''
			nextTitle.value = next && next.meta.title ? next.meta.title : ''
		},
		{ immediate: true }
	)


	const prev = () => { if (prevShow.value) router.push(currentBookRoutes[currentIndex - 1]) }
	const next = () => { if (nextShow.value) router.push(currentBookRoutes[currentIndex + 1]) }


</script>


<template>
	<nav class="flip">


		<slot

			:prev="prev"
			:next="next"

			:prevShow="prevShow"
			:nextShow="nextShow"

			:prevTitle="prevTitle"
			:nextTitle="nextTitle">

		</slot>


	</nav>
</template>


<style lang="less">
nav.flip {
	height: 88px;
	width: 100%;
	max-width: var(--main-width);
	border-top: 1px solid #f1f1f1;
	margin: 0 auto;
	position: relative;

	button {
		position: absolute;
		top: 8px;
		border: none;
		background-color: transparent;
		padding: 8px 10px;
		border-radius: 6px;

		&:hover {
			background-color: #f3f3f3;
		}

		&.prev {
			left: 6px;

			&::before {
				content: '« ';
				color: #ccc;
			}
		}

		&.next {
			right: 6px;

			&::after {
				content: ' »';
				color: #ccc;
			}
		}
	}
}
</style>