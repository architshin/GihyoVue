<template>
	<section>
		全てのカクテルリスト
		<ul>
			<li
				v-for="cocktailItem in cocktailDataList"
				v-bind:key="'cocktailDataList' + cocktailItem.id">
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

<script lang="ts">
import {defineComponent, ref, computed} from "vue";

export default defineComponent({
	setup() {
		const cocktailDataListInit: Cocktail[]  = [
			{id: 2345, name: "ホワイトレディ", price: 1200},
			{id: 4412, name: "ブルーハワイ", price: 1500},
			{id: 6792, name: "ニューヨーク", price: 1100},
			{id: 8429, name: "マティーニ", price: 1500}
		];
		const cocktailDataList = ref(cocktailDataListInit);
		const cocktail1500 = computed(
			function(): Cocktail[] {
				const newList = cocktailDataList.value.filter(
					function(cocktailItem: Cocktail): boolean {
						return cocktailItem.price == 1500;
				});
				return newList;
			}
		);
		return {
			cocktailDataList,
			cocktail1500
		};
	}
});

interface Cocktail {
	id: number;
	name: string;
	price: number;
}
</script>
