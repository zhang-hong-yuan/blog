import _ from 'lodash'


export const arcoVue = data => {

	function renameKeys(obj) {
		if (Array.isArray(obj)) obj.forEach((item, i) => obj[i] = renameKeys(item))
		else if (typeof obj === 'object' && obj !== null) {
			Object.keys(obj).forEach(pathKey => {
				if (pathKey !== 'kids') {
					// console.log(pathKey);

					obj.key = pathKey
					obj.title = obj[pathKey].split(/-{3,}/)[0]
					obj.class = obj[pathKey].split(/-{3,}/)[1]

					delete obj[pathKey]

				} else if (pathKey === 'kids') {
					obj.children = obj.kids
					delete obj.kids
					obj.children = renameKeys(obj.children)
				}
			})
		}
		return obj
	}

	// console.log(obj);
	const datacloneDeep = _.cloneDeep(data)
	// console.log(renameKeys(datacloneDeep));
	return renameKeys(datacloneDeep)
}