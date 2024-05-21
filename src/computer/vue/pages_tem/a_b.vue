<template>
	<h1>创建一个 Vue 应用</h1>

	<p>使用如下命令会创建基于 Vite 的项目，并允许使用 Vue 的单文件组件 (SFC)。</p>
	<p>确保电脑安装了最新版本的 ‘Node.js’，并且当前工作目录正是打算创建项目的目录。在命令行中运行以下命令：</p>

	<pre v-code:bash>npm init vue@latest</pre>


	<p>这一指令将会安装并执行 ‘create-vue’，它是 Vue 官方的项目脚手架工具。命令执行后将会看到一些诸如 TypeScript 和测试支持之类的可选功能提示。</p>



	<p>如果不确定是否要开启某个功能，可以直接按下回车键选择 No。在项目被创建后，通过以下步骤安装依赖并启动开发服务器：</p>

	<pre v-code:bash>
cd &lt;your-project-name&gt;
npm install
npm run dev
</pre>


	<p>此命令会在 ‘./dist’ 文件夹中为应用创建一个生产环境的构建版本。</p>
	<pre v-code:bash>
npm run build
</pre>


</template>