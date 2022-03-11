<script setup lang="ts">
import {ref} from "vue";

const name = ref("田中太郎");
// const yourName = "田中太郎";
// const name = ref(yourName);
</script>

<template>
	<h1>こんにちは!{{name}}さん!</h1>
</template>
