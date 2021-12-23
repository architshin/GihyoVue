<template>
	<p>現在のポイント: {{points}}</p>
	<p>現在のポイントさらに倍: {{doublePoints}}</p>
	<button v-on:click="onIncrementClick">加算</button>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";
import {useStore} from "vuex";

export default defineComponent({
	name: "App",
	setup() {
		const store = useStore();
		const points = computed(
			(): number => {
				return store.state.points;
			}
		);
		const doublePoints = computed(
			(): number => {
				return store.getters.getDoublePoints;
			}
		);
		const onIncrementClick = () => {
			store.commit("incrementPoints");
		}
		return {
			points,
			doublePoints,
			onIncrementClick
		}
	}
});
</script>
