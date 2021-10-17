<template>
	<ul>
		<li
			v-for="[id, cocktailName] in cocktailList"
			v-bind:key="id">
			IDが{{id}}のカクテルは{{cocktailName}}
		</li>
	</ul>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const cocktailListInit = new Map<number, string>();
		cocktailListInit.set(2345, "ホワイトレディ");
		cocktailListInit.set(4412, "ブルーハワイ");
		cocktailListInit.set(6792, "ニューヨーク");
		const cocktailList = ref(cocktailListInit);
		// cocktailList.value.set(2345, "ホワイトレディ");
		// cocktailList.value.set(4412, "ブルーハワイ");
		// cocktailList.value.set(6792, "ニューヨーク");
		return {
			cocktailList
		};
	}
});
</script>
