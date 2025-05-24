<template>
	<div>
		{{ data }}
		<Child5 v-model="data"></Child5>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Child5 from './Child5.vue'

export default defineComponent({
	components: {
		Child5
	},
	setup() {
		const data = ref('测试5')

		return {
			data
		}
	}
})
</script>

<style scoped></style>