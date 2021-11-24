<template>
	<h1>コンポーネントの独立性</h1>
	<section>
		<h2>v-modelを含むコンポーネント</h2>
		<WithModel />
		<WithModel />
	</section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import WithModel from "./components/WithModel.vue";

export default defineComponent({
	name: "App",
	components: {
		WithModel
	}
});
</script>

<style>
section {
	border: blue 1px solid;
	margin: 10px;
}
</style>
