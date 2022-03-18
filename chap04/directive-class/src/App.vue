<script setup lang="ts">
import {ref, computed} from "vue";

const msg = ref("こんにちは!世界");
const isTextColorRed = ref(true);
const isBgColorBlue = ref(false);
const styles = ref({
		textColorRed: false,
		bgColorBlue: true
	});
const computedStyles = computed(
	(): {textColorRed: boolean; bgColorBlue: boolean;} => {
		//乱数を利用して0か1を生成(textColorRed用)。
		const randText = Math.round(Math.random());
		//textColorRedプロパティの値を表す変数をtrueで用意。
		let textColorFlg = true;
		//発生した乱数が0ならばfalseに変更。
		if(randText == 0) {
			textColorFlg = false;
		}
		//乱数を利用して0か1を生成(bgColorBlue用)。
		const randBg = Math.round(Math.random());
		//bgColorBlueプロパティの値を表す変数をtrueで用意。
		let bgColorFlg = true;
		//発生した乱数が0ならばfalseに変更。
		if(randBg == 0) {
			bgColorFlg = false;
		}
		//それぞれのプロパティの値をオブジェクトにして返す。
		return {
			textColorRed: textColorFlg,
			bgColorBlue: bgColorFlg
		};
	}
);
</script>

<template>
	<p v-bind:class="{textColorRed: true, bgColorBlue: true}">
		{{msg}}
	</p>
	<p v-bind:class="{textColorRed: isTextColorRed, bgColorBlue: isBgColorBlue}">
		{{msg}}
	</p>
	<p v-bind:class="{textColorPink: true}">
		{{msg}}
	</p>
	<p v-bind:class="{'text-color-pink': true}">
		{{msg}}
	</p>
	<p class="textSize24" v-bind:class="{textColorRed: isTextColorRed, bgColorBlue: isBgColorBlue}">
		{{msg}}
	</p>
	<p class="textSize24" v-bind:class="styles">
		{{msg}}
	</p>
	<p v-bind:class="computedStyles">
		{{msg}}
	</p>
</template>

<style>
.textColorRed {
	color: red;
}
.text-color-pink {
	color: pink;
}
.bgColorBlue {
	background-color: blue;
}
.textSize24 {
	font-size: 24px;
}
</style>
