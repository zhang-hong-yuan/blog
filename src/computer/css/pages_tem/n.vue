<template>
	<p>&nbsp;</p>
	<h1>Transform</h1>
	<p>转换是CSS3中具有颠覆性的特征之一，可以实现元素的位移、旋转、缩放等效果。</p>
	<h2>2D转换</h2>
	<p>2D转换是改变标签在二维平面上的位置和形状的一种技术，先来学习二维坐标系。</p>
	<figure>
		<img src="../assets/2D_coordinate_system.png" width="300px">
	</figure>
	<p>同时使用多个转换，其格式为：</p>
	<pre v-code:css>transform: translate() rotate() scale(), ...</pre>
	<p>其顺序会影响转换的效果。(先旋转会改变坐标轴方向)。当同时有位移和其他属性的时候，要将位移放到最前。</p>
	<h3>translate</h3>
	<p>2D移动是2D转换里面的一种功能，可以改变元素在页面中的位置，类似定位。</p>
	<pre v-code:css>transform: translate(x,y);

/* 或者分开写 */
transform: translateX(n);
transform: translateY(n);</pre>
	<ul>
		<li>﹅ 定义 2D 转换中的移动，沿着 X 和 Y 轴移动元素</li>
		<li>﹅ translate 最大的优点：不会影响到其他元素的位置</li>
		<li>﹅ translate 中的百分比单位是相对于自身元素的 translate: (50%,50%);</li>
		<li>﹅ 对行内标签没有效果</li>

	</ul>
	<h3>rotate</h3>
	<p>2D旋转指的是让元素在2维平面内顺时针旋转或者逆时针旋转。</p>
	<pre v-code:css>transform: rotate(度数);</pre>
	<ul>
		<li>﹅ rotate 里面跟度数， 单位是 deg 比如 <code>rotate(45deg)</code></li>
		<li>﹅ 角度为正时，顺时针，负时，为逆时针</li>
		<li>﹅ 默认旋转的中心点是元素的中心点</li>

	</ul>
	<h3>scale</h3>
	<p>缩放，顾名思义，可以放大和缩小。只要给元素添加上了这个属性就能控制它放大还是缩小。</p>
	<pre v-code:css>transform: scale(x,y);</pre>
	<ul>
		<li>﹅ <code>transform: scale(1, 1);</code> 宽和高都放大一倍，相当于没有放大。</li>
		<li>﹅ <code>transform: scale(2);</code> 只写一个参数，第二个参数则和第一个参数一样，相当于scale(2,2);</li>
		<li>﹅ <code>transform: scale(0.5, 0.5);</code> 缩小</li>
		<li>﹅ sacle 缩放最大的优势：可以设置转换中心点缩放，默认以中心点缩放的，而且不影响其他盒子</li>

	</ul>
	<h3>transform-origin</h3>
	<p>可以通过 transform-origin 属性设置元素转换的中心点。</p>
	<pre v-code:css>transform-origin: x y;</pre>
	<ul>
		<li>﹅ x y 默认转换的中心点是元素的中心点 (50% 50%)</li>
		<li>﹅ 还可以给 x y 设置像素或者方位名词(top bottom left right center)</li>

	</ul>
	<h2>3D转换</h2>
	<p>三维坐标系其实就是指立体空间，立体空间是由3个轴共同组成的。</p>
	<figure>
		<img src="../assets/3D_coordinate_system.png" width="300px">
	</figure>
	<ul>
		<li>x轴：水平向右</li>
		<li>y轴：垂直向下</li>
		<li>z轴：垂直屏幕</li>

	</ul>
	<h3>perspective</h3>
	<p>在2D平面产生近大远小视觉立体，但是只是效果二维的。</p>
	<figure>
		<img alt="" src="../assets/perspective.png" width="300px">
	</figure>
	<p>&nbsp;</p>
	<ul>
		<li>网页产生3D效果需要透视，透视也称为视距。</li>
		<li>距离视觉点越近的在电脑平面成像越大，越远成像越小。</li>
		<li>透视(perspective)的单位是像素。</li>

	</ul>
	<p><br>透视写在被观察元素的父盒子上面的</p>
	<ul>
		<li>d：就是视距，视距就是一个距离人的眼睛到屏幕的距离。</li>
		<li>z：就是 z 轴，物体距离屏幕的距离，z轴越大(正值) 我们看到的物体就越大。</li>

	</ul>
	<h3>transfrom-style</h3>
	<p>3D呈现transfrom-style，该属性控制子元素是否开启三维立体环境。</p>
	<ul>
		<li><code>transform-style: flat;</code> 子元素不开启3d立体空间。默认的</li>
		<li><code>transform-style: preserve-3d;</code> 子元素开启立体空间</li>
		<li>代码写给父级元素，但是影响的是子盒子</li>

	</ul>
	<h3>translate3d</h3>
	<p>3D移动在2D移动的基础上多加了一个可以移动的方向，就是z轴方向。</p>
	<ul>
		<li><code>transform: translateX(100px);</code> 仅仅是在x轴上移动</li>
		<li><code>transform: translateY(100px);</code> 仅仅是在Y轴上移动</li>
		<li><code>transform: translateZ(100px);</code> 仅仅是在Z轴上移动(注意：translateZ一般用px单位)</li>
		<li><code>transform: translate3d(x,y,z);</code> 其中 x、y、z 分别指要移动的轴的方向的距离</li>

	</ul>
	<p>因为z轴是垂直屏幕，由里指向外面，所以默认是看不到元素在z轴的方向上移动。</p>
	<h3>rotate3d</h3>
	<p>3D旋转指可以让元素在三维平面内沿着 x轴，y轴，z轴或者自定义轴进行旋转。</p>
	<ul>
		<li><code>transform: rotateX(45deg);</code> 沿着x轴正方向旋转 45度</li>
		<li><code>transform: rotateY(45deg);</code> 沿着y轴正方向旋转 45deg</li>
		<li><code>transform: rotateZ(45deg);</code> 沿着Z轴正方向旋转 45deg</li>
		<li><code>transform: rotate3d(x,y,z,deg);</code> 沿着自定义轴旋转 deg为角度</li>

	</ul>
	<p>对于元素旋转的方向，可以用左手定则来判断。左手的拇指指向 x/y 轴的正方向，其余手指的弯曲方向就是该元素沿着 x/y 轴旋转的方向(正值)。</p>
	<figure>
		<img alt="" src="../assets/3d转换_左手准则x轴.png" width="30%">
		<img alt="" src="../assets/3d转换_左手准则y轴.png" style="margin-left: 20px;" width="30%">
	</figure>
	<p>transform: rotate3d(x,y,z,deg); 沿着自定义轴旋转 deg为角度。xyz是表示旋转轴的矢量，最后一个标示旋转的角度。</p>
	<ul>
		<li><code>transform: rotate3d(1,0,0,45,deg);</code> 就是沿着x轴旋转 45deg</li>
		<li><code>transform: rotate3d(1,1,0,45,deg);</code> 就是沿着对角线旋转 45deg</li>

	</ul>
	<h2>Filter</h2>
	<p>filter 属性定义了元素(通常是img)的可视效果(例如：模糊与饱和度)。</p>
	<pre
		v-code:css>filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();</pre>
	<p>注意: 滤镜通常使用百分比 (如：75%), 当然也可以使用小数来表示 (如：0.75)。</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>Filter</th>
					<th style='text-align:left;'>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>none</td>
					<td style='text-align:left;'>默认值，没有效果。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>blur(<em>px</em>)</td>
					<td style='text-align:left;'>
						给图像设置高斯模糊。&quot;radius&quot;一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起，所以值越大越模糊；如果没有设定值，则默认是0；这个参数可设置css长度值，但不接受百分比值。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>grayscale(<em>%</em>)</td>
					<td style='text-align:left;'>将图像转换为灰度图像。值定义转换的比例。值为100%则完全转为灰度图像，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0；
					</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>Transition</h2>
	<p>过渡(transition)可以在不使用 Flash 动画或 JavaScript 的情况下，当元素从一种样式变换为另一种样式时为元素添加效果。经常和 :hover 一起搭配使用。</p>
	<p>谁做过渡给谁加。</p>
	<pre v-code:css>transition: 要过渡的属性 花费时间 [运动曲线] [何时开始];</pre>
	<ul>
		<li><mark>属性</mark> 想要变化的 css 属性。如果想要所有的属性都变化过渡， 写一个all 就可以。</li>
		<li><mark>花费时间</mark> 单位是秒(必须写单位) 比如 0.5s</li>
		<li><mark>运动曲线</mark> 默认是 ease (可以省略)</li>
		<li><mark>何时开始</mark> 单位是秒(必须写单位)，可以设置延迟触发时间。默认是 0s (可以省略)</li>

	</ul>
	<figure>
		<img src="../assets/timing-function.png" width="600px">
	</figure>
	<h1></h1>
</template>
	
<script setup lang='ts'>

</script>
	
<style></style>