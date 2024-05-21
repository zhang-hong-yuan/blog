<template>
	<li>
		<routerLink to="/on_three_kingdoms">
			<header>
				<h1>《品三国》</h1>
			</header>

			<section>
				<p>
					我们总是习惯于把王朝的兴衰、事业的成败、历史的更替和事情的对错都归结为个人的原因，归结为某个领袖人物和主导人物个人品质的优劣好坏。
				</p>

				<p>
					与此同时，历史人物也都按照一种简单的善恶二元化论而无一例外地脸谱化了，中国历史则变成了一个大戏台。但我们从来就不知道舞台上为什么会有那么多白脸和白鼻子，也不知道红脸和黑脸的什么时候才能出现，因为我们不知道编剧和导演是谁。我们只能寄希望于运气和等待，却不肯承认每一次“善报”，往往也差不多意味着下一次“恶运”的来临。
				</p>
			</section>
		</routerLink>
	</li>
</template>



<style lang="less" scoped>
header {
	background-size: cover;
	background-color: #fff;

	h1 {
		margin: 0;
		height: 100%;
		background-image: url(../assets/on_three_kingdoms.jpeg);
		background-size: auto 66%;
		background-position: 10px 24px;
		background-repeat: no-repeat;

		padding-left: 75px;
		padding-top: 55px;
		color: #707070;
		font-size: 24px;
	}
}

section {
	p {
		font-size: 14px;
	}
}
</style>