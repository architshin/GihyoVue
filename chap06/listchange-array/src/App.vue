<template>
		<ul>
			<li
				v-for="(cocktailName, index) in cocktailList"
				v-bind:key="cocktailName">
				{{cocktailName}}(インデックス{{index}})
			</li>
		</ul>
		<p>
			CocktailListを
			<button v-on:click="changeCocktailList">変更</button>
		</p>
		<p>
			CocktailListの末尾に「ブルームーン」を
			<button v-on:click="addCocktailList">追加</button>
		</p>
		<p>
			CocktailListから末尾の要素を
			<button v-on:click="deleteFromCocktailList">削除</button>
		</p>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	setup() {
		const cocktailListLinit: string[] = ["ホワイトレディ", "ブルーハワイ", "ニューヨーク"];
		const cocktailList = ref(cocktailListLinit);
		const changeCocktailList = function(): void {
			cocktailList.value = ["バラライカ", "XYZ", "マンハッタン"];
		};
		const addCocktailList= function(): void {
			cocktailList.value.push("ブルームーン");
		};
		const deleteFromCocktailList = function(): void {
			cocktailList.value.pop();
		};
		return {
			cocktailList,
			changeCocktailList,
			addCocktailList,
			deleteFromCocktailList
		};
	}
});
</script>
