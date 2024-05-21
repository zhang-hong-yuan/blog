<script setup>

	// ----------------------------------------------------------------------
	import Arvin from '@/We/Arvin/components/card';

	// ----------------------------------------------------------------------


	import computer from '@/computer/computer/components/card'
	import vs_code from '@/computer/vs_code/components/card'


	import HTML from '@/computer/html/components/card'   // html 小写组件名会和 <html> 标签名冲突
	import CSS from '@/computer/css/components/card'
	import JavaScript from '@/computer/javascript/components/card'


	import prismjs from '@/computer/prismjs/components/card'


	import vue from '@/computer/vue/components/card'
	// import pinia from '@/computer/pinia/components/card.vue'


	// ----------------------------------------------------------------------


	import Vocabulary from '@/english/Vocabulary/components/card'
	import Grammar from '@/english/Grammar/components/card'
	import nce1 from '@/english/nce_1/components/card'

	// ----------------------------------------------------------------------

	import on_three_kingdoms from '@/history/on_three_kingdoms/components/card'


	// ----------------------------------------------------------------------

	import Chinese from '@/leisure/Chinese/components/card'


	// ----------------------------------------------------------------------


</script>


<template>

	<menu id="books">
		<Vocabulary />
		<Grammar />
		<nce1 />


		<Chinese />

		<on_three_kingdoms />

		<computer />
		<vs_code />
		<HTML />
		<CSS />
		<JavaScript />
		<vue />
		<prismjs />
		<!-- <vue_pinia /> -->


		<Arvin />
	</menu>

	<footer>
		<address>联系作者：18721211445</address>
		<br />
		<span>Copyright &copy; 2018 Arvin's Blog</span>
	</footer>
</template>



<style lang="less" scoped>
menu {
	// display: flex;
	// flex-wrap: wrap;
	// justify-content: center;
	column-width: 200px;
	column-gap: 10px;
	list-style: none;
  min-height: 100vh;
  margin: 36px auto;
  padding: 16px 20px 100px;
  scroll-behavior: smooth;

	&>:deep(li) {
		box-sizing: border-box;
		position: relative;
		// width: 222px;
		// height: 333px;
		background-color: #fff;
		overflow: hidden;
		margin: 10px 0;
		border-radius: 20px;
		border: 1px solid #e7eaf3;
		animation-duration: v-bind('toggleSecond');
		transition: all .2s;
		box-shadow: 0 3px 20px rgba(0, 0, 0, .07);

		&:hover {
			box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.25);
			transform: scale(1.03);
		}


		a {
			display: block;
			height: 100%;
			color: #000;
			text-decoration: none;

			header {
				height: 111px;
				margin: 4px;
				border-radius: 20px 20px 0 0;
				overflow: hidden;
			}

			section {
				padding: 16px;
				border-top: 1px solid #e7eaf3;
				line-height: 1.8;
			}
		}
	}
}

footer {
	margin: 10px;
	color: #ccc;
	font-size: 10px;
	text-align: right;

	address {
		display: inline;
		transition: color .3s;

		&:hover {
			color: #666;
		}
	}

	span {
		transition: color .3s;

		&:hover {
			color: #666;
		}
	}
}
</style>