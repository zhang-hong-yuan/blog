import router from '../Main/Router'


export default async to => {

	// console.log(to);
	// console.log(to.fullPath);
	// console.log(to.fullPath.split('/'));

	if (to.path === "/entry") return

	const [, bookName, toPage] = to.path.split('/')


	let indexData = await Promise.any([
		import(`../../We/${bookName}/Index.js`),
		import(`../../computer/${bookName}/Index.js`),
		import(`../../english/${bookName}/Index.js`),
		import(`../../history/${bookName}/Index.js`),
		import(`../../leisure/${bookName}/Index.js`),
	])

	// 切换科目时 to.fullPath 只有 bookName 没有具体的 page
	if (to.fullPath.split('/').length < 3) {
		// console.log(to.fullPath);

		const bookPage = JSON.parse(localStorage.getItem('browse_records'))
		const pagePath = (bookPage && bookPage[bookName]) ? bookPage[bookName] : getPageKey(indexData.default[0])

		// console.log(`/${bookName}/${pagePath}`);
		return `/${bookName}/${pagePath}`

	}



	// 是否存在当前浏览的根路由（避免重复添加）
	if (router.hasRoute(to.name)) return true


	// 添加根路由
	router.addRoute({
		path: `/${bookName}`,
		name: bookName,
		component: () => {
			return Promise.any([
				import(`../../We/${bookName}/components/Index.vue`),
				import(`../../computer/${bookName}/components/Index.vue`),
				import(`../../english/${bookName}/components/Index.vue`),
				import(`../../history/${bookName}/components/Index.vue`),
				import(`../../leisure/${bookName}/components/Index.vue`),
			])
		}
	})





	flat(indexData.default)

	// 递归遍历
	function flat(dataArr) {
		dataArr.forEach(item => {
			const pagePath = getPageKey(item)

			// 添加二级路由
			router.addRoute(bookName, {
				path: pagePath,
				name: `${bookName}${pagePath}`,
				component: () => {

					return Promise.any([
						import(`../../We/${bookName}/pages/${pagePath}.vue`),
						import(`../../computer/${bookName}/pages/${pagePath}.vue`),
						import(`../../english/${bookName}/pages/${pagePath}.vue`),
						import(`../../history/${bookName}/pages/${pagePath}.vue`),
						import(`../../leisure/${bookName}/pages/${pagePath}.vue`),
					])

				},
				// 把标题存储在 meta 对象中，在 flip 组件中使用
				meta: { title: item[pagePath].split(/-{3,}/)[0] }
			})
			if (item.kids) flat(item.kids)
		})
	}


	// 这一部分是为了防止更改文件名导致的导航错误
	let page = toPage

	if (!router.getRoutes().some(route => route.path === to.path))
		page = getPageKey(indexData.default[0])


	return `/${bookName}/${page}`

}



function getPageKey(item) {
	return Object.keys(item).find(pathKey => pathKey !== 'kids')
}