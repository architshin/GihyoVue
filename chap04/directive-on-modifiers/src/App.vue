<template>
	<p>{{msg}}</p>
	<input type="text" v-on:keydown.enter="onEnterKey"><br>
	<button v-on:click.right="onRightButtonClick">右クリック</button><br>
	<button v-on:click.shift="onShiftClick">シフトを押しながらクリック</button><br>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const msg = ref("まだです!");
		const onEnterKey = function(): void {
			msg.value = "エンターキーが押下されました。";
		};
		const onRightButtonClick = function(): void {
			msg.value = "ボタンが右クリックされました。";
		};
		const onShiftClick = function(): void {
			msg.value = "シフトを押しながらクリックされました。";
		};
		return {
			msg,
			onEnterKey,
			onRightButtonClick,
			onShiftClick
		};
	}
});
</script>
