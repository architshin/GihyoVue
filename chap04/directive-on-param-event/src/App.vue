<template>
	<section>
		<img src="./assets/logo.png" alt="Vueのロゴ" v-on:mousemove="onImgMousemove">
		<p>ポインタの位置: x={{mousePointerX}}; y={{mousePointerY}}</p>
	</section>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const mousePointerX = ref(0);
		const mousePointerY = ref(0);
		const onImgMousemove = function(event: MouseEvent): void {
			mousePointerX.value = event.offsetX;
			mousePointerY.value = event.offsetY;
		}
		return {
			mousePointerX,
			mousePointerY,
			onImgMousemove
		};
	}
});
</script>
