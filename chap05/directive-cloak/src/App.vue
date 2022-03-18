<template>
	<p v-cloak>{{hello}}</p>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const hello = ref("こんにちは!");
		return {
			hello
		};
	}
});
</script>

<style>
[v-cloak] {
	display: none;
}
</style>
