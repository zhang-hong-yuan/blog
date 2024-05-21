<template>
	<li>
		<routerLink to="/Vocabulary">
			<header>
				<h1>Vocabulary</h1>
			</header>

			<section>
				<p>Grammar includes morphology and syntax.</p>
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
		background-image: url(../assets/grammar.svg);
		background-size: auto 50%;
		background-position: 12px 35px;
		background-repeat: no-repeat;

		padding-left: 75px;
		padding-top: 55px;
		color: #707070;
		font-size: 24px;
	}
}

section {
	p {
		font-size: 15px;
	}
}
</style>