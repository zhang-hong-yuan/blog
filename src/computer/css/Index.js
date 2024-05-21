export default [
	{ "___1": "CSS 简介" },
	{
		"___2": "选择器",
		"kids": [
			{
				"___3": "基本选择器",
				"kids": [
					{ "___4": "通配选择器" },
					{ "___5": "元素选择器" },
					{ "___6": "类选择器" },
					{ "___7": "ID 选择器" },
					{ "___8": "属性选择器" }]
			},
			{
				"___9": "组合选择器",
				"kids": [
					{ "__10": "选择器列表" },
					{ "__11": "后代选择器" },
					{ "__12": "子选择器" },
					{ "__13": "后续兄弟选择器" },
					{ "__14": "接续兄弟选择器" }]
			},
			{
				"__15": "伪元素选择器",
				"kids": [
					{ "__16": "::before" },
					{ "__17": "::after" },
					{ "__18": "::first-letter" },
					{ "__19": "::first-line" },
					{ "__20": "::marker" },
					{ "__21": "::selection" },
					{ "__22": "::placeholder" }]
			},
			{
				"__23": "伪类选择器",
				"kids": [
					{
						"__24": "函数式伪类",
						"kids": [
							{ "__25": ":is()" },
							{ "__26": ":where()" },
							{ "__27": ":has()" },
							{ "__28": ":not()" }]
					},
					{
						"__29": "输入状态伪类",
						"kids": [
							{ "__30": ":default" },
							{ "__31": ":indeterminate" },
							{ "__32": ":placeholder-shown" },
							{ "__33": ":optional" },
							{ "__34": ":required" },
							{ "__35": ":focus" },
							{ "__36": ":focus-within" },
							{ "__37": ":checked" },
							{ "__38": ":read-only" },
							{ "__39": ":read-write" },
							{ "__40": ":enabled" },
							{ "__41": ":disabled" },
							{ "__42": ":in-range" },
							{ "__43": ":out-of-range" },
							{ "__44": ":valid" },
							{ "__45": ":invalid" }]
					},
					{
						"__46": "树结构的伪类",
						"kids": [
							{ "__47": ":root" },
							{ "__48": ":scope" },
							{ "__49": ":empty-------------------bottomSplit" },
							{ "__50": ":only-child" },
							{ "__51": ":first-child" },
							{ "__52": ":last-child" },
							{ "__53": ":nth-child()" },
							{ "__54": ":nth-last-child()-------------------bottomSplit" },
							{ "__55": ":only-of-type" },
							{ "__56": ":first-of-type" },
							{ "__57": ":last-of-type" },
							{ "__58": ":nth-of-type" },
							{ "__59": ":nth-last-of-type" }]
					},
					{
						"__60": "用户行为伪类",
						"kids": [
							{ "__61": ":link" },
							{ "__62": ":visited" },
							{ "__63": ":hover" },
							{ "__64": ":active" },
							{ "__65": ":any-link" },
							{ "__66": ":target" }]
					},
					{ "__67": ":fullscreen" },
					{
						"__68": "资源状态伪类",
						"kids": [
							{ "__69": ":playing" },
							{ "__70": ":paused" }]
					}]
			}]
	},
	{
		"__71": "At 规则",
		"kids": [
			{ "__72": "@charset" },
			{ "__73": "@import" },
			{
				"__74": "@media",
				"kids": [
					{ "__75": "媒体类型" },
					{ "__76": "媒体特性" },
					{ "__77": "逻辑运算符" }]
			},
			{ "__78": "@font-face" },
			{ "__79": "@keyframes" }]
	}, {
		pppp: 'CSS 基本数据类型',
		kids: [
			{
				_ij2: '<length>',
				kids: [
					{ ndsk: 'min-content' },
					{ nds4: 'max-content ' },
				]
			},
		]
	}, {
		cccc: 'display-----------------------topSplit'
	}, {
		sss1: 'float',
		kids: [
			{ mmmw: 'clear' }
		]
	}, {
		aaa1: 'position',
		kids: [
			{ aaa2: 'z-index' }
		]
	}, {
		colu: 'multi-column',
		kids: [
			{
				fath: 'column',
				kids: [
					{ _987: 'column-count' },
					{ _589: 'column-width' },
				]
			}, {
				_119: 'column-rule',
				kids: [
					{ _090: 'column-rule-width' },
					{ _902: 'column-rule-style' },
					{ _489: 'column-rule-color' },
				]
			},
			{ _666: 'column-gap' },
			{ _345: 'column-span' }
		]
	}, {
		flex: "flex",
		kids: [
			{
				dfsd: 'flex-flow',
				kids: [
					{ werq: 'flex-direction' },
					{ ew22: 'flex-wrap' }
				]
			},
			{ jie3: 'justify-content' },
			{ jinw: 'align-content' },
			{ fdsq: 'align-items' },
			{ okw1: 'order-------------------bottomSplit' },
			{ jinp: 'align-self' },
			{
				in22: 'flex',
				kids: [
					{ owow: '弹性元素的尺寸' },
					{ owoq: '正负可用空间-------------------bottomSplit' },
					{ _122: 'flex-grow' },
					{ _111: 'flex-shrink' },
					{ _123: 'flex-basis-------------------bottomSplit' },
					{ recc: 'flex-basis 和 flex-grow' },
					{ recd: 'flex-basis 和 flex-shrink' }
				]
			}
		]
	}, {
		grid: 'grid'
	}, {
		tabl: 'table layout'
	}, {
		lll0: 'Box Model-----------------------topSplit',
		kids: [
			{ ll00: 'width' },
			{ ll12: 'height' },
			{ ll11: 'margin' },
			{ ll22: 'padding' },
			{ ll33: 'border' },
			{ ll44: 'outline' }
		]
	}, {
		qkds: 'overflow'
	}, {
		wdld: 'visibility'
	}, {
		nnnn: 'background'
	}, {
		color: 'color---------------------------topSplit'
	}, {
		nnn1: 'fonts'
	}, {
		nnn0: 'text-decoration'
	}, {
		hdle: 'text-align'
	}, {
		kvne: 'vertical-align'
	}, {
		nnss: 'transform-----------------------topSplit'
	}, {
		naaa: 'animation'
	},
]

// { name: '个人收藏---$', },
// { name: 'CSS 简介---a', },
// { name: '选择器---b', },
// { name: '媒体查询---c', },
// { name: 'CSS 函数---d', },
// { name: 'CSS 颜色---e', },
// { name: 'CSS 单位---f', },
// { name: '浏览器私有前缀---g', },

// { name: 'Box Model---h', },
// { name: 'Float---i', },
// { name: 'Position---j', },
// { name: 'Background---k', },
// { name: 'Fonts---l', },
// { name: 'Text---m', },
// { name: 'Transform---n', },
// { name: 'Animation---o', },
// { name: 'Flex---p', },
// { name: 'User-interface---q', },
