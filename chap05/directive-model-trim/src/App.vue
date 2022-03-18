<template>
	<section>
		<input type="text" v-model.trim="trimedText">
		<p>入力文字列: {{trimedText}}</p>
	</section>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const trimedText = ref("");
		return {
			trimedText
		};
	}
});
</script>
