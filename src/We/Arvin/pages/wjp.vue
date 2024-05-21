<template>
	<div>
		<header>
			<h1>
				<img src="../assets/wjp/wjp_logo.png" alt="">
			</h1>
		</header>

		<section>
			<h2>
				<img src="../assets/wjp/Enumerator.png" alt="">
				<p>张洪远</p>
			</h2>
			<ul>
				<li><span>性别</span>男</li>
				<li><span>年龄</span>29</li>
				<li><span>角色</span>普查员</li>
				<li><span>手机号</span>187****1445</li>
				<li><span>证件号</span>24310101019000026</li>
			</ul>
		</section>

		<footer>
			<ul>
				<li><span>所属普查区域</span>上海市/市辖区/黄浦区/老西门街道/龙门邨居委会</li>
			</ul>
		</footer>
	</div>
</template>


<style scoped lang="less">
div {
	width: 100vw;
	height: 100vh;
	background-color: #f6f6f6;
	font-family: -apple-system,BlinkMacSystemFont,'Helvetica Neue',Helvetica,Segoe UI,Arial,Roboto,'PingFang SC',miui,'Hiragino Sans GB','Microsoft Yahei',sans-serif;

	header {
		height: 170px;
		background-image: url(../assets/wjp/background.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		padding-top: 50px;
		box-sizing: border-box;

		h1 {
			width: 216px;
			height: auto;
			margin: 0 auto;

			img {
				width: 100%;
				height: 100%;
			}
		}
	}

	section {
		width: 300px;
		height: 435px;
		margin: -60px auto 10px;
		border-radius: 8px;
		background-color: #fff;

		h2 {
			padding-top: 20px;
			text-align: center;

			img {
				width: 110px;
				height: auto;
			}

			p {
				color: #333;
				font-size: 16px;
				font-weight: normal;
				padding-top: 6px;
			}
		}
	}

	footer {
		width: 300px;
		margin: 0 auto;
		padding: 8.5px 0;
		border-radius: 8px;
		background-color: #fff;

		ul li {
			span:nth-child(1) { background-image: url(../assets/wjp/region.jpg); }
		}
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0 20px;

		li {
			padding: 16px 0 10px;
			border-bottom: 0.6px solid #ebedf0;
			-webkit-text-fill-color: #666;
			color: #c8c9cc;
			font-size: 12.8px;
			line-height: 20.48px;
			text-align: right;
			word-wrap: break-word;

			&:first-child {
				padding-top: 0;
			}

			&:last-child {
				border-bottom: none;
			}

			span {
				float: left;
				padding-left: 26px;
				margin-right: 10px;
				background-repeat: no-repeat;
				background-size: 17px 17px;
				background-position: 0px 3px;
				color: #2a2a2a;
			}

			&:nth-child(1) span { background-image: url(../assets/wjp/gender.jpg); }
			&:nth-child(2) span { background-image: url(../assets/wjp/age.jpg); }
			&:nth-child(3) span { background-image: url(../assets/wjp/character.jpg); }
			&:nth-child(4) span { background-image: url(../assets/wjp/phone.jpg); }
			&:nth-child(5) span { background-image: url(../assets/wjp/credential.jpg); }
		}
	}
}
</style>