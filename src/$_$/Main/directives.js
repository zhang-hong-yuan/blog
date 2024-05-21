import { replace } from '../directives/replace/Index'
import { code } from '../directives/code/Index'
import { dialog } from '../directives/dialog'



import { copy } from '../directives/copy'
import { brace } from '../directives/brace'
import { audioEn } from '../directives/audioEn'





export default app => {
	app
		.directive('replace', replace)
		.directive('code', code)
		.directive('dialog', dialog)


		.directive('copy', copy)
		.directive('brace', brace)
		.directive('audioEn', audioEn)
}