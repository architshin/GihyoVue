<template>
	<section>
		<h2>単純なpタグの埋め込み</h2>
		<OneSection v-bind:tag="tag"/>
	</section>
	<section>
		<h2>複雑なタグの埋め込み</h2>
		<OneSection v-bind:tag="tagComplex"/>
	</section>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import OneSection from "./components/OneSection.vue";

export default defineComponent({
	name: "App",
	components: {
		OneSection
	},
	setup() {
		const tag = ref("<p>Appで用意したpタグ</p>");
		const tagComplex = ref(`<ul><li v-for="problem in problems" v-bind:key="problem">{{problem}}</li></ul>`);
		return {
			tag,
			tagComplex
		}
	}
});
</script>
