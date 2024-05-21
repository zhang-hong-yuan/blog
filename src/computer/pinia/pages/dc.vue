<template>
	<h1>访问其他 store 的 getter</h1>

	<p>想要使用另一个 store 的 getter 的话，那就直接在 getter 内使用就好：</p>

	<pre v-code:js>
import { useOtherStore } from './other-store'

export const useStore = defineStore('main', {
  state: () => ({
    // ...
  }),
  getters: {
    otherGetter(state) {
      const otherStore = 【useOtherStore()】
      return state.localData + otherStore.data
    },
  },
})
</pre>
</template>