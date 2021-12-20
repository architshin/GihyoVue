<template>
	<header>
		<h1>マルチビューサンプル</h1>
	</header>
	<main>
		<router-view/>
	</main>
	<section id="sidebar">
		<router-view name="sidebar"/>
	</section>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "App",
});
</script>

<style>
main {
	border: blue 1px solid;
	padding: 10px;
}
#sidebar {
	border: orange 1px solid;
	padding: 10px;
}
</style>
