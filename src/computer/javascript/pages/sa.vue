<template>
	<h1>event loop</h1>
	<p>JavaScript 一大特点就是单线程。为了解决这个问题，JS 中出现了同步和异步。一般而言，异步任务有以下三种类型：</p>
	<ol>
		<li>普通事件，如 click、resize</li>
		<li>资源加载，如 load、error</li>
		<li>定时器，包括 setInterval、setTimeout</li>

	</ol>
	<p><strong>同步任务</strong>在主线程上执行，形成一个执行栈；<strong>异步任务</strong>通过回调函数实现的。相关回调函数添加到任务/消息队列中。</p>
	<blockquote>
		<p>将函数A做为参数传递给函数B时，则A函数被称为回调函数</p>
	</blockquote>
	<figure><img src="../assets/event_loop_2.png" alt="img"></figure>
	<p>JS 执行机制：</p>
	<ol>
		<li>先执行执行栈中的同步任务；</li>
		<li>异步任务(回调函数)放入任务队列中；</li>
		<li>一旦执行栈中所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行；</li>

	</ol>
	<p>由于主线程不断的重复获得任务、执行任务、再获取任务、再执行任务，所以这种机制被称为事件循环(event loop)。</p>
	<figure><img src="../assets/event_loop.png" alt="img"></figure>
</template>