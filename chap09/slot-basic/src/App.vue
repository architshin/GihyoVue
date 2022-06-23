<script setup lang="ts">
import {ref} from "vue";
import OneSection from "./components/OneSection.vue";

const taro = ref("田中太郎");
</script>

<template>
	<section>
		<h2>Slotの利用</h2>
		<OneSection v-bind:name="taro">
			<p>連絡がつきません。</p>
		</OneSection>
	</section>
</template>
