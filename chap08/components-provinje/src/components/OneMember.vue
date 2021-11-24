<template>
	<section class="box">
		<h4>{{name}}さんの情報</h4>
		<dl>
			<dt>ID</dt>
			<dd>{{id}}</dd>
			<dt>メールアドレス</dt>
			<dd>{{email}}</dd>
			<dt>保有ポイント</dt>
			<dd>
				<input type="number" v-model.number="points">
			</dd>
			<dt>備考</dt>
			<dd>{{localNote}}</dd>
		</dl>
	</section>
</template>

<script lang="ts">
import {defineComponent, computed, toRefs, inject} from "vue";
import {Member} from "../interfaces";

export default defineComponent({
	name: "OneMember",
	props: {
		id: {
			type: Number,
			required: true
		}
	},
	setup(props) {
		const memberList = inject("memberList") as Map<number, Member>;
		const member = memberList.get(props.id) as Member;
		const localNote = computed(
			(): string => {
				let localNote = member.note;
				if(localNote == undefined) {
					localNote = "--";
				}
				return localNote;
			}
		);
		return {
			...toRefs(member),
			localNote
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
