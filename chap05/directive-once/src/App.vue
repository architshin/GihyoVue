<script setup lang="ts">
import {ref} from "vue";

const price = ref(1000);
</script>

<template>
	<section>
		<input type="number" v-model="price">円<br>
		<p>金額は{{price}}円です。</p>
		<p v-once>金額は{{price}}円です。</p>
	</section>
</template>
