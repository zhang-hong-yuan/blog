<template>
	<h1>v-on</h1>
	<p>给元素绑定事件监听器。<b>缩写</b>：【@】。</p>

	<pre v-code:html>&lt;!-- 方法处理函数 --&gt;
&lt;button v-on:click="doThis"&gt;&lt;/button&gt;

&lt;!-- 缩写 --&gt;
&lt;button @click="doThis"&gt;&lt;/button&gt;
</pre>
	<br>
	<p>期望的绑定<b>值类型：</b>【Inline Statement | Function | Object】。</p>

	<p>内联事件处理器通常用于简单场景。</p>

	<p>当监听原生 DOM 事件时，方法接收原生事件作为唯一参数。如果使用内联声明，声明可以访问一个特殊的 【$event】 变量：【v-on:click="handle('ok', $event)"】。</p>

	<p>【v-on】 还支持绑定不带参数的监听器对象。请注意，当使用对象语法时，不支持任何修饰符。</p>

	<pre v-code:html>
&lt;!-- 内联事件处理器 --&gt;
&lt;button v-on:click="count++"&gt;&lt;/button&gt;

&lt;!-- 内联声明 --&gt;
&lt;button v-on:click="doThat('hello', $event)"&gt;&lt;/button&gt;

&lt;!-- 二者效果一致，但后者可以传参。 --&gt;
&lt;button @click="demo"&gt;&lt;/button&gt;
&lt;button @click="demo($event, 666)"&gt;&lt;/button&gt;

&lt;!-- 方法处理函数 --&gt;
&lt;button v-on:click="doThis"&gt;&lt;/button&gt;

&lt;!-- 对象语法 --&gt;
&lt;button v-on="{ mousedown: doThis, mouseup: doThat }"&gt;&lt;/button&gt;
</pre>

	<br>
	<p><b>参数：</b>【event】事件类型 (使用对象语法则为可选项)。</p>
	<p>当用于普通元素，只监听原生 DOM 事件。当用于自定义元素组件，则监听子组件触发的自定义事件。</p>



	<pre v-code:html>
&lt;!-- 动态事件 --&gt;
&lt;button v-on:[event]="doThis"&gt;&lt;/button&gt;

&lt;!-- 使用缩写的动态事件 --&gt;
&lt;button @[event]="doThis"&gt;&lt;/button&gt;

&lt;!-- 自定义事件 --&gt;
&lt;MyComponent @my-event="handleThis" /&gt;

&lt;!-- 内联声明 --&gt;
&lt;MyComponent @my-event="handleThis(123, $event)" /&gt;
</pre>
	<p>监听子组件的自定义事件 (当子组件的“my-event”事件被触发，处理函数将被调用)。</p>

	<br>

	<h2>事件修饰符：</h2>
	<p>使用修饰符时需要注意调用顺序，因为相关代码是以相同的顺序生成的。因此使用 【@click.prevent.self】 会阻止元素及其子元素的所有点击事件的默认行为，而 【@click.self.prevent】
		则只会阻止对元素本身的点击事件的默认行为。</p>

	<ul class="mb0">
		<li>【.stop】 - 调用 【event.stopPropagation()】。</li>
		<li>【.prevent】 - 调用 【event.preventDefault()】。</li>
		<li>【.self】 - 只有事件从元素本身发出才触发处理函数。</li>
		<li>【.once】 - 最多触发一次处理函数。</li>
		<li>【.capture】 - 在捕获模式添加事件监听器。</li>
		<li>【.passive】 - 事件的默认行为立即执行，无需等待事件回调执行完毕。正常情况下是先执行回调函数，再发生页面效果。但当回调工作量非常大时，用 【.passive】 尤其能够提升移动端的性能。</li>
	</ul>

	<pre v-code:html>
&lt;!-- 停止传播 --&gt;
&lt;button @click.stop="doThis"&gt;&lt;/button&gt;

&lt;!-- 阻止默认事件 --&gt;
&lt;button @click.prevent="doThis"&gt;&lt;/button&gt;

&lt;!-- 不带表达式地阻止默认事件 --&gt;
&lt;form @submit.prevent&gt;&lt;/form&gt;
&lt;!-- 链式调用修饰符 --&gt;
&lt;button @click.stop.prevent="doThis"&gt;&lt;/button&gt;

&lt;!-- 仅当 event.target 是元素本身时才会触发事件处理器 --&gt;
&lt;!-- 例如：事件处理器不来自子元素 --&gt;
&lt;div @click.self="doThat"&gt;...&lt;/div&gt;



&lt;!-- 点击事件将最多被触发一次 --&gt;
&lt;button v-on:click.once="doThis"&gt;&lt;/button&gt;
&lt;a @click.once="doThis"&gt;&lt;/a&gt;

&lt;!-- 添加事件监听器时，使用 `capture` 捕获模式 --&gt;
&lt;!-- 例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 --&gt;
&lt;div @click.capture="doThis"&gt;...&lt;/div&gt;

&lt;!-- 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成 --&gt;
&lt;!-- 以防其中包含 `event.preventDefault()` --&gt;
&lt;div @scroll.passive="onScroll"&gt;...&lt;/div&gt;
</pre>

	<p>【.once】、【.capture】、 和 【.passive】 修饰符与原生 【addEventListener】 事件相对应</p>
	<section class="note">

		<header>TIP</header>
		<p>请勿同时使用 【.passive】 和 【.prevent】，因为 【.passive】 已经向浏览器表明了你不想阻止事件的默认行为。如果你这么做了，则 【.prevent】 会被忽略，并且浏览器会抛出警告。</p>
	</section>

	<br>

	<h2>按键修饰符</h2>

	<p>在监听键盘事件时，经常需要检查特定的按键。Vue 允许在 【v-on】 或 【@】 监听按键事件时添加按键修饰符。可以直接使用 【KeyboardEvent.key】 暴露的按键名称作为修饰符，但需要转为 【kebab-case】
		形式。</p>
	<p>Vue 为一些常用的按键提供了别名：</p>
	<ul class="mb0">
		<li>【.enter】- 仅在 key 为 Enter 时触发处理函数</li>
		<li>【.tab】</li>
		<li>【.delete] (捕获“Delete”和“Backspace”两个按键)</li>
		<li>【.esc】</li>
		<li>【.space】</li>
		<li>【.up】</li>
		<li>【.down】</li>
		<li>【.left】</li>
		<li>【.right】</li>
		<li>【.{keyAlias}】 - 只在某些按键下触发处理函数。</li>
	</ul>

	<pre v-code:html>
&lt;!-- 按键用于 keyAlias 修饰符--&gt;
&lt;input @keyup.enter="onEnter" /&gt;

&lt;!-- 仅在 `key` 为 `Enter` 时调用 `submit` --&gt;
&lt;input @keyup.enter="submit" /&gt;

&lt;!-- 仅会在 $event.key 为 'PageDown' 时调用事件处理。 --&gt;
&lt;input @keyup.page-down="onPageDown" /&gt;
</pre>

	<br>

	<p><b>系统按键修饰符：</b>可以使用以下系统按键修饰符来触发鼠标或键盘事件监听器，只有当按键被按下时才会触发。</p>
	<ul class="mb0">
		<li>【.ctrl】</li>
		<li>【.alt】</li>
		<li>【.shift】</li>
		<li>【.meta】</li>
	</ul>
	<pre v-code:html>
&lt;!-- Alt + Enter --&gt;
&lt;input @keyup.alt.enter="clear" /&gt;

&lt;!-- Ctrl + 点击 --&gt;
&lt;div @click.ctrl="doSomething"&gt;Do something&lt;/div&gt;
</pre>

	<section class="note">
		<header>TIP</header>
		<p>请注意，系统按键修饰符和常规按键不同。与 【keyup】 事件一起使用时，该按键必须在事件发出时处于按下状态。换句话说，【keyup.ctrl】 只会在你仍然按住 【ctrl】 但松开了另一个键时被触发。若你单独松开 【ctrl】
			键将不会触发。</p>
	</section>

	<br>


	<p><b>.exact 修饰符</b>允许控制触发一个事件所需的确定组合的系统按键修饰符。</p>

	<pre v-code:html>
&lt;!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 --&gt;
&lt;button @click.ctrl="onClick"&gt;A&lt;/button&gt;

&lt;!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 --&gt;
&lt;button @click.ctrl.exact="onCtrlClick"&gt;A&lt;/button&gt;

&lt;!-- 仅当没有按下任何系统按键时触发 --&gt;
&lt;button @click.exact="onClick"&gt;A&lt;/button&gt;
</pre>
	<br>





	<h2>鼠标按键修饰符</h2>
	<p>这些修饰符将处理程序限定为由特定鼠标按键触发的事件。</p>
	<ul class="mb0">
		<li>【.left】 - 只在鼠标左键事件触发处理函数。</li>
		<li>【.right】 - 只在鼠标右键事件触发处理函数。</li>
		<li>【.middle】 - 只在鼠标中键事件触发处理函数。</li>
	</ul>
</template>