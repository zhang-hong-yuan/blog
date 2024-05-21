<script setup>

	const props = defineProps({
		title: String,
		word: String,
		menuClass: String
	})

	// console.log(props.word);


	const menuClasses = ref()
	if (props.menuClass) menuClasses.value = props.menuClass.split(',')


	const wordBasic = ref()
	const wordDetail = ref()
	const wordPhrase = ref()
	const formExg = ref()

	if (!props.word) console.log('单词 word 组件没有传入 word 参数')
	const [word, mean] = props.word.split(/-{3,}/)


	import(`./vocabulary/${word}.js`)
		.then(({ basic, detail, phrase }) => {
			wordBasic.value = basic
			wordDetail.value = detail
			wordPhrase.value = phrase

			// 把单词的 form 转变为正则
			if (basic.form) {
				const formStr = Object.values(basic.form).join('|')
				formExg.value = new RegExp(`\\b(${formStr})\\b`, 'gi')
			}
		})
		.catch(() => {
			wordBasic.value = { word: `- ${word} -` }
			wordDetail.value = []
			wordPhrase.value = []
		})




	const isFull = ref(false)


	provide('isFull', isFull)
	provide('menuClasses', menuClasses)
	provide('wordBasic', wordBasic)
	provide('wordDetail', wordDetail)
	provide('wordPhrase', wordPhrase)
	provide('formExg', formExg)
	provide('word', word)
	provide('mean', mean)


	import more from './components/more'
	import teleportMenu from './components/teleportMenu'
	import navButtons from './components/navButtons'
	import tableForms from './components/tableForms'
	import tableMeans from './components/tableMeans'

	import ifSection from './components/ifSection'
	import elseDetails from './components/elseDetails'


</script>

<template>

	<div class="word"
		:class="{ fullScreen: isFull }"
		v-if="wordBasic && wordDetail"
		v-replace>


		<!-- 如果特定注释不是要学的单词，而是句子或短语时 -->
		<span class="heading">{{ props.title }}</span>


		<!-- 默认插槽位置 -->
		<div class="slotDefault">
			<slot name="default"></slot>
		</div>


		<header>

			<more />
			<teleportMenu />

			<navButtons />
			<tableForms />
			<tableMeans />

		</header>



		<!-- 当有意思选择的时候 -->
		<ifSection v-if="mean" />

		<!-- 当没有传入意思选择的时候 -->
		<elseDetails v-else />



		<!-- 具名插槽 footer -->
		<div class="slotFooter">
			<slot name="footer"></slot>
		</div>


	</div>
</template>


<!-- 图片预览相关样式 -->
<style lang="less">
.n-image-preview-container {
	.n-image-preview {
		border-radius: 10px;
	}

	.n-image-preview-toolbar {
		justify-content: space-around;
		height: 28px;
		width: 188px;
		padding: 3px 12px;

		i {
			height: auto;
			padding: 0;
			font-size: 20px;

			/* 图片放大后，隐藏底部工具栏中 下载 按钮 */
			&:nth-of-type(6) {
				display: none;
			}

			svg {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>