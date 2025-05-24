<template>
	<div>
		{{ data }}
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	props: {
		data: {
			type: String,
			default: () => ''
		}
	},
	setup() {
		return {}
	}
})
</script>

<style lang="scss" scoped></style>
