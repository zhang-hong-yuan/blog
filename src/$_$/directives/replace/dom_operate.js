import $ from 'jquery'

export const other = () => {
	$('#app a, #app img')
		.attr('draggable', false) // 图片链接不可拖动

}

