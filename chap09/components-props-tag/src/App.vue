<script setup lang="ts">
import {ref} from "vue";
import OneSection from "./components/OneSection.vue";

const tag = ref("<p>連絡がつきません。</p>");
const tagComplex = ref(`<ul><li v-for="problem in problems" v-bind:key="problem">{{problem}}</li></ul>`);
</script>

<template>
	<section>
		<h2>単純なpタグの埋め込み</h2>
		<OneSection v-bind:tag="tag"/>
	</section>
	<section>
		<h2>複雑なタグの埋め込み</h2>
		<OneSection v-bind:tag="tagComplex"/>
	</section>
</template>
