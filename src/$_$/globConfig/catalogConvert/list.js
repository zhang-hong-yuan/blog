


export const list = data => {
	return data.map(item => {

		const path = Object.keys(item).find(pathKey => pathKey !== 'kids')

		const [title, classes] = item[path].split(/-{3,}/)


		return { title, path, classes }


	})

}