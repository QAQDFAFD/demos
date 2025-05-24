<template>
	{{ data }}
	<Child1 :data="data" @update-data="updateData"></Child1>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Child1 from './Child1.vue'
export default defineComponent({
	components: {
		Child1
	},
	setup() {
		const data = ref('测试1')
		const updateData = (val: any) => {
			data.value = val
		}
		return {
			data,
			updateData
		}
	}
})
</script>

<style lang="scss" scoped></style>
