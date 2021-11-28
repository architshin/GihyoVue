<template>
	<section>
		<slot v-bind:memberInfo="memberInfo">
		<!-- <slot v-bind:memberName="memberInfo.name" v-bind:memberState="memberInfo.state"> -->
			<h1>{{memberInfo.name}}さんの状況</h1>
			<p>{{memberInfo.state}}</p>
		</slot>
	</section>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";

export default defineComponent({
	name: "OneSection",
	setup() {
		const memberInfo = reactive({
			name: "田中太郎",
			state: "問題ありません。"
		});
		return {
			memberInfo
		}
	}
});
</script>
