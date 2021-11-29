<template>
	<section class="box">
		<h1>{{name}}さんの状況</h1>
		<slot>
			<p>問題ありません</p>
		</slot>
		<h4>詳細内容</h4>
		<slot name="detail">
			<p>特にありません。</p>
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
