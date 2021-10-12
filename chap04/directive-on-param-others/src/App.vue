<template>
	<p v-on:click="onPClick('red')" v-bind:style="{backgroundColor: pBgColor}">
		ここをクリックすると背景色が変わります。
	</p>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const pBgColor = ref("white");
		const onPClick = function(bgColor: string): void {
			pBgColor.value = bgColor;
		};
		return {
			pBgColor,
			onPClick
		};
	}
});
</script>
