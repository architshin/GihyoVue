<template>
	<dl>
		<template
			v-for="(value, key) in whiteLady"
			v-bind:key="key">
			<dt>{{key}}</dt>
			<dd>{{value}}</dd>
		</template>
	</dl>
	<p>
		価格を1500円に
		<button v-on:click="changeWhiteLadyPrice">変更</button>
	</p>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const whiteLadyInit: {
			id: number;
			name: string;
			price: number;
			recipe: string;
		} = {
			id: 2345,
			name: "ホワイトレディ",
			price: 1200,
			recipe: "ジン30ml+コワントロー15ml+レモン果汁+15ml"
		};
		const whiteLady = ref(whiteLadyInit);
		const changeWhiteLadyPrice = function(): void {
			whiteLady.value.price = 1500;
		};
		return {
			whiteLady,
			changeWhiteLadyPrice
		};
	}
});
</script>
