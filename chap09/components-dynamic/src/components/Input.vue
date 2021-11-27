<template>
	<input type="text" v-model="inputNameModel">
	<p>{{inputNameModel}}</p>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	name: "Input",
	setup() {
		const inputNameModel = ref("田中太郎");
		return {
			inputNameModel
		}
	}
});
</script>
