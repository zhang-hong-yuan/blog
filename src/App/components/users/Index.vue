<script setup>
	const isShowLogon = ref(false)



	const name = ref('未登录')

	const localLogin = JSON.parse(localStorage.getItem('users'))
	if (localLogin && localLogin.$currentUser !== 'nobody') name.value = localLogin.$currentUser

	const username = ref()
	const password = ref()

	const headerShow = ref(false)
	const pending = ref(false)



	watch(isShowLogon, (val) => {
		if (val) {
			username.value = ''
			password.value = ''
			headerShow.value = false

			nextTick(() => document.querySelector('div#login input[type="text"]').focus())
		}
	})



	const submit = () => {

		let localName = 'nobody'
		switch (username.value.toLowerCase()) {
			case 'tyla':
			case '刘盈盈':
				localName = 'Tyla'
				break;

			case 'arvin':
			case '张洪远':
			case '张翔宇':
				localName = 'Arvin'
				break;

			default: localName = 'nobody'
		}

		name.value = username.value


		const today = new Date()
		const year = String(today.getFullYear())
		const month = String(today.getMonth() + 1).padStart(2, '0')
		const date = String(today.getDate()).padStart(2, '0')


		headerShow.value = true
		if (password.value === year + month + date) {
			// 登录成功
			pending.value = true

			// 登录成功之后隐藏登录框
			setTimeout(() => isShowLogon.value = false, 666)

			loginRecords(localName)
		} else {

			// 登录失败
			pending.value = false
		}



	}


	function loginRecords(localName) {
		if (localName) {
			// console.log(localName);
			const localUsers = JSON.parse(localStorage.getItem('users')) ?? {}
			localUsers.$currentUser = localName



			localUsers[localName] = localUsers[localName] ?? {}

			// console.log(localUsers[localName].loginCount);

			localUsers[localName].loginCount =
				localUsers[localName].loginCount ?
					localUsers[localName].loginCount + 1 :
					1



			localStorage.setItem('users', JSON.stringify(localUsers))
		}
	}
</script>

<template>
	<div id="users">
		<img src="@/We/Arvin/assets/author.svg" alt="">
		<button
			@click="isShowLogon = true"
			:class="{ login: name !== '未登录' }"
			class="btn">{{ name }}</button>
	</div>



	<teleport to="body">


		<transition
			name="animate__animated animate__bounce"
			enter-active-class="animate__headShake"
			leave-active-class="animate__zoomOut">

			<div
				id="login"
				v-if="isShowLogon"
				@click="isShowLogon = false">

				<fieldset @click.stop>


					<header
						v-if="headerShow"
						:class="pending ? 'right' : 'wrong'">
						{{ pending ? '登录成功！' : '密码错误！' }}
					</header>
					<header v-else>请输入：</header>




					<input type="text" class="form-control" placeholder="user name" v-model.lazy.trim="username">
					<input type="password" class="form-control" placeholder="password" v-model.lazy="password"
						@keyup.enter.stop="submit">


					<button class="btn" @click.stop="submit">login</button>

					<p>
						如您还未注册，请联系本app作者成为我们的会员！
						<br />
						张先生：18721211445
					</p>
				</fieldset>
			</div>

		</transition>
	</teleport>

</template>


<style lang="less" scoped>
div#users {
	display: inline-block;
	margin: 6px 66px 0 0;

	img {
		width: 20px;
		height: auto;
		margin-right: -10px;
	}

	button {
		color: #888;
		font-size: 12px;
		line-height: 1;
		transition: all .3s;

		&.login {
			color: #333;
			font-size: 15px;
		}
	}
}


div#login {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 88;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, .3);

	fieldset {
		width: 300px;
		height: 288px;
		padding: 16px 0;
		margin: 100px auto;
		border-radius: 8px;
		background-color: #fff;
		box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.25);
		text-align: center;

		header {
			margin: 15px 0;
			color: #666;
			font-weight: 700;

			&.right { color: #65b687; }
			&.wrong { color: red; }
		}

		input {
			box-sizing: border-box;
			margin: 16px 18px;
			width: 264px;

			&::placeholder { color: #ccc; }
		}
	}

	button {
		width: 88px;
		background-color: #f1f1f1;
		transition: background-color .3s;

		&:hover { background-color: #ccc; }
	}

	p {
		margin: 36px 0 0;
		color: #aaa;
		font-size: 10px;
	}
}
</style>