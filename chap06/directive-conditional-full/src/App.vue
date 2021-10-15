<template>
	<p>
		点数は{{randomNumber}}点で
		<span v-if="randomNumber >= 80">優です。</span>
		<span v-else-if="randomNumber >= 70">良です。</span>
		<span v-else-if="randomNumber >= 60">可です。</span>
		<span v-else>不可です。</span>
	</p>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";

export default defineComponent({
	setup() {
		const randomNumber = computed(
			function(): number {
				return Math.round(Math.random() * 100);
			}
		);
		return {
			randomNumber
		};
	}
});
</script>
