
export function audioEn(btn) {

	// console.log(btn);
	// btn.classList.add('audioEn')



	btn.addEventListener('click', () => {
		let audio = document.querySelector('audio#unique')

		// 如果不存在
		if (!audio) {
			audio = document.createElement('audio')
			audio.hidden = true
			audio.autoplay = true
			audio.id = 'unique'
			document.body.appendChild(audio)
		}



		// 英是1，美是0
		if (btn.dataset.bep)
			audio.src = `http://dict.youdao.com/dictvoice?type=1&audio=${btn.dataset.bep}`

		else if (btn.dataset.aep)
			audio.src = `http://dict.youdao.com/dictvoice?type=0&audio=${btn.dataset.aep}`

		else
			console.log('没有要播放的数据源（v-audioEn)');
	})

}