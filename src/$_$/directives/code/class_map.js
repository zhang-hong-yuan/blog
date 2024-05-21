
const html = {

}


const css = {

}


const js = {

}


export const classMap = (className, language) => {
	// console.log(className);
	// console.log(language);

	switch (language) {
		case 'html': return html[className] ?? className
		case 'css': return css[className] ?? className
		case 'js': return js[className] ?? className

		default: return className
	}

}