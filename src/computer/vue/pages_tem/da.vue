<template>
	<h1>vue3-mindmap</h1>
	<ul>
		<li><a target="_blank" href="https://github.com/hellowuxin/vue3-mindmap">GitHub</a></li>
		<li><a target="_blank" href="https://5xin.xyz/vue3-mindmap/">demo</a></li>
	</ul>


	<h2>PROPS</h2>
	<table class="table table-striped table-hover">
		<tr>
			<th>Name</th>
			<th>Type</th>
			<th>Default</th>
			<th>Description</th>
		</tr>
		<tr>
			<td>v-model</td>
			<td>Data[]</td>
			<td>undefined</td>
			<td>设置思维导图数据</td>
		</tr>
		<tr>
			<td>x-gap</td>
			<td>Number</td>
			<td>84</td>
			<td>设置节点横向间隔</td>
		</tr>
		<tr>
			<td>y-gap</td>
			<td>Number</td>
			<td>18</td>
			<td>设置节点纵向间隔</td>
		</tr>
		<tr>
			<td>branch</td>
			<td>Number</td>
			<td>4</td>
			<td>设置连线的宽度</td>
		</tr>
		<tr>
			<td>scale-extent</td>
			<td>[Number, Number]</td>
			<td>[0.1, 0.8]</td>
			<td>设置缩放范围</td>
		</tr>
		<tr>
			<td>timetravel</td>
			<td>Boolean</td>
			<td>false</td>
			<td>是否显示撤销重做按钮</td>
		</tr>
		<tr>
			<td>drag</td>
			<td>Boolean</td>
			<td>false</td>
			<td>设置节点是否可拖拽</td>
		</tr>
		<tr>
			<td>zoom</td>
			<td>Boolean</td>
			<td>false</td>
			<td>是否可缩放、拖移</td>
		</tr>
		<tr>
			<td>edit</td>
			<td>Boolean</td>
			<td>false</td>
			<td>是否可编辑</td>
		</tr>
		<tr>
			<td>center-btn</td>
			<td>Boolean</td>
			<td>false</td>
			<td>是否显示居中按钮</td>
		</tr>
		<tr>
			<td>fit-btn</td>
			<td>Boolean</td>
			<td>false</td>
			<td>是否显示缩放按钮</td>
		</tr>
		<tr>
			<td>add-node-btn</td>
			<td>Boolean</td>
			<td>false</td>
			<td>是否显示添加节点按钮</td>
		</tr>
		<tr>
			<td>download-btn</td>
			<td>Boolean</td>
			<td>false</td>
			<td>是否显示下载按钮</td>
		</tr>
		<tr>
			<td>sharp-corner</td>
			<td>Boolean</td>
			<td>false</td>
			<td>设置分支为圆角或直角</td>
		</tr>
		<tr>
			<td>ctm</td>
			<td>Boolean</td>
			<td>false</td>
			<td>是否响应右键菜单</td>
		</tr>
		<tr>
			<td>locale</td>
			<td>'zh' | 'en' | 'ptBR'</td>
			<td>'zh'</td>
			<td>i18n</td>
		</tr>
	</table>


	<h2>Example</h2>

	<pre v-code:html>
&lt;template&gt;
  &lt;mindmap v-model="data"&gt;&lt;/mindmap&gt;
&lt;/template&gt;

&lt;script&gt;
import mindmap from 'vue3-mindmap'
import 'vue3-mindmap/dist/style.css'

export default defineComponent({
  components: { mindmap },
  setup () =&gt; {
    const data = [{
      "name":"如何学习D3",
      "children": [
        {
          "name":"预备知识",
          "children": [
            { "name":"HTML & CSS" },
            { "name":"JavaScript" },
            ...
          ]
        },
        {
          "name":"安装",
          "collapse": true,
          "children": [ { "name": "折叠节点" } ]
        },
        { "name":"进阶", "left": true },
        ...
      ]
    }]

    return { data }
  }
})
&lt;/script&gt;
</pre>
</template>