<template>
	<p>コンポーネント名: {{currentComp}}</p>
	<keep-alive>
		<component v-bind:is="currentComp"/>
	</keep-alive>
	<button v-on:click="switchComp">切り替え</button>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import Input from "./components/Input.vue";
import Radio from "./components/Radio.vue";
import Select from "./components/Select.vue";

export default defineComponent({
	name: "App",
	components: {
		Input,
		Radio,
		Select
	},
	setup() {
		//現在表示させるコンポーネント名を表すテンプレート変数。
		const currentComp = ref("Input");
		//コンポーネント名の配列。
		const compList: string[] = ["Input", "Radio", "Select"];
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
			//インデックス番号に該当するテンプレート名をcurrentCompに代入。
			currentComp.value = compList[currentCompIndex];
		}
		return {
			currentComp,
			switchComp
		}
	}
});
</script>
