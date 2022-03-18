<script setup lang="ts">
import {ref} from "vue";

const cocktailListInit = new Map<number, string>();
cocktailListInit.set(2345, "ホワイトレディ");
cocktailListInit.set(4412, "ブルーハワイ");
cocktailListInit.set(6792, "ニューヨーク");
const cocktailList = ref(cocktailListInit);
const changeCocktailList = (): void => {
	cocktailList.value.clear();
	cocktailList.value.set(3416, "バラライカ");
	cocktailList.value.set(5517, "XYZ");
	cocktailList.value.set(7415, "マンハッタン");
};
const addCocktailList= (): void => {
	cocktailList.value.set(8894, "ブルームーン");
};
const deleteFromCocktailList = (): void => {
	cocktailList.value.delete(5517);
};
</script>

<template>
	<ul>
		<li
			v-for="[id, cocktailName] in cocktailList"
			v-bind:key="id">
			IDが{{id}}のカクテルは{{cocktailName}}
		</li>
	</ul>
	<p>
		CocktailListを
		<button v-on:click="changeCocktailList">変更</button>
	</p>
	<p>
		CocktailListに「ブルームーン」を
		<button v-on:click="addCocktailList">追加</button>
	</p>
	<p>
		CocktailListから5517のXYZを
		<button v-on:click="deleteFromCocktailList">削除</button>
	</p>
</template>
