export function scopedCSS() {

	const hash = location.hash
	const [, books, page] = hash.split('/')
	// console.log(books, page);

	const v = document.querySelector('main > *')

	const vData = Object.keys(v.dataset).find(dataAttr => dataAttr.startsWith('v') && v.dataset[dataAttr] === '')

	const scoped = vData ? `[data-vite-dev-id*="${vData.slice(2).toLocaleLowerCase()}"]` : ''


	return location.host === "localhost:5173" ? style() : link()




	function link() {
		const link = document.querySelector(`link[rel="stylesheet"][href^="/weblog/assets/${page}-"]`)

		if (link) {
			const cssArray = Array.from(link.sheet.cssRules).map(item => item.cssText)
			const cssContent = cssArray.join('')

			return `<style type="text/css">${cssContent}</style>`
		}

	}


	function style() {
		const style = document.querySelector(`style[data-vite-dev-id*="${books}"][data-vite-dev-id*="${page}"]${scoped}`)

		return style ? style.outerHTML : ''
	}

}