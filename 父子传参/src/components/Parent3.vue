<template>
	<div>
		<Child3>
			<template #main>
				{{ data }}
			</template>
		</Child3>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Child3 from './Child3.vue'

export default defineComponent({
	components: {
		Child3
	},
	setup() {
		const data = ref('测试3')

		return {
			data
		}
	}
})
</script>

<style scoped></style>