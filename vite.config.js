import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'


import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import {
	ElementPlusResolver,
	ArcoResolver,
	NaiveUiResolver,
	PrimeVueResolver
}
	from 'unplugin-vue-components/resolvers'


import prismjs from 'vite-plugin-prismjs'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/blog',
	plugins: [
		vue(),
		prismjs({
			languages: [
				"bash",
				"shell",
				"javascript",
				"typescript",
				"json",
				"css",
				"less",
				"html",
				"regex",
				"git",
				"sql",
				"markdown",
				"mermaid"
			],
			plugins: [
				"previewers",
				"inline-color",
				"keep-markup",

				"custom-class",
				"highlight-keywords",
				"match-braces",

				"toolbar",
				"show-language",
				"copy-to-clipboard",

				"normalize-whitespace",
				"line-numbers",       // 这个用 css 设置之后，可以达到 line-highlight 的效果
				// "line-highlight",  // 这个不好用
				// "file-highlight",   // 没有外部文件
				// "unescaped-markup", // 只能使用 script 标签或 注释的形式，不好用
			],
			"theme": "okaidia",
			"css": false
		}),
		AutoImport({
			eslintrc: {
				enabled: true,
			},
			resolvers: [
				ElementPlusResolver(),
				ArcoResolver()
			],
			imports: [
				'vue',
				'vue-router',
				'pinia',
				{
					'naive-ui': [
						'useDialog',
						'useMessage',
						'useNotification',
						'useLoadingBar'
					]
				}
			]
		}),
		Components({
			resolvers: [
				ElementPlusResolver(),
				ArcoResolver({ sideEffect: true }),
				NaiveUiResolver(),
				PrimeVueResolver()
			],
		}),

	],
	resolve: {
		// 在导入路径中省略这些扩展名
		extensions: ['.js', '.ts', '.vue', '.css', 'less', '.json'],
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString()
					}
				}
			}
		},
		chunkSizeWarningLimit: 5000
	}
})
