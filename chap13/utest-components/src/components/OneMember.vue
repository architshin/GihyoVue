<template>
	<section class="box">
		<h4>{{name}}さんの情報</h4>
		<dl>
			<dt>ID</dt>
			<dd>{{id}}</dd>
			<dt>メールアドレス</dt>
			<dd>{{email}}</dd>
			<dt>保有ポイント</dt>
			<dd>{{points}}</dd>
			<dt>備考</dt>
			<dd>{{localNote}}</dd>
		</dl>
		<button v-on:click="pointUp">ポイント加算</button>
	</section>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from "vue";

export default defineComponent({
	name: "OneMember",
	props: {
		id: Number,
		name: String,
		email: String,
		points: Number,
		note: String
	},
	setup(props, context) {
		const localPoints = ref(props.points);
		const localNote = computed(
			(): string => {
				let localNote = props.note;
				if(localNote == undefined) {
					localNote = "--";
				}
				return localNote;
			}
		);
		const pointUp = (): void => {
			context.emit("incrementPoint", props.id);
		}
		return {
			localPoints,
			localNote,
			pointUp
		}
	}
});
</script>

<style scoped>
.box {
	border: green 1px solid;
	margin: 10px;
}
</style>
