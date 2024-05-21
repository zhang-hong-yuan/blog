/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	'extends': [
		'./.eslintrc-auto-import.json',
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-prettier/skip-formatting',
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		// 在 rules 中添加自定义规则
		// 关闭组件命名规则
		"vue/multi-word-component-names": "off",
		"vue/no-multiple-template-root": "off",
		"vue/no-v-model-argument": "off",
		"no-irregular-whitespace": "off", // 禁止掉空格报错检查
		"no-mixed-spaces-and-tabs": 0
	},
	parserOptions: {
		ecmaVersion: 'latest'
	}
}
