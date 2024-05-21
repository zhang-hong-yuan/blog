<template>
	<h1>CSS 颜色</h1>
	<p>指定颜色是通过使用预定义的颜色名称，或 HEX、RGB、RGBA、HSL、HSLA 值。</p>
	<p>除了 HEX，其他四种均由 <a href='#-1'>CSS 预定义函数</a>调用。</p>
	<h2>HEX</h2>
	<p>在 CSS 中，可以使用以下格式的十六进制(hex)值指定颜色：</p>
	<pre v-code:css>#rrggbb</pre>
	<p>其中 rr(红色)、gg(绿色)和 bb(蓝色)是介于 00 和 ff 之间的十六进制值(与十进制 0-255 相同)。</p>
	<p>例如，#ff0000 显示为红色，因为红色设置为最大值(ff)，其他设置为最小值(00)。</p>
	<h2>RGB</h2>
	<p>在 CSS 中，可以使用下面的公式将颜色指定为 RGB 值：</p>
	<pre v-code:css>rgb(red, green, blue)</pre>
	<p>每个参数 (<em>red</em>、<em>green</em> 以及 <em>blue</em>) 定义了 0 到 255 之间的颜色强度。例如，rgb(255, 0, 0) 显示为红色，因为红色设置为最大值(255)，其他设置为
		0。</p>
	<ul>
		<li>要显示黑色，请将所有颜色参数设置为 0，如：rgb(0, 0, 0)。</li>
		<li>要显示白色，请将所有颜色参数设置为 255，如：rgb(255, 255, 255)。</li>

	</ul>
	<h2>RGBA</h2>
	<p>RGBA 颜色值是具有 alpha 通道的 RGB 颜色值的扩展 - 它指定了颜色的不透明度。RGBA 颜色值指定为：</p>
	<pre v-code:css>rgba(red, green, blue, alpha)</pre>
	<p><em>alpha</em> 参数是介于 0.0(完全透明)和 1.0(完全不透明)之间的数字：</p>
	<h2>HSL</h2>
	<p>在 CSS 中，可以使用色相、饱和度和明度(HSL)来指定颜色，格式如下：</p>
	<pre v-code:css>hsla(hue, saturation, lightness)</pre>
	<ul>
		<li>
			<p><mark>色相(<em>hue</em>)</mark> 是色轮上从 0 到 360 的度数。0 是红色，120 是绿色，240 是蓝色。</p>
			<p><mark>饱和度(<em>saturation</em>)</mark> 是一个百分比值，0％ 表示灰色阴影，而 100％ 是全色。</p>
			<p><mark>亮度(<em>lightness</em>)</mark> 也是百分比，0％ 是黑色，50％ 是既不明也不暗，100％是白色。</p>
		</li>

	</ul>
	<h2>HSLA</h2>
	<p>HSLA 颜色值是带有 Alpha 通道的 HSL 颜色值的扩展 - 它指定了颜色的不透明度。HSLA 颜色值指定为：</p>
	<pre v-code:css>hsla(hue, saturation, lightness, alpha)</pre>
	<p><em>alpha</em> 参数是介于 0.0(完全透明)和 1.0(完全不透明)之间的数字。</p>
</template>