<template>
	<section>
		<h1>会員リスト</h1>
		<p>全会員の保有ポイントの合計: {{totalPoints}}</p>
		<OneMember
			v-for="[id, member] in memberList"
			v-bind:key="id"
			v-bind:id="id"
			v-bind:name="member.name"
			v-bind:email="member.email"
			v-model:points="member.points"
			v-bind:note="member.note"/>
	</section>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from "vue";
import OneMember from "./components/OneMember.vue";

export default defineComponent({
	name: "App",
	components: {
		OneMember
	},
	setup() {
		const memberListInit = new Map<number, Member>();
		memberListInit.set(33456, {id: 33456, name: "田中太郎", email: "bow@example.com", points: 35, note: "ちょ〜イケメン。"});
		memberListInit.set(47783, {id: 47783, name: "鈴木二郎", email: "mue@example.com", points: 53});
		const memberList = ref(memberListInit);
		const totalPoints = computed(
			(): number => {
				let total = 0;
				for(const [id, member] of memberList.value) {
					total += member.points;
				}
				return total;
			}
		);
		return {
			memberList,
			totalPoints
		}
	}
});

interface Member {
	id: number;
	name: string;
	email: string;
	points: number;
	note?: string;
}
</script>
