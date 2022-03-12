<script setup lang="ts">
import OneSection from "./components/OneSection.vue";
</script>

<template>
	<h1>コンポーネント基礎</h1>
	<section>
		<h2>コンポーネント1個</h2>
		<OneSection />
	</section>
	<section>
		<h2>コンポーネントが複数</h2>
		<OneSection />
		<OneSection />
		<OneSection />
	</section>
</template>

<style>
section {
	border: blue 1px solid;
	margin: 10px;
}
</style>
