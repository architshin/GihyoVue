<template>
	<section class="box">
		<h1>{{name}}さんの状況</h1>
		<slot>
			<p>{{name}}さんは問題ありません。</p>
			<!-- <p>{{jiro}}さんは問題ありません。</p> -->
		</slot>
	</section>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "OneSection",
	props: {
		name: String
	}
});
</script>

<style>
.box {
	border: green 1px solid;
	margin: 10px;
}
</style>
