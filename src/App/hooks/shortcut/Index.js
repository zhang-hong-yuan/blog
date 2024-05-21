import { toggleNav } from '@/$_$/globConfig/navs'
import { ankiCopy } from '@/$_$/directives/replace/anki_copy'

import { pressEscape } from './pressEscape'
const key = ({ code, target }) => {
	// console.log(code);
	// console.dir(target);

	// 解决表单输入和快捷键的冲突
	if (
		target.tagName === 'INPUT' &&

		code !== 'F4' &&
		code !== '`' &&
		code !== '·' &&
		code !== 'Escape'
	)
		return

	const flip = document.querySelectorAll('nav.flip button')

	switch (code) {

		case 'Escape': pressEscape(); break
		case 'Backquote': toggleNav('bookmark'); break
		case 'F4': toggleNav('panel'); break


		case 'ShiftLeft': toggleNav('contents'); break


		case 'ArrowLeft': if (flip[0]) flip[0].click(); break
		case 'ArrowRight': if (flip[1]) flip[1].click(); break


		case 'KeyA': ankiCopy(); break
		case 'KeyS': toggleNav('spelling'); break
		case 'KeyM': toggleNav('mindmap'); break


	}

}

import { onMounted, onUnmounted } from 'vue'

export function shortcut() {
	onMounted(() => document.addEventListener('keyup', key))
	onUnmounted(() => document.removeEventListener('keyup', key))
}