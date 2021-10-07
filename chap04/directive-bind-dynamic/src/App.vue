<template>
	<p><img alt="VueLogo" src="./assets/logo.png" v-bind:[widthOrHeight]="widthOrHeightValue"></p>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const widthOrHeight = ref("height");
		const widthOrHeightValue = ref(100);
		return {
			widthOrHeight,
			widthOrHeightValue
		};
	}
});
</script>
