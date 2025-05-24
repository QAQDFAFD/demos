<template>
	<Parent1></Parent1>
	<Parent2></Parent2>
	<Parent3></Parent3>
	<Parent4></Parent4>
	<Parent5></Parent5>
	<Parent6></Parent6>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Parent1 from './components/Parent1.vue'
import Parent2 from './components/Parent2.vue'
import Parent3 from './components/Parent3.vue'
import Parent4 from './components/Parent4.vue'
import Parent5 from './components/Parent5.vue'
import Parent6 from './components/Parent6.vue'
export default defineComponent({
	components: {
		Parent1,
		Parent2,
		Parent3,
		Parent4,
		Parent5,
		Parent6
	},
	setup() {
		return {}
	}
})
</script>

<style scoped></style>
