<script setup lang="ts">
import {ref} from "vue";

const isSendButtonDisabled = ref(true);
</script>

<template>
	<p><button type="button" v-bind:disabled="isSendButtonDisabled">送信</button></p>
</template>
