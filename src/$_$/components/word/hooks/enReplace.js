export const enReplace = (en, formExg) => {

	// console.log(en)

	if (/‘[\w '"]+’/.test(en)) {
		return en.replace(/‘([\w '"]+)’/g, `<strong class='headword'>$1</strong>`)
	} else {
		return en.replace(formExg, `<strong class='headword'>$&</strong>`)
	}

}