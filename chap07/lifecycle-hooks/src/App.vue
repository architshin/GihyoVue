<script setup lang="ts">
import {ref, computed, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onRenderTracked, onRenderTriggered} from "vue";
import type {DebuggerEvent} from "vue";

const heightInit = Math.round(Math.random() * 10);
const widthInit = Math.round(Math.random() * 10);
const height = ref(heightInit);
const width = ref(widthInit);
const area = computed(
	(): number => {
		return height.value * width.value;
	}
);
const change = (): void => {
	height.value = Math.round(Math.random() * 10);
	width.value = Math.round(Math.random() * 10);
}
onBeforeMount(
	(): void => {
		console.log(`beforeMount called: ${height.value} * ${width.value}`);
	}
);
onMounted(
	(): void => {
		console.log(`mounted called: ${height.value} * ${width.value}`);
	}
);
onBeforeUpdate(
	(): void => {
		console.log(`beforeUpdate called: ${height.value} * ${width.value}`);
	}
);
onUpdated(
	(): void => {
		console.log(`updated called: ${height.value} * ${width.value}`);
	}
);
onRenderTracked(
	(event: DebuggerEvent): void => {
		console.log(`renderTracked called: ${height.value} * ${width.value}`);
		console.log(event);
	}
);
onRenderTriggered(
	(event: DebuggerEvent): void => {
		console.log(`renderTriggered called: ${height.value} * ${width.value}`);
		console.log(event);
	}
);
</script>

<template>
	<p>縦が{{height}}、横が{{width}}の長方形の面積は{{area}}</p>
	<button v-on:click="change">値を変更</button>
</template>
