<template>
	<p>半径{{radius}}の円の面積を円周率{{PI}}で計算すると、{{area}}</p>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from "vue";

export default defineComponent({
	setup() {
		// 半径の初期値を乱数で取得。
		const radiusInit = Math.round(Math.random() * 10);
		// 円周率定数を用意。
		const PI = 3.14;
		// 半径のテンプレート変数を用意。
		const radius = ref(radiusInit);
		// 円の面積の算出値を用意。
		const area = computed(
			function() {
				return radius.value * radius.value * PI;
			}
		);
		// const area = computed(
		// 	() => {
		// 		return radius.value * radius.value * PI;
		// 	}
		// );
		// const area = computed(
		// 	() => radius.value * radius.value * PI
		// );
		// 半径のテンプレート変数に新しい乱数を格納する関数。
		function changeRadius() {
			radius.value = Math.round(Math.random() * 10);
		}
		// changeRadius()を1秒ごとに実行。
		setInterval(changeRadius, 1000);
		// area.value = 300;
		// テンプレート変数をリターン。
		return {
			radius,
			PI,
			area
		};
	}
});
</script>

<style>
</style>
