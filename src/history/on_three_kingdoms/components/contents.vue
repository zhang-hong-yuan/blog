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


			<!-- https://element-plus.org/zh-CN/component/tree.html#%E5%B1%9E%E6%80%A7 -->
			<el-tree
				:data="catalogConvert.elementPlus(index)"
				node-key="path"
				accordion
				:indent="10"
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
	min-width: 220px;
	height: 100vh;
	overflow-y: auto;
	padding: 20px 15px 20px 30px;
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

		i.el-icon { display: none; }

		div.level-1 {
			border-top: 1px solid #f1f1f1;

			&:first-of-type { border-top: none; }

			& > div.el-tree-node__content {
				padding: 30px 0;
				color: #4e4e4e;
				border-radius: 5px;
				font-size: 24px;
				font-weight: 700;
			}

		}

		div.level-2 {

			&:last-of-type { margin-bottom: 15px; }

			& > div.el-tree-node__content {
				padding: 15px 0;
				color: #4e4e4e;
				font-size: 15px;
				font-weight: 400;
			}
		}

		a {
			cursor: pointer;
			padding-left: 6px;
			border-left: 3px solid transparent;

			&.routeActive {
				border-left: 3px solid #872bff;
				color: #872bff;
			}
		}
	}
}
</style>