


export const ankiAddLabel = el => {


	let sameCloze = {}
	let order = 1


	const anki_clozes = el.querySelectorAll('bdi')


	for (let i = 0; i < anki_clozes.length; i++) {

		const label = anki_clozes[i].dataset.label
		if (label !== 'undefined') sameCloze[label] = sameCloze[label] ? sameCloze[label]++ : order++

		anki_clozes[i].dataset.order = sameCloze[label] ? sameCloze[label] : order++

	}
}