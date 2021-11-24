<template>
	<section class="box">
		<p>子コンポーネントで乱数を表示: {{rand}}</p>
		<button v-on:click="onNewRandButtonClick">新たな乱数を発生</button>
	</section>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "OneSection",
	props: {
		rand: Number
	},
	setup(props, context) {
		const onNewRandButtonClick = (): void => {
			context.emit("createNewRand");
		}
		return {
			onNewRandButtonClick
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
