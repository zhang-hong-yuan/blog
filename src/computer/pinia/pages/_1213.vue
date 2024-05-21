<template>
	<h1>安装 Pinia</h1>




	<p>使用如下命令安装 ‘pinia’：</p>

	<pre v-code:bash>npm install pinia</pre>

	<p>创建一个 pinia 实例 (根 store) 并将其传递给应用：</p>

	<pre v-code:js---2,5,6,8>
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = 【createPinia()】
const app = createApp(App)

app.use(pinia)
app.mount('#app')
</pre>

</template>