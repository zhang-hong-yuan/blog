<script setup>
	const colors = ['#eac0ce', '#ebe1bd', '#b8d6c2', '#b7b278', '#e9e6c5']

	function getRandomColor(min = 0, max = colors.length - 1) {
		const minCeiled = Math.ceil(min)
		const maxFloored = Math.floor(max)
		const index = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

		return colors[index]
	}

	let codeSpanList = reactive({})

	let flag = ref(null)

	onMounted(() => {
		// console.log('codeClassList');

		flag.value = document.querySelector('main code')


		const codes = document.querySelectorAll('code')

		codes.forEach(code => {

			let lang = Array.from(code.classList).find(className => className.startsWith('language-'))
			if (lang) {
				lang = lang.split('-')[1]

				if (!Object.keys(codeSpanList).includes(lang)) codeSpanList[lang] = []

				const allEle = code.querySelectorAll(':scope *')

				allEle.forEach(ele => {
					Array.from(ele.classList).forEach(cla => {
						if (!codeSpanList[lang].includes(cla))
							codeSpanList[lang].push(cla)
					})
				})
			}
		})


		for (let k in codeSpanList)
			codeSpanList[k].sort()

	})
</script>

<template>

	<div v-if="flag">
		<section v-for="items, key in codeSpanList" :key="key" :style="{ backgroundColor: getRandomColor() }">
			<header>{{ key }}</header>
			<p>共计 <code>{{ items.length }}</code> 个关键字</p>
			<p>其中字符数最多为：<code>{{ Math.max(...Array.from(items, item => item.length)) }}</code></p>
			<hr>
			<ul>
				<li v-for="item, index in items" :key="index" v-copy>{{ item }}</li>
			</ul>
		</section>
	</div>
	<div v-else>
		<p>No code element in this page!</p>
	</div>

</template>


<style lang="less" scoped>
div {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: space-between;

	section {
		flex: 30%;
		min-width: fit-content;
		height: auto;
		margin-bottom: 15px;
		margin-right: 10px;
		padding: 20px 12px;
		border-radius: 10px;

		&:only-child {
			margin: 0;
		}

		header {
			width: fit-content;
			margin: 14px 0 6px;
			font-size: 24px;
		}

		p {
			margin-bottom: 0;
			font-weight: 300;
			font-size: 13px
		}

		hr {
			margin: 6px 0;
		}

		ul {
			list-style: none;
			padding-left: 0px;
			margin: 0;
			color: #333;
			font-weight: 300;
			font-family: "Chinese Quotes", "Inter var", "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

			li {
				padding: 0 4px;
				list-style-position: inside;
				white-space: nowrap;
				border-bottom: 1px solid transparent;

				&:hover {
					border-bottom-color: #333;

					code {
						opacity:1;
					}
				}
			}
		}
	}
}
</style>
