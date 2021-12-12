<template>
	<p>OnePragraph内</p>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {onBeforeRouteLeave, onBeforeRouteUpdate} from "vue-router";

export default defineComponent({
	name: "OnePragraph",
	setup() {
		onBeforeRouteLeave(
			(to, from) => {
				console.log(`OnePragraph#onBeforeRouteLeave: to=${to.fullPath};from=${from.fullPath}`);
			}
		);
		onBeforeRouteUpdate(
			(to, from) => {
				console.log(`OnePragraph#onBeforeRouteUpdate: to=${to.fullPath};from=${from.fullPath}`);
			}
		);
	}
});
</script>
