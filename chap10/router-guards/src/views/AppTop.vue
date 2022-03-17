<script setup lang="ts">
import {RouterLink, onBeforeRouteLeave, onBeforeRouteUpdate} from "vue-router";
import OnePragraph from "@/components/OnePragraph.vue";

onBeforeRouteLeave(
	(to, from) => {
		console.log(`Top#onBeforeRouteLeave: to=${to.fullPath};from=${from.fullPath}`);
	}
);
onBeforeRouteUpdate(
	(to, from) => {
		console.log(`Top#onBeforeRouteUpdate: to=${to.fullPath};from=${from.fullPath}`);
	}
);
</script>

<template>
	<h1>TOP</h1>
	<nav id="breadcrumbs">
		<ul>
			<li>TOP</li>
		</ul>
	</nav>
	<section>
		<p>
			<RouterLink v-bind:to="{name: 'Next'}">次へ</RouterLink>
		</p>
		<OnePragraph/>
	</section>
</template>
