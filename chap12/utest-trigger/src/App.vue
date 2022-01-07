<template>
	<p>
		隠し領域を
		<button id="showButton" v-on:click="onShowButtonClick">表示</button>
	</p>
	<p v-if="isVisible" id="invisible">表示されました!</p>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	name: "App",
	setup() {
		const isVisible = ref(false);
		const onShowButtonClick = (): void => {
			isVisible.value = true;
		};
		return {
			isVisible,
			onShowButtonClick
		}
	}
});
</script>
