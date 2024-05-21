<template>
	<li>
		<routerLink to="/Arvin">
			<header>
				<h1>Arvin</h1>
			</header>

			<section>
				<p>This page includes resumes, mini program tools.</p>
			</section>
		</routerLink>
	</li>
</template>



<style lang="less" scoped>
header {
	background-size: cover;
	background-color: #edf0f1;

	h1 {
		margin: 0;
		height: 100%;
		background-image: url(../assets/author.svg);
		background-size: auto 50%;
		background-position: 26px 33px;
		background-repeat: no-repeat;

		padding-left: 92px;
		padding-top: 40px;
		color: #707070;
		font-size: 36px;
	}
}

section {
	p {

	}
}
</style>