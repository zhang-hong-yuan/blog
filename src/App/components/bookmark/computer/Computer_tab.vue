<script setup>
	import { ref } from 'vue'

	import { useBookmarkRecordStore } from '@/$_$/stores/bookmark_record'
	const bookmarkRecord = useBookmarkRecordStore()

	const activePCBook = ref(bookmarkRecord.computer)
	const tabChange = () => bookmarkRecord.$patch(bookmarkRecord.computer = activePCBook.value)


	import computer_all from './Computer_all'

	import common from './common/Index'


	import office from './office/Index'
	import adobe from './adobe/Index'

	import anki from './anki/Index'
	import markdown from './markdown/Index'

	import HTML from './html/Index'
	import css from './css/Index'
	import js from './js/Index'
	import ts from './ts/Index'
	import vue from './vue/Index'

	import node from './node/Index'
	import npm from './npm/Index'

	import git from './git/Index'




	const position = ref('right')
	const isCustom = ref(true)



	if (window.innerWidth < 720) {
		position.value = 'top'
		isCustom.value = false
	}

</script>

<template>

	<common />


	<!-- 组件地址：https://element-plus.gitee.io/zh-CN/component/tabs.html#tabs-属性 -->
	<el-tabs
		v-model="activePCBook"
		@tab-change="tabChange"
		id="tabs-pc"
		:class="{ custom: isCustom }"
		:tab-position="position">


		<el-tab-pane label="All" lazy>
			<computer_all />
		</el-tab-pane>

		<el-tab-pane label="Office" lazy>
			<office />
		</el-tab-pane>

		<el-tab-pane label="Adobe" lazy>
			<adobe />
		</el-tab-pane>

		<el-tab-pane label="Anki" lazy>
			<anki />
		</el-tab-pane>

		<el-tab-pane label="MarkDown" lazy>
			<markdown />
		</el-tab-pane>

		<el-tab-pane label="HTML" lazy>
			<HTML />
		</el-tab-pane>

		<el-tab-pane label="CSS" lazy>
			<css />
		</el-tab-pane>

		<el-tab-pane label="JavaScript" lazy>
			<js />
		</el-tab-pane>

		<el-tab-pane label="TypeScript" lazy>
			<ts />
		</el-tab-pane>

		<el-tab-pane label="Vue" lazy>
			<vue />
		</el-tab-pane>

		<el-tab-pane label="NodeJs" lazy>
			<node />
		</el-tab-pane>

		<el-tab-pane label="Npm" lazy>
			<npm />
		</el-tab-pane>

		<el-tab-pane label="Git" lazy>
			<git />
		</el-tab-pane>
	</el-tabs>




</template>


<style lang="less">


#tabs-pc {

	&.custom {

		.el-tabs__header {
			position: fixed;
			right: 0;
			bottom: 30px;
			z-index: 9999;
			height: auto;
			margin: 0;
			overscroll-behavior: contain;
		}

		.el-tabs__content {
			width: calc(100% - 62px);
		}
	}

	.el-tabs__item {
		padding: 0 10px;
		color: #bbb;
		max-height: 30px;

		&:hover {
			background-color: #ddd;
		}

		&.is-active {
			color: #666;
		}
	}

	.el-tabs__active-bar {
		background-color: #666;
	}
}
</style>