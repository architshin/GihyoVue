<script setup lang="ts">
import {computed, ref} from "vue";

const number = ref(80);
const showOrNot = computed(
	(): boolean => {
		//戻り値用変数を初期値falseで用意。
		let showOrNot = false;
		//0〜100の乱数を発生。
		const rand = Math.round(Math.random() * 100);
		//乱数が50以上ならば、戻り値をtrueに変更。
		if(rand >= 50) {
			showOrNot = true;
		}
		return showOrNot;
	}
);
</script>

<template>
	<p v-if="number >= 50">
		条件に合致したので表示①
	</p>
	<p v-if="Math.round(Math.random() * 100) >= 50">
		条件に合致したので表示②
	</p>
	<p v-if="showOrNot">
		条件に合致したので表示③
	</p>
</template>
