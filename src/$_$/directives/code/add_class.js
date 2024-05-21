





// 这个 type 就是除 token 之外的类名
// 返回新加的类名（并不会删除之前的类）
export const addClass = ({ content, type, language }) => {



	if (content === '--' && type === 'operator' && language === 'js') {
		return ''
	}
}