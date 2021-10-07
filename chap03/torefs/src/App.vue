<template>
	<p>半径{{radius}}の円の面積を円周率{{PI}}で計算すると、{{area}}</p>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, computed} from "vue";

export default defineComponent({
	setup() {
		// リアクティブなテンプレート変数をまとめて用意。
		const data = reactive({
			PI: 3.14,
			radius: Math.round(Math.random() * 10)
		});
		// 円の面積の算出値を用意。
		const area = computed(
			function() {
				return data.radius * data.radius * data.PI;
			}
		);
		// 半径のテンプレート変数に新しい乱数を格納する関数。
		function changeRadius() {
			data.radius = Math.round(Math.random() * 10);
		}
		// changeRadius()を1秒ごとに実行。
		setInterval(changeRadius, 1000);
		// テンプレート変数をリターン。
		return {
			...toRefs(data),
			area
		};
	}
});
</script>

<style>
</style>
