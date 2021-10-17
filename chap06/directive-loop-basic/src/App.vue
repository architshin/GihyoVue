<template>
	<ul>
		<li
			v-for="cocktailName in cocktailList"
			v-bind:key="cocktailName">
			{{cocktailName}}
		</li>
	</ul>
	<ul>
		<li
			v-for="(cocktailName, index) in cocktailList"
			v-bind:key="cocktailName">
			{{cocktailName}}(インデックス{{index}})
		</li>
	</ul>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const cocktailListLinit: string[] = ["ホワイトレディ", "ブルーハワイ", "ニューヨーク"];
		const cocktailList = ref(cocktailListLinit);
		// const cocktailList = ref(["ホワイトレディ", "ブルーハワイ", "ニューヨーク"]);
		return {
			cocktailList
		};
	}
});
</script>
