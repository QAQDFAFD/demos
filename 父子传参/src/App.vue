<template>
	<Parent1></Parent1>
	<Parent2></Parent2>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Parent1 from './components/Parent1.vue'
import Parent2 from './components/Parent2.vue'

export default defineComponent({
	components: {
		Parent1,
		Parent2
	},
	setup() {
		return {}
	}
})
</script>

<style scoped></style>
