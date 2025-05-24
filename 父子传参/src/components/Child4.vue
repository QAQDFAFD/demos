<template>
	<div>
		{{ data }}
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	setup() {
		const data = ref('')

		return {
			data
		}
	}
})
</script>

<style scoped></style>