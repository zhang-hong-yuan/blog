<template>
	<h1>v-for</h1>
	<p>基于原始数据多次渲染元素或模板块。期望的绑定值类型：【Array | Object | number | string | Iterable】。</p>
	<p>指令值必须使用特殊语法 【alias in expression】 (也可以使用 【of】 作为分隔符来替代 【in】)为正在迭代的元素提供一个别名：</p>

	<pre v-code:html><div v-pre>// 其中 items 是源数据的数组，而 item 是迭代项的别名
&lt;div v-for="item in items"&gt; 
  {{ item.text }}
&lt;/div&gt;</div></pre>

	<p>遍历的顺序会基于对该对象调用 Object.keys() 的返回值来决定。</p>
	<p>在 v-for 块中可以完整地访问父作用域内的属性和变量。也可以为索引指定别名 (如果用在对象，则是键值)：</p>

	<pre v-code:html>&lt;div v-for="(item, index) in items"&gt;&lt;/div&gt;
&lt;div v-for="(value, key) in object"&gt;&lt;/div&gt;
&lt;div v-for="(value, name, index) in object"&gt;&lt;/div&gt;</pre>

	<p>【v-for】 的默认方式是尝试就地更新元素而不移动它们。要强制其重新排序元素，你需要用特殊 attribute 【key】 来提供一个排序提示：</p>
	<pre v-code:html><div v-pre>&lt;div v-for="item in items" :key="item.id"&gt;
  {{ item.text }}
&lt;/div&gt;</div></pre>

	<p>也可以在定义 v-for 的变量别名时使用解构，和解构函数参数类似：</p>
	<pre v-code:html><div v-pre>&lt;li v-for="{ message } in items"&gt;
  {{ message }}
&lt;/li&gt;

&lt;!-- 有 index 索引时 --&gt;
&lt;li v-for="({ message }, index) in items"&gt;
  {{ message }} {{ index }}
&lt;/li&gt;
</div></pre>

	<p>也可以在 &lt;template&gt; 标签上使用 v-for 来渲染一个包含多个元素的块。例如：</p>

	<pre v-code:html><div v-pre>&lt;ul&gt;
  &lt;template v-for="item in items"&gt;
    &lt;li&gt;{{ item.msg }}&lt;/li&gt;
    &lt;li class="divider" role="presentation"&gt;&lt;/li&gt;
  &lt;/template&gt;
&lt;/ul&gt;
</div></pre>
</template>