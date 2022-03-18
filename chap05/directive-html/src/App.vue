<template>
	<section>{{htmlStr}}</section>
	<section v-html="htmlStr"></section>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const htmlStr = ref(`<a href="https://v3.vuejs.org/">Vue.jsのTOPページ<a/>`);
		return {
			htmlStr
		};
	}
});
</script>
