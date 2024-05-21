import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBookmarkRecordStore = defineStore('bookmark_records', () => {

	const $search = ref('')
	const $subject = ref('0')


	const computer = ref('0')

	return { $search, $subject, computer }
}, { persist: true, })