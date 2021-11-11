<template>
	<section>
		<p>{{name}}さんですね!</p>
		<input type="text" v-model="name">
	</section>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	name: "WithModel",
	setup() {
		const name = ref("名無し");
		return {
			name
		};
	}
});
</script>

<style scoped>
section {
	border: orange 1px solid;
	margin: 10px;
}
</style>
