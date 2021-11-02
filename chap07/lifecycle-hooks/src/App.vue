<template>
	<p>現在時刻: {{timeStr}}</p>
	<p>現在時刻(ref): {{timeStrRef}}</p>
</template>

<script lang="ts">
import {defineComponent, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated} from "vue";

export default defineComponent({
	setup() {
		const now = new Date();
		const nowStr = now.toLocaleTimeString();
		let timeStr = nowStr;
		const timeStrRef = ref(nowStr);
		function changeTime() {
			const newTime = new Date();
			const newTimeStr = newTime.toLocaleTimeString();
			timeStr = newTimeStr
			timeStrRef.value = newTimeStr;
		}
		setInterval(changeTime, 1000);
		onBeforeMount(
			() => {
				console.log(`onBeforeMount called: ${timeStrRef.value}`);
			}
		);
		onMounted(
			() => {
				console.log(`onMounted called: ${timeStrRef.value}`);
			}
		);
		onBeforeUpdate(
			() => {
				console.log(`onBeforeUpdate called: ${timeStrRef.value}`);
			}
		);
		onUpdated(
			() => {
				console.log(`onUpdated called: ${timeStrRef.value}`);
			}
		);
		return {
			timeStr,
			timeStrRef
		};
	}
});
</script>

<style>
</style>
