<template>
	<h1>こんにちは!{{name}}さん!</h1>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const name = ref("田中太郎");
		// const yourName = "田中太郎";
		// const name = ref(yourName);
		return {
			name
		};
	}
});
</script>

<style>
</style>
