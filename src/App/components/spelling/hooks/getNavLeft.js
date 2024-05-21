



export function getNavLeft() {


	onMounted(() => {
		setNavLeft()
		window.addEventListener('resize', setNavLeft)
	})

	onUnmounted(() => window.removeEventListener('resize', setNavLeft))

}




// 页面打开，动态修改 nav 的 left 值
function setNavLeft() {
	const windowWidth = window.innerWidth          // 窗口高度
	const nav = document.querySelector('nav#spelling')
	if (windowWidth > 666 && nav) nav.style.left = `${(windowWidth - nav.offsetWidth) / 2}px`
}