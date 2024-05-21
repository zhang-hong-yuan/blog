export default [
	{
		$b: 'DevTools',
		kids: [
			{ $bb: 'Console' },
			{ $bc: 'Sources' },
		]
	},
	{
		introduction: 'JavaScript',
		kids: [
			{ ac: 'js语句', },
			{
				aa: '模块化',
				kids: [
					{ aaa: 'ESM' },
					{ aab: 'CJS' },
				]
			},
			{ ab: '异常处理' },
		]
	},
	{
		z: 'Control flow',
		kids: [
			{ za: '预解析' },
			{
				zb: '条件判断',
				kids: [
					{ zba: 'if 语句' },
					{ zbb: '三元表达式' },
					{ zbc: 'switch 语句' },
				]
			}, {
				zc: '循环和迭代',
				kids: [
					{ zca: 'for 语句' },
					{ zcb: 'while 语句' },
					{ zcc: 'label 语句' },
					{ zcd: 'break 语句' },
					{ zce: 'continue 语句' },
					{ zcf: 'for...in 语句' },
					{ zcg: 'for...of 语句' },
				]
			},
		]
	}, {
		y: 'Operator',
		kids: [
			{ ya: '属性访问器' },
			{ yb: '小括号/函数调用符' },
			{
				yc: '一元操作符',
				kids: [
					{ yca: 'typeof' },
					{ ycb: 'delete' },
					{ ycc: 'void' },
				]
			},
			{ yd: '算数运算符' },
			{
				ye: '赋值运算符',
				kids: [
					{ yea: '解构赋值' },
					{ yeb: '数组解构' },
					{ yec: '对象解构' },
					{ yed: '基本类型解构' },
				]
			},
			{ yf: '逗号操作符' },
			{ yg: '比较运算符' },
			{
				yh: '关系运算符',
				kids: [
					{ yha: 'in 操作符' },
					{ yhb: 'instanceof 操作符' },
				]
			},
			{ yi: '逻辑运算符' },
			{ yj: '展开运算符' },
		]
	}, {
		d: 'Variable',
		kids: [
			{ da: '声明变量' },
			{ db: '变量作用域' },
			{ dd: '数据类型' },
			{ de: '类型运算符' },
		]
	}, {
		e: 'String----------------------topGap',

		kids: [
			{ ea: 'length' },
			{ eb: 'at() charAt()' },
			{ ej: 'slice() substring()' },
			{ ec: 'split()' },

			{ ed: 'includes() startsWith() endsWith()---------topLine' },
			{ ee: 'search() indexOf() lastIndexOf()' },
			{ ef: 'match() matchAll()' },

			{ eg: 'toLowerCase() toUpperCase()---------topLine' },
			{ eh: 'trim() trimStart() trimEnd()' },
			{ ei: 'repeat() padStart() padEnd()' },
			{ ek: 'replace() replaceAll()' },
		]
	}, {
		f: 'RegExp',
		kids: [
			{ fa: '字符类', },
			{ fb: '断言', },
			{ fc: '组和范围', },
			{ fd: '量词', },
			{ fe: '运算符优先级', },
			{ ff: 'properties', },
			{ fg: 'test()---------topLine' },
			{ fh: 'exec()', },
		]
	},
	{ g: 'Symbol' },
	{
		h: 'Number',
		kids: [
			{ ha: 'NaN isNaN()' },
			{ hb: 'parseInt() parseFloat()' },
			{ hc: 'toFixed()' },

			{
				hz: 'Math',
				kids: [
					{ hza: 'abs()' },
					{ hzb: 'round() trunc() floor() ceil()' },
					{ hzc: 'max() min()' },
					{ hzd: 'random()' },
				]
			}
		]
	}, {
		n: 'Date',
		kids: [
			{ na: '时间戳' },
			{ nb: '年、月、日、周' },
			{ nc: '时、分、秒' },
		]
	}, {
		j: 'Object------------------topGap',
		kids: [
			{ ja: 'copy' },
			{ jb: 'prototype' },
			{ jc: 'assign()' },
			{ jd: 'keys() values()' },
			{ je: 'defineproperty() getOwnPropertyDescriptor()' },
		]
	}, {
		l: 'Array',
		kids: [
			{ la: 'length' },
			{ lb: 'Array() of() from()' },
			{ lc: 'flat() flatMap()' },
			{ ld: 'concat()' },
			{ le: 'isArray()' },
			{ lf: 'join() toString()' },

			{ lg: 'at() with()---------topLine' },
			{ lh: 'entries() keys() values()' },
			{ li: 'reverse() toReversed()' },
			{ lj: 'sort() toSorted()' },

			{ lk: 'unshift() shift()---------topLine' },
			{ ll: 'push() pop()' },
			{ lm: 'fill() copyWithin()' },
			{ ln: 'slice() splice() toSpliced()' },

			{ lo: 'includes() some() every()---------topLine' },
			{ lp: 'indexOf() lastIndexOf()' },
			{ lq: 'find() findLast()' },
			{ lr: 'findIndex() findLastIndex()' },
			{ ls: 'forEach() filter() map()' },
			{ lt: 'reduce() reduceRight()' },
		]
	}, {
		k: 'Map',
		kids: [
			{ ka: 'Map() size' },
			{ kb: 'get() set() has()' },
			{ kc: 'delete() clear()' },
			{ kd: 'entries() keys() values()' },
			{ ke: 'forEach()' },
			{ kf: 'groupBy()' },
		]
	}, {
		m: 'Set',
		kids: [
			{ ma: 'Set() size' },
			{ mb: 'add() has()' },
			{ mc: 'delete() clear()' },
			{ md: 'entries() values()' },
			{ me: 'forEach()' },
		]
	}, {
		p: 'Function------------------topGap',
		kids: [
			{ pe: '定义函数' },
			{ pa: '函数的参数' },
			{ pb: '闭包(closure)' },
			{ pg: '嵌套函数' },
			{ pf: '递归函数' },
			{ pc: '箭头函数' },
			{ ph: '构造函数' },
			{
				pd: '环境对象(this)',
				kids: [
					{ pda: 'apply()' },
					{ pdb: 'call()' },
					{ pdc: 'bind()' },
				]
			},
		]
	}, {
		s: 'Event',
		kids: [
			{ sa: '事件循环' },
			{ sb: '事件类型' },
			{ sc: '事件对象' },
			{ sd: '节流/防抖' },
		]
	}, {
		r: 'BOM------------------topGap',
		kids: [
			{ ra: 'Window' },
			{ rb: '计时器' },
			{ rc: 'WebStroage' },
			{ rd: 'Console' },
			{ re: '弹窗' },
			{ rf: 'Location' },
			{ rg: 'History' },
			{ rh: 'Screen' },
			{ ri: 'Navigator' },
		]
	}, {
		q: 'DOM',
		kids: [
			{ qf: '页面渲染' },
			{ qa: '获取元素' },
			{ qb: '操作元素' },
			{
				qd: '节点操作',
				kids: [
					{ contains: 'contains()' }
				]
			},
			{ qe: '创建元素' },
			{
				qc: '尺寸位置',
				kids: [
					{ getBoundingClientRect: 'getBoundingClientRect()' },
					{
						offset: 'offset',
						kids: [
							{ offsetParent: 'offsetParent' },
							{ offsetTop: 'offsetTop offsetLeft' },
						]
					}
				]
			},
			{
				scroll: '滚动操作',
				kids: [
					{ scrollIntoView: 'scrollIntoView()' },
					{ scrollTo: 'scrollTo()' },
					{ scrollBy: 'scrollBy()' },
				]
			}
		]
	}

	// asynchronous: [
	// 	{
	// 		info: 'HTTP---t',
	// 		kids: [
	// 			{ info: 'request---ta' },
	// 			{ info: 'response---tb' },
	// 		]
	// 	},
	// 	{ info: 'Ajax---u' },
	// 	{ info: 'Promise---v' },
	// 	{ info: 'Generator---w' },
	// ],
]