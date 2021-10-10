<template>
	<section v-pre>
		<p v-on:click="showHello">{{hello!}}</p>
	</section>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
});
</script>
