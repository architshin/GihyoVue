<template>
	<section class="box">
		{{tag}}
	</section>
	<section class="box" v-html="tag">
	</section>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "OneSection",
	props: {
		tag: String
	}
});
</script>

<style>
.box {
	border: green 1px solid;
	margin: 10px;
}
</style>
