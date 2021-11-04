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
import {defineComponent} from "vue";

export default defineComponent({
	data() {
		return {
			selectedCocktailId: 0,
			priceMsg: ""
		}
	},
	watch: {
		selectedCocktailId(newVal: number, oldVal: number): void {
			const cocktailDataListInit = new Map<number, Cocktail>();
			cocktailDataListInit.set(2345, {id: 2345, name: "ホワイトレディ", price: 1200});
			cocktailDataListInit.set(4412, {id: 4412, name: "ブルーハワイ", price: 1500});
			cocktailDataListInit.set(6792, {id: 6792, name: "ニューヨーク", price: 1100});
			cocktailDataListInit.set(8429, {id: 8429, name: "マティーニ", price: 1500});
			const cocktailOld = cocktailDataListInit.get(oldVal);
			const cocktailNew = cocktailDataListInit.get(newVal);
			let msg = "前に選択していたカクテル: "
			if(cocktailOld != undefined) {
				msg += `${cocktailOld.name}で、価格は${cocktailOld.price}円。`;
			}
			else {
				msg += "未選択。";
			}
			msg += "今選択したカクテル: "
			if(cocktailNew != undefined) {
				msg += `${cocktailNew.name}で、価格は${cocktailNew.price}円。`;
			}
			else {
				msg += "未選択。";
			}
			this.priceMsg = msg;
		}
	}
});

interface Cocktail {
	id: number;
	name: string;
	price: number;
}
</script>
