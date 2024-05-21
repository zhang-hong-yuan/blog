<template>
	<li>
		<routerLink to="/nce_1">

			<header>
				<h1>《新概念英语》</h1>
				<p>第一册</p>
				<p>
					<strong>作者：</strong>
					<span>亚历山大（L.G.Alexander）（英），何其莘</span>
				</p>
				<p>
					<strong>ISBN:</strong>
					<span v-copy>787560013466</span>
				</p>
			</header>

			<section>
				<p>《新概念英语》第一册是针对<ins>零基础</ins>或者<ins>初阶</ins>的英语学习者，旨在打通英语小白的经络，建立起基本的语音语法知识，在短期内入门必备。</p>
			</section>

		</routerLink>
	</li>
</template>

<style scoped lang="less">
header {
	background-color: #fff;
	background-image: url(../assets/nce1.webp);
	background-size: auto 66%;
	background-position: 6px 22px;
	background-repeat: no-repeat;
	border-radius: 20px 20px 0 0;
	padding-left: 66px;
	padding-top: 20px;

	h1 {
		margin: 0 0 5px;
		color: #666;
		font-size: 18px;
	}

	p {
		margin: 0;
		padding-left: 10px;
		font-size: 12px;
		white-space: nowrap;

		strong {
			font-weight: 400;
		}

		span {
			color: #666;
			font-size: 12px;
		}
	}
}


section {
	p {
		ins {
			text-decoration: wavy underline tomato;
		}
	}
}
</style>