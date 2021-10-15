<template>
	<p v-if="number >= 50">
		条件に合致したので表示
	</p>
	<p v-if="Math.round(Math.random() * 100) >= 50">
		条件に合致したので表示
	</p>
	<p v-if="showOrNot">
		条件に合致したので表示
	</p>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const number = ref(80);
		const showOrNot = computed(
			function(): boolean {
				//戻り値用変数を初期値falseで用意
				let showOrNot = false;
				//0〜100の乱数を発生
				const rand = Math.round(Math.random() * 100);
				//乱数が50以上ならば、戻り値をtrueに変更
				if(rand >= 50) {
					showOrNot = true;
				}
				return showOrNot;
			}
		);
		return {
			number,
			showOrNot
		};
	}
});
</script>
