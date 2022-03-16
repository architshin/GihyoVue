<script setup lang="ts">
import {ref} from "vue";
import Input from "./components/Input.vue";
import Radio from "./components/Radio.vue";
import Select from "./components/Select.vue";

//現在表示させるコンポーネントを表すテンプレート変数。
const currentComp = ref(Input);
//現在表示させるコンポーネント名を表すテンプレート変数。
const currentCompName = ref("Input");
//コンポーネントの配列。
const compList = [Input, Radio, Select];
const compNameList: string[] = ["Input", "Radio", "Select"];
//現在表示させているコンポーネントに対応した配列のインデックス番号。
let currentCompIndex = 0;
//コンポーネントを切り替えるメソッド。
const switchComp = (): void => {
	//インデックス番号をインクリメント。
	currentCompIndex++;
	//インデックス番号が3以上なら…
	if(currentCompIndex >= 3) {
		//0にリセット。
		currentCompIndex = 0;
	}
	//インデックス番号に該当するコンポーネントをcurrentCompに代入。
	currentComp.value = compList[currentCompIndex];
	//インデックス番号に該当するコンポーネント名をcurrentCompNameに代入。
	currentCompName.value = compNameList[currentCompIndex];
}
</script>

<template>
	<p>コンポーネント名: {{currentCompName}}</p>
	<KeepAlive>
		<component v-bind:is="currentComp"/>
	</KeepAlive>
	<button v-on:click="switchComp">切り替え</button>
</template>
