<script setup>
	import index from '../Index';

	function renameKeys(obj) {
		if (Array.isArray(obj)) obj.forEach((item, i) => obj[i] = renameKeys(item))
		else if (typeof obj === 'object' && obj !== null) {
			Object.keys(obj).forEach(key => {
				if (key === 'info') {
					[obj.label, obj.route, obj.class] = obj.info.split('---')
					delete obj.info
				} else if (key === 'kids') {
					obj.children = obj.kids
					delete obj.kids
					obj.children = renameKeys(obj.children)
				}
			})
		}
		return obj
	}


	const contents = renameKeys(index);
	// console.log(contents);

	import icon from './icon.vue'

</script>


<template>
	<transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInLeft"
		leave-active-class="animate__fadeOutLeft">
		<nav class="contents" v-if="navs.contents">

			<!-- 组件地址：https://element-plus.gitee.io/zh-CN/component/tree.html#属性 -->
			<el-tree :data="contents" :icon="icon" node-key="id" :props="{ class: data => data.class }">
				<template #default="{ data: { label, route } }">
					<router-link :to="route" @click.stop>{{ label }}</router-link>
				</template>
			</el-tree>

		</nav>
	</transition>
</template>

<style scoped lang="less">
nav.contents {
	position: fixed;
	left: 0;
	top: 0;
	z-index: var(--nav-contents);
	min-width: 222px;
	height: 100vh;
	overflow-y: auto;
	padding: 3em 1em;
	background-color: #fff;
	box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
		0 1px 5px rgba(0, 0, 0, 0.12);

	:deep(.el-tree) {
		min-height: 100vh;

		a {
			display: inline-block;
			padding: 4px 0;
			color: rgba(60, 60, 60, .7);
			font-size: 13px;
			font-weight: 400;
			text-decoration: none;
			line-height: 20px;

			&.routeActive {
				color: #65b687;
			}
		}

		.topSplit {
			margin-top: 16px;
		}

	  /* 小三角	图标样式 */
		div.el-tree-node__content {
			padding-right: 10px;

			&:hover img{
				opacity: .8;
			}

			& > i.expanded img {
				opacity: 1;
			}
		}
	}
}
</style>..../index_tem