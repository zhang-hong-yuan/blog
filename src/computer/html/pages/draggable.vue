<template>


	<h1>draggable</h1>
	<p>draggable 属性规定元素是否可拖动。链接和图像默认是可拖动的。</p>
	<p>拖放是一种常见的特性，即抓取对象以后拖到另一个位置。任何元素都能够拖放。</p>
	<pre v-code:html>&lt;element draggable=&quot;true|false|auto&quot;&gt;</pre>

	<figure>
		<table>
			<tr>
				<th style="width:20%">值</th>
				<th>描述</th>
			</tr>
			<tr>
				<td>true</td>
				<td>规定元素是可拖动的。</td>
			</tr>
			<tr>
				<td>false</td>
				<td>规定元素是不可拖动的。</td>
			</tr>
			<tr>
				<td>auto</td>
				<td>使用浏览器的默认特性。</td>
			</tr>
		</table>
	</figure>

	<p><strong>首先</strong>，为了使元素可拖动，把 【draggable】 属性设置为 【true】。</p>
	<p><strong>然后</strong>，规定当元素被拖动时，会发生什么。【ondragstart】 属性调用一个函数：【drag(event)】，它规定了被拖动的数据。【dataTransfer.setData()】
		方法设置被拖数据的数据类型和值。</p>
	<p><strong>接着</strong>，【ondragover】 事件规定在何处放置被拖动的数据。默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，必须阻止对元素的默认处理方式。</p>
	<p><strong>最后</strong>，当放置被拖数据时，会发生 【drop】 事件。</p>

	<pre>
	<code v-code:html>&lt;style&gt;
  #div {
    width: 350px;
    height: 70px;
    padding: 10px;
    border: 1px solid #aaaaaa;
  }
&lt;/style&gt;

&lt;script&gt;
  function allowDrop(ev) { ev.preventDefault(); }
  function drag(ev) { ev.dataTransfer.setData(&quot;Text&quot;, ev.target.id); }
  function drop(ev) {
    var data = ev.dataTransfer.getData(&quot;Text&quot;);
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
  }
&lt;/script&gt;

&lt;div id=&quot;div&quot; ondrop=&quot;drop(event)&quot; ondragover=&quot;allowDrop(event)&quot;&gt;&lt;/div&gt;
&lt;p id=&quot;drag&quot; draggable=&quot;true&quot; ondragstart=&quot;drag(event)&quot;&gt;这是一段可移动的段落。请把该段落拖入上面的矩形。&lt;/p&gt;
</code>
</pre>

	<p>调用 【preventDefault()】 来避免浏览器对数据的默认处理（drop 事件的默认行为是以链接形式打开）</p>
	<p>通过 【dataTransfer.getData(&quot;Text&quot;)】 方法获得被拖的数据。该方法将返回在 setData() 方法中设置为相同类型的任何数据。</p>
	<p>被拖数据是被拖元素的 id (&quot;drag&quot;)</p>
	<p>把被拖元素追加到放置元素（目标元素）中</p>

</template>