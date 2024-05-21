<template>
	<h1>正负可用空间</h1>


	<p>只有理解正可用空间的分配和负可用空间的移除，这样才能理解 flex 属性。<strong>正负可用空间</strong>（positive and negative free space）。</p>

	<p>当一个弹性容器有正可用空间时，它就有更多的空间用于在容器内显示弹性元素。比如说，如果 500px 宽的容器，‘flex-direction’ 属性值为 ‘row’，三个 100px 宽的弹性元素，那么还有 200px
		的正可用空间，如果想要填充整个容器，则可将其分配到元素中。</p>

	<figure>
		<img src="../assets/positive_free_space.png" alt="">
	</figure>


	<p>当弹性元素的自然尺寸加起来比弹性容器内的可用空间大时，就产生了负可用空间。比如有一个像上面那样的 500px 宽的容器，但是三个弹性元素每个都为 200px 宽，那就一共需要 600px 宽，因此就有了 100px
		的负可用空间。这可以从弹性元素中删除以使其能适应容器。</p>


	<figure>
		<img src="../assets/negative_free_space.png" alt="">
	</figure>
</template>