<template>
	<h1>模块化</h1>

	<p>模块化是指解决《一个复杂》问题时，自《l;;顶向》下逐《l;;层把::系》统划《分成》若干模块的过程。对于整个系统来说，模块是可组合、分解和更换的单元。把代码进行模块化拆分的好处：</p>

	<ol>
		<li>提高了代码的<ins>复用性</ins></li>
		<li>提高了代码的<ins>可维护性</ins></li>
		<li>可以实现<ins>按需加载</ins></li>
	</ol>


	<p>JavaScript 现在有两种模块。一种是【ES6】模块，简称【ESM (ES6 Module)】；另一种是【CommonJS】模块，简称【CJS】。</p>

	<p>
		【CommonJS】模块是【Node.js】专用的，与【ESM】模块不兼容。语法上面，两者最明显的差异是，【CommonJS】模块使用【require()】和【module.exports】，【ESM】模块使用【import】和【export】。
	</p>
</template>