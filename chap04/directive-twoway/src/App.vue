<template>
	<section>
		<input type="text" v-bind:value="inputName2Way" v-on:input="onInputName2Way">
		<p>{{inputName2Way}}</p>
	</section>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const inputName2Way = ref("双方向");
		const onInputName2Way = function(event: Event): void {
			const element = event.target as HTMLInputElement;
			inputName2Way.value = element.value;
		}
		return {
			inputName2Way,
			onInputName2Way
		};
	}
});
</script>
