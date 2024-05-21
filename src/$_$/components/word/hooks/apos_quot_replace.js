export const apos_quot_replace = str => {
	return str.replace(/&apos;|&quot;/g, match => {
		switch (match) {
			case '&apos;': return "'"
			case '&quot;': return '"'
		}
	})
}
