<template>
	<select v-model.number="selectedCocktailId">
		<option value="0">未選択</option>
		<option value="2345">ホワイトレディ</option>
		<option value="4412">ブルーハワイ</option>
		<option value="6792">ニューヨーク</option>
		<option value="8429">マティーニ</option>
	</select>
	<p>{{priceMsg}}</p>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from "vue";

export default defineComponent({
	setup() {
		const cocktailDataListInit = new Map<number, Cocktail>();
		cocktailDataListInit.set(2345, {id: 2345, name: "ホワイトレディ", price: 1200});
		cocktailDataListInit.set(4412, {id: 4412, name: "ブルーハワイ", price: 1500});
		cocktailDataListInit.set(6792, {id: 6792, name: "ニューヨーク", price: 1100});
		cocktailDataListInit.set(8429, {id: 8429, name: "マティーニ", price: 1500});
		const cocktailDataList = ref(cocktailDataListInit);
		//ドロップダウンリストで選択されたvalue値とリアクティブな変数を用意。
		const selectedCocktailId = ref(0);
		//リアクティブな算出値priceMsgを用意。
		const priceMsg = computed(
			(): string => {
				//未選択な状態のメッセージを用意。
				let msg = "カクテルは未選択です。";
				//選択されたカクテルデータをリストから取得。
				const cocktail = cocktailDataList.value.get(selectedCocktailId.value);
				//選択されたカクテルデータが存在しているなら…
				if(cocktail != undefined) {
					//選択されたカクテルの名前と金額を表示する文字列を生成。
					msg = `選択されたカクテルは${cocktail.name}で、価格は${cocktail.price}円です。`;
				}
				//表示文字列をリターン。
				return msg;
			}
		);
		return {
			cocktailDataList,
			selectedCocktailId,
			priceMsg
		};
	}
});

interface Cocktail {
	id: number;
	name: string;
	price: number;
}
</script>
