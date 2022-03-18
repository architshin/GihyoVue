<script setup lang="ts">
import {ref} from "vue";

const cocktailListInit: string[] = ["ホワイトレディ", "ブルーハワイ", "ニューヨーク"];
const cocktailList = ref(cocktailListInit);
const changeCocktailList = (): void => {
	cocktailList.value = ["バラライカ", "XYZ", "マンハッタン"];
};
const addCocktailList= (): void => {
	cocktailList.value.push("ブルームーン");
};
const deleteFromCocktailList = (): void => {
	cocktailList.value.pop();
};
</script>

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
