<template>

	<h1>Element.scrollIntoView()</h1>


	<p>Element 接口的 ‘scrollIntoView()’ 方法会滚动元素的父容器，使被调用 ‘scrollIntoView()’ 的元素对用户可见。</p>

	<p>没有返回值。</p>
	<pre>
	<code v-code:js.nocopy>
		element.scrollIntoView()
		element.scrollIntoView([alignToTop])
		element.scrollIntoView([scrollIntoViewOptions])
	</code>
</pre>


	<dl>
		<dt>‘alignToTop’ <span class="optional">可选</span>。一个布尔值：</dt>
		<dd>
			<p>如果为 ‘true’，元素的顶端将和其所在滚动区的可视区域的顶端对齐。相应的
				<code
					v-code:js>scrollIntoViewOptions: { block: &quot;start&quot;, inline: &quot;nearest&quot; }</code>。这是这个参数的<i>默认值</i>。
			</p>


			<p>如果为 ‘false’，元素的底端将和其所在滚动区的可视区域的底端对齐。相应的
				<code
					v-code:js>scrollIntoViewOptions: { block: &quot;end&quot;, inline: &quot;nearest&quot; }</code>。
			</p>
		</dd>

		<dt>‘scrollIntoViewOptions’ <span class="optional">可选</span>。</dt>
		<dd>
			<p>一个包含下列属性的对象：</p>

			<dl>
				<dt>‘behavior’ <span class="optional">可选</span></dt>
				<dd>
					<p>定义滚动是立即的还是平滑的动画。该选项是一个字符串，必须采用以下值之一：</p>

					<ul>
						<li>‘smooth’：滚动应该是平滑的动画。</li>
						<li>‘instant’：滚动应该通过一次跳跃立刻发生。</li>
						<li>‘auto’：滚动行为由 ‘scroll-behavior’ 的计算值决定。</li>
					</ul>

				</dd>

				<dt>‘block’ <span class="optional">可选</span></dt>
				<dd>定义垂直方向的对齐，start、center、end 或 nearest 之一。默认为 <i>start</i>。</dd>

				<dt>‘inline’ <span class="optional">可选</span></dt>
				<dd>定义水平方向的对齐，start、center、end 或 nearest 之一。默认为 <i>start</i>。</dd>
			</dl>

		</dd>

	</dl>


	<figure>
		<figcaption>示例</figcaption>
		<p>取决于其他元素的布局情况，此元素可能不会完全滚动到顶端或底端。</p>
		<pre>
			<code v-code:js>
const element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
			</code>
		</pre>
	</figure>



	<p>注意 ‘scrollIntoView()’ 在滑动过程中如果进行了原生事件监听，就会阻断该事件继续滑动。解决方案：防抖。</p>


</template>