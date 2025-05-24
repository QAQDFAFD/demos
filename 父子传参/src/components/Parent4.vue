<template>
	<div>
		<Child4 ref="child"></Child4>
	</div>
</template>

<script lang="ts">
import { defineComponent, useTemplateRef, onMounted } from 'vue'
import Child4 from './Child4.vue'

export default defineComponent({
	components: {
		Child4
	},
	setup() {
		const child: any = useTemplateRef('child')
		onMounted(() => {
			child.value.data = '测试4'
		})
		return {}
	}
})
</script>

<style scoped></style>