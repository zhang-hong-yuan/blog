<script setup>
	import { arcoVue } from '@/$_$/globConfig/catalogConvert/arcoVue'
	import index from '../Index'
	const originTreeData = arcoVue(index)
	// console.log(originTreeData);

	const router = useRouter()
	const route = useRoute()
	const currentBook = route.fullPath.split('/')[1]



	const allNodeKey = []
	router.getRoutes().forEach(item => {
		if (
			item.path.split('/').length === 3 &&
			item.path.split('/')[1] === currentBook
		) {
			allNodeKey.push(item.path.split('/')[2])
		}
	})


	import { computed, ref, getCurrentInstance, watch } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	const searchKey = ref('')

	const global = getCurrentInstance().appContext.config.globalProperties
	watch(
		() => global.navs.contents,
		contents => {
			if (contents) searchKey.value = ''
		}
	)


	let pro = ''
	let test = null

	const treeData = computed(() => {
		if (searchKey.value) {
			pro = 'expanded-keys'
			test = allNodeKey
			return searchData(searchKey.value)
		} else {
			pro = ''
			return originTreeData
		}
	})


	function searchData(keyword) {

		const loop = (data) => {
			const result = []
			data.forEach(item => {
				if (item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
					result.push({ ...item })
				} else if (item.children) {
					const filterData = loop(item.children)
					if (filterData.length) {
						result.push({ ...item, children: filterData })
					}
				}
			})
			return result
		}

		return loop(originTreeData)
	}

</script>

<template>
	<transition
		name="animate__animated animate__bounce"
		enter-active-class="animate__fadeInLeft"
		leave-active-class="animate__fadeOutLeft">

		<nav
			class="contents"
			v-if="navs.contents">


			<a-input-search v-model="searchKey" />


			<!-- https://arco.design/vue/component/tree -->
			<a-tree
				:data="treeData"
				:show-line="true"
				:block-node="true"
				action-on-node-click="expand"
				v-model:[pro]='test'
				:default-expanded-keys="[$route.fullPath.split('/')[2]]">


				<template #title="{ title, key, classes }">
					<router-link
						:class="classes"
						:to="key"
						@click.stop>

						<template v-if="searchKey === ''">{{ title }}</template>
						<span v-else v-html="title.replaceAll(searchKey, `<mark>$&</mark>`)"></span>

					</router-link>


				</template>

			</a-tree>

		</nav>
	</transition>
</template>

<style lang="less" scoped>
nav.contents {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 9999;
	height: 100vh;
	min-width: 300px;
	overflow-y: auto;
	padding: 0px 10px 20px;
	background-color: #fff;
	box-shadow: 0 0 30px 2000px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
		0 1px 5px rgba(0, 0, 0, 0.12);

		:deep(.arco-input-search) {
			position: sticky;
			top: 0;
			left: 0;
			z-index: 10;
			width: 100%;
			margin: 8px 0;
		}

		:deep(.arco-tree){
			min-height: 95vh;

			a {
				color: #666;
				text-decoration: none;

				&:hover {
					border-bottom: 1px solid #BD2D30;
				}
			}

			mark {
				padding: 0;
				background-color: transparent;
				color: #BD2D30;
			 }

			div.bottomSplit {
				margin-bottom: 20px;

				// 这两条是因为自定义样式导致的连接线问题的补丁
				span.arco-tree-node-indent-block { height: 150%; }
				&>span.arco-tree-node-indent::after { display: none; }
			}

			div.topSplit {
				margin-top: 24px;
			}

			div.arco-tree-node:has(+div.topSplit) > span.arco-tree-node-indent > span::before {
				height: 66px;
			}


			span.arco-tree-node-indent::after {z-index: 1;}
			span.arco-tree-node-title:hover { background-color: inherit; }
			div.arco-tree-node:hover { background-color: #ddd;}

			div.arco-tree-node:has(a.routeActive) {
				background-color: #BD2D30;
				border-radius: 3px;

				svg.arco-icon { color: #fff; }

				a.routeActive {
					color: #fff;
					font-weight: 700;

					mark { color: yellow; }
				}
			}
		}
}
</style>