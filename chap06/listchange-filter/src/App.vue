<script setup lang="ts">
import {ref, computed} from "vue";

const cocktailDataListInit: Cocktail[]  = [
	{id: 2345, name: "ホワイトレディ", price: 1200},
	{id: 4412, name: "ブルーハワイ", price: 1500},
	{id: 6792, name: "ニューヨーク", price: 1100},
	{id: 8429, name: "マティーニ", price: 1500}
];
const cocktailDataList = ref(cocktailDataListInit);
const cocktail1500 = computed(
	(): Cocktail[] => {
		//配列のfilter()メソッドを使って新たな配列を生成。
		const newList = cocktailDataList.value.filter(
			//filter()メソッドの絞り込み条件関数。
			//引数は配列の各要素であるCocktailオブジェクト。
			(cocktailItem: Cocktail): boolean => {
				//値段が1500かどうかの結果を戻り値とする。
				return cocktailItem.price == 1500;
			}
		);
		return newList;
	}
);

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
				v-for="cocktailItem in cocktailDataList"
				v-bind:key="cocktailItem.id">
				{{cocktailItem.name}}の値段は{{cocktailItem.price}}円
			</li>
		</ul>
	</section>
	<section>
		値段が1500円のカクテルリスト
		<ul>
			<li
				v-for="cocktailItem in cocktail1500"
				v-bind:key="'cocktail1500' + cocktailItem.id">
				{{cocktailItem.name}}の値段は{{cocktailItem.price}}円
			</li>
		</ul>
	</section>
</template>
