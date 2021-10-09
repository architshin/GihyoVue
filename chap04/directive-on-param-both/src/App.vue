<template>
	<p v-on:click="onPClickWithEvent('green', $event)" v-bind:style="{backgroundColor: pBgColorEvent}">
		{{pMsg}}
	</p>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const pMsg = ref("イベント前(ここをクリック!)");
		const pBgColorEvent = ref("white");
		const onPClickWithEvent = function(bgColor: string, event: MouseEvent): void {
			pBgColorEvent.value = bgColor;
			pMsg.value = event.timeStamp.toString();
		};
		return {
			pMsg,
			pBgColorEvent,
			onPClickWithEvent
		};
	}
});
</script>
