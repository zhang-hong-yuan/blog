<template>
	<h1>ESM</h1>
	<p>ESM 模块不是对象，而是通过【export】命令显式指定输出的代码，再通过【import】命令输入。对外暴露的三种方式：</p>
	<p><b>⓵默认暴露</b>：一个js文件中只能有一个默认暴露，默认暴露的可以是一个常量，函数，对象等。</p>
	<pre v-code:js>export default A1

import a1 from "./1.js"</pre>


	<p><b>⓶统一暴露</b>：</p>
	<pre v-code:js>export {A1,A2}

import {A1,A2} from "./1.js"
import {A1 as a1,A2 as a2} from "./1.js"
import * as obj from "./1.js"</pre>

	<p><b>⓷分别暴露</b>：也叫多行暴露，在引入时需要用对象来引用。</p>
	<pre v-code:js>export function A1(){ console.log("A1") }
export function A2(){ console.log("A2") }

import {A1,A2} from "./1.js"
import {A1 as a1,A2 as a2} from "./1.js"
import * as obj from "./1.js"</pre>
	<blockquote>注意：统一暴露和分别暴露在引入时必须使用对象的解构赋值引用，不能使用变量接收的方式来引入。</blockquote>


	<p><b>混合写法：</b></p>
	<pre v-code:js>export {A1}
export default A2

import A2,{A1} from "./1.js"</pre>

	<p>js 文件执行时，【import】 会提升到当前文件最前面执行。(类似于js的预解析 )</p>
</template>