<template>
	<section class="box">
		<h4>{{title}}</h4>
		<p>{{content}}</p>
	</section>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "OneInfo",
	props: {
		title: String,
		content: String
	}
});
</script>

<style scoped>
.box {
	border: green 1px solid;
	margin: 10px;
}
</style>
