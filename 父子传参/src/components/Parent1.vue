<template>
	<Child1 :data="data"></Child1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Child1 from './Child1.vue'
export default defineComponent({
	components: {
		Child1
	},
	setup() {
		return {
			data: '测试1'
		}
	}
})
</script>

<style lang="scss" scoped></style>
