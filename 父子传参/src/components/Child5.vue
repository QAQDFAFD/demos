<template>
	<div>
		{{ modelValue }}
		<button @click="change('修改后的测试5')">修改</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		modelValue: {
			type: String,
			default: () => ''
		}
	},
	setup(props, { emit }) {
		const change = (newValue: string) => {
			emit('update:modelValue', newValue)
		}

		return {
			change
		}
	}
})
</script>

<style scoped></style>