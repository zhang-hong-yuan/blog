<script setup>
	import { nextTick, ref, watch } from 'vue'
	import { useBookmarkRecordStore } from '@/$_$/stores/bookmark_record'
	const bookmarkRecord = useBookmarkRecordStore()


	// 上次浏览的 tab 位置
	const activeSubject = ref(bookmarkRecord.$subject)
	const tabChange = () => bookmarkRecord.$patch(bookmarkRecord.$subject = activeSubject.value)



	// 搜索功能部分
	import { Search } from '@element-plus/icons-vue'
	const searchKey = ref(bookmarkRecord.$search)

	import { getCurrentInstance } from 'vue'
	const navs = getCurrentInstance().appContext.config.globalProperties.navs

	watch(searchKey, searchFn)

	// 这个函数是为了页面一出现时，搜索一下当前存在的关键字
	watch(() => navs.bookmark, fav => {
		nextTick(() => {
			if (fav) searchFn(searchKey.value)
		})
	})


	function searchFn(val) {

		bookmarkRecord.$patch(bookmarkRecord.$search = val)

		const lis = document.querySelectorAll('li.searchRange')

		lis.forEach(li => {
			const buttonText = li.querySelector(':scope > button.btn').innerText.toLowerCase()

			li.style.display = val === '' ?
				'block' :
				buttonText.indexOf(val.toLowerCase()) === -1 ?
					'none' :
					'block'
		})
	}





	import common from './common/Index'

	import computer_common from './computer/common/Index'
	import computer_all from './computer/Computer_all'
	import computer_tab from './computer/Computer_tab'

	import furniture_tab from './furniture/Furniture_tab'
</script>


<template>
	<transition
		name="animate__animated animate__bounce"
		enter-active-class="animate__fadeInDown"
		leave-active-class="animate__fadeOutUp">


		<nav
			id="bookmark"
			v-if="navs.bookmark"
			title="此导航窗口快捷键为‘·’">

			<div>


				<el-input
					v-model="searchKey"
					:prefix-icon="Search"
					placeholder="搜索网站名称"
					class="searchInput" />


				<h6>常用网站：</h6>
				<common />


				<!-- 组件地址：https://element-plus.gitee.io/zh-CN/component/tabs.html#tabs-属性 -->
				<el-tabs
					v-model="activeSubject"
					@tab-change="tabChange"
					class="tabs">



					<el-tab-pane label="All" lazy>
						<furniture_tab />

						<computer_common />
						<computer_all />
					</el-tab-pane>



					<el-tab-pane label="Computer" lazy>
						<computer_tab />
					</el-tab-pane>


					<el-tab-pane label="Furniture" lazy>
						<furniture_tab />
					</el-tab-pane>
				</el-tabs>
			</div>

		</nav>

	</transition>
</template>


<style lang="less">
nav#bookmark {
	position: fixed;
	top: 0;
	left: 0;
	z-index: var(--nav-bookmark);
	padding: 66px 30px;
	width: 100%;
	overflow: auto;
	height: 100vh;
	background-color: #eee;

	& > div {
		max-width: 888px;
		margin: 0 auto;

		& > h6 {
			padding: 8px 0;
			border-bottom: 2px solid #e5e7ec;
		}

		ul {
			display: flex;
			list-style: none;
			flex-wrap: wrap;
			margin: 0;
			padding: 0;

			li {
				display: flex;
				flex-direction: column;
				align-items: center;
				align-content: center;
				height: fit-content;
				margin-bottom: 20px;
				text-align: center;

				a {
					display: block;
					padding: 6px 16px 0;
					text-decoration: none;
					text-align: center;

					img {
						height: 40px;
						vertical-align: bottom;
						border-radius: 8px;
						transition: all 0.2s;

						&:hover {
							transform: scale(1.2);
						}
					}
				}

				button {
					box-sizing: border-box;
					max-width: 100px;
					color: #403933;
					font-size: 12px;
				}
			}
		}
	}
}
</style>