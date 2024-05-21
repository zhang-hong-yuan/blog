import { commonRawMarkReg, commonRawMarkReplacer } from './replace_common'
import { rawMarkReg, rawMarkReplacer } from './replace_mark'

import { ankiReg, ankiMarkReplacer } from './anki_replace'
import { ankiMarkEscapeReg, ankiMarkEscapeReplacer } from './anki_label_escape'


// 根元素直接操作会报错；
// 获取子节点进行操作会失去代码的点击复制功能
// 直接写 div 会失去代码的点击复制功能，所以要精确列举要操作的 div
// 所以要精准获取，最好不操作 div 和 pre
const needOperateElements = `
		*:not(
			:has(.noReplace),
			.noReplace,
			.noReplace *,

			:has(button),
			button,
			button *,

			br,
			hr,

			img,
			audio,
			video,

			form,
			input,

			dialog
		)
	`

export function replace(el) {
	// console.dir(el);


	// 执行顺序为：
	// 1、先加类名；
	// 2、调用 v-replace ，执行 innerHTML.replace() 操作
	// 3、调用 Prism.highlightAll() 代码高亮
	nextTick(() => {

		const elements = el.querySelectorAll(needOperateElements)
		// console.log(elements);

		for (let i = 0; i < elements.length; i++) {
			elements[i].innerHTML = elements[i].innerHTML
				.replace(commonRawMarkReg, commonRawMarkReplacer)
				.replace(rawMarkReg, rawMarkReplacer)

				.replace(ankiReg, ankiMarkReplacer)
				.replace(ankiMarkEscapeReg, ankiMarkEscapeReplacer)
		}


		other()
		ankiAddLabel(el)
		ankiMouseOverOut()
	})
}

import { other } from './dom_operate'
import { ankiAddLabel } from './anki_add_label'
import { ankiMouseOverOut } from './anki_mouse_over_out'