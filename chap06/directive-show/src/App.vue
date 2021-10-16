<template>
	<section>
		v-ifを利用
		<p v-if="showOrNot">
			条件に合致したので表示
		</p>
	</section>
	<section>
		v-showを利用
		<p v-show="showOrNot">
			条件に合致したので表示
		</p>
	</section>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";

export default defineComponent({
	setup() {
		const showOrNot = computed(
			function(): boolean {
				let showOrNot = false;
				const rand = Math.round(Math.random() * 100);
				if(rand >= 50) {
					showOrNot = true;
				}
				return showOrNot;
			}
		);
		return {
			showOrNot
		};
	}
});
</script>
