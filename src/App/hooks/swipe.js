import { toggleNav } from '@/$_$/globConfig/navs'


import Hammer from 'hammerjs'
delete Hammer.defaults.cssProps.userSelect; // 解决滑动时无法选中文字的问题


export function swipe() {
	const app = new Hammer(document.querySelector('#app'))
	// console.log(app);

	// 左滑显示书单  右滑显示目录
	app.on('swiperight', () => toggleNav('contents'))
	// app.on('swipeleft', () => toggleNav('related'))





	// 点击 div#app 把弹出的窗口进行隐藏
	app.on('tap', e => {
		// 为了防止点击 nav 也进行隐藏
		const navs = document.querySelectorAll(`
											nav.contents
										`)

		if (navs.length === 0) {
			toggleNav()
		} else {
			navs.forEach(nav => {
				if (!nav.contains(e.target)) toggleNav()
			})
		}

	})
}