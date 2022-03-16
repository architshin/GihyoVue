<script setup lang="ts">
interface Props {
	tag: string;
}
defineProps<Props>();
</script>

<template>
	<section class="box">
		{{tag}}
	</section>
	<section class="box" v-html="tag">
	</section>
</template>

<style>
.box {
	border: green 1px solid;
	margin: 10px;
}
</style>
