<template>
	<li>
		<routerLink to="/css">

			<header>
				<h1>CSS</h1>
			</header>

			<section>
				<p><strong>层叠样式表</strong>（Cascading Style Sheets）是一种样式表语言，用来描述 HTML 文档的呈现方式。CSS
					描述了在屏幕、纸质、音频等其他媒体上的元素应该如何被渲染的问题。</p>
			</section>

		</routerLink>
	</li>
</template>

<style scoped lang="less">
header {
	margin: 0;
	height: 100%;
	background-color: #fbeb4e;
	background-image: url(../assets/css.svg);
	background-size: 80px;
	background-repeat: no-repeat;
	background-position: 20px 20px;
	text-align: center;

	h1 {
		margin-top: 30px;
		padding-left: 50px;
		padding-top: 10px;
		color: #261f1d;
		font-size: 40px;
		font-weight: normal;
	}
}


</style>