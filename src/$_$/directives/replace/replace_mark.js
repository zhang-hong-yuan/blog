

export const rawMarkReg = /\\‘|\\’|‘\\ ’|‘|’/g




export const rawMarkReplacer = match => {
	// console.log(match);
	switch (match) {

		case '\\‘': return '‘'
		case '\\’': return '’'


		// 这是为了展示 ‘\ ’ ===> <span>\</span>
		// 直接展示 ‘\’ 会转译 <span>’
		// 不匹配展示会有空格 ‘\ ’ ===> <span>\ </span>
		case '‘\\ ’': return '<span class="___mark___">\\</span>'



		case '‘': return `<span class="___mark___">`
		case '’': return `</span>`


	}


}


