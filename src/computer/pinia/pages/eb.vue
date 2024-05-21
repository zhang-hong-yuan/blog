<template>
	<h1>访问其他 store 的 action</h1>


	<p>想要使用另一个 store 的话，直接在 action 中调用就好了：</p>

	<pre v-code:js>
import { useAuthStore } from './auth-store'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    preferences: null,
    // ...
  }),
  actions: {
    async fetchUserPreferences() {
      const auth = 【useAuthStore()】
      if (auth.isAuthenticated) {
        this.preferences = await fetchPreferences()
      } else {
        throw new Error('User must be authenticated')
      }
    },
  },
})
</pre>
</template>