<template>
	<ul>
		<li
			v-for="(cocktailName, id) in cocktailList"
			v-bind:key="'cocktailList' + id">
			IDが{{id}}のカクテルは{{cocktailName}}
		</li>
	</ul>
	<ul>
		<li
			v-for="(cocktailName, id, index) in cocktailList"
			v-bind:key="'cocktailListWithIdx' + id">
			{{index + 1}}: IDが{{id}}のカクテルは{{cocktailName}}

		</li>
	</ul>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const cocktailListInit: {[key: number]: string;} = {
			2345: "ホワイトレディ",
			4412: "ブルーハワイ",
			6792: "ニューヨーク"
		};
		const cocktailList = ref(cocktailListInit);
		return {
			cocktailList
		};
	}
});
</script>
