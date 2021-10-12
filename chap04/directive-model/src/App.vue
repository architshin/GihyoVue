<template>
	<section>
		<input type="text" v-model="inputNameModel">
		<p>{{inputNameModel}}</p>
	</section>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const inputNameModel = ref("双方向");
		return {
			inputNameModel
		};
	}
});
</script>
