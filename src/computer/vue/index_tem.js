export default [
	{
		info: 'Vue 简介---a_a',
		kids: [

		]
	}, {
		info: '应用实例---a_b',
		kids: [
			{ info: 'createApp()---a_ba' },
			{ info: 'app.mount() app.unmount()---a_bb' },
			{ info: 'app.component()---a_bc' },
			{ info: 'app.directive()---bd' },
			{ info: 'app.use()---be' },
		]
	}, {
		info: '单文件组件---a_c',
		kids: [
			{ info: '<template>---a_ca' },
			{ info: '<script>---cb' },
			{ info: '<style>---cc' },
		]
	},


	{
		info: '指令---b_a---topSplit',
		kids: [
			{ info: 'v-custom-directive---ha' },
			{ info: 'v-for---hb' },
			{ info: 'v-text v-html---hc' },
			{ info: 'v-show v-if---hd' },
			{ info: 'v-once v-memo---he' },
			{ info: 'v-cloak v-pre---hf' },
			{ info: 'v-enter v-leave---hg' },
			{ info: 'v-bind---hh' },
			{ info: 'v-model---hi' },
			{ info: 'v-slot---hj' },
			{ info: 'v-on---hk' },
		]
	}, {
		info: '内置组件---b_b',
		kids: [
			{ info: '<Transition>---ia' },
			{ info: '<TransitionGroup>---ib' },
			{ info: '<KeepAlive>---ic' },
			{ info: '<Teleport>---id' },
		]
	}, {
		info: '特殊元素---b_c',
		kids: [
			{ info: '<component>---ja' },
			{ info: '<slot>---jb' },
			{ info: '<template>---jc' },
		]
	}, {
		info: '特殊 Attributes---b_d',
		kids: [
			{ info: 'key---ka' },
			{ info: 'ref---kb' },
			{ info: 'is---kc' },
		]
	},


	{
		info: '<script setup>---n---topSplit',
		kids: [
			{ info: 'hooks---na' },
			{ info: '使用组件---nb' },
			{ info: '使用自定义指令---nc' },
		]
	}, {
		info: '生命周期钩子---o',
		kids: [
			{
				info: 'setup()---oa',
				kids: [
					{ info: 'props---oaa' },
					{ info: 'context---oab' },
				]
			},
			{ info: 'onBeforeMount() onMounted()---ob' },
			{ info: 'onBeforeUpdate() onUpdated()---oc' },
			{ info: 'onBeforeUnmount() onUnmounted()---od' },
			{ info: 'onActivated() onDeactivated()---oe' },
			{ info: 'nextTick()---of' },
		]
	}, {
		info: '依赖注入---p',
		kids: [
			{ info: 'provide()---pa' },
			{ info: 'inject()---pb' }
		]
	}, {
		info: '响应式 API---q',
		kids: [
			{ info: 'reactive()---qa' },
			{ info: 'ref()---qb' },
			{ info: 'readonly()---qc' },
			{ info: 'computed()---qd' },
			{ info: 'watch()---qe' },
			{ info: 'watcheffect()---qf' },
		]
	},


	{
		info: 'scoped---t---topSplit',
		kids: [
			{ info: ':deep()---ta' },
			{ info: ':slotted()---tb' },
			{ info: ':global()---tc' },
		]
	}, {
		info: 'v-bind()---v',
		kids: [
			{ info: ':class---w' },
			{ info: ':style---x' },
		]
	},
	{ info: 'modules---u' },

	{
		info: 'components---d---topSplit',
		kids: [
			{ info: 'vue3-mindmap---da' },
		]
	},

]
