<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "App",
	data() {
		return {
			height: Math.round(Math.random() * 10),
			width: Math.round(Math.random() * 10)
		}
	},
	computed: {
		area(): number {
			return this.height * this.width;
		}
	},
	methods: {
		change(): void {
			this.height = Math.round(Math.random() * 10);
			this.width = Math.round(Math.random() * 10);
		}
	},
	updated(): void {
		console.log(`beforeMount called: ${this.height} * ${this.width}`);
	}
});
</script>

<template>
	<p>縦が{{height}}、横が{{width}}の長方形の面積は{{area}}</p>
	<button v-on:click="change">値を変更</button>
</template>
