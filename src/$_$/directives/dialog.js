
export function dialog(ul) {
	// console.log(ul);

	ul.classList.add('dialog')


	const lis = ul.querySelectorAll(':scope > li')
	lis.forEach(li => {

		const colonIndex = li.innerHTML.indexOf(':')

		const role = li.innerHTML.slice(0, colonIndex)
		const talk = li.innerHTML.slice(colonIndex + 1)

		// console.log(role);
		// console.log(talk);

		li.innerHTML = `
									<span class="role">${role}:</span>
									<span class="talk">${talk}</span>
									`
	})
}