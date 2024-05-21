<template>
	<h1>:placeholder-shown</h1>


	<p>‘:placeholder-shown’ CSS 伪类表示当前显示占位符文本的任何 <code v-code:html.escape><input></code> 或 <code
			v-code:html>&lt;textarea&gt;</code> 元素。</p>


	<pre>
<code v-code:css>
:placeholder-shown {
  /* ... */
}
</code>
</pre>


	<h6>基础示例</h6>


	<p>该示例中，输入框在显示占位符时将应用特殊字体和边框样式。</p>

	<pre>
	<code v-code:html.escape>
		<input placeholder="在这里输入一些东西！" />
	</code>
</pre>


	<p>CSS</p>

	<pre>
	<code v-code:css>
	input {
		border: 3px solid black;
		outline: none;
		padding: 3px;
	}

	input:placeholder-shown {
		border-color: teal;
		font-style: italic;
	}

	input::placeholder {
		color: purple;
	}
	</code>
</pre>

	<p>渲染结果：</p>
	<figure id="demo-20240331-1835">
		<input placeholder="在这里输入一些东西！" />
	</figure>



	<h6>文本溢出</h6>


	<p>当表单字段太小时，占位文本可能会以不良方式被裁剪。可以使用 ‘text-overflow’ 属性来更改溢出文本的显示方式。</p>


	<pre>
		<code v-code:html.escape>
<input id="input1" placeholder="名字、排行和序号" />
<br /><br />
<input id="input2" placeholder="名字、排行和序号" />
		</code>
	</pre>

	<p>CSS</p>
	<pre>
	<code v-code:css>
	input {
		width: 6em;
	}

	#input2:placeholder-shown {
		text-overflow: ellipsis;
	}
	</code>
</pre>

	<p>渲染结果：</p>
	<figure id="demo-20240331-1850">
		<input id="input1" placeholder="名字、排行和序号" /> <br /><br />
		<input id="input2" placeholder="名字、排行和序号" />
	</figure>


	<h6>自定义输入框</h6>



	<p>以下示例使用自定义样式突出显示了学生 ID 字段。</p>


	<pre>
		<code v-code:html>
&lt;form id="test"&gt;
  &lt;p&gt;
    &lt;label for="name"&gt;输入学生姓名：&lt;/label&gt;
    &lt;input id="name" placeholder="学生姓名" /&gt;
  &lt;/p&gt;
  &lt;p&gt;
    &lt;label for="branch"&gt;输入学生分会：&lt;/label&gt;
    &lt;input id="branch" placeholder="学生分会" /&gt;
  &lt;/p&gt;
  &lt;p&gt;
    &lt;label for="sid"&gt;输入学生 ID：&lt;/label&gt;
    &lt;input
      type="number"
      pattern="[0-9]{8}"
      title="8 digit ID"
      id="sid"
      class="studentid"
      placeholder="8 digit id" /&gt;
  &lt;/p&gt;
  &lt;input type="submit" /&gt;
&lt;/form&gt;
		</code>
	</pre>

	<p>CSS</p>

	<pre>
	<code v-code:css>
input {
  background-color: #e8e8e8;
  color: black;
}

input.studentid:placeholder-shown {
  background-color: yellow;
  color: red;
  font-style: italic;
}
	</code>
</pre>

	<p>渲染结果：</p>


	<figure id="demo-20240331-1853">
		<form id="test">
			<p>
				<label for="name">输入学生姓名：</label>
				<input id="name" placeholder="学生姓名" />
			</p>
			<p>
				<label for="branch">输入学生分会：</label>
				<input id="branch" placeholder="学生分会" />
			</p>
			<p>
				<label for="sid">输入学生 ID：</label>
				<input
					type="number"
					pattern="[0-9]{8}"
					title="8 digit ID"
					id="sid"
					class="studentid"
					placeholder="8 digit id" />
			</p>
			<input type="submit" />
		</form>

	</figure>
</template>