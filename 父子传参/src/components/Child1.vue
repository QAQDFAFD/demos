<template>
	<div>
		{{ data }}
		<button @click="updateData('修改后的测试1')">修改</button>
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
	setup(props, { emit }) {
		const updateData = (val: any) => {
			emit('update-data', val)
		}
		return {
			updateData
		}
	}
})
</script>

<style lang="scss" scoped></style>
