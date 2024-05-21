<template>
	<li>
		<routerLink to="/computer">

			<header>
				<img src="../assets/computer.svg" alt="">
			</header>

			<section>
				<p>计算机基础知识，比如尺寸、颜色、单位、文件格式等。</p>
			</section>

		</routerLink>
	</li>
</template>


<style scoped lang="less">
header {
	margin: 0;
	padding-top: 20px;
	height: 100%;
	background-color: #eee;
	border-radius: 20px 20px 0 0;
	text-align: center;

	img {
		width: 100px;
		color: #fff;
	}
}
</style>