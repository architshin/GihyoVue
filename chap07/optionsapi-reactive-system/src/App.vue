<template>
	<p>現在時刻: {{timeStrRef}}</p>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	data() {
		const now = new Date();
		const nowStr = now.toLocaleTimeString();
		return {
			timeStrRef: nowStr
		}
	},
	created(): void {
		// function changeTime(): void {
		// 	const newTime = new Date();
		// 	const newTimeStr = newTime.toLocaleTimeString();
		// 	this.timeStrRef = newTimeStr;
		// }
		// setInterval(changeTime, 1000);
		// const changeTime = function(): void {
		// 	const newTime = new Date();
		// 	const newTimeStr = newTime.toLocaleTimeString();
		// 	this.timeStrRef = newTimeStr;
		// };
		// setInterval(changeTime, 1000);
		// const changeTime = (): void => {
		// 	const newTime = new Date();
		// 	const newTimeStr = newTime.toLocaleTimeString();
		// 	this.timeStrRef = newTimeStr;
		// };
		// setInterval(changeTime, 1000);
		setInterval((): void => {
			const newTime = new Date();
			const newTimeStr = newTime.toLocaleTimeString();
			this.timeStrRef = newTimeStr;
		}, 1000);
	}
});
</script>
