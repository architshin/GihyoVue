<template>
	<p>{{num1}}÷{{num2}}={{ans}}</p>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from "vue";
import {divideTwoNums} from "@/functions";

export default defineComponent({
	name: "App",
	setup() {
		const num1 = ref(6);
		const num2 = ref(3);
		const ans = computed(
			(): number => {
				return divideTwoNums(num1.value, num2.value);
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
