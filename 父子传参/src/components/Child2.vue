<template>
	<div>
		{{ data }}
	</div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { injectSymbol } from './Symbol'

export default defineComponent({
	setup() {
		const data = inject(injectSymbol)

		return {
			data
		}
	}
})
</script>

<style scoped></style>