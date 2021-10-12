<template>
	<section>
		<input type="number" v-model="price">円<br>
		<p>金額は{{price}}円です。</p>
		<p v-once>金額は{{price}}円です。</p>
	</section>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const price = ref(1000);
		return {
			price
		};
	}
});
</script>
