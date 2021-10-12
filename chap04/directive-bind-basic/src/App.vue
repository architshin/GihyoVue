<template>
	<p><a v-bind:href="url" target="_blank">Vue.jsのサイト</a></p>
	<p><a :href="url" target="_blank">Vue.jsのサイト(省略系)</a></p>
	<p><a v-bind:href="url + 'guide/'" target="_blank">Vue.jsガイドのページ</a></p>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const url = ref("https://v3.vuejs.org/");
		return {
			url
		};
	}
});
</script>
