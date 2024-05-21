export default [
	{
		intro: 'HTML 简介',
		kids: [
			{ tag: 'HTML 标签', },
			{ space: 'html 空白', },
			{ character: '特殊字符', },
			{ paaa: '路径', },
			{ pc: 'PC端布局', },
			{ m: '移动端布局', },
		]
	}, {
		props: "元素属性",
		kids: [
			{ boolean: '布尔属性' },
			{ val: '属性值' },
			{
				globalProps: '全局属性',
				kids: [
					{ styles: 'style' },
					{ idd: 'id' },
					{ classes: 'class' },
					{ datas: 'data-*' },
					{ titleProp: 'title' },
					{ contenteditable: 'contenteditable' },
					{ draggable: 'draggable' },
					{ tabindex: 'tabindex' },
					{ hidden: 'hidden' },
					{ lang: 'lang' },
					{ spellcheck: 'spellcheck' },
					{ autofocus: 'autofocus' },
					{ accesskey: 'accesskey' },
				]
			},
		]
	}, {
		n: '结构标签------------------------topSplit',
		kids: [
			{ doctype: '<!DOCTYPE>°', },
			{ html: '<html>', },
			{ head: '<head>', },
			{ body: '<body>', },
		]
	}, {
		headSon: '元信息标签',
		kids: [
			{ base: '<base>°', },
			{ title: '<title>', },
			{
				meta: '<meta>°',
				kids: [
					{ viewpoint: 'name="viewport"' }
				]
			},
			{ link: '<link>°', },
			{ style: '<style>', },
			{ script: '<script>', },
			{ noscript: '<noscript>', },
		],
	}, {
		name1: '基础标签',
		kids: [
			{ heading: '<h1>～<h6>' },
			{ p: '<p>' },
			{ br: '<br>°' },
			{ hr: '<hr>°' },
			{ anchor: '<a>' },
			{ iframe: '<iframe>' },
			{ note: '<!-- ... -->°' },
		],
	}, {
		namde: '节标签---------------------------topSplit',
		kids: [
			{ div: '<div>' },
			{ span: '<span>' },
			{ main: '<main>----------------------topSplit' },
			{ nav: '<nav>' },
			{ header: '<header>' },
			{ article: '<article>' },
			{ aside: '<aside>' },
			{ section: '<section>' },
			{ footer: '<footer>' },
			{ figure: '<figure>----------------------topSplit' },
			{ figcaption: '<figcaption>' },
			{ dialog: '<dialog>----------------------topSplit' },
			{ details: '<details>' },
			{ summary: '<summary>' },
		],
	}, {
		list: '列表标签',
		kids: [
			{ ol: '<ol>' },
			{ ul: '<ul>' },
			{ menu: '<menu>' },
			{ li: '<li>' },
			{ dl: '<dl>----------------------topSplit' },
			{ dt: '<dt>' },
			{ dd: '<dd>' },
		],
	}, {
		ndddd: '表格标签',
		kids: [
			{ table: '<table>' },
			{ caption: '<caption>' },
			{ colgroup: '<colgroup>' },
			{ col: '<col>' },
			{ thead: '<thead>' },
			{ tbody: '<tbody>' },
			{ tfoot: '<tfoot>' },
			{ tr: '<tr>' },
			{ th: '<th>' },
			{ td: '<td>' },
		],
	}, {
		inline: '文本格式化标签----------------topSplit',
		kids: [
			{ strong: '<strong>' },
			{ em: '<em>' },
			{ b: '<b>' },
			{ u: '<u>----------------------topSplit' },
			{ s: '<s>----------------------topSplit' },
			{ ins: '<del> <ins>' },
			{ i: '<i>----------------------topSplit' },
			{ cite: '<cite>' },
			{ dfn: '<dfn>' },
			{ sub: '<sup> <sub>----------------------topSplit' },
			{ mark: '<mark>----------------------topSplit' },
			{ small: '<small>' },
			{ abbr: '<abbr>' },
			{ wbr: '<wbr>' },
		],
	}, {
		nameda: '计算机输出标签',
		kids: [
			{ pre: '<pre>' },
			{ code: '<code>' },
			{ kbd: '<kbd>' },
			{ samp: '<samp>' },
			{ var: '<var>' },
			{ meter: '<meter>' },
			{ progress: '<progress>' },
		],
	}, {
		name5665: '引用和注释标签',
		kids: [
			{ address: '<address>' },
			{ time: '<time>' },
			{ q: '<q>' },
			{ blockquote: '<blockquote>' },
			{ ruby: '<ruby>' },
			{ rp: '<rp>' },
			{ rt: '<rt>' },
		],
	}, {
		name666: '多媒体标签----------------------------topSplit',
		kids: [
			{ img: '<img>°' },
			{ map: '<map>' },
			{ area: '<area>°' },
			{ video: '<video>' },
			{ audio: '<audio>' },
			{ source: '<source>°' },
			{ track: '<track>°' },
		],
	}, {
		namecvx: '表单标签',
		kids: [
			{ form: '<form>' },
			{ input: '<input>°' },
			{ textarea: '<textarea>' },
			{ button: '<button>' },
			{ labels: '<label>' },
			{ select: '<select>' },
			{ optgroup: '<optgroup>' },
			{ datalist: '<datalist>' },
			{ option: '<option>' },
			{ fieldset: '<fieldset>' },
			{ legend: '<legend>' },
		]
	}
]