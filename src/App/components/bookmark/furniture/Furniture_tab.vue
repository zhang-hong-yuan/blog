<script setup>
	import logo from '@/App/components/bookmark/logo'


	import data from './data'
</script>


<template>
	<logo :data="data" path="furniture" />

</template>

<style lang="less" scoped>
ul {
	padding: 0;
	margin: 20px 0px;

	li {
		display: flex;
		list-style: none;
		border-radius: 5px;

		&:nth-child(2n + 1) {
			background-color: #f2f2f2;
		}

		a {
			width: 50%;
			overflow: auto;
			text-decoration: none;
			padding: 10px 15px;
			border-radius: 8px;
			border: 1px solid transparent;

			&::-webkit-scrollbar {
				display: none;
			}

			&:hover {
				border: 1px solid #ccc;
			}

			img {
				max-height: 30px;
				border-radius: 3px;
				vertical-align: middle;
			}
		}

		button {
			font-size: 16px;
			vertical-align: middle;
			border: 1px solid transparent;

			&:hover {
				border: 1px solid #ccc;
			}
		}
	}
}

small {
	font-size: 12px;
}
</style>