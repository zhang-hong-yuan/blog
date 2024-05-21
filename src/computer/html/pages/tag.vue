<template>
	<h1>HTML 标签</h1>


	<p>HTML 元素通过“标签”（tag）将文本从文档中引出，标签由在“&lt;”和“&gt;”中包裹的元素名组成，HTML 标签里的元素名不区分大小写。也就是说，它们可以用大写，小写或混合形式书写。例如，&lt;title&gt;
		标签可以写成 &lt;Title&gt;，&lt;TITLE&gt; 或以任何其他方式。然而，习惯上与实践上都推荐将标签名全部小写。</p>

	<p>HTML 标签是由尖括号包围的关键词，例如 【&lt;html&gt;】。</p>
	<p>HTML 标签通常是成对出现的，例如 【&lt;html&gt;】 和 【&lt;/html&gt;】 ，我们称为双标签。标签对中的第一个标签是开始标签，第二个标签是结束标签。</p>
	<p>有些特殊的标签必须是单个标签(极少情况)，例如 【&lt;br /&gt;】，我们称为单标签。</p>



	<p>比如段落元素：</p>


	<figure>
		<img src="../assets/tag.png" alt="">
	</figure>


	<p>这个元素的主要部分有：</p>


	<ol>
		<li><strong>开始标签</strong>（Opening tag）：包含元素的名称（本例为 p），被大于号、小于号所包围。表示元素从这里开始或者开始起作用——在本例中即段落由此开始。</li>
		<li><strong>结束标签</strong>（Closing
			tag）：与开始标签相似，只是其在元素名之前包含了一个斜杠。这表示着元素的结尾——在本例中即段落在此结束。初学者常常会犯忘记包含结束标签的错误，这可能会产生一些奇怪的结果。</li>
		<li><strong>内容</strong>（Content）：元素的内容，本例中就是所输入的文本本身。</li>
		<li><strong>元素</strong>（Element）：开始标签、结束标签与内容相结合，便是一个完整的元素。</li>
	</ol>





	<blockquote class="note">目录中有 【°】 标志的为单标签，如 【&lt;img&gt;°】。</blockquote>
</template>