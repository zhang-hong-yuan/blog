<template>

	<div id="prismJs_index">
		<picture class="logo">
			<img src="../assets/prismjs.svg" alt="">

			<p>Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind. It’s used in
				millions of websites, including some of those you visit daily.</p>
		</picture>

		<h1>Customize your code</h1>
	</div>









	<word word="lightweight---adj. （布料）轻量的，薄型的" />
	<word word="extensible----adj. 可扩展的;可延伸的；可扩充的；可展开的" />
	<word word="syntax--------n. (computing 计) 句法；语构" />
	<word word="highlighter---n. （颜色鲜亮的）标记笔；荧光笔" />
	<word word="modern--------adj. 时新的；现代化的；最新的" />
	<word word="standard------n.[~ (of sth)] （品质的）标准，水平，规格，规范" />
	<word word="mind----------phr. 将……记在心中；记起；考虑" />
	<word word="million-------num.大量" />
	<word word="website-------n. 网站" />
	<word word="visit---------v. 访问（互联网上的网站）" />
	<word word="daily---------adv. 每日；每天" />
	<word word="customize----v. 订制，订做，改制（以满足顾主的需要）" />
	<!-- <word word="----" /> -->

</template>


<style lang="less" scoped>
div#prismJs_index {
	position: relative;
	width: 100vw;
	margin-left: -2vw;
	padding: 50px 25px;
	background: linear-gradient(transparent, rgba(0, 0, 0, 0.6)), url("@/computer/prismjs/assets/background.png") fixed;
	background-size: cover;
	text-shadow: 0 -1px 2px black, 0 0 4px black,0 -1px 0 black, 0 1px 0 black, -1px 0 0 black, 1px 0 0 black;

	&::before {
		content: '';
		position: absolute;
		z-index: 1;
		bottom: 0;
		left: 0;
		right: 0;
		height: 20px;
		background-size: 20px 40px;
		background-repeat: repeat-x;
		background-image: linear-gradient(45deg, transparent 34%, white 34%, white 66%, transparent 66%),
		linear-gradient(135deg, transparent 34%, white 34%, white 66%, transparent 66%);
	}

	h1 {
		margin-top: 5px;
		color: #f1ad26;
	}

	picture.logo {
		img {
			float: left;
			margin-right: 30px;
			color: #7fab14;
			text-align: center;
			font-size: 140%;
			text-transform: uppercase;
			letter-spacing: .25em;
			width: 160px;
		}

		p {
			margin: 0;
			font: 150%/1.4 Questrial, sans-serif;
			color: white;
			text-shadow: 0 -1px 2px black, 0 0 4px black,0 -1px 0 black, 0 1px 0 black, -1px 0 0 black, 1px 0 0 black;
		}
	}
}
</style>