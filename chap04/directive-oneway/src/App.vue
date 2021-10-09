<template>
	<section>
		<input type="text" v-bind:value="inputNameBind">
	</section>
	<br>
	<section>
		<input type="text" v-on:input="onInputName">
		<p>{{inputNameOn}}</p>
	</section>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const inputNameBind = ref("しんちゃん");
		const inputNameOn = ref("ななし");
		const onInputName = function(event: Event): void {
			const element = event.target as HTMLInputElement;
			inputNameOn.value = element.value;
		}
		return {
			inputNameBind,
			inputNameOn,
			onInputName
		};
	}
});
</script>
