<template>
	<section>
		<h1>会員リスト</h1>
		<p>全会員の保有ポイントの合計: {{totalPoints}}</p>
		<OneMember
			v-for="id in memberList.keys()"
			v-bind:key="id"
			v-bind:id="id"/>
	</section>
</template>

<script lang="ts">
import {defineComponent, computed, inject} from "vue";
import OneMember from "./OneMember.vue";
import {Member} from "../interfaces";

export default defineComponent({
	name: "BaseSection",
	components: {
		OneMember
	},
	setup() {
		const memberList = inject("memberList") as Map<number, Member>;
		const totalPoints = computed(
			(): number => {
				let total = 0;
				for(const member of memberList.values()) {
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
</script>

<style scoped>
section {
	border: orange 1px solid;
	margin: 10px;
}
</style>
