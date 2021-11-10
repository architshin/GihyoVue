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

<script lang="ts">
import {defineComponent} from "vue";
import OneSection from "./components/OneSection.vue";

export default defineComponent({
	name: "App",
	components: {
		OneSection
	}
});
</script>

<style>
section {
	border: blue 1px solid;
	margin: 10px;
}
</style>
