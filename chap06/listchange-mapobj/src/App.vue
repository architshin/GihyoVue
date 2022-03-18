<script setup lang="ts">
import {ref, computed} from "vue";

const cocktailDataListInit = new Map<number, Cocktail>();
cocktailDataListInit.set(2345, {id: 2345, name: "ホワイトレディ", price: 1200});
cocktailDataListInit.set(4412, {id: 4412, name: "ブルーハワイ", price: 1500});
cocktailDataListInit.set(6792, {id: 6792, name: "ニューヨーク", price: 1100});
cocktailDataListInit.set(8429, {id: 8429, name: "マティーニ", price: 1500});
const cocktailDataList = ref(cocktailDataListInit);
const cocktail1500 = computed(
	//算出関数。戻り値の型はMap。
	(): Map<number, Cocktail> => {
		//絞り込んだ要素を格納する新しいMapを用意。
		const newList = new Map<number, Cocktail>();
		//cocktailDataList内のMapをループ処理。
		cocktailDataList.value.forEach(
			//ループの各処理内容を表す関数。
			(value: Cocktail, key: number): void => {
				//カクテルの価格が1500円ならnewListに登録。
				if(value.price == 1500) {
					newList.set(key, value);
				}
		});
		//絞り込んだ新しいMapを戻り値とする。
		return newList;
	}
);
const changeWhiteLadyPriceInList = (): void => {
	const whiteLady = cocktailDataList.value.get(2345) as Cocktail;
	whiteLady.price = 1500;
};

interface Cocktail {
	id: number;
	name: string;
	price: number;
}
</script>

<template>
	<section>
		全てのカクテルリスト
		<ul>
			<li
				v-for="[id, cocktailItem] in cocktailDataList"
				v-bind:key="id">
				{{cocktailItem.name}}の値段は{{cocktailItem.price}}円
			</li>
		</ul>
	</section>
	<section>
		値段が1500円のカクテルリスト
		<ul>
			<li
				v-for="[id, cocktailItem] in cocktail1500"
				v-bind:key="'cocktail1500' + id">
				{{cocktailItem.name}}の値段は{{cocktailItem.price}}円
			</li>
		</ul>
	</section>
	<p>
		CocktailDataList内のホワイトレディの価格を1500円に
		<button v-on:click="changeWhiteLadyPriceInList">変更</button>
	</p>
</template>
