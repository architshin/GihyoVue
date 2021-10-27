<template>
	<p>
		点数は{{randomNumber}}点
		<template v-if="randomNumber >= 80">
			で優です。
			<span style="color: red;">素晴らしい!</span>
		</template>
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
