<script setup>
	import index from '../Index';
	import icon from './contents_icon'


</script>


<template>
	<transition
		name="animate__animated animate__bounce"
		enter-active-class="animate__fadeInLeft"
		leave-active-class="animate__fadeOutLeft">

		<nav
			class="contents"
			v-if="navs.contents">

			<div>
				<!-- 组件地址：https://element-plus.gitee.io/zh-CN/component/tree.html#属性 -->
				<el-tree
					:data="catalogConvert.elementPlus(index)"
					:accordion="true"
					node-key="path"
					:indent="15"
					:default-expanded-keys="[$route.fullPath.split('/')[2]]"
					:props="{ class: data => data.customClass ?? null }"
					:icon="icon">

					<template #default="{ data: { label, path } }">

						<router-link
							:to="path"
							@click.stop>
							{{ label }}
						</router-link>

					</template>
				</el-tree>
			</div>
		</nav>

	</transition>
</template>

<style scoped lang="less">
nav.contents {
	position: fixed;
	left: 0;
	top: 0;
	z-index: var(--nav-contents);

	box-sizing: border-box;
	height: 100vh;
	min-width: 220px;
	overflow-y: auto;
	padding: 10px;
	background-color: #f6f6f6;
	box-shadow: 0 3px 88px 2000px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 5px rgba(0, 0, 0, 0.12);

	& > div {
		// 为了防止在 nav.contents 上滚动时影响下层 main 的页面
		min-height: calc(100% + 1px);
	}

	:deep(div.el-tree) {
		border: 5px solid #fff;

		a {
			margin-left: 3px;
			color: #000;
			font-size: 13px;

			&.routeActive {
				color: #6b8452;
				font-weight: 700;
			}
		}

		.level-1 {

			&.topSplit {
				border-top: 3px solid #fff;
			}

			&:has(a.routeActive) > div.el-tree-node__content a {
				color: #6b8452;
				font-weight: 700;
			}

			& > div.el-tree-node__content  {
				height: 50px;
				padding-left: 10px!important;
				background-color: #f6f4f0;
				border-bottom: 1px solid #eceef4;
				font-weight: normal;
				transition: all 0.5s;

				& > i.el-icon svg {
					color: #6b8452;
				}

				&:hover {
					font-weight: 700;
				}
			}


			.level-2 {
				margin: 5px 0;

				&.topSplit {
					margin-top: 18px;
				}

				&:has(a.routeActive) > div.el-tree-node__content {
					background-color: #9db883;

					a.routeActive {
						color: #fff;
						font-weight: 400;
					}
				}
			}
		}
	}
}
</style>