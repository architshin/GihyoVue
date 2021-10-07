<template>
	<p><button type="button" v-bind:disabled="isSendButtonDisabled">送信</button></p>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const isSendButtonDisabled = ref(true);
		return {
			isSendButtonDisabled
		};
	}
});
</script>
