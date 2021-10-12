<template>
	<p><img v-bind="imgAttributes"></p>
	<p><img v-bind="imgAttributes" title="ロゴです!"></p>
	<p><img v-bind="imgAttributes" alt="ロゴです!"></p>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const imgAttributes = ref({
			src: "/images/logo.png",
			alt: "Vueのロゴ",
			width: 75,
			height: 75
		});
		return {
			imgAttributes
		};
	}
});
</script>
