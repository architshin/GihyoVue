<template>
	<form action="#" v-on:submit.prevent="onFormSubmit">
		<input type="text" required>
		<button type="submit">送信</button>
	</form>
	<p>{{msg}}</p>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const msg = ref("未送信");
		const onFormSubmit = function(): void {
			msg.value = "送信されました。";
		};
		return {
			msg,
			onFormSubmit
		};
	}
});
</script>
