
import { createRouter, createWebHashHistory } from 'vue-router'

const routeRecord = JSON.parse(localStorage.getItem('browse_records'))

const router = createRouter({
	routes: [
		{ path: '/', redirect: () => routeRecord ? routeRecord.$lastBrowse : '/entry' },
		{ path: '/:catch(.*)*', alias: '/entry', component: () => import('@/App/components/bookshelf/books') },
	],

	history: createWebHashHistory(),
	linkActiveClass: 'routeActive',
	sensitive: true,
	strict: true,
	scrollBehavior: (to, from, savedPosition) => savedPosition ? savedPosition : { top: 0 },
})




// 根据浏览目标，动态添加路由
import addRoute from '../Router/add_route'
router.beforeEach(addRoute)


// 每册书的浏览记录保存到本地
import recordBrowseToLocal from '../Router/browse_records'
router.afterEach(recordBrowseToLocal)


// 切换路由时，自动 显示/隐藏 窗口
import { toggleNavs } from '../Router/toggle_navs'
router.afterEach(toggleNavs)


export default router