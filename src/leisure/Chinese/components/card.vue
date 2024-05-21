<template>
	<li>
		<routerLink to="/html">

			<header>
				<h1>《说文解字》</h1>
				<p>作者：(汉)许慎</p>
				<p>
					<strong>ISBN:</strong>
					<span v-copy>9787550237308</span>
				</p>
			</header>

			<section>
				<p>《说文解字》是中国最早的字典，是学习和研究汉字不可多得的工具书。为方便读者理解和学习，本书增加了译文和注释等辅助性项目，帮助读者扫清阅读障碍。</p>
			</section>

		</routerLink>
	</li>
</template>

<style scoped lang="less">
header {
	padding-top: 20px;
	padding-left: 77px;
	background-color: #fff;
	background-image: url(../assets/Analytical_Dictionary_of_Characters.jpeg);
	background-repeat: no-repeat;
	background-size: 99px;
	background-position: 3px 8px;

	h1 {
		margin: 0;
		font-size: 20px;
		font-weight: normal;
	}

	p {
		margin: 5px 0;
		padding-left: 10px;
		font-size: 12px;

		strong {
			font-weight: normal;
		}
	}
}
</style>