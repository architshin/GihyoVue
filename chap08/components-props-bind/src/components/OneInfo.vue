<script setup lang="ts">
interface Props {
	title: string;
	content: number;
}
defineProps<Props>();
</script>

<template>
	<section class="box">
		<h4>{{title}}</h4>
		<p>{{content}}</p>
	</section>
</template>

<style scoped>
.box {
	border: green 1px solid;
	margin: 10px;
}
</style>
