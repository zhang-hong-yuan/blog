<template>
	<h1>key</h1>

	<p>【key】 这个特殊的 attribute 主要作为 Vue 的虚拟 DOM 算法提示，在比较新旧节点列表时用于识别 vnode。预期：【number | string | symbol】</p>

	<p>在没有 key 的情况下，Vue 将使用一种最小化元素移动的算法，并尽可能地就地更新/复用相同类型的元素。如果传了 key，则将根据 key 的变化顺序来重新排列元素，并且将始终移除/销毁 key 已经不存在的元素。</p>

	<p>同一个父元素下的子元素必须具有<b>唯一的 key</b>。重复的 key 将会导致渲染异常。最常见的用例是与 【v-for】 结合：</p>

	<pre v-code:html>
&lt;ul&gt;
  &lt;li v-for="item in items" :key="item.id"&gt;...&lt;/li&gt;
&lt;/ul&gt;
</pre>

	<p>也可以用于强制替换一个元素/组件而不是复用它。当想这么做时它可能会很有用：</p>
	<ul class="mb0">
		<li>在适当的时候触发组件的生命周期钩子</li>
		<li>触发过渡</li>
	</ul>

	<p>举例来说：</p>

	<pre v-code:html><div v-pre>&lt;transition&gt;
  &lt;span :key="text"&gt;{{ text }}&lt;/span&gt;
&lt;/transition&gt;
</div></pre>

	<p>当 【text】 变化时，【&lt;span&gt;】 总是会被替换而不是更新，因此 transition 将会被触发。</p>
</template>