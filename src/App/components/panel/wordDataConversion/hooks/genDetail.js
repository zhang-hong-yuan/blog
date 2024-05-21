import { genDetailBlock } from './genDetailBlock'

export const genDetail = detailContainers => {

	const sectionsArr = []

	// detailContainers 是 div.oxford-entry

	detailContainers.forEach(detailContainer => {
		// 这里是循环词性块
		const sections = detailContainer.querySelectorAll(':scope > div.entry-pg')

		sections.forEach(section => {
			// console.log(section);
			sectionsArr.push(genDetailBlock(section))
		})
	})




	return sectionsArr
}