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
import {defineComponent, ref, watch} from "vue";

export default defineComponent({
	setup() {
		//ドロップダウンリストで選択されたvalue値とリアクティブな変数を用意。
		const selectedCocktailId = ref(0);
		//選択されたカクテル情報を表示するリアクティブな変数を用意。
		const priceMsg = ref("");
		//watchを設定。
		watch(selectedCocktailId,
			(newVal, oldVal) => {
				//選択されたカクテルデータを取得。
				const cocktailDataListInit = new Map<number, Cocktail>();
				cocktailDataListInit.set(2345, {id: 2345, name: "ホワイトレディ", price: 1200});
				cocktailDataListInit.set(4412, {id: 4412, name: "ブルーハワイ", price: 1500});
				cocktailDataListInit.set(6792, {id: 6792, name: "ニューヨーク", price: 1100});
				cocktailDataListInit.set(8429, {id: 8429, name: "マティーニ", price: 1500});
				const cocktailOld = cocktailDataListInit.get(oldVal);
				const cocktailNew = cocktailDataListInit.get(newVal);
				//表示用文字列を用意。
				let msg = "前に選択していたカクテル: "
				//以前に選択カクテルデータが存在しているなら…
				if(cocktailOld != undefined) {
					//以前選択されたカクテルの名前と金額を表示する文字列を追加。
					msg += `${cocktailOld.name}で、価格は${cocktailOld.price}円。`;
				}
				else {
					msg += "未選択。";
				}
				msg += "今選択したカクテル: "
				//今回選択カクテルデータが存在しているなら…
				if(cocktailNew != undefined) {
					//今回選択されたカクテルの名前と金額を表示する文字列を追加。
					msg += `${cocktailNew.name}で、価格は${cocktailNew.price}円。`;
				}
				else {
					msg += "未選択。";
				}
				//表示文字列をpriceMsgに設定。
				priceMsg.value = msg;
			}
		);
		return {
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
