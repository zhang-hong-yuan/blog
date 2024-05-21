<template>

	<h3>scrollBy() 和 scrollTo() 的区别</h3>

	<p>‘scrollBy()’ 和 ‘scrollTo()’ 的区别主要在于滚动的方式和参考点不同：</p>

	<ul>
		<li>
			‘scrollTo’。其是基于视图(View)的初始位置进行绝对定位的滚动，当使用相同的参数多次调用 ‘scrollTo()’ 方法时，由于 View
			的初始位置没有变化，所以只会产生一次滚动效果。例如，如果一个视图(View)已经位于屏幕的左上角，再次调用 ‘scrollTo(0,0)’ 将不会有任何效果。
		</li>
		<li>
			‘scrollBy’。其是基于视图(View)的当前位置进行相对滚动的，每次滚动的起始坐标是上一次滚动结束时的位置。例如，如果一个视图(View)已经位于屏幕的左上角，并且调用了
			‘scrollBy(0,0)’，那么它仍然会回到原点，因为 ‘scrollBy’ 是基于当前位置的相对移动。
		</li>
	</ul>

	<p>总结来说，‘scrollTo’ 是从一个固定的点开始移动，而 ‘scrollBy’ 是从当前位置开始移动。</p>
</template>