export const genBasicForm = (formContainer, word) => {



	const sanDan = formContainer.querySelector(`a[data-stat-add="第三人称单数"]`)
	const fuShu = formContainer.querySelector(`a[data-stat-add="复数"]`)


	const xianFen = formContainer.querySelector(`a[data-stat-add="现在分词"]`)
	const guoFen = formContainer.querySelector(`a[data-stat-add="过去分词"]`)
	const guoQu = formContainer.querySelector(`a[data-stat-add="过去式"]`)


	const biJiao = formContainer.querySelector(`a[data-stat-add="比较级"]`)
	const zuiGao = formContainer.querySelector(`a[data-stat-add="最高级"]`)


	const res = {}


	if (word) res.yx = word.textContent
	if (fuShu) res.fs = fuShu.textContent
	if (sanDan) res.sd = sanDan.textContent

	if (xianFen) res.xf = xianFen.textContent
	if (guoFen) res.gf = guoFen.textContent
	if (guoQu) res.gq = guoQu.textContent

	if (biJiao) res.bj = biJiao.textContent
	if (zuiGao) res.zg = zuiGao.textContent


	return res
}