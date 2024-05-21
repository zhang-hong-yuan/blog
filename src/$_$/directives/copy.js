import { ElNotification } from 'element-plus'
import 'element-plus/es/components/notification/style/css'



export function copy(el,
	{
		modifiers: { dblclick },
		value
	}) {

	// console.log(el);

	// 为了避免被 v-replacer 清除点击事件
	el.classList.add('noReplace')




	// 没有修饰符，默认事件为 click
	let eventType = 'click'
	if (dblclick) eventType = 'dblclick'




	el.addEventListener(eventType, function (e) {
		e.stopPropagation()


		// 没有值的话，默认拷贝内容为当前元素的 innerText
		const copyContent = value ?? this.innerText

		navigator.clipboard.writeText(copyContent)

		ElNotification({
			title: 'Copyied!',
			message: copyContent,
			type: 'success',
		})

	})
}