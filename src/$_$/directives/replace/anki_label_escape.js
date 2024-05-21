export const ankiMarkEscapeReg = /\\【|\\】|\\;;|\\::/g


export const ankiMarkEscapeReplacer = match => {

	switch (match) {
		case '\\【': return '【'
		case '\\】': return '】'

		case '\\::': return '::'
		case '\\;;': return ';;'
	}

}
