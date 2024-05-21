import { toggleNav } from '@/$_$/globConfig/navs'


export function toggleNavs(to, from) {


	const [, toBook, toPage] = to.path.split('/')
	const [, fromBook, fromPage] = from.path.split('/')


	// 翻页时，隐藏 contents 组件
	if (toBook === fromBook && toPage !== fromPage) return toggleNav()


	// 切换 books 时，显示 contents 组件
	if (toBook !== fromBook && fromBook !== '') return toggleNav('contents', 400)


	// 首次打开网站，显示导航页面
	if (to.path === '/') return toggleNav('index')

}