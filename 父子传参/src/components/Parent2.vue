<template>
	<div>
		<Child2></Child2>
	</div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import Child2 from './Child2.vue'
import { injectSymbol } from './Symbol'

export default defineComponent({
	components: {
		Child2
	},
	setup() {
		const data = ref('测试2')
		provide(injectSymbol, data)
		return {}
	}
})
</script>

<style scoped></style>