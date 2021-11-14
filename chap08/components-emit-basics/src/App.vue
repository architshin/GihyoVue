<template>
	<section>
		<p>親コンポーネントで乱数を表示: {{rand}}</p>
		<OneSection
			v-bind:rand="rand"
			v-on:createNewRand="onCreateNewRand"/>
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
		const randInit = Math.round(Math.random() * 10);
		const rand = ref(randInit);
		const onCreateNewRand = (): void => {
			rand.value = Math.round(Math.random() * 10);
		}
		return {
			rand,
			onCreateNewRand
		}
	}
});
</script>
