import cloze from '../components/cloze'
import flip from '../components/flip'
import word from '../components/word/Index'

export default app => {
	app
		.component('cloze', cloze)
		.component('flip', flip)
		.component('word', word)
}