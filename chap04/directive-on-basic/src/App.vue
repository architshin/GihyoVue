<template>
	<section>
		<button v-on:click="onButtonClick">クリック!</button>
		<p>クリックの結果: {{randValue}}</p>
	</section>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const randValue = ref("まだです");
		const onButtonClick = function(): void {
			const rand = Math.round(Math.random() * 10);
			randValue.value = String(rand);
		}
		return {
			randValue,
			onButtonClick,
		};
	}
});
</script>
