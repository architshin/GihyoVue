<script setup lang="ts">
import {ref, computed} from "vue";

const num1 = ref(6);
const num2 = ref(3);
const ans = computed(
	(): number => {
		return num1.value / num2.value;
	}
);
</script>

<template>
	<p>
		<input type="number" data-testid="num1" v-model="num1">
		÷
		<input type="number" data-testid="num2" v-model="num2">
		=<span data-testid="ans">{{ans}}</span>
	</p>
</template>
