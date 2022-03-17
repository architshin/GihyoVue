<script setup lang="ts">
import {RouterLink, onBeforeRouteLeave, onBeforeRouteUpdate} from "vue-router";
import OnePragraph from "@/components/OnePragraph.vue";

onBeforeRouteLeave(
	(to, from) => {
		console.log(`Next#onBeforeRouteLeave: to=${to.fullPath};from=${from.fullPath}`);
	}
);
onBeforeRouteUpdate(
	(to, from) => {
		console.log(`Next#onBeforeRouteUpdate: to=${to.fullPath};from=${from.fullPath}`);
	}
);
</script>

<template>
	<h1>会員管理</h1>
	<nav id="breadcrumbs">
		<ul>
			<li>
				<RouterLink v-bind:to="{name: 'AppTop'}">TOP</RouterLink>
			</li>
			<li>次の画面</li>
		</ul>
	</nav>
	<section>
		<h2>次の画面</h2>
		<p>
			<RouterLink v-bind:to="{name: 'Next', params: {id: 5}}">パラメータ付きへ</RouterLink>
		</p>
		<OnePragraph/>
	</section>
</template>
