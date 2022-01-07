<template>
	<p>
		<input type="number" id="num1" v-model="num1">
		÷
		<input type="number" id="num2" v-model="num2">
		=<span id="ans">{{ans}}</span>
	</p>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from "vue";

export default defineComponent({
	name: "App",
	setup() {
		const num1 = ref(6);
		const num2 = ref(3);
		const ans = computed(
			(): number => {
				return num1.value / num2.value;
			}
		);
		return {
			num1,
			num2,
			ans
		}
	}
});
</script>
