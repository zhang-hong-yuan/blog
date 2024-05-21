<script setup>
	import index from '../Index';
</script>


<template>

	<transition
		name="animate__animated animate__bounce"
		enter-active-class="animate__fadeInLeft"
		leave-active-class="animate__fadeOutLeft">

		<nav
			class="contents"
			v-if="navs.contents">


			<!-- 组件地址：https://element-plus.gitee.io/zh-CN/component/tree.html#属性 -->
			<el-tree
				:data="catalogConvert.elementPlus(index)"
				node-key="path"
				:indent="15"
				:default-expanded-keys="[$route.fullPath.split('/')[2]]"
				:props="{ class: data => data.customClass ?? null }">

				<template #default="{ data: { label, path } }">

					<router-link
						:to="path"
						@click.stop>
						{{ label }}
					</router-link>

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
	min-width: 240px;
	height: 100vh;
	overflow-y: auto;
	padding: 1.5em 1em;
	background-color: #fff;
	box-shadow: 15px 3px 10px -2px rgba(0, 0, 0, 0.2), 15px 2px 35px rgba(0, 0, 0, 0.14), 25px 1px 23px rgba(0, 0, 0, 0.12);

	:deep(.el-tree) {
		min-height: 95vh;

		.topGap {
			margin-top: 20px;
		}

		.topLine {
			margin-top: 13px;
		}

		a {
			cursor: pointer;
		}

		.routeActive {
			border-bottom: 1px solid #872bff;
			color: #872bff;
		}
	}
}
</style>