
import $ from 'jquery'

export const ankiMouseOverOut = () => {
	$('bdi').on({

		mouseover() {
			$(this).addClass("cloze back")

			const current = $(this).attr('data-label')
			$('bdi').each((n, clozes) => {
				const label = $(clozes).attr('data-label')
				if (label === current && label !== 'undefined') $(clozes).addClass("cloze back")
			})
		},

		mouseout() { $('bdi').removeClass("cloze back") },
	})
}