<script setup lang="ts">
import {RouterView} from "vue-router";
</script>

<template>
	<header>
		<h1>マルチビューサンプル</h1>
	</header>
	<main>
		<RouterView/>
	</main>
	<section id="sub">
		<RouterView name="sub"/>
	</section>
</template>

<style>
main {
	border: blue 1px solid;
	padding: 10px;
}
#sub {
	border: orange 1px solid;
	padding: 10px;
}
</style>

