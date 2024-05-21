import { nextTick, reactive, watch } from 'vue'

const navs = reactive({

	bookshelf: false,
	bookmark: false,
	mindmap: false,

	panel: false,
	spelling: false,

	contents: false,

	logs: false,
	clozes: false,
	nouns: false,

})

watch(navs, isShow => {
	nextTick(() => {
		if (isShow.contents) {
			const routeActive = document.querySelector('nav.contents a.routeActive')
			if (routeActive) routeActive.scrollIntoView({ block: "center" })
		}
	})
})


// 传入的参数是切换的，其他全部隐藏
function toggleNav(nav, delay = 0) {

	for (let key in navs) {
		// navs[key] = key === nav ? !navs[nav] : false
		if (key === nav) {
			if (navs[nav]) {
				navs[nav] = false
			} else {
				setTimeout(() => navs[nav] = true, delay)
			}
		} else {
			navs[key] = false
		}
	}
}

export { navs, toggleNav }