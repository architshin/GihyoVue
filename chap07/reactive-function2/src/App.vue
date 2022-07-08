<script lang="ts">
import {defineComponent, reactive, computed, toRefs} from "vue";

export default defineComponent({
	name: "App",
	setup() {
		// リアクティブなテンプレート変数をまとめて用意。
		const data = reactive({
			PI: 3.14,
			radius: Math.round(Math.random() * 10)
		});
		// 円の面積の算出プロパティを用意。
		const area = computed(
			(): number => {
				return data.radius * data.radius * data.PI;
			}
		);
		// 半径のテンプレート変数に新しい乱数を1秒ごとに格納。
		setInterval(
			():void => {
				data.radius = Math.round(Math.random() * 10);
			},
			1000
		);
		return {
			...toRefs(data),
			area
		}
	}
});
</script>

<template>
	<p>半径{{radius}}の円の面積を円周率{{PI}}で計算すると、{{area}}</p>
</template>
