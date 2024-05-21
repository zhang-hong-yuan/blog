<template>
	<h1>全局解析守卫</h1>

	<p>可以用 ‘router.【beforeResolve】’ 注册一个全局守卫。这和 ‘router.beforeEach’
		类似，因为它在<strong>每次导航</strong>时都会触发，不同的是，解析守卫刚好会在导航被确认之前、<strong>所有组件内守卫和异步路由组件被解析之后</strong>调用。这里有一个例子，确保用户可以访问自定义
		meta 属性 ‘requiresCamera’ 的路由：</p>

	<pre v-code:js>
router.beforeResolve(async to => {
  if (to.meta.requiresCamera) {
    try {
      await askForCameraPermission()
    } catch (error) {
      if (error instanceof NotAllowedError) {
        // ... 处理错误，然后取消导航
        return false
      } else {
        // 意料之外的错误，取消导航并把错误传给全局处理器
        throw error
      }
    }
  }
})
</pre>

	<p>‘router.beforeResolve’ 是【获取数据】或执行任何其他操作（如果用户无法进入页面时希望避免执行的操作）的理想位置。</p>
</template>