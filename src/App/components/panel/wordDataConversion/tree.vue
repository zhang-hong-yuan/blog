<script setup>

	const data = [
		{
			title: 'div#left-result-container',
			children: [
				{
					title: 'div.dictionary-wrap[data-nav-text="简明释义"]',
					children: [
						{
							title: 'div.simple-dict',
							children: [
								{
									title: 'div.output-bd',
									children: [
										{
											title: 'div.dictionary-output',
											children: [
												{
													title: 'div.dictionary-title',
													children: [
														{ title: 'h3.strong' },
														{
															title: 'div.dictionary-spell',
															children: [
																{
																	title: 'phonetic-transcription',
																	children: [
																		{
																			title: 'label.op-sound-wrap',
																			children: [
																				{ title: 'span' },
																				{ title: 'b(英音 音标在这个位置)' },
																				{ title: 'a[data-sound-lan="uk&amp;lock"]' }
																			]
																		}
																	]
																},
																{
																	title: 'phonetic-transcription', children: [
																		{
																			title: 'label.op-sound-wrap',
																			children: [
																				{ title: 'span' },
																				{ title: 'b(美音 音标在这个位置)' },
																				{ title: 'a[data-sound-lan="en&amp;lock"]' }
																			]
																		}
																	]
																},
															]
														},
													]
												}, {
													title: 'div.dictionary-comment',
													children: [
														{
															title: 'p (这是简明示义部分)',
															children: [
																{ title: 'b' },
																{
																	title: 'strong',
																	children: [
																		{ title: 'span' },
																		{ title: 'span.dict-margin' },
																		{ title: 'span' },
																		{ title: 'span.dict-margin' },
																		{ title: 'span' },
																		{ title: 'span.dict-margin' },
																		{ title: '……' },
																	]
																},
															]

														}, {
															title: 'p (可以有多个同级p)',

														},
													]
												}
											]
										}, {
											title: 'div.dictionary-exchange',
											children: [
												{
													title: 'p',
													children: [
														{ title: 'span.word-can-trans' },
														{ title: 'a.sec-transdata-stat-add="第三人称单数"' },
													]
												}, {
													title: 'p',
													children: [
														{ title: 'span.word-can-trans' },
														{ title: 'a.sec-transdata-stat-add="复数"' },
													]
												}, {
													title: 'p',
													children: [
														{ title: 'span.word-can-trans' },
														{ title: 'a.sec-transdata-stat-add="现在分词"' },
													]
												}, {
													title: 'p',
													children: [
														{ title: 'span.word-can-trans' },
														{ title: 'a.sec-transdata-stat-add="过去式"' },
													]
												}, {
													title: 'p',
													children: [
														{ title: 'span.word-can-trans' },
														{ title: 'a.sec-transdata-stat-add="过去分词"' },
													]
												},
											]
										}
									]
								}, {
									title: 'div.dictionary-bottom(tag标签：高考、考研……)'
								}
							]
						},
					],
				}, {
					title: 'section.oxford-container[data-nav-text="牛津词典"]',
					children: [
						{
							title: 'section.nav-sub-section[data-nav-text="详细释义"]',
							children: [
								{ title: 'header.section-header' },
								{
									title: 'div#cont-entry',
									children: [
										{
											title: 'div.oxford-entry',
											children: [
												{
													title: 'div.entry-pg (有多少个词性就有多少同级)',
													children: [
														{
															title: 'div.entry-p',
															children: [
																{ title: 'p.f-title (词性标记)' }
															]
														}, {
															title: 'div.entry-sdg （意思块）',
															children: [
																{ title: 'p.sdg-sd (全体词条上面的大概意思分类)' },
																{
																	title: 'div.entry-ndg',
																	children: [
																		{ title: 'span.ndg-n (序号)' },
																		{
																			title: 'p.entry-d (词条示意)',
																			children: [
																				{
																					title: 'span.entry-grs',
																					children: [{ title: 'span.entry-hover (符号标记)' }]
																				},
																				{ title: '中文意思' },
																				{ title: 'br' },
																				{ title: '英文意思' },
																			]
																		}, {
																			title: 'div.entry-x  (可以有多个同级例句)',
																			children: [
																				{
																					title: 'p.entry-x-en',
																					children: [
																						{
																							title: 'span.entry-info (额外信息：(BrE, informal))',
																							children: [
																								{ title: 'span.entry-info-left (左小括号)' },
																								{ title: '内容' },
																								{ title: 'span.entry-info-right (右小括号)' },
																							]
																						},
																						{ title: '例句文本内容' },
																						{ title: 'a > span (播放功能)' },
																					]
																				},
																				{ title: 'p.entry-x-zh (例句中文)' },
																			]
																		},
																		{ title: 'div.entry-x (可以有多个同级例句)' },
																		{ title: 'div.entry-xr (额外扩展内词汇)' },
																	]
																}
															]
														}
													]
												}, {
													title: 'div.entry-pg (有多少个词性就有多少同级)'
												}, {
													title: '……'
												}
											]
										}
									]
								},
								{ title: 'p.section-tip-bottom' },
							]
						}
					]
				}
			],
		},

	]

</script>

<template>
	<!-- https://arco.design/vue/component/tree#API -->
	<a-tree
		:data="data"
		:block-node="true"
		action-on-node-click="expand"
		:default-expand-all="false"
		show-line />
</template>