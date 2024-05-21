
export const commonRawMarkReg = /——/g


export const commonRawMarkReplacer = match => {
	switch (match) {

		case '——': return '<span style="font-family: arial; letter-spacing: 0;">——</span>'

	}
}