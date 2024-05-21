import { navs, toggleNav } from '@/$_$/globConfig/navs'

export function pressEscape() {
	if (
		navs.bookmark ||
		navs.mindmap ||
		navs.panel ||
		navs.spelling ||
		navs.contents
	) {
		toggleNav()
	} else {
		toggleNav('bookshelf')
	}
}