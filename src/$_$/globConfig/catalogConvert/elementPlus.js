import _ from 'lodash'

export const elementPlus = data => {

	const datacloneDeep = _.cloneDeep(data)
	const result = renameKeys(datacloneDeep)

	// return console.log(addLevel(result))
	return addLevel(result)
}




function renameKeys(obj) {
	if (Array.isArray(obj)) obj.forEach((item, i) => {
		obj[i] = renameKeys(item)
	})
	else if (typeof obj === 'object' && obj !== null) {
		Object.keys(obj).forEach(pathKey => {
			if (pathKey !== 'kids') {
				// console.log(pathKey);

				obj.path = pathKey
				obj.label = obj[pathKey].split(/-{3,}/)[0]
				obj.customClass = obj[pathKey].split(/-{3,}/)[1]
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




// 这个函数是按层级添加类名：level-1 level-2 level-3
function addLevel(arr, count) {

	count ? count++ : count = 1

	for (let i = 0; i < arr.length; i++) {

		if (arr[i].customClass) {
			if (!arr[i].customClass.includes(`test-${count}`)) arr[i].customClass += ` level-${count}`
		} else {
			arr[i].customClass = `level-${count}`
		}


		if (arr[i].children) addLevel(arr[i].children, count)
	}


	return arr
}