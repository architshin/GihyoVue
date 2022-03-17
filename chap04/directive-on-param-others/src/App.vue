<script setup lang="ts">
import {ref} from "vue";

const pBgColor = ref("white");
const onPClick = (bgColor: string): void => {
	pBgColor.value = bgColor;
};
</script>

<template>
	<p v-on:click="onPClick('red')" v-bind:style="{backgroundColor: pBgColor}">
		ここをクリックすると背景色が変わります。
	</p>
</template>
