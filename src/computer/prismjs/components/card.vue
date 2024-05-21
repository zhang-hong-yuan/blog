<template>
	<li>
		<routerLink to="/prismjs">
			<header>
				<h1>PrismJs</h1>
			</header>

			<section>
				<p>Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind.</p>
			</section>
		</routerLink>
	</li>
</template>


<style lang="less" scoped>
header {
	border-radius: 20px 20px 0 0;
	background-image: url(../assets/background.png);
	background-size: cover;

	h1 {
		margin: 0;
		height: 100%;
		background-image: url(../assets/prismjs.svg);
		background-size: auto 50%;
		background-position: 20px 33px;
		background-repeat: no-repeat;

		padding-left: 90px;
		padding-top: 48px;
		color: #fff;
		font-size: 28px;
	}
}

section {
	p {

	}
}
</style>