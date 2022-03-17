<script setup lang="ts">
import {onBeforeRouteLeave, onBeforeRouteUpdate} from "vue-router";

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
</script>

<template>
	<p>OnePragraph内</p>
</template>
