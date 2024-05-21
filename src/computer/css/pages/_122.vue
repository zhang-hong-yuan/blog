<script setup>
import flex from '../view/flex'
</script>

<template>
	<h1>flex-grow</h1>

	<p>CSS 属性 ‘flex-grow’ 设置 flex 项 主尺寸 的 flex 增长系数。</p>

	<p>这个属性规定了 ‘flex-grow’ 项在 flex 容器中分配剩余空间的相对比例。如果所有的兄弟项目都有相同的 ‘flex-grow’ 系数，那么所有的项目将剩余空间按相同比例分配(88、100 或 1.2
		都可——这只是个比例)，否则将根据不同的 ‘flex-grow’
		定义的比例进行分配。</p>

	<pre>
		<code v-code:css>
/* &lt;number&gt; 值。负值无效，默认为 0。*/
flex-grow: 3;
flex-grow: 0.6;

/* 全局值 */
flex-grow: inherit;
flex-grow: initial;
flex-grow: revert;
flex-grow: unset;
		</code>
	</pre>

	<p>‘flex-grow’ 若被赋值为一个正整数，flex 元素会以 ‘flex-basis’ 为基础，沿主轴方向增长尺寸。这会使该元素延展，并占据此方向轴上的可用空间（available
		space）。如果有其他元素也被允许延展，那么他们会各自占据可用空间的一部分。</p>

	<flex />

	<p>如果给上例中的所有元素设定 ‘flex-grow’ 值为 ‘1’，容器中的可用空间会被这些元素平分。它们会延展以填满容器主轴方向上的空间。</p>


	<p>‘flex-grow’ 属性可以按比例分配空间。如果第一个元素 ‘flex-grow’ 值为 ‘2’，其他元素值为 ‘1’，则第一个元素将占有 ‘2/4’（上例中，即为 200px 中的 100px）, 另外两个元素各占有
		‘1/4’（各 50px）。</p>


	<h6>设置 flex 项目增长因子</h6>

	<pre>
		<code v-code:html>
&lt;h4&gt;这展示了 flex 增长&lt;/h4&gt;
&lt;p&gt;A,B,C 和 F 具有 flex-grow:1&lt;/p&gt;
&lt;p&gt;D 和 E 具有 flex-grow:2&lt;/p&gt;
&lt;div id="content"&gt;
  &lt;div class="box"  style="background-color:red;"        &gt;A&lt;/div&gt;
  &lt;div class="box"  style="background-color:lightblue;"  &gt;B&lt;/div&gt;
  &lt;div class="box"  style="background-color:yellow;"     &gt;C&lt;/div&gt;
  &lt;div class="box1" style="background-color:brown;"      &gt;D&lt;/div&gt;
  &lt;div class="box1" style="background-color:lightgreen;" &gt;E&lt;/div&gt;
  &lt;div class="box"  style="background-color:brown;"      &gt;F&lt;/div&gt;
&lt;/div&gt;
		</code>
	</pre>

	<p>CSS</p>
	<pre>
	<code v-code:css>
#content {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
}

.box {
  flex-grow: 1;
  border: 3px solid rgba(0, 0, 0, 0.2);
}

.box1 {
  flex-grow: 2;
  border: 3px solid rgba(0, 0, 0, 0.2);
}
	</code>
</pre>


	<p>结果</p>

	<figure id="demo-20240409-0847">
		<h4>这展示了 flex 增长</h4>
		<p>A,B,C 和 F 具有 flex-grow:1</p>
		<p>D 和 E 具有 flex-grow:2</p>
		<div id="content">
			<div class="box" style="background-color:red;">A</div>
			<div class="box" style="background-color:lightblue;">B</div>
			<div class="box" style="background-color:yellow;">C</div>
			<div class="box1" style="background-color:brown;">D</div>
			<div class="box1" style="background-color:lightgreen;">E</div>
			<div class="box" style="background-color:brown;">F</div>
		</div>
	</figure>
</template>